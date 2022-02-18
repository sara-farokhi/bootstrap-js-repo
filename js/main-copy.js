const loader = document.querySelector(".loader-wrapper");

window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector("body").style.overflow = "auto";
});

const flipCards = document.querySelector(".flip-cards-wrapper");
const flipCardsTop =
  document.querySelector(".flip-cards-wrapper").offsetTop - 300;

window.addEventListener("scroll", function () {
  if (window.scrollY > flipCardsTop) {
    flipCards.classList.add("animate__zoomIn");
  }
});

const teamMates = [...document.querySelectorAll(".team-inner")];
console.log(teamMates);
const teamWrapperTop = document.querySelector(".team-wrapper").offsetTop - 300;
console.log(teamWrapperTop);

window.addEventListener("scroll", () => {
  for (teamMate of teamMates) {
    if (window.scrollY > teamWrapperTop) {
      teamMate.classList.add("animate__zoomIn");
    }
  }
});

const elevator = document.querySelector(".elevator");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    elevator.style.opacity = "1";
  } else {
    elevator.style.opacity = "0";
  }
});
