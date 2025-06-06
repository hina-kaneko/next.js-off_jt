document.getElementById("complete").addEventListener("click", function () {
  const value = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("message");

  if (value === "") {
    message.innerText = "名前を入力してください";
  } else {
    message.innerText = `こんにちは、${value}さん！`;
  }
});
