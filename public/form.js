const form = document.getElementById("surveyForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //入力値取得
  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const job = document.getElementById("job");
  const selfIntro = document.getElementById("selfIntro");

  //エラー表示用
  const nameError = document.getElementById("nameError");
  const ageErrorRequired = document.getElementById("ageErrorRequired");
  const ageErrorUnderage = document.getElementById("ageErrorUnderage");
  const jobError = document.getElementById("jobError");

  let isFormValid = true;

  nameError.style.display = "none";
  ageErrorRequired.style.display = "none";
  ageErrorUnderage.style.display = "none";
  jobError.style.display = "none";

  //名前バリデーションチェック
  if (name.value === "") {
    nameError.style.display = "block";
    isFormValid = false;
  }

  //年齢バリデーションチェック
  if (age.value === "") {
    ageErrorRequired.style.display = "block";
    isFormValid = false;
  } else if (age.value < 18) {
    ageErrorUnderage.style.display = "block";
    isFormValid = false;
  }

  //職業バリデーションチェック
  if (job.value === "") {
    jobError.style.display = "block";
    isFormValid = false;
  }

  if (isFormValid) {
    const data = {
      name: name.value,
      age: age.value,
      job: job.value,
      selfIntro: selfIntro.value,
    };

    console.log("送信データ:", JSON.stringify(data, null, 2));
  }
});
