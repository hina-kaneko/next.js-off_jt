const form = document.getElementById("surveyForm");
const handleSubmit = (e) => {
  e.preventDefault();

  //入力値取得
  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const job = document.getElementById("job");
  //const selfIntro = document.getElementById("selfIntro");

  //エラー表示
  const errorMessages = {
    nameRequired: "名前を入力してください",
    ageRequired: "年齢を入力してください",
    ageUnderage: "年齢は18歳以上で入力してください",
    jobRequired: "職業を選択してください",
  };

  // 既存のエラーを削除
  for (const el of form.querySelectorAll(".error")) {
    el.remove();
  }
  //let isFormValid = true;

  //名前バリデーションチェック
  if (name.value.trim() === "") {
    createError(name, errorMessages.nameRequired);
    //isFormValid = false;
  }

  //年齢バリデーションチェック;
  const ageValue = age.value.trim();
  if (ageValue === "") {
    createError(age, errorMessages.ageRequired);
    //isFormValid = false;
  } else if (Number(ageValue) < 18) {
    createError(age, errorMessages.ageUnderage);
    //isFormValid = false;
  }

  //職業バリデーションチェック
  if (job.value.trim() === "none") {
    createError(job, errorMessages.jobRequired);
    //isFormValid = false;
  }

  // if (isFormValid) {
  //   const data = {
  //     name: name.value,
  //     age: age.value,
  //     job: job.value,
  //     selfIntro: selfIntro.value,
  //   };

  //   console.log("送信データ:", JSON.stringify(data, null, 2));
  // }
};

form.addEventListener("submit", handleSubmit);

// エラー表示用関数
const createError = (elem, errorMessage) => {
  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error");
  errorSpan.setAttribute("aria-live", "polite");
  errorSpan.textContent = errorMessage;
  elem.insertAdjacentElement("afterend", errorSpan);
};
