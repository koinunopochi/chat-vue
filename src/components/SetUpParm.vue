<script>
/*
document.querySelectorAll('.delete-btn').forEach(function (deleteButton) {
  deleteButton.addEventListener('click', function () {
    const targetId = this.getAttribute('data-delete-target');
    const targetElement = document.getElementById(targetId);
    targetElement.value = ''; // 削除ボタンを押したときに、関連するフォームの値を空にする
  });
});
// フォーム要素を取得
const form = document.querySelector('form');

// Submitイベントを監視
form.addEventListener('submit', function (e) {
  e.preventDefault(); // フォーム送信をキャンセル

  // フォームの値を取得
  const formData = new FormData(form);
  const model = formData.get('model');
  const messages = formData.get('messages');
  const question = formData.get('question');
  const temperature = formData.get('temperature');
  // サーバーにPOSTするデータを準備
  const postData = {
    model: model,
    messages: `${question}${messages}`,
    temperature: temperature,
  };
  console.log(postData);
  // fetchを使用してサーバーにPOST
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
      // Play a notification sound
      const notificationSound = new Audio('./endsound.mp3');
      notificationSound.play();
      console.log(data);
      //alert(JSON.stringify(data));
    })
    .catch((error) => {
      console.error('エラーが発生しました:', error);
      alert('エラーが発生しました:', error);
    });
});
*/
</script>
<template>
  <form>
    <div class="form-group">
      <button type="button" class="delete-btn" data-delete-target="model">
        削除
      </button>
      <label for="model">model:</label>
      <input type="text" id="model" name="model" value="gpt-3.5-turbo" />
    </div>
    <div class="form-group">
      <button type="button" class="delete-btn" data-delete-target="question">
        削除
      </button>
      <label for="question">question:</label>
      <textarea id="question" name="question"></textarea>
    </div>
    <div class="form-group">
      <button type="button" class="delete-btn" data-delete-target="messages">
        削除
      </button>
      <label for="messages">messages:</label>
      <textarea id="messages" name="messages"></textarea>
    </div>
    <div class="form-group">
      <button type="button" class="delete-btn" data-delete-target="temperature">
        削除
      </button>
      <label for="temperature">temperature:</label>
      <input type="text" id="temperature" name="temperature" value="0" />
    </div>
    <button type="submit">Submit</button>
  </form>
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
  width: 500px;
  padding: 30px;
  padding-bottom: 50px;
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
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
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
