"use strict";

import "../styles/main.scss";

import aboutus from "./pages/about-us";
import contact from "./pages/contact";
import home from "./pages/home";
import menu from "./pages/menu";

const hamburgerBtn = document.querySelector("#hamburgerBtn");
const header = document.querySelector("header");

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
