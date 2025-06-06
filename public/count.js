let count = 0;

// 要素を取得
const counterDisplay = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

// 表示更新用関数
const updateDisplay = () => {
  counterDisplay.innerText = count;
};

// イベント設定
plusBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

minusBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});
