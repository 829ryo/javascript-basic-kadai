// HTML要素をIDで取得
const messageElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

// ボタンがクリックされたときの処理
buttonElement.addEventListener('click', function() {
    // messageElementのテキスト内容を変更します
    messageElement.textContent = 'ボタンが押されました';
});