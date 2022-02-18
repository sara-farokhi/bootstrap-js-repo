// SERVICES FLIPCARDS MOTIONS
const flipCardsWrapper = document.querySelector(".flip-cards-wrapper");
const flipCardsWrapperTop = document.querySelector(
  ".flip-cards-wrapper"
).offsetTop;

window.addEventListener("scroll", function () {
  if (scrollY > flipCardsWrapperTop - 400) {
    flipCardsWrapper.classList.add("animate__zoomIn");
  }
});

// TEAMMATE MOTIONS
const teamTop = document.querySelector(".team-wrapper").offsetTop;

const mainTeamates = [...document.querySelectorAll(".main-teamate")];

window.addEventListener("scroll", function () {
  if (scrollY > teamTop - 500) {
    mainTeamates.forEach((teamtmate) => {
      teamtmate.classList.add("animate__zoomIn");
    });
  }
});

const teamates = [...document.querySelectorAll(".teamate")];

window.addEventListener("scroll", function () {
  if (scrollY > teamTop) {
    teamates.forEach((mate) => {
      mate.classList.add("animate__zoomIn");
    });
  }
});

// PHILOSOPHY MOTIONS
const philosophy = document.querySelector(".phil-content");

const philoTop = document.querySelector(".philosophy-wrapper").offsetTop;

window.addEventListener("scroll", function () {
  if (scrollY > philoTop - 200) {
    philosophy.classList.add("animate__zoomIn");
  }
});

const philImg = document.querySelector(".philosophy-img");
window.addEventListener("scroll", function () {
  if (scrollY > philoTop - 200) {
    philImg.classList.add("animate__zoomIn");
  }
});

// ACTION MOTIONS

const actVideo = document.querySelector(".act-video");

const actionTop = document.querySelector(".action-wrapper").offsetTop;

window.addEventListener("scroll", function () {
  if (scrollY > actionTop - 400) {
    philosophy.classList.add("animate__zoomIn");
  }
});

const actContent = document.querySelector(".act-content");
window.addEventListener("scroll", function () {
  if (scrollY > actionTop - 400) {
    actContent.classList.add("animate__zoomIn");
  }
});

// / PARTNER MOTIONS

const partners = document.querySelector(".parner-list");

const partnerTop = document.querySelector(".parner-list").offsetTop;

window.addEventListener("scroll", function () {
  if (scrollY > partnerTop - 400) {
    partners.classList.add("animate__zoomIn");
  }
});

// EVENTS MOTIONS

const workWrapper = document.querySelector(".work-wrapper");
const works = document.querySelectorAll(".work-inner .work-img");
const allWorks = [...works];

const eventDescription = document.querySelectorAll(".event-decript");
const eventDescriptions = [...eventDescription];

window.addEventListener("scroll", function () {
  if (window.scrollY > workWrapper.offsetTop - 400) {
    for (const work of allWorks) {
      work.classList.add("add-flip");
    }
  }
});

// TALE MOTIONS

const tale = document.querySelector(".tale");

const taleTop = document.querySelector(".tale").offsetTop;

window.addEventListener("scroll", function () {
  if (scrollY > taleTop - 200) {
    tale.classList.add("animate__zoomIn");
  }
});

// CONTACT US MOTION

const contact = document.querySelector(".contact");

const contactTop = document.querySelector(".contact").offsetTop;

window.addEventListener("scroll", function () {
  if (scrollY > contactTop - 400) {
    contact.classList.add("animate__zoomIn");
  }
});

// ELEVATOR

const elv = document.querySelector(".elevator");
window.addEventListener("scroll", () => {
  if (scrollY < 300) {
    elv.style.opacity = "0";
  } else {
    elv.style.opacity = "1";
  }
});

// LOADER

window.addEventListener("load", function () {
  document.querySelector(".loader-wrapper").style.opacity = "0";
  document.querySelector(".loader-wrapper").style.visibility = "hidden";
  document.querySelector("body").style.overflow = "auto";
});
