<script setup>
import SendMessage from './SendMessage.vue';
import SetUpParm from './SetUpParm.vue';
import { ref } from 'vue';

const question = ref('');
const messages = ref('');
const apiKey = ref('');
//const model = ref('gpt-3.5-turbo');
const temperature = ref('');
</script>
<template>
  <form @submit.prevent="onSubmit">
    <div class="main">
      <SendMessage v-model:question="question" v-model:messages="messages" />
      <SetUpParm
        v-model:apiKey="apiKey"
        v-model:model="model"
        v-model:temperature="temperature"
        v-model:top_p="top_p"
        v-model:n="n"
        v-model:stop="stop"
        v-model:max_tokens="max_tokens"
        v-model:presence_penalty="presence_penalty"
        v-model:frequency_penalty="frequency_penalty"
        v-model:logit_bias="logit_bias"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>
<script>
export default {
  components: {
    SendMessage,
    SetUpParm,
  },
  methods: {
    onSubmit() {
      //送信ボタンを押したときの処理
      const postData = {
        API_KEY: apiKey.value,
        model: model.value,
        messages: `${question.value}${messages.value}`,
        temperature: temperature.value,
        top_p: this.top_p,
        n: this.n,
        stop: this.stop,
        max_tokens: this.max_tokens,
        presence_penalty: this.presence_penalty,
        frequency_penalty: this.frequency_penalty,
        logit_bias: this.logit_bias,
      };

      console.log(postData);

      fetch('http://localhost:3000/api/text/judge', {
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
          const notificationSound = new Audio('/public/endsound.mp3');
          //notificationSound.play();
          alert(JSON.stringify(data, null, 2));
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
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
