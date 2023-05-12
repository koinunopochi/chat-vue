<script setup>
import SendMessage from './SendMessage.vue';
import SetUpParm from './partOfParm/SetUpParm.vue';
import ShowResponse from './ShowResponse.vue';
import { createWindow } from '/src/composables/ReturnWindow.js';
</script>
<template>
  <form @submit="submit">
    <h2>Easy set up</h2>
    <div class="main">
      <div>
        <ShowResponse :fetchedData="fetchedData"/>
      </div>
      <div>
        <SendMessage v-model:question="question" v-model:messages="messages" />
        <button type="submit">Submit</button>
      </div>
      <SetUpParm
        v-model:apiKey="apiKey"
        v-model:model="model"
        v-model:stop="stop"
        v-model:logit_bias="logit_bias"
        v-model:temperature="temperature"
        v-model:top_p="top_p"
        v-model:n="n"
        v-model:max_tokens="max_tokens"
        v-model:presence_penalty="presence_penalty"
        v-model:frequency_penalty="frequency_penalty"
      />
    </div>
  </form>
</template>
<script>
export default {
  components: {
    SendMessage,
    SetUpParm,
    ShowResponse,
  },
  data() {
    return {
      //これの追加により、データを受け取ることができるようになった
      question: '',
      messages: '',
      apiKey: '',
      model: 'gpt-3.5-turbo',
      stop: '',
      logit_bias: '',
      temperature: 0.5,
      top_p: 1,
      n: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,

      fetchedData: null,
    };
  },
  methods: {
    handleFormData(data) {
      this.formData = data;
    },
    submit(event) {
      event.preventDefault();

      //送信ボタンを押したときの処理
      const notificationSound = new Audio('./public/endsound.mp3');
      notificationSound.play();
      const postData = {
        API_KEY: this.apiKey,
        model: this.model,
        messages: `${this.question}${this.messages}`,
        temperature: this.temperature,
        top_p: this.top_p,
        n: this.n,
        stop: this.stop,
        max_tokens: this.max_tokens,
        presence_penalty: this.presence_penalty,
        frequency_penalty: this.frequency_penalty,
        logit_bias: this.logit_bias,
      };

      console.log(postData);

      fetch('https://koinunopochi-api.onrender.com/api/text/judge', {
      //fetch('http://localhost:3000/api/text/judge',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          if (response.ok) {
            console.log('データがサーバーにPOSTされました');
            return response.json();
          } else {
            console.error('サーバーにPOSTできませんでした');
            alert('サーバーにPOSTできませんでした');
          }
        })
        .then((data) => {
          notificationSound.play();
          createWindow(data);
          console.log(data);
          this.fetchedData = data;
        })
        .catch((error) => {
          console.error('エラーが発生しました:', error);
          alert('エラーが発生しました:', error);
        });
    },
  },
};
</script>

<style>
/* フォームのスタイル */
form {
  background-color: #fff;
  width: auto;
  padding: 30px;
  padding-bottom: 35px; /**ここで、ボタンがはみ出るかどうかの調整 */
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}

.custom-alert {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
#textToCopy {
  width: 500px;
  height: 500px;
}
/* 送信ボタンのスタイル */
button[type='submit'] {
  width: fit-content;
  height: fit-content;
  transform: translateX(424%) translateY(-160%);
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
  margin-bottom: 20px;
}
button[type='submit']:hover {
  background-color: #0056b3;
}
</style>
