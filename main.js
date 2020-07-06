"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height; // getBoudingClientRect()는 높이, 너비 등을 알려주는 기능

document.addEventListener(`scroll`, () => {
  //   console.log(window.scrollY);
  //   console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", () => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

// 스크롤 하면 옅어지게 만들기
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
console.log(`${homeHeight}`);

document.addEventListener(`scroll`, () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
