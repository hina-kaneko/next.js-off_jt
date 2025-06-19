document.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");
  const list = document.getElementById("userList");
  const fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTPエラー: ${response.status}`);
      }
      return res.json();
    })
    .then((users) => {
      status.textContent = ""; // 読み込み中を消す
      users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        fragment.appendChild(li);
      });
      list.appendChild(fragment);
    })
    .catch((err) => {
      console.error("通信エラー:", err);
      status.textContent = "データの取得に失敗しました";
      status.style.color = "red";
    });
});
