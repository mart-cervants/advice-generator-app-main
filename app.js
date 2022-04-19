const resDiv = document.querySelector(".advice");
const resAdvId = document.querySelector(".adv-id");

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const Adviceobj = adviceData.slip;
      resAdvId.innerHTML = resAdvId.innerHTML + Adviceobj.id;
      resDiv.innerHTML = "“" + Adviceobj.advice + "”";
    })
    .catch((error) => {
      console.log(error);
    });
}
