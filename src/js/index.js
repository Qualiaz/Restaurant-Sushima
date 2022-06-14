"use strict";

import "../styles/main.scss";

import aboutus from "./pages/about-us";
import contact from "./pages/contact";
import home from "./pages/home";
import menu from "./pages/menu";

import logoMain from "../assets/logo/logo-main.png";
import hamburgerIcon from "../assets/nav/hamburger-icon.png";

home();

// insert logo
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const logoHeaderImg = document.createElement("img");
logoHeaderImg.src = logoMain;
const logoFooterImg = document.createElement("img");
logoFooterImg.src = logoMain;
header.insertAdjacentElement("afterbegin", logoHeaderImg);
footer.insertAdjacentElement("afterbegin", logoFooterImg);
logoHeaderImg.setAttribute("class", "logo");
logoFooterImg.setAttribute("class", "logo");

// HAMBURGER MENU
const content = document.querySelector("#content");

const navMobile = document.querySelector(".nav__mobile");
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const hamburgerBtnIcon = document.createElement("img");
hamburgerBtnIcon.setAttribute("clas", "nav__mobile__hamburger-icon");
hamburgerBtnIcon.setAttribute("src", hamburgerIcon);
hamburgerBtn.appendChild(hamburgerBtnIcon);

hamburgerBtn.addEventListener("click", () => {
  const hamburgerMidLayer = document.createElement("div");
  hamburgerMidLayer.setAttribute("class", "nav__mobile__hamburger-mid-layer");
  navMobile.appendChild(hamburgerMidLayer);

  const hamburgerMenu = document.createElement("div");
  hamburgerMenu.setAttribute("class", "nav__mobile__hamburger-menu");
  navMobile.appendChild(hamburgerMenu);

  const mobileHomeBtn = document.createElement("button");
  mobileHomeBtn.setAttribute("class", "nav__mobile__btn");
  hamburgerMenu.appendChild(mobileHomeBtn);
  mobileHomeBtn.textContent = "Home";

  const mobileMenuBtn = document.createElement("button");
  mobileMenuBtn.setAttribute("class", "nav__mobile__btn");
  hamburgerMenu.appendChild(mobileMenuBtn);
  mobileMenuBtn.textContent = "Menu";

  const mobileAboutusBtn = document.createElement("button");
  mobileAboutusBtn.setAttribute("class", "nav__mobile__btn");
  hamburgerMenu.appendChild(mobileAboutusBtn);
  mobileAboutusBtn.textContent = "About Us";

  const mobileContactBtn = document.createElement("button");
  mobileContactBtn.setAttribute("class", "nav__mobile__btn");
  hamburgerMenu.appendChild(mobileContactBtn);
  mobileContactBtn.textContent = "Contact";

  mobileHomeBtn.addEventListener("click", () => {
    home();
    hamburgerMenu.style.display = "none";
    hamburgerMidLayer.style.display = "none";
  });

  mobileMenuBtn.addEventListener("click", () => {
    menu();
    hamburgerMenu.style.display = "none";
    hamburgerMidLayer.style.display = "none";
  });

  mobileAboutusBtn.addEventListener("click", () => {
    aboutus();
    hamburgerMenu.style.display = "none";
    hamburgerMidLayer.style.display = "none";
  });

  mobileContactBtn.addEventListener("click", () => {
    contact();
    hamburgerMenu.style.display = "none";
    hamburgerMidLayer.style.display = "none";
  });

  hamburgerMidLayer.addEventListener("click", () => {
    hamburgerMenu.style.display = "none";
    hamburgerMidLayer.style.display = "none";
  });
});

// switch logic desktop
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutusBtn = document.querySelector("#aboutusBtn");
const contactBtn = document.querySelector("#contactBtn");

homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
aboutusBtn.addEventListener("click", aboutus);
contactBtn.addEventListener("click", contact);
