// Variables
const accordion = document.getElementsByClassName("content-contaioner");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// question.addEventListener("click", function () {
//   question.style.overflow = "scroll";
// });

// answer.addEventListener("click", function () {
//   answer.style.overflow = "hidden";
// });
