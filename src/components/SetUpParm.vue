<template>
  <div id="app">
    <form @submit.prevent="onSubmit">
      <h3>model:{{ model }}</h3>
      <div class="form-group">
        <label for="question">question:</label>
        <textarea id="question" name="question" v-model="question"></textarea>
        <button
          type="button"
          class="delete-btn"
          @click="clearInput('question')"
        >
          削除
        </button>
      </div>
      <div class="form-group">
        <label for="messages">messages:</label>
        <textarea id="messages" name="messages" v-model="messages"></textarea>
        <button
          type="button"
          class="delete-btn"
          @click="clearInput('messages')"
        >
          削除
        </button>
      </div>
      <div class="form-group">
        <label for="model" class="form-label">model:</label>
        <select id="model" class="form-select" v-model="model">
          <option disabled value="">選択してください</option>
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="temperature">temperature:</label>
        <input
          type="text"
          id="temperature"
          name="temperature"
          v-model="temperature"
        />
        <button
          type="button"
          class="delete-btn"
          @click="clearInput('temperature')"
        >
          削除
        </button>
      </div>
      <div class="form-group">
      <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
const model = ref('');
export default {
  data() {
    return {
      question: '',
      messages: '',
      model: 'gpt-3.5-turbo',
      options: [
        { value: 'gpt-3.5-turbo', text: 'gpt-3.5-turbo' },
        { value: 'gpt-4', text: 'gpt-4' },
      ],
      temperature: '0',
    };
  },
  methods: {
    clearInput(inputName) {
      this[inputName] = '';
    },
    onSubmit() {
      const postData = {
        model: this.model,
        messages: `${this.question}${this.messages}`,
        temperature: this.temperature,
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
          notificationSound.play();
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

<style scoped>
/* 全体のスタイル */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}
/* フォームのスタイル */
form {
  background-color: #ffffff;
  width: 600px;
  padding: 30px;
  padding-bottom: 80px;/**ここで、ボタンがはみ出るかどうかの調整 */
  margin: 50px auto;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
/* ラベルのスタイル */
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
/* 入力欄のスタイル */
input[type='text'],
textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}
textarea {
  height: 200px;
  resize: none;
}
/* スペース調整 */
.form-group {
  margin-bottom: 20px;
}
/* 送信ボタンのスタイル */
button[type='submit'] {
  float: right;
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
.delete-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  float: right;
  margin-bottom: 5px;
}
.form-select{
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}
</style>
