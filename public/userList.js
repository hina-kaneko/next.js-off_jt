document.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");
  const list = document.getElementById("userList");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error("レスポンスエラー");
      }
      return res.json();
    })
    .then((users) => {
      status.textContent = ""; // 読み込み中を消す
      users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        list.appendChild(li);
      });
    })
    .catch((err) => {
      console.error("通信エラー:", err);
      status.textContent = "データの取得に失敗しました";
      status.style.color = "red";
    });
});
