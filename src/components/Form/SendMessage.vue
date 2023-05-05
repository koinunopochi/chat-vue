<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    question: String,
    messages: String,
  },
  emits: ['update:question', 'update:messages'],
  setup(_, { emit }) {
    const clearInput = (inputName) => {
      emit('update:' + inputName, '');
    };

    return { clearInput };
  },
});
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
          ×
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
          ×
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* フォームのスタイル */
form {
  background-color: #fff;
  width: 500px;
  padding: 30px;
  padding-bottom: 35px; /**ここで、ボタンがはみ出るかどうかの調整 */
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
    height: 200px;
  resize: none;
}
/* スペース調整 */
/* フォーム内の各グループを相対位置で配置 */
.form-group {
  position: relative;
  margin-bottom: 20px;
}
/* 削除ボタンを右上に配置 */
.delete-btn {
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(110%);
  border-radius: 5px;
  background-color: #484646;
  color: white;
  border: none;
  cursor: pointer;
}

/* 削除ボタンにマウスオーバーしたときのスタイル */
.delete-btn:hover {
  background-color: #928f8f;
}
</style>
