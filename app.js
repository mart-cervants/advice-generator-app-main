const resDiv = document.querySelector(".advice");
const resAdvId = document.querySelector(".adv-id");
const resBtn = document.querySelector("#circle");

window.onload = () => {
  getAdvice();
};

resBtn.addEventListener("click", () => {
  getAdvice();
});

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const Adviceobj = adviceData.slip;
      resAdvId.innerHTML = "ADVICE #" + Adviceobj.id;
      resDiv.innerHTML = "“" + Adviceobj.advice + "”";
    })
    .catch((error) => {
      console.log(error);
    });
}
