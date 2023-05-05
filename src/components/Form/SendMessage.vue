<script setup>
defineProps({
  question: String,
  messages: String
})

defineEmits(['update:question', 'update:messages'])
</script>
<template>
  <div id="app">
    <form>
      <h3>メッセージの設定</h3>
      <div class="form-group">
        <label for="question">question:</label>
        <textarea
          id="question"
          name="question"
          :value="question"
          @input="$emit('update:question', $event.target.value)"
        ></textarea>
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
        <textarea
          id="messages"
          :value="messages"
          @input="$emit('update:messages', $event.target.value)"
        ></textarea>
        <button
          type="button"
          class="delete-btn"
          @click="clearInput('messages')"
        >
          削除
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    clearInput(inputName) {
      //削除ボタンを押したときの処理
      this[inputName] = '';
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
  width: 500px;
  padding: 30px;
  padding-bottom: 80px; /**ここで、ボタンがはみ出るかどうかの調整 */
  margin-top: 50px;
  margin-left: auto;
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
</style>
