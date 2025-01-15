// script.js

let secretNumber = Math.floor(Math.random() * 100) + 1; // 1から100の間でランダムな数字を生成
let attempts = 0; // 試行回数
let messageElement = document.getElementById("message");
let attemptsElement = document.getElementById("attempts");
let guessButton = document.getElementById("guess-button");
let guessInput = document.getElementById("guess-input");

guessButton.addEventListener("click", function() {
    let userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess === secretNumber) {
        messageElement.textContent = `おめでとう！数字は ${secretNumber} でした！`;
        guessButton.disabled = true; // 正解後にボタンを無効にする
    } else if (userGuess < secretNumber) {
        messageElement.textContent = "もっと大きい数字です！";
    } else if (userGuess > secretNumber) {
        messageElement.textContent = "もっと小さい数字です！";
    }

    attemptsElement.textContent = `試行回数: ${attempts}`;
    guessInput.value = ""; // 入力フィールドをクリア
    guessInput.focus(); // 入力フィールドにフォーカスを戻す
});


