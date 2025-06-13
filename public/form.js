const form = document.getElementById("surveyForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //入力値取得
  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const job = document.getElementById("job");
  const selfIntro = document.getElementById("selfIntro");

  //名前バリデーションチェック
  if (name.value === "") {
    document.getElementById("nameError").style.display = "block";
  } else {
    document.getElementById("nameError").style.display = "none";
  }

  //年齢バリデーションチェック
  if (age.value < 18) {
    document.getElementById("ageError").style.display = "block";
  } else {
    document.getElementById("ageError").style.display = "none";
  }

  //職業バリデーションチェック
  if (job.value === "") {
    document.getElementById("jobError").style.display = "block";
  } else {
    document.getElementById("jobError").style.display = "none";
  }

  const data = {
    name: name.value,
    age: age.value,
    job: job.value,
    selfIntro: selfIntro.value,
  };

  console.log("送信データ:", JSON.stringify(data, null, 2));
});
