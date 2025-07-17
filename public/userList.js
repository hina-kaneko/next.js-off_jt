import { BASE_API_URL } from "./common.js";

const onDomLoaded = () => {
  const status = document.getElementById("status");
  const list = document.getElementById("userList");
  const fragment = document.createDocumentFragment();
  const MAX_RETRIES = 3;

  const fetchWithRetry = async (url, retries) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTPエラー: ${res.status}`);
        }
        return await res.json();
      } catch (err) {
        if (attempt === retries) {
          throw err;
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
  };

  fetchWithRetry(`${BASE_API_URL}/users`, MAX_RETRIES)
    .then((users) => {
      status.textContent = "";
      for (const user of users) {
        const li = document.createElement("li");
        li.textContent = user.name;
        fragment.appendChild(li);
      }
      list.appendChild(fragment);
    })
    .catch(() => {
      status.textContent = "データの取得に失敗しました（リトライ上限）";
      status.classList.add("error");
    });
};

document.addEventListener("DOMContentLoaded", onDomLoaded);
