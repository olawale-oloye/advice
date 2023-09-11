// const docID = document.querySelector(".id");
// const docTitle = document.querySelector(".title");
// const docState = document.querySelector(".state");

const slipID = document.querySelector(".id");
const articleNumber = document.querySelector(".article__advice-num");
const articleAdvice = document.querySelector(".article__advice-random-art");
const loaderIcon = document.querySelector(".fa-solid");
const btnAdvice = document.querySelector(".ri-apps-2-line");

/* function randomAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      articleNumber.textContent = `Advice #${data.slip.id}`;
      articleAdvice.textContent = data.slip.advice;
    });
} */
async function randomAdvice() {
  loaderIcon.style.display = "block";
  btnAdvice.style.display = "none";
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  if (response) {
    loaderIcon.style.display = "none";
    btnAdvice.style.display = "block";
  }

  if (response.ok) {
    articleNumber.textContent = `Advice #${data.slip.id}`;
    articleAdvice.textContent = data.slip.advice;
  }

  if (!response.ok) {
    articleAdvice.textContent = "Failed to Fetch Data due to Network";
  }
}
randomAdvice();

document
  .querySelector(".article__advice-floater")
  .addEventListener("click", function () {
    randomAdvice();
  });

// function getRandomAdvice() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((data) => {
//       docID.textContent = data.id;
//       docTitle.textContent = data.title;
//       docState.textContent = data.completed;
//     });
// }
// getRandomAdvice();
