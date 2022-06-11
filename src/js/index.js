"use strict";

import "../styles/main.scss";

import aboutus from "./pages/about-us";
import contact from "./pages/contact";
import home from "./pages/home";
import menu from "./pages/menu";

import logoMain from "../assets/logo/logo-main.png";

const header = document.querySelector("header");
const footer = document.querySelector("footer");

const hamburgerBtn = document.querySelector("#hamburgerBtn");
const logoHeaderImg = document.createElement("img");
logoHeaderImg.src = logoMain;

const logoFooterImg = document.createElement("img");
logoFooterImg.src = logoMain;

header.insertAdjacentElement("afterbegin", logoHeaderImg);
footer.insertAdjacentElement("afterbegin", logoFooterImg);
logoHeaderImg.setAttribute("class", "logo");
logoFooterImg.setAttribute("class", "logo");

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutusBtn = document.querySelector("#aboutusBtn");
const contactBtn = document.querySelector("#contactBtn");

hamburgerBtn.addEventListener("click", () => {
  header.style.opacity = "0.3";
});

home();

homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
aboutusBtn.addEventListener("click", aboutus);
contactBtn.addEventListener("click", contact);
