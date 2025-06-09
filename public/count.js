let count = 0;

// 要素を取得
const counterDisplay = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

// 表示更新関数
const updateDisplay = () => {
  counterDisplay.innerText = count;
};

// ＋ボタンのクリック処理
const handlePlusClick = () => {
  count++;
  updateDisplay();
};

// −ボタンのクリック処理
const handleMinusClick = () => {
  count--;
  updateDisplay();
};

plusBtn.addEventListener("click", handlePlusClick);
minusBtn.addEventListener("click", handleMinusClick);
