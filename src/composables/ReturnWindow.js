export function createWindow(data) {
    // オーバーレイを作成
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
      document.body.removeChild(customAlert);
    });
    document.body.appendChild(overlay);

    // カスタムアラートを作成
    const customAlert = document.createElement('div');
    customAlert.classList.add('custom-alert');
    customAlert.innerHTML = `
      <p>このテキストをコピーします: <span id="textToCopy">${data}</span></p>
      <button id="copyBtn">コピー</button>
      <button id="closeAlert">閉じる</button>
    `;
    document.body.appendChild(customAlert);

    // イベントリスナーを追加
    customAlert.querySelector('#closeAlert').addEventListener('click', () => {
      document.body.removeChild(overlay);
      document.body.removeChild(customAlert);
    });

    customAlert.querySelector('#copyBtn').addEventListener('click', () => {
      const textToCopy = customAlert.querySelector('#textToCopy').innerText;

      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = textToCopy;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextArea);

      alert('コピーしました: ' + textToCopy);
    });
  }
