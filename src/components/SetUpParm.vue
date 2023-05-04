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
};
</script>

<template>
  <div id="app">
      <form>
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
      </form>
  </div>
</template>

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
  width: 300px;
  padding: 30px;
  padding-bottom: 80px; /**ここで、ボタンがはみ出るかどうかの調整 */
  margin: 50px auto;
  margin-left: 20px;
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
.form-select {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}
</style>