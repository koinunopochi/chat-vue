<script setup>
import SendMessage from './SendMessage.vue';
import SetUpParm from './partOfParm/SetUpParm.vue';
import {createWindow} from '/src/composables/ReturnWindow.js';
</script>
<template>
  <form @submit.prevent="onSubmit">
    <div class="main">
      <div>
      <SendMessage v-model:question="question" v-model:messages="messages"/>
      <button type="submit">Submit</button>
      </div>
      <SetUpParm />
    </div>
  </form>
</template>
<script>
export default {
  components: {
    SendMessage,
    SetUpParm,
  },
  data() {
    return {
      question: '',
      messages: '',
    }
  },
  methods: {
    onSubmit() {
      //送信ボタンを押したときの処理
      const notificationSound = new Audio('./public/endsound.mp3');
      notificationSound.play();
      const postData = {
        API_KEY: apiKey.value,
        model: model.value,
        messages: `${question.value}${messages.value}`,
        temperature: temperature.value,
        top_p: top_p.value,
        n: n.value,
        stop: stop_.value /*TODO:【解決】なぜかstopのみ反応していない確認する,【func,stopがあるためstopが競合してしまっていた*/,
        max_tokens: max_tokens.value,
        presence_penalty: presence_penalty.value,
        frequency_penalty: frequency_penalty.value,
        logit_bias: logit_bias.value,
      };

      console.log(postData);

      fetch('https://koinunopochi-api.onrender.com/api/text/judge', {
        //'http://localhost:3000/api/text/judge'
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
from{
  background-color: #ffffff;
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
#textToCopy{
  width:500px;
  height:500px;
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
