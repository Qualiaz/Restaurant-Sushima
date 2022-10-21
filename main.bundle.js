/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Aclonica&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: \"Aclonica\", sans-serif;\n  font-size: 1.6rem;\n  color: #fff;\n}\n\na {\n  text-decoration: none;\n  color: #fff;\n}\n\nh4 {\n  font-size: 3rem;\n}\n\nh3 {\n  font-size: 2.2rem;\n}\n\n.main-home {\n  font-family: inherit;\n}\n.main-home__cta-btn--offer, .main-home__cta-btn--menu {\n  font-family: inherit;\n  font-size: 2.2rem;\n  color: #fff;\n}\n\n.main-menu__sushi-btn, .main-menu__beverages-btn {\n  font-family: inherit;\n  font-size: 2rem;\n  color: #fff;\n}\n\n.nav__button {\n  font-family: inherit;\n  color: #fff;\n}\n\n.nav__mobile__btn {\n  font-family: \"Aclonica\", sans-serif;\n  color: white;\n  font-size: 2rem;\n}\n\n#content {\n  background-color: #2b2b2b;\n}\n\nbutton:not(.nav__mobile__btn) {\n  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.nav__button {\n  padding: 1rem;\n  border: 3px solid #fd491b;\n  min-width: 15rem;\n  border-radius: 1.5rem;\n  font-size: 2.2rem;\n  letter-spacing: 0.2rem;\n  background: none;\n  transition: 0.2s;\n}\n.nav__button:hover {\n  background-color: #fd491b;\n}\n\n.main-home__cta-btn--offer, .main-home__cta-btn--menu {\n  padding: 1rem 4rem;\n  border: 3px solid #fd491b;\n  border-radius: 1.5rem;\n  background: none;\n  transition: 0.2s;\n}\n.main-home__cta-btn--offer:hover, .main-home__cta-btn--menu:hover {\n  background-color: #fd491b;\n}\n\n.main-menu__sushi-btn, .main-menu__beverages-btn {\n  padding: 1rem 1rem;\n  width: 13rem;\n  border: 2px solid #fd491b;\n  border-radius: 1.5rem;\n  background: none;\n  transition: 0.2s;\n}\n.main-menu__sushi-btn:hover, .main-menu__beverages-btn:hover {\n  background-color: #fd491b;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 2rem;\n  background-color: #232323;\n  padding: 2rem;\n}\n.footer__content-1 {\n  display: flex;\n  gap: 2rem;\n  text-align: center;\n}\n.footer__content-1 a {\n  text-decoration: none;\n  color: #fff;\n}\n.footer .logo {\n  margin-bottom: 2rem;\n  width: 10rem;\n  height: 10rem;\n}\n\n@media only screen and (max-width: 465px) {\n  .footer {\n    font-size: 1.2rem;\n  }\n  .footer__content-1 {\n    gap: 1rem;\n  }\n}\n.header {\n  height: 10rem;\n}\n.header .logo {\n  width: 16rem;\n  height: 16rem;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 25%);\n}\n\n.nav {\n  height: inherit;\n  background-color: #232323;\n}\n.nav__desktop {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 5rem;\n  align-items: center;\n  gap: 3rem;\n  height: 10rem;\n  list-style: none;\n}\n.nav__left, .nav__right {\n  display: flex;\n  gap: 2rem;\n}\n.nav__mobile__hamburger-button {\n  display: none;\n}\n.nav__mobile__btn {\n  display: none;\n}\n\n@media only screen and (max-width: 1000px) {\n  .nav__desktop {\n    display: none;\n  }\n  .nav__mobile {\n    height: inherit;\n    position: relative;\n  }\n  .nav__mobile__hamburger-button {\n    display: block;\n    position: absolute;\n    background: none;\n    height: 4.3rem;\n    border: none;\n    right: 5%;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  .nav__mobile__hamburger-mid-layer {\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    background-color: black;\n    opacity: 0.6;\n    z-index: 1;\n  }\n  .nav__mobile__hamburger-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: fixed;\n    width: 80vw;\n    height: 70vh;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    background-color: #2b2b2b;\n    transform: translateY(22.5%);\n    z-index: 2;\n    border-radius: 20px;\n    box-shadow: 10px 15px 20px 5px rgba(0, 0, 0, 0.5);\n  }\n  .nav__mobile__btn {\n    display: block;\n    min-height: 25%;\n    background: none;\n    border: none;\n    cursor: pointer;\n    box-shadow: 0px 26px 1px -24px #fd491b;\n  }\n  .nav__mobile__btn:last-child {\n    box-shadow: none;\n  }\n}\n.main-aboutus {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95vw;\n  min-height: 80vh;\n  margin: 12rem auto;\n  flex-direction: column;\n  gap: 9rem;\n  padding: 4rem 10vw;\n}\n.main-aboutus img {\n  width: 500px;\n  border-radius: 3rem;\n  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n}\n.main-aboutus__section {\n  display: flex;\n  justify-content: center;\n  gap: 14.5rem;\n}\n.main-aboutus__section:nth-child(2) img {\n  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n}\n.main-aboutus__section:nth-child(2) :last-child {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  width: 350px;\n  order: -1;\n}\n.main-aboutus__section:nth-child(2) :last-child h4 {\n  order: -1;\n}\n.main-aboutus__section:nth-child(3) img {\n  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n}\n.main-aboutus__section:nth-child(3) :last-child {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  width: 350px;\n}\n.main-aboutus__restaurant-img {\n  max-height: 60rem;\n  min-width: 100rem;\n}\n\n@media only screen and (max-width: 1000px) {\n  .main-aboutus__restaurant-img {\n    min-width: 90vw;\n  }\n  .main-aboutus__section {\n    gap: 5rem;\n    flex-direction: column;\n  }\n  .main-aboutus__section:nth-child(3) :last-child {\n    order: -1;\n  }\n  .main-aboutus__section:nth-child(3) :last-child h4 {\n    order: -2;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .main-aboutus__section:nth-child(3) img, .main-aboutus__section:nth-child(2) img {\n    height: 30rem;\n    width: 36rem;\n  }\n  .main-aboutus__section:nth-child(3) :last-child, .main-aboutus__section:nth-child(2) :last-child {\n    font-size: 1.4rem;\n    margin: auto;\n  }\n  .main-aboutus__section:nth-child(3) :last-child h4, .main-aboutus__section:nth-child(2) :last-child h4 {\n    font-size: 2.4rem;\n  }\n}\n.main-contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95vw;\n  min-height: 80vh;\n  margin: 12rem auto;\n  gap: 15rem;\n  display: flex;\n}\n.main-contact__info {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n.main-contact__info h3 {\n  margin-bottom: 0.8rem;\n}\n.main-contact__img {\n  width: 600px;\n  border-radius: 3rem;\n  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n}\n\n@media only screen and (max-width: 960px) {\n  .main-contact {\n    gap: 3rem;\n  }\n}\n@media only screen and (max-width: 840px) {\n  .main-contact {\n    flex-direction: column;\n    text-align: center;\n  }\n  .main-contact__img {\n    margin-top: 3rem;\n    width: 80vw;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .main-contact__img {\n    width: 36rem;\n  }\n}\n.main-home {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95vw;\n  min-height: 80vh;\n  margin: 12rem auto;\n}\n.main-home__cta {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4rem;\n}\n.main-home__cta-img {\n  width: 48rem;\n  height: 48rem;\n  border-radius: 3rem;\n}\n.main-home__cta-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 39rem;\n  text-align: justify;\n  gap: 1.4rem;\n}\n\n@media only screen and (max-width: 920px) {\n  .main-home__cta {\n    flex-direction: column;\n  }\n  .main-home__cta-img {\n    margin-top: 4rem;\n    width: 40rem;\n    height: 40rem;\n  }\n  .main-home__cta-content {\n    width: 30rem;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .main-home__cta-img {\n    width: 90vw;\n    height: 35rem;\n  }\n}\n.main-menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95vw;\n  min-height: 80vh;\n  margin: 12rem auto;\n  flex-direction: column;\n  gap: 3rem;\n}\n.main-menu__categories {\n  display: flex;\n  margin: 2rem;\n  gap: 2rem;\n}\n.main-menu__items {\n  padding: 2rem;\n}\n.main-menu__items-sushi, .main-menu__items-beverages {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 4rem;\n}\n.main-menu__item {\n  width: 420px;\n  height: 390px;\n  transition: 0.2s;\n}\n.main-menu__item-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  border-radius: 2rem;\n  overflow: hidden;\n  transition: 0.2s;\n  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n}\n.main-menu__item-container:hover {\n  transform: scale(1.05);\n  box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  filter: brightness(115%);\n}\n.main-menu__item-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(0, 0, 0);\n  opacity: 0.7;\n}\n@keyframes infoAnimEnter {\n  from {\n    height: 0;\n  }\n  to {\n    height: 100px;\n  }\n}\n@keyframes infoAnimLeave {\n  from {\n    height: 100px;\n  }\n  to {\n    height: 0px;\n    display: none;\n  }\n}\n.main-menu__item-info .item-info__name, .main-menu__item-info .item-info__price {\n  margin: 0 1rem;\n  border-radius: 1rem;\n  text-align: center;\n  font-size: 0;\n  color: white;\n}\n@keyframes infoAnimChildEnter {\n  from {\n    padding: 0rem;\n    font-size: 0;\n    border: none;\n  }\n  to {\n    font-size: 1.6rem;\n    padding: 1rem;\n    border: 3px solid #fd491b;\n  }\n}\n@keyframes infoAnimChildLeave {\n  0% {\n    font-size: 1.6rem;\n  }\n  80% {\n    font-size: 0;\n    border: none;\n  }\n}\n\n@media only screen and (max-width: 1000px) {\n  .main-menu__items-sushi, .main-menu__items-beverages {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media only screen and (max-width: 660px) {\n  .main-menu__items-sushi, .main-menu__items-beverages {\n    grid-template-columns: 1fr;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/base/_reset.scss","webpack://./src/styles/main.scss","webpack://./src/styles/base/_typography.scss","webpack://./src/styles/base/_general.scss","webpack://./src/styles/abstracts/_variables.scss","webpack://./src/styles/components/_buttons.scss","webpack://./src/styles/layout/_footer.scss","webpack://./src/styles/layout/_header.scss","webpack://./src/styles/layout/_navigation.scss","webpack://./src/styles/pages/_about-us.scss","webpack://./src/styles/abstracts/_mixins.scss","webpack://./src/styles/pages/_contact.scss","webpack://./src/styles/pages/_home.scss","webpack://./src/styles/pages/_menu.scss"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Aclonica&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: \"Aclonica\", sans-serif;\n  font-size: 1.6rem;\n  color: #fff;\n}\n\na {\n  text-decoration: none;\n  color: #fff;\n}\n\nh4 {\n  font-size: 3rem;\n}\n\nh3 {\n  font-size: 2.2rem;\n}\n\n.main-home {\n  font-family: inherit;\n}\n.main-home__cta-btn--offer, .main-home__cta-btn--menu {\n  font-family: inherit;\n  font-size: 2.2rem;\n  color: #fff;\n}\n\n.main-menu__sushi-btn, .main-menu__beverages-btn {\n  font-family: inherit;\n  font-size: 2rem;\n  color: #fff;\n}\n\n.nav__button {\n  font-family: inherit;\n  color: #fff;\n}\n\n.nav__mobile__btn {\n  font-family: \"Aclonica\", sans-serif;\n  color: white;\n  font-size: 2rem;\n}\n\n#content {\n  background-color: #2b2b2b;\n}\n\nbutton:not(.nav__mobile__btn) {\n  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.nav__button {\n  padding: 1rem;\n  border: 3px solid #fd491b;\n  min-width: 15rem;\n  border-radius: 1.5rem;\n  font-size: 2.2rem;\n  letter-spacing: 0.2rem;\n  background: none;\n  transition: 0.2s;\n}\n.nav__button:hover {\n  background-color: #fd491b;\n}\n\n.main-home__cta-btn--offer, .main-home__cta-btn--menu {\n  padding: 1rem 4rem;\n  border: 3px solid #fd491b;\n  border-radius: 1.5rem;\n  background: none;\n  transition: 0.2s;\n}\n.main-home__cta-btn--offer:hover, .main-home__cta-btn--menu:hover {\n  background-color: #fd491b;\n}\n\n.main-menu__sushi-btn, .main-menu__beverages-btn {\n  padding: 1rem 1rem;\n  width: 13rem;\n  border: 2px solid #fd491b;\n  border-radius: 1.5rem;\n  background: none;\n  transition: 0.2s;\n}\n.main-menu__sushi-btn:hover, .main-menu__beverages-btn:hover {\n  background-color: #fd491b;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 2rem;\n  background-color: #232323;\n  padding: 2rem;\n}\n.footer__content-1 {\n  display: flex;\n  gap: 2rem;\n  text-align: center;\n}\n.footer__content-1 a {\n  text-decoration: none;\n  color: #fff;\n}\n.footer .logo {\n  margin-bottom: 2rem;\n  width: 10rem;\n  height: 10rem;\n}\n\n@media only screen and (max-width: 465px) {\n  .footer {\n    font-size: 1.2rem;\n  }\n  .footer__content-1 {\n    gap: 1rem;\n  }\n}\n.header {\n  height: 10rem;\n}\n.header .logo {\n  width: 16rem;\n  height: 16rem;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 25%);\n}\n\n.nav {\n  height: inherit;\n  background-color: #232323;\n}\n.nav__desktop {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 5rem;\n  align-items: center;\n  gap: 3rem;\n  height: 10rem;\n  list-style: none;\n}\n.nav__left, .nav__right {\n  display: flex;\n  gap: 2rem;\n}\n.nav__mobile__hamburger-button {\n  display: none;\n}\n.nav__mobile__btn {\n  display: none;\n}\n\n@media only screen and (max-width: 1000px) {\n  .nav__desktop {\n    display: none;\n  }\n  .nav__mobile {\n    height: inherit;\n    position: relative;\n  }\n  .nav__mobile__hamburger-button {\n    display: block;\n    position: absolute;\n    background: none;\n    height: 4.3rem;\n    border: none;\n    right: 5%;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  .nav__mobile__hamburger-mid-layer {\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    background-color: black;\n    opacity: 0.6;\n    z-index: 1;\n  }\n  .nav__mobile__hamburger-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: fixed;\n    width: 80vw;\n    height: 70vh;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    background-color: #2b2b2b;\n    transform: translateY(22.5%);\n    z-index: 2;\n    border-radius: 20px;\n    box-shadow: 10px 15px 20px 5px rgba(0, 0, 0, 0.5);\n  }\n  .nav__mobile__btn {\n    display: block;\n    min-height: 25%;\n    background: none;\n    border: none;\n    cursor: pointer;\n    box-shadow: 0px 26px 1px -24px #fd491b;\n  }\n  .nav__mobile__btn:last-child {\n    box-shadow: none;\n  }\n}\n.main-aboutus {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95vw;\n  min-height: 80vh;\n  margin: 12rem auto;\n  flex-direction: column;\n  gap: 9rem;\n  padding: 4rem 10vw;\n}\n.main-aboutus img {\n  width: 500px;\n  border-radius: 3rem;\n  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n}\n.main-aboutus__section {\n  display: flex;\n  justify-content: center;\n  gap: 14.5rem;\n}\n.main-aboutus__section:nth-child(2) img {\n  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n}\n.main-aboutus__section:nth-child(2) :last-child {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  width: 350px;\n  order: -1;\n}\n.main-aboutus__section:nth-child(2) :last-child h4 {\n  order: -1;\n}\n.main-aboutus__section:nth-child(3) img {\n  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n}\n.main-aboutus__section:nth-child(3) :last-child {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  width: 350px;\n}\n.main-aboutus__restaurant-img {\n  max-height: 60rem;\n  min-width: 100rem;\n}\n\n@media only screen and (max-width: 1000px) {\n  .main-aboutus__restaurant-img {\n    min-width: 90vw;\n  }\n  .main-aboutus__section {\n    gap: 5rem;\n    flex-direction: column;\n  }\n  .main-aboutus__section:nth-child(3) :last-child {\n    order: -1;\n  }\n  .main-aboutus__section:nth-child(3) :last-child h4 {\n    order: -2;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .main-aboutus__section:nth-child(3) img, .main-aboutus__section:nth-child(2) img {\n    height: 30rem;\n    width: 36rem;\n  }\n  .main-aboutus__section:nth-child(3) :last-child, .main-aboutus__section:nth-child(2) :last-child {\n    font-size: 1.4rem;\n    margin: auto;\n  }\n  .main-aboutus__section:nth-child(3) :last-child h4, .main-aboutus__section:nth-child(2) :last-child h4 {\n    font-size: 2.4rem;\n  }\n}\n.main-contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95vw;\n  min-height: 80vh;\n  margin: 12rem auto;\n  gap: 15rem;\n  display: flex;\n}\n.main-contact__info {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n.main-contact__info h3 {\n  margin-bottom: 0.8rem;\n}\n.main-contact__img {\n  width: 600px;\n  border-radius: 3rem;\n  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n}\n\n@media only screen and (max-width: 960px) {\n  .main-contact {\n    gap: 3rem;\n  }\n}\n@media only screen and (max-width: 840px) {\n  .main-contact {\n    flex-direction: column;\n    text-align: center;\n  }\n  .main-contact__img {\n    margin-top: 3rem;\n    width: 80vw;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .main-contact__img {\n    width: 36rem;\n  }\n}\n.main-home {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95vw;\n  min-height: 80vh;\n  margin: 12rem auto;\n}\n.main-home__cta {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4rem;\n}\n.main-home__cta-img {\n  width: 48rem;\n  height: 48rem;\n  border-radius: 3rem;\n}\n.main-home__cta-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 39rem;\n  text-align: justify;\n  gap: 1.4rem;\n}\n\n@media only screen and (max-width: 920px) {\n  .main-home__cta {\n    flex-direction: column;\n  }\n  .main-home__cta-img {\n    margin-top: 4rem;\n    width: 40rem;\n    height: 40rem;\n  }\n  .main-home__cta-content {\n    width: 30rem;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .main-home__cta-img {\n    width: 90vw;\n    height: 35rem;\n  }\n}\n.main-menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95vw;\n  min-height: 80vh;\n  margin: 12rem auto;\n  flex-direction: column;\n  gap: 3rem;\n}\n.main-menu__categories {\n  display: flex;\n  margin: 2rem;\n  gap: 2rem;\n}\n.main-menu__items {\n  padding: 2rem;\n}\n.main-menu__items-sushi, .main-menu__items-beverages {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 4rem;\n}\n.main-menu__item {\n  width: 420px;\n  height: 390px;\n  transition: 0.2s;\n}\n.main-menu__item-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  border-radius: 2rem;\n  overflow: hidden;\n  transition: 0.2s;\n  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n}\n.main-menu__item-container:hover {\n  transform: scale(1.05);\n  box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  filter: brightness(115%);\n}\n.main-menu__item-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(0, 0, 0);\n  opacity: 0.7;\n}\n@keyframes infoAnimEnter {\n  from {\n    height: 0;\n  }\n  to {\n    height: 100px;\n  }\n}\n@keyframes infoAnimLeave {\n  from {\n    height: 100px;\n  }\n  to {\n    height: 0px;\n    display: none;\n  }\n}\n.main-menu__item-info .item-info__name, .main-menu__item-info .item-info__price {\n  margin: 0 1rem;\n  border-radius: 1rem;\n  text-align: center;\n  font-size: 0;\n  color: white;\n}\n@keyframes infoAnimChildEnter {\n  from {\n    padding: 0rem;\n    font-size: 0;\n    border: none;\n  }\n  to {\n    font-size: 1.6rem;\n    padding: 1rem;\n    border: 3px solid #fd491b;\n  }\n}\n@keyframes infoAnimChildLeave {\n  0% {\n    font-size: 1.6rem;\n  }\n  80% {\n    font-size: 0;\n    border: none;\n  }\n}\n\n@media only screen and (max-width: 1000px) {\n  .main-menu__items-sushi, .main-menu__items-beverages {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media only screen and (max-width: 660px) {\n  .main-menu__items-sushi, .main-menu__items-beverages {\n    grid-template-columns: 1fr;\n  }\n}","@import url(\"https://fonts.googleapis.com/css2?family=Aclonica&display=swap\");\n\nbody {\n  font-family: \"Aclonica\", sans-serif;\n  font-size: 1.6rem;\n  color: #fff;\n}\n\na {\n  text-decoration: none;\n  color: #fff;\n}\n\nh4 {\n  font-size: 3rem;\n}\n\nh3 {\n  font-size: 2.2rem;\n}\n\n.main-home {\n  font-family: inherit;\n\n  &__cta-btn--offer,\n  &__cta-btn--menu {\n    font-family: inherit;\n    font-size: 2.2rem;\n    color: #fff;\n  }\n}\n.main-menu {\n  &__sushi-btn,\n  &__beverages-btn {\n    font-family: inherit;\n    font-size: 2rem;\n    color: #fff;\n  }\n}\n\n.nav__button {\n  font-family: inherit;\n  color: #fff;\n}\n\n.nav__mobile__btn {\n  font-family: \"Aclonica\", sans-serif;\n  color: white;\n  font-size: 2rem;\n}\n","#content {\n  background-color: $background;\n}\n","// COLORS\n\n$background: #2b2b2b;\n$background-two: #232323;\n\n$primary: #fd491b;\n\n$primary-container: #2c0900;\n","button:not(.nav__mobile__btn) {\n  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.nav__button {\n  padding: 1rem;\n  border: 3px solid $primary;\n  min-width: 15rem;\n  border-radius: 1.5rem;\n  font-size: 2.2rem;\n  letter-spacing: 0.2rem;\n  background: none;\n  transition: 0.2s;\n\n  &:hover {\n    background-color: $primary;\n  }\n}\n\n.main-home {\n  &__cta {\n    &-btn--offer,\n    &-btn--menu {\n      padding: 1rem 4rem;\n      border: 3px solid $primary;\n\n      border-radius: 1.5rem;\n      background: none;\n      transition: 0.2s;\n\n      &:hover {\n        background-color: $primary;\n      }\n    }\n  }\n}\n\n.main-menu {\n  &__sushi-btn,\n  &__beverages-btn {\n    padding: 1rem 1rem;\n    width: 13rem;\n    border: 2px solid $primary;\n    border-radius: 1.5rem;\n    background: none;\n\n    transition: 0.2s;\n\n    &:hover {\n      background-color: $primary;\n    }\n  }\n}\n",".footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 2rem;\n  background-color: $background-two;\n  padding: 2rem;\n\n  &__content-1 {\n    a {\n      text-decoration: none;\n      color: #fff;\n    }\n    display: flex;\n    gap: 2rem;\n    text-align: center;\n  }\n\n  .logo {\n    margin-bottom: 2rem;\n    width: 10rem;\n    height: 10rem;\n\n    // background-color: $primary;\n  }\n}\n\n@media only screen and (max-width: 465px) {\n  .footer {\n    font-size: 1.2rem;\n\n    &__content-1 {\n      gap: 1rem;\n    }\n  }\n}\n",".header {\n  height: 10rem;\n\n  .logo {\n    width: 16rem;\n    height: 16rem;\n\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 25%);\n  }\n}\n",".nav {\n  height: inherit;\n  background-color: $background-two;\n\n  &__desktop {\n    display: flex;\n    justify-content: space-between;\n    margin: 0 5rem;\n    align-items: center;\n    gap: 3rem;\n\n    height: 10rem;\n    list-style: none;\n  }\n\n  &__left,\n  &__right {\n    display: flex;\n    gap: 2rem;\n  }\n\n  &__mobile {\n    &__hamburger-button {\n      display: none;\n    }\n\n    &__btn {\n      display: none;\n    }\n  }\n}\n\n//*** PHONE & TABLET ***//\n\n@media only screen and (max-width: 1000px) {\n  .nav {\n    &__desktop {\n      display: none;\n    }\n\n    &__mobile {\n      height: inherit;\n      position: relative;\n\n      &__hamburger-button {\n        display: block;\n        position: absolute;\n        background: none;\n        height: 4.3rem;\n        border: none;\n        right: 5%;\n        top: 50%;\n        transform: translateY(-50%);\n      }\n\n      &__hamburger-mid-layer {\n        width: 100vw;\n        height: 100vh;\n        position: fixed;\n        background-color: black;\n        opacity: 0.6;\n        z-index: 1;\n      }\n\n      &__hamburger-menu {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        position: fixed;\n        width: 80vw;\n        height: 70vh;\n        margin: 0 auto;\n        left: 0;\n        right: 0;\n\n        background-color: $background;\n        transform: translateY(22.5%);\n        z-index: 2;\n\n        border-radius: 20px;\n        box-shadow: 10px 15px 20px 5px rgba(0, 0, 0, 0.5);\n      }\n\n      //CAN'T FIGURE OUT WHY BUTTON WON'T DISPLAY ON _buttons.scss\n      &__btn {\n        display: block;\n        min-height: 25%;\n\n        background: none;\n        border: none;\n        cursor: pointer;\n        box-shadow: 0px 26px 1px -24px $primary;\n\n        &:last-child {\n          box-shadow: none;\n        }\n      }\n    }\n  }\n}\n",".main-aboutus {\n  @include main;\n  flex-direction: column;\n  gap: 9rem;\n  padding: 4rem 10vw;\n\n  img {\n    width: 500px;\n    border-radius: 3rem;\n    box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n  }\n\n  &__section {\n    display: flex;\n    // flex-wrap: wrap;\n    justify-content: center;\n    gap: 14.5rem;\n\n    //section 2\n    &:nth-child(2) {\n      img {\n        box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n      }\n      //paragraph container\n      & :last-child {\n        display: flex;\n        flex-direction: column;\n        gap: 2rem;\n\n        width: 350px;\n        order: -1;\n\n        h4 {\n          order: -1;\n        }\n      }\n    }\n\n    // section 3\n    &:nth-child(3) {\n      img {\n        box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n      }\n      //paragraph container\n      & :last-child {\n        display: flex;\n        flex-direction: column;\n        gap: 2rem;\n        width: 350px;\n      }\n    }\n  }\n\n  &__restaurant-img {\n    max-height: 60rem;\n    min-width: 100rem;\n  }\n}\n\n@media only screen and (max-width: 1000px) {\n  .main-aboutus {\n    &__restaurant-img {\n      min-width: 90vw;\n    }\n\n    &__section {\n      gap: 5rem;\n      flex-direction: column;\n\n      //section 3\n      &:nth-child(3) {\n        //paragraph container\n        & :last-child {\n          order: -1;\n          h4 {\n            order: -2;\n          }\n        }\n      }\n    }\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .main-aboutus {\n    &__section {\n      &:nth-child(3),\n      &:nth-child(2) {\n        img {\n          height: 30rem;\n          width: 36rem;\n        }\n\n        & :last-child {\n          h4 {\n            font-size: 2.4rem;\n          }\n          font-size: 1.4rem;\n          margin: auto;\n        }\n      }\n    }\n  }\n}\n","@mixin main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 95vw;\n  min-height: 80vh;\n  margin: 12rem auto;\n}\n",".main-contact {\n  @include main;\n  gap: 15rem;\n  display: flex;\n\n  &__info {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n\n    h3 {\n      margin-bottom: 0.8rem;\n    }\n  }\n\n  &__img {\n    width: 600px;\n    border-radius: 3rem;\n    box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n  }\n}\n\n//*** PHONE & TABLET ***//\n\n@media only screen and (max-width: 960px) {\n  .main-contact {\n    gap: 3rem;\n\n    // &__img {\n    //   margin-top: 3rem;\n    //   width: 90vw;\n    // }\n  }\n}\n\n@media only screen and (max-width: 840px) {\n  .main-contact {\n    flex-direction: column;\n    text-align: center;\n\n    &__img {\n      margin-top: 3rem;\n      width: 80vw;\n    }\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .main-contact {\n    &__img {\n      width: 36rem;\n    }\n  }\n}\n",".main-home {\n  @include main;\n\n  &__cta {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4rem;\n\n    &-img {\n      width: 48rem;\n      height: 48rem;\n\n      border-radius: 3rem;\n    }\n\n    &-content {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 39rem;\n      text-align: justify;\n      gap: 1.4rem;\n    }\n  }\n}\n\n//*** PHONE & TABLET ***//\n\n@media only screen and (max-width: 920px) {\n  .main-home {\n    &__cta {\n      flex-direction: column;\n      &-img {\n        margin-top: 4rem;\n        width: 40rem;\n        height: 40rem;\n      }\n      &-content {\n        width: 30rem;\n      }\n    }\n  }\n}\n\n@media only screen and (max-width: 400px) {\n  .main-home {\n    &__cta {\n      &-img {\n        width: 90vw;\n        height: 35rem;\n      }\n    }\n  }\n}\n",".main-menu {\n  @include main;\n  flex-direction: column;\n  gap: 3rem;\n\n  &__categories {\n    display: flex;\n    margin: 2rem;\n    gap: 2rem;\n  }\n\n  &__items {\n    padding: 2rem;\n\n    &-sushi,\n    &-beverages {\n      display: grid;\n      grid-template-columns: 1fr 1fr 1fr;\n      gap: 4rem;\n    }\n  }\n\n  &__item {\n    width: 420px;\n    height: 390px;\n    transition: 0.2s;\n\n    &-container {\n      position: relative;\n      display: flex;\n      justify-content: center;\n\n      border-radius: 2rem;\n      overflow: hidden;\n      transition: 0.2s;\n      box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);\n\n      &:hover {\n        transform: scale(1.05);\n        box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.2);\n        cursor: pointer;\n        filter: brightness(115%);\n      }\n    }\n\n    &-info {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 3);\n      opacity: 0.7;\n\n      @keyframes infoAnimEnter {\n        from {\n          height: 0;\n        }\n\n        to {\n          height: 100px;\n        }\n      }\n\n      @keyframes infoAnimLeave {\n        from {\n          height: 100px;\n        }\n\n        to {\n          height: 0px;\n          display: none;\n        }\n      }\n\n      .item-info__ {\n        &name,\n        &price {\n          margin: 0 1rem;\n          border-radius: 1rem;\n          text-align: center;\n          font-size: 0;\n          color: white;\n        }\n\n        @keyframes infoAnimChildEnter {\n          from {\n            padding: 0rem;\n            font-size: 0;\n            border: none;\n          }\n\n          to {\n            font-size: 1.6rem;\n            padding: 1rem;\n            border: 3px solid $primary;\n          }\n        }\n\n        @keyframes infoAnimChildLeave {\n          0% {\n            font-size: 1.6rem;\n          }\n\n          80% {\n            font-size: 0;\n            border: none;\n          }\n        }\n      }\n    }\n  }\n}\n\n//*** PHONE & TABLET ***//\n\n@media only screen and (max-width: 1000px) {\n  .main-menu {\n    &__items {\n      &-sushi,\n      &-beverages {\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    &__item {\n      &-container {\n        // width: 390px;\n        // height: 380px;\n      }\n    }\n  }\n}\n\n@media only screen and (max-width: 660px) {\n  .main-menu {\n    &__items {\n      &-sushi,\n      &-beverages {\n        grid-template-columns: 1fr;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/pages/about-us.js":
/*!**********************************!*\
  !*** ./src/js/pages/about-us.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutUs)
/* harmony export */ });
/* harmony import */ var _assets_aboutus_head_chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/aboutus/head-chef.jpg */ "./src/assets/aboutus/head-chef.jpg");
/* harmony import */ var _assets_aboutus_restaurant_indoor_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/aboutus/restaurant-indoor.jpg */ "./src/assets/aboutus/restaurant-indoor.jpg");
/* harmony import */ var _assets_aboutus_serving_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/aboutus/serving.jpg */ "./src/assets/aboutus/serving.jpg");




function aboutUs() {
  const main = document.querySelector("#main");
  main.textContent = undefined;

  const aboutusContainer = document.createElement("div");
  aboutusContainer.setAttribute("class", "main-aboutus");
  main.appendChild(aboutusContainer);

  const sectionOne = document.createElement("section");
  sectionOne.setAttribute("class", "main-aboutus__section");
  aboutusContainer.appendChild(sectionOne);

  const restaurantIndoorImg = document.createElement("img");
  restaurantIndoorImg.setAttribute("class", "main-aboutus__restaurant-img");
  restaurantIndoorImg.setAttribute("src", _assets_aboutus_restaurant_indoor_jpg__WEBPACK_IMPORTED_MODULE_1__);
  sectionOne.appendChild(restaurantIndoorImg);
  /////
  const sectionTwo = document.createElement("section");
  sectionTwo.setAttribute("class", "main-aboutus__section");
  aboutusContainer.appendChild(sectionTwo);

  const headChefImg = document.createElement("img");
  headChefImg.setAttribute("src", _assets_aboutus_head_chef_jpg__WEBPACK_IMPORTED_MODULE_0__);
  sectionTwo.appendChild(headChefImg);

  const sTwoParagraphContainer = document.createElement("div");
  const sectionTwoTitle = document.createElement("h4");
  sectionTwoTitle.textContent = "Head Chef Tsunaki Soma";

  sTwoParagraphContainer.appendChild(sectionTwoTitle);
  // sTwoParagraphContainer.setAttribute("class", "main-aboutus__section-two-p");

  const sectionTwoParagraph = document.createElement("p");
  sectionTwoParagraph.textContent = `Maecenas consequat tincid unt orci, 
                                      nec tristique sem. Nulla cursus elit condimentum mattis interdum. Maecenas 
                                      dapibus vel enim ut pretium. Quisque ultrices risus eu eros commodo, et dictum 
                                      quam venenatis. Fusce vulputate rutrum mauris, et vestibulum odio rutrum ut. 
                                      Cras porttitor tellus tellus, et aliquam massa interdum quis.
`;
  sectionTwo.appendChild(sTwoParagraphContainer);
  sTwoParagraphContainer.appendChild(sectionTwoParagraph);

  /////
  const sectionThree = document.createElement("section");
  sectionThree.setAttribute("class", "main-aboutus__section");
  aboutusContainer.appendChild(sectionThree);

  const servingImg = document.createElement("img");
  servingImg.setAttribute("src", _assets_aboutus_serving_jpg__WEBPACK_IMPORTED_MODULE_2__);
  sectionThree.appendChild(servingImg);

  const sThreeParagraphContainer = document.createElement("div");

  const sectionThreeTitle = document.createElement("h4");
  sectionThreeTitle.textContent = "Amazing service";

  sThreeParagraphContainer.appendChild(sectionThreeTitle);

  const sectionThreeParagraph = document.createElement("p");
  sectionThreeParagraph.textContent = `Integer in elit lacus. Fusce vel commodo sapien. Proin ultricies 
                                        porttitor ante, eu molestie odio vestibulum non. Aliquam porttitor imperdiet lectus sit amet 
                                        finibus. Suspendisse potenti. Maecenas vitae commodo ex, vitae suscipit sapien. Pellentesque 
                                        pulvinar eros quis lorem congue, auctor sodales tortor euismod. Aenean pellentesque laoreet 
                                        lectus vel porta
`;
  sectionThree.appendChild(sThreeParagraphContainer);
  sThreeParagraphContainer.appendChild(sectionThreeParagraph);
}


/***/ }),

/***/ "./src/js/pages/contact.js":
/*!*********************************!*\
  !*** ./src/js/pages/contact.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _assets_contact_restaurant_outdoor_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/contact/restaurant-outdoor.jpg */ "./src/assets/contact/restaurant-outdoor.jpg");


function contact() {
  const main = document.querySelector("#main");
  main.textContent = undefined;

  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("class", "main-contact");
  main.appendChild(contactContainer);

  // IMAGE
  const restaurantOutsideImg = document.createElement("img");
  restaurantOutsideImg.setAttribute("class", "main-contact__img");
  restaurantOutsideImg.setAttribute("src", _assets_contact_restaurant_outdoor_jpg__WEBPACK_IMPORTED_MODULE_0__);
  contactContainer.appendChild(restaurantOutsideImg);

  // CONTACT INFO
  const contactInfo = document.createElement("div");
  contactInfo.setAttribute("class", "main-contact__info");
  contactContainer.appendChild(contactInfo);

  const addressInfo = document.createElement("div");
  contactInfo.appendChild(addressInfo);
  const addressInfoTitle = document.createElement("h3");
  addressInfoTitle.textContent = "Adresa:";
  addressInfo.appendChild(addressInfoTitle);
  const addressInfoText = document.createElement("p");
  addressInfoText.textContent = "Bld. Iuliu Maniu 24, Bucuresti";
  addressInfo.appendChild(addressInfoText);

  const emailInfo = document.createElement("div");
  contactInfo.appendChild(emailInfo);
  const emailInfoTitle = document.createElement("h3");
  emailInfoTitle.textContent = "Email:";
  emailInfo.appendChild(emailInfoTitle);
  const emailInfoText = document.createElement("p");
  emailInfoText.textContent = "contact@sushima.com";
  emailInfo.appendChild(emailInfoText);

  const numberInfo = document.createElement("div");
  contactInfo.appendChild(numberInfo);
  const numberInfoTitle = document.createElement("h3");
  numberInfoTitle.textContent = "Numar:";
  numberInfo.appendChild(numberInfoTitle);
  const numberInfoText = document.createElement("p");
  numberInfoText.textContent = "0799483999";
  numberInfo.appendChild(numberInfoText);
}


/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _assets_menu_foods_naruto_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/menu/foods/naruto.jpg */ "./src/assets/menu/foods/naruto.jpg");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/js/pages/menu.js");



function home() {
  const main = document.querySelector("#main");
  main.textContent = undefined;

  const homeContainer = document.createElement("div");
  homeContainer.setAttribute("class", "main-home");
  main.appendChild(homeContainer);

  //*********  Call to action  **********//
  //******                        ******//

  const homeCta = document.createElement("div");
  homeCta.setAttribute("class", "main-home__cta");
  homeContainer.appendChild(homeCta);

  const offerImg = document.createElement("img");
  offerImg.setAttribute("class", "main-home__cta-img");
  offerImg.setAttribute("src", _assets_menu_foods_naruto_jpg__WEBPACK_IMPORTED_MODULE_0__);
  homeCta.appendChild(offerImg);

  const ctaContent = document.createElement("div");
  ctaContent.setAttribute("class", "main-home__cta-content");
  homeCta.appendChild(ctaContent);

  const ctaText = document.createElement("p");
  ctaText.setAttribute("class", "main-home__cta-text");
  ctaText.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                        iste earum vel esse autem animi ex unde, voluptates adipisci
                        repellat ratione id, eaque ipsam! Accusamus consequatur deleniti
                        iste illo voluptatem.`;
  ctaContent.appendChild(ctaText);

  const ctaBtnOffer = document.createElement("button");
  ctaBtnOffer.setAttribute("class", "main-home__cta-btn--offer");
  ctaBtnOffer.textContent = "Vezi oferta";
  ctaContent.appendChild(ctaBtnOffer);

  const ctaBtnMenu = document.createElement("button");
  ctaBtnMenu.setAttribute("class", "main-home__cta-btn--menu");
  ctaBtnMenu.textContent = "Vezi meniu";
  ctaContent.appendChild(ctaBtnMenu);

  ctaBtnOffer.addEventListener("click", () => {
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  ctaBtnMenu.addEventListener("click", () => {
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
}


/***/ }),

/***/ "./src/js/pages/menu.js":
/*!******************************!*\
  !*** ./src/js/pages/menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _assets_menu_beverages_cocktail_long_island_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/menu/beverages/cocktail-long-island.jpg */ "./src/assets/menu/beverages/cocktail-long-island.jpg");
/* harmony import */ var _assets_menu_beverages_cocktail_watermelon_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/menu/beverages/cocktail-watermelon.jpg */ "./src/assets/menu/beverages/cocktail-watermelon.jpg");
/* harmony import */ var _assets_menu_beverages_frappe_oreo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/menu/beverages/frappe-oreo.jpg */ "./src/assets/menu/beverages/frappe-oreo.jpg");
/* harmony import */ var _assets_menu_beverages_fresh_orange_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/menu/beverages/fresh-orange.jpg */ "./src/assets/menu/beverages/fresh-orange.jpg");
/* harmony import */ var _assets_menu_beverages_water_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/menu/beverages/water.jpg */ "./src/assets/menu/beverages/water.jpg");
/* harmony import */ var _assets_menu_foods_akira_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/menu/foods/akira.jpg */ "./src/assets/menu/foods/akira.jpg");
/* harmony import */ var _assets_menu_foods_chiha_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/menu/foods/chiha.jpg */ "./src/assets/menu/foods/chiha.jpg");
/* harmony import */ var _assets_menu_foods_hana_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/menu/foods/hana.jpg */ "./src/assets/menu/foods/hana.jpg");
/* harmony import */ var _assets_menu_foods_itsuki_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/menu/foods/itsuki.jpg */ "./src/assets/menu/foods/itsuki.jpg");
/* harmony import */ var _assets_menu_foods_kaito_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/menu/foods/kaito.jpg */ "./src/assets/menu/foods/kaito.jpg");
/* harmony import */ var _assets_menu_foods_kanai_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/menu/foods/kanai.jpg */ "./src/assets/menu/foods/kanai.jpg");
/* harmony import */ var _assets_menu_foods_naruto_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/menu/foods/naruto.jpg */ "./src/assets/menu/foods/naruto.jpg");
/* harmony import */ var _assets_menu_foods_ren_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/menu/foods/ren.jpg */ "./src/assets/menu/foods/ren.jpg");
/* harmony import */ var _assets_menu_foods_saeko_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/menu/foods/saeko.jpg */ "./src/assets/menu/foods/saeko.jpg");
/* harmony import */ var _assets_menu_foods_sayo_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/menu/foods/sayo.jpg */ "./src/assets/menu/foods/sayo.jpg");
/* harmony import */ var _assets_menu_foods_sora_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/menu/foods/sora.jpg */ "./src/assets/menu/foods/sora.jpg");
/* harmony import */ var _assets_menu_foods_takashi_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/menu/foods/takashi.jpg */ "./src/assets/menu/foods/takashi.jpg");
// Beverages items






// Sushi items













function menu() {
  const main = document.querySelector("#main");
  main.textContent = undefined;

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("class", "main-menu");
  menuContainer.setAttribute("id", "menuContainer");
  main.appendChild(menuContainer);

  const menuCategories = document.createElement("div");
  menuCategories.setAttribute("class", "main-menu__categories");
  menuContainer.appendChild(menuCategories);

  const menuSushiBtn = document.createElement("button");
  menuSushiBtn.className = "main-menu__sushi-btn";
  menuSushiBtn.setAttribute("id", "menuSushiBtn");
  menuSushiBtn.innerText = "Sushi";
  menuCategories.appendChild(menuSushiBtn);

  menuSushiBtn.addEventListener("click", () => {
    menuItemsBeverages.textContent = undefined;
    menuAppendSushi();
    menu();
  });

  const menuItemsBeverages = document.createElement("div");
  menuItemsBeverages.setAttribute("class", "main-menu__items-beverages");

  const menuBeveragesBtn = document.createElement("button");
  menuBeveragesBtn.className = "main-menu__beverages-btn";
  menuBeveragesBtn.setAttribute("id", "menuBeveragesBtn");
  menuBeveragesBtn.innerText = "Bauturi";

  menuBeveragesBtn.addEventListener("click", () => {
    menuItemsSushi.textContent = undefined;
    menuAppendBeverages();
    menuItems.appendChild(menuItemsBeverages);
  });

  menuCategories.appendChild(menuBeveragesBtn);

  // items
  const menuItems = document.createElement("div");
  menuItems.setAttribute("class", "main-menu__items");

  menuContainer.appendChild(menuItems);

  //*********** SUSHI ITEMS ************//
  //******                        ******//
  const menuItemsSushi = document.createElement("div");
  menuItemsSushi.setAttribute("class", "main-menu__items-sushi");
  menuItems.appendChild(menuItemsSushi);

  ///////// AKIRA ////////

  const akiraContainer = document.createElement("div");
  akiraContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(akiraContainer);

  const akiraImg = document.createElement("img");
  akiraImg.setAttribute("class", "main-menu__item");
  akiraImg.setAttribute("src", _assets_menu_foods_akira_jpg__WEBPACK_IMPORTED_MODULE_5__);

  ///////// CHIHA ////////

  const chihaContainer = document.createElement("div");
  chihaContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(chihaContainer);

  const chihaImg = document.createElement("img");
  chihaImg.setAttribute("class", "main-menu__item");
  chihaImg.setAttribute("src", _assets_menu_foods_chiha_jpg__WEBPACK_IMPORTED_MODULE_6__);

  ///////// HANA ////////

  const hanaContainer = document.createElement("div");
  hanaContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(hanaContainer);

  const hanaImg = document.createElement("img");
  hanaImg.setAttribute("class", "main-menu__item");
  hanaImg.setAttribute("src", _assets_menu_foods_hana_jpg__WEBPACK_IMPORTED_MODULE_7__);

  ///////// ITSUKI ////////

  const itsukiContainer = document.createElement("div");
  itsukiContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(itsukiContainer);

  const itsukiImg = document.createElement("img");
  itsukiImg.setAttribute("class", "main-menu__item");
  itsukiImg.setAttribute("src", _assets_menu_foods_itsuki_jpg__WEBPACK_IMPORTED_MODULE_8__);

  ///////// KAITO ////////
  const kaitoContainer = document.createElement("div");
  kaitoContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(kaitoContainer);

  const kaitoImg = document.createElement("img");
  kaitoImg.setAttribute("class", "main-menu__item");
  kaitoImg.setAttribute("src", _assets_menu_foods_kaito_jpg__WEBPACK_IMPORTED_MODULE_9__);

  ///////// KANAI ////////
  const kanaiContainer = document.createElement("div");
  kanaiContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(kanaiContainer);

  const kanaiImg = document.createElement("img");
  kanaiImg.setAttribute("class", "main-menu__item");
  kanaiImg.setAttribute("src", _assets_menu_foods_kanai_jpg__WEBPACK_IMPORTED_MODULE_10__);

  ///////// NARUTO ////////
  const narutoContainer = document.createElement("div");
  narutoContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(narutoContainer);

  const narutoImg = document.createElement("img");
  narutoImg.setAttribute("class", "main-menu__item");
  narutoImg.setAttribute("id", "naruto");
  narutoImg.setAttribute("src", _assets_menu_foods_naruto_jpg__WEBPACK_IMPORTED_MODULE_11__);

  ///////// REN ////////
  const renContainer = document.createElement("div");
  renContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(renContainer);

  const renImg = document.createElement("img");
  renImg.setAttribute("class", "main-menu__item");
  renImg.setAttribute("src", _assets_menu_foods_ren_jpg__WEBPACK_IMPORTED_MODULE_12__);

  ///////// SAEKO ////////
  const saekoContainer = document.createElement("div");
  saekoContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(saekoContainer);

  const saekoImg = document.createElement("img");
  saekoImg.setAttribute("class", "main-menu__item");
  saekoImg.setAttribute("src", _assets_menu_foods_saeko_jpg__WEBPACK_IMPORTED_MODULE_13__);

  ///////// SAYO ////////
  const sayoContainer = document.createElement("div");
  sayoContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(sayoContainer);

  const sayoImg = document.createElement("img");
  sayoImg.setAttribute("class", "main-menu__item");
  sayoImg.setAttribute("src", _assets_menu_foods_sayo_jpg__WEBPACK_IMPORTED_MODULE_14__);

  ///////// SORA ////////
  const soraContainer = document.createElement("div");
  soraContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(soraContainer);

  const soraImg = document.createElement("img");
  soraImg.setAttribute("class", "main-menu__item");
  soraImg.setAttribute("src", _assets_menu_foods_sora_jpg__WEBPACK_IMPORTED_MODULE_15__);

  ///////// TAKASHI ////////
  const takashiContainer = document.createElement("div");
  takashiContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(takashiContainer);

  const takashiImg = document.createElement("img");
  takashiImg.setAttribute("class", "main-menu__item");
  takashiImg.setAttribute("src", _assets_menu_foods_takashi_jpg__WEBPACK_IMPORTED_MODULE_16__);

  function menuAppendSushi() {
    akiraContainer.appendChild(akiraImg);
    chihaContainer.appendChild(chihaImg);
    hanaContainer.appendChild(hanaImg);
    itsukiContainer.appendChild(itsukiImg);
    kaitoContainer.appendChild(kaitoImg);
    kanaiContainer.appendChild(kanaiImg);
    narutoContainer.appendChild(narutoImg);
    renContainer.appendChild(renImg);
    saekoContainer.appendChild(saekoImg);
    sayoContainer.appendChild(sayoImg);
    soraContainer.appendChild(soraImg);
    takashiContainer.appendChild(takashiImg);
  }

  menuAppendSushi();

  //********* BEVERAGES ITEMS **********//
  //******                        ******//
  // const menuItemsBeverages = document.createElement("div");
  // menuItemsBeverages.setAttribute("class", "main-menu__items-beverages");
  // menuItems.appendChild(menuItemsBeverages);

  //////// COCKTAIL LONG ISLAND ////////

  const cocktailLongIslandContainer = document.createElement("div");
  //prettier-ignore
  cocktailLongIslandContainer.setAttribute("class","main-menu__item-container");
  menuItemsBeverages.appendChild(cocktailLongIslandContainer);

  let cocktailLongIslandImg = document.createElement("img");
  cocktailLongIslandImg.setAttribute("class", "main-menu__item");
  cocktailLongIslandImg.setAttribute("src", _assets_menu_beverages_cocktail_long_island_jpg__WEBPACK_IMPORTED_MODULE_0__);

  //////// COCKTAIL WATERMELON ////////

  const cocktailWatermelonContainer = document.createElement("div");
  //prettier-ignore
  cocktailWatermelonContainer.setAttribute("class","main-menu__item-container");
  menuItemsBeverages.appendChild(cocktailWatermelonContainer);

  let cocktailWatermelonImg = document.createElement("img");
  cocktailWatermelonImg.setAttribute("class", "main-menu__item");
  cocktailWatermelonImg.setAttribute("src", _assets_menu_beverages_cocktail_watermelon_jpg__WEBPACK_IMPORTED_MODULE_1__);

  //////// FRAPPE OREO ////////
  const frappeOreoContainer = document.createElement("div");
  frappeOreoContainer.setAttribute("class", "main-menu__item-container");
  menuItemsBeverages.appendChild(frappeOreoContainer);

  let frappeOreoImg = document.createElement("img");
  frappeOreoImg.setAttribute("class", "main-menu__item");
  frappeOreoImg.setAttribute("src", _assets_menu_beverages_frappe_oreo_jpg__WEBPACK_IMPORTED_MODULE_2__);

  //////// FRESH OREO ////////
  const freshOrangeContainer = document.createElement("div");
  freshOrangeContainer.setAttribute("class", "main-menu__item-container");
  menuItemsBeverages.appendChild(freshOrangeContainer);

  let freshOrangeImg = document.createElement("img");
  freshOrangeImg.setAttribute("class", "main-menu__item");
  freshOrangeImg.setAttribute("src", _assets_menu_beverages_fresh_orange_jpg__WEBPACK_IMPORTED_MODULE_3__);

  //////// WATER BOTTLE ////////
  const waterBottleContainer = document.createElement("div");
  waterBottleContainer.setAttribute("class", "main-menu__item-container");
  menuItemsBeverages.appendChild(waterBottleContainer);

  let waterImg = document.createElement("img");
  waterImg.setAttribute("class", "main-menu__item");
  waterImg.setAttribute("src", _assets_menu_beverages_water_jpg__WEBPACK_IMPORTED_MODULE_4__);

  function menuAppendBeverages() {
    cocktailLongIslandContainer.appendChild(cocktailLongIslandImg);
    cocktailWatermelonContainer.appendChild(cocktailWatermelonImg);
    frappeOreoContainer.appendChild(frappeOreoImg);
    freshOrangeContainer.appendChild(freshOrangeImg);
    waterBottleContainer.appendChild(waterImg);
  }

  // ITEM INFO

  const itemInfo = document.createElement("div");
  itemInfo.setAttribute("class", "main-menu__item-info item-info");

  const itemInfoName = document.createElement("div");
  itemInfoName.setAttribute("class", "item-info__name");
  itemInfo.appendChild(itemInfoName);

  const itemInfoPrice = document.createElement("div");
  itemInfoPrice.setAttribute("class", "item-info__price");
  itemInfo.appendChild(itemInfoPrice);

  function hoverImg(img, name, price) {
    img.addEventListener("mouseenter", () => {
      img.appendChild(itemInfo);

      itemInfo.style.animation = "infoAnimEnter 0.2s forwards";
      itemInfoName.textContent = name;
      itemInfoPrice.textContent = price;

      itemInfoName.style.animation = "infoAnimChildEnter 0.2s forwards";
      itemInfoPrice.style.animation = "infoAnimChildEnter 0.2s forwards";
    });

    img.addEventListener("mouseleave", () => {
      itemInfo.style.animation = "infoAnimLeave 0.2s forwards";

      itemInfoName.style.animation = "infoAnimChildLeave 0.2s forwards";
      itemInfoPrice.style.animation = "infoAnimChildLeave 0.2s forwards";
    });
  }

  hoverImg(akiraContainer, "Akira", "35 RON");
  hoverImg(chihaContainer, "Chiha", "50 RON");
  hoverImg(hanaContainer, "Hana", "60 RON");
  hoverImg(itsukiContainer, "Itsuki", "35 RON");
  hoverImg(kaitoContainer, "Kaito", "25 RON");
  hoverImg(kanaiContainer, "Kanai", "60 RON");
  hoverImg(narutoContainer, "Naruto", "20 RON");
  hoverImg(renContainer, "Ren", "35 RON");
  hoverImg(saekoContainer, "Saeko", "40 RON");
  hoverImg(sayoContainer, "Sayo", "35 RON");
  hoverImg(soraContainer, "Sora", "35 RON");
  hoverImg(takashiContainer, "Takashi", "40 RON");

  hoverImg(cocktailLongIslandContainer, "Cocktail Long Island", "20 RON");
  hoverImg(cocktailWatermelonContainer, "Cocktail Watermelon", "18 RON");
  hoverImg(frappeOreoContainer, "Frappe Oreo", "15 RON");
  hoverImg(freshOrangeContainer, "Fresh Orange", "10 RON");
  hoverImg(waterBottleContainer, "Sticla Apa", "5 Ron");

  return narutoImg;
}


/***/ }),

/***/ "./src/assets/aboutus/head-chef.jpg":
/*!******************************************!*\
  !*** ./src/assets/aboutus/head-chef.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "head-chef.jpg";

/***/ }),

/***/ "./src/assets/aboutus/restaurant-indoor.jpg":
/*!**************************************************!*\
  !*** ./src/assets/aboutus/restaurant-indoor.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "restaurant-indoor.jpg";

/***/ }),

/***/ "./src/assets/aboutus/serving.jpg":
/*!****************************************!*\
  !*** ./src/assets/aboutus/serving.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "serving.jpg";

/***/ }),

/***/ "./src/assets/contact/restaurant-outdoor.jpg":
/*!***************************************************!*\
  !*** ./src/assets/contact/restaurant-outdoor.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "restaurant-outdoor.jpg";

/***/ }),

/***/ "./src/assets/logo/logo-main.png":
/*!***************************************!*\
  !*** ./src/assets/logo/logo-main.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo-main.png";

/***/ }),

/***/ "./src/assets/menu/beverages/cocktail-long-island.jpg":
/*!************************************************************!*\
  !*** ./src/assets/menu/beverages/cocktail-long-island.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cocktail-long-island.jpg";

/***/ }),

/***/ "./src/assets/menu/beverages/cocktail-watermelon.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/menu/beverages/cocktail-watermelon.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cocktail-watermelon.jpg";

/***/ }),

/***/ "./src/assets/menu/beverages/frappe-oreo.jpg":
/*!***************************************************!*\
  !*** ./src/assets/menu/beverages/frappe-oreo.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "frappe-oreo.jpg";

/***/ }),

/***/ "./src/assets/menu/beverages/fresh-orange.jpg":
/*!****************************************************!*\
  !*** ./src/assets/menu/beverages/fresh-orange.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fresh-orange.jpg";

/***/ }),

/***/ "./src/assets/menu/beverages/water.jpg":
/*!*********************************************!*\
  !*** ./src/assets/menu/beverages/water.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "water.jpg";

/***/ }),

/***/ "./src/assets/menu/foods/akira.jpg":
/*!*****************************************!*\
  !*** ./src/assets/menu/foods/akira.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "akira.jpg";

/***/ }),

/***/ "./src/assets/menu/foods/chiha.jpg":
/*!*****************************************!*\
  !*** ./src/assets/menu/foods/chiha.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chiha.jpg";

/***/ }),

/***/ "./src/assets/menu/foods/hana.jpg":
/*!****************************************!*\
  !*** ./src/assets/menu/foods/hana.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hana.jpg";

/***/ }),

/***/ "./src/assets/menu/foods/itsuki.jpg":
/*!******************************************!*\
  !*** ./src/assets/menu/foods/itsuki.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "itsuki.jpg";

/***/ }),

/***/ "./src/assets/menu/foods/kaito.jpg":
/*!*****************************************!*\
  !*** ./src/assets/menu/foods/kaito.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "kaito.jpg";

/***/ }),

/***/ "./src/assets/menu/foods/kanai.jpg":
/*!*****************************************!*\
  !*** ./src/assets/menu/foods/kanai.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "kanai.jpg";

/***/ }),

/***/ "./src/assets/menu/foods/naruto.jpg":
/*!******************************************!*\
  !*** ./src/assets/menu/foods/naruto.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "naruto.jpg";

/***/ }),

/***/ "./src/assets/menu/foods/ren.jpg":
/*!***************************************!*\
  !*** ./src/assets/menu/foods/ren.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ren.jpg";

/***/ }),

/***/ "./src/assets/menu/foods/saeko.jpg":
/*!*****************************************!*\
  !*** ./src/assets/menu/foods/saeko.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "saeko.jpg";

/***/ }),

/***/ "./src/assets/menu/foods/sayo.jpg":
/*!****************************************!*\
  !*** ./src/assets/menu/foods/sayo.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sayo.jpg";

/***/ }),

/***/ "./src/assets/menu/foods/sora.jpg":
/*!****************************************!*\
  !*** ./src/assets/menu/foods/sora.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sora.jpg";

/***/ }),

/***/ "./src/assets/menu/foods/takashi.jpg":
/*!*******************************************!*\
  !*** ./src/assets/menu/foods/takashi.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "takashi.jpg";

/***/ }),

/***/ "./src/assets/nav/hamburger-icon.png":
/*!*******************************************!*\
  !*** ./src/assets/nav/hamburger-icon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hamburger-icon.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _pages_about_us__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/about-us */ "./src/js/pages/about-us.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact */ "./src/js/pages/contact.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home */ "./src/js/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/menu */ "./src/js/pages/menu.js");
/* harmony import */ var _assets_logo_logo_main_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/logo/logo-main.png */ "./src/assets/logo/logo-main.png");
/* harmony import */ var _assets_nav_hamburger_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/nav/hamburger-icon.png */ "./src/assets/nav/hamburger-icon.png");












(0,_pages_home__WEBPACK_IMPORTED_MODULE_3__["default"])();

// insert logo
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const logoHeaderImg = document.createElement("img");
logoHeaderImg.src = _assets_logo_logo_main_png__WEBPACK_IMPORTED_MODULE_5__;
const logoFooterImg = document.createElement("img");
logoFooterImg.src = _assets_logo_logo_main_png__WEBPACK_IMPORTED_MODULE_5__;
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
hamburgerBtnIcon.setAttribute("src", _assets_nav_hamburger_icon_png__WEBPACK_IMPORTED_MODULE_6__);
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
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
    hamburgerMenu.style.display = "none";
    hamburgerMidLayer.style.display = "none";
  });

  mobileMenuBtn.addEventListener("click", () => {
    (0,_pages_menu__WEBPACK_IMPORTED_MODULE_4__["default"])();
    hamburgerMenu.style.display = "none";
    hamburgerMidLayer.style.display = "none";
  });

  mobileAboutusBtn.addEventListener("click", () => {
    (0,_pages_about_us__WEBPACK_IMPORTED_MODULE_1__["default"])();
    hamburgerMenu.style.display = "none";
    hamburgerMidLayer.style.display = "none";
  });

  mobileContactBtn.addEventListener("click", () => {
    (0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

homeBtn.addEventListener("click", _pages_home__WEBPACK_IMPORTED_MODULE_3__["default"]);
menuBtn.addEventListener("click", _pages_menu__WEBPACK_IMPORTED_MODULE_4__["default"]);
aboutusBtn.addEventListener("click", _pages_about_us__WEBPACK_IMPORTED_MODULE_1__["default"]);
contactBtn.addEventListener("click", _pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLG1EQUFtRCxjQUFjLGVBQWUsMkJBQTJCLEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxxRkFBcUYsNEJBQTRCLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLFVBQVUsMENBQTBDLHNCQUFzQixnQkFBZ0IsR0FBRyxPQUFPLDBCQUEwQixnQkFBZ0IsR0FBRyxRQUFRLG9CQUFvQixHQUFHLFFBQVEsc0JBQXNCLEdBQUcsZ0JBQWdCLHlCQUF5QixHQUFHLHlEQUF5RCx5QkFBeUIsc0JBQXNCLGdCQUFnQixHQUFHLHNEQUFzRCx5QkFBeUIsb0JBQW9CLGdCQUFnQixHQUFHLGtCQUFrQix5QkFBeUIsZ0JBQWdCLEdBQUcsdUJBQXVCLDBDQUEwQyxpQkFBaUIsb0JBQW9CLEdBQUcsY0FBYyw4QkFBOEIsR0FBRyxtQ0FBbUMsbURBQW1ELEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLGtCQUFrQixrQkFBa0IsOEJBQThCLHFCQUFxQiwwQkFBMEIsc0JBQXNCLDJCQUEyQixxQkFBcUIscUJBQXFCLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLDJEQUEyRCx1QkFBdUIsOEJBQThCLDBCQUEwQixxQkFBcUIscUJBQXFCLEdBQUcscUVBQXFFLDhCQUE4QixHQUFHLHNEQUFzRCx1QkFBdUIsaUJBQWlCLDhCQUE4QiwwQkFBMEIscUJBQXFCLHFCQUFxQixHQUFHLGdFQUFnRSw4QkFBOEIsR0FBRyxhQUFhLGtCQUFrQix3QkFBd0IsNEJBQTRCLDJCQUEyQixjQUFjLDhCQUE4QixrQkFBa0IsR0FBRyxzQkFBc0Isa0JBQWtCLGNBQWMsdUJBQXVCLEdBQUcsd0JBQXdCLDBCQUEwQixnQkFBZ0IsR0FBRyxpQkFBaUIsd0JBQXdCLGlCQUFpQixrQkFBa0IsR0FBRywrQ0FBK0MsYUFBYSx3QkFBd0IsS0FBSyx3QkFBd0IsZ0JBQWdCLEtBQUssR0FBRyxXQUFXLGtCQUFrQixHQUFHLGlCQUFpQixpQkFBaUIsa0JBQWtCLHVCQUF1QixjQUFjLG9DQUFvQyxHQUFHLFVBQVUsb0JBQW9CLDhCQUE4QixHQUFHLGlCQUFpQixrQkFBa0IsbUNBQW1DLG1CQUFtQix3QkFBd0IsY0FBYyxrQkFBa0IscUJBQXFCLEdBQUcsMkJBQTJCLGtCQUFrQixjQUFjLEdBQUcsa0NBQWtDLGtCQUFrQixHQUFHLHFCQUFxQixrQkFBa0IsR0FBRyxnREFBZ0QsbUJBQW1CLG9CQUFvQixLQUFLLGtCQUFrQixzQkFBc0IseUJBQXlCLEtBQUssb0NBQW9DLHFCQUFxQix5QkFBeUIsdUJBQXVCLHFCQUFxQixtQkFBbUIsZ0JBQWdCLGVBQWUsa0NBQWtDLEtBQUssdUNBQXVDLG1CQUFtQixvQkFBb0Isc0JBQXNCLDhCQUE4QixtQkFBbUIsaUJBQWlCLEtBQUssa0NBQWtDLG9CQUFvQiw2QkFBNkIsOEJBQThCLHNCQUFzQixrQkFBa0IsbUJBQW1CLHFCQUFxQixjQUFjLGVBQWUsZ0NBQWdDLG1DQUFtQyxpQkFBaUIsMEJBQTBCLHdEQUF3RCxLQUFLLHVCQUF1QixxQkFBcUIsc0JBQXNCLHVCQUF1QixtQkFBbUIsc0JBQXNCLDZDQUE2QyxLQUFLLGtDQUFrQyx1QkFBdUIsS0FBSyxHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IscUJBQXFCLHVCQUF1QiwyQkFBMkIsY0FBYyx1QkFBdUIsR0FBRyxxQkFBcUIsaUJBQWlCLHdCQUF3QixtREFBbUQsR0FBRywwQkFBMEIsa0JBQWtCLDRCQUE0QixpQkFBaUIsR0FBRywyQ0FBMkMsbURBQW1ELEdBQUcsbURBQW1ELGtCQUFrQiwyQkFBMkIsY0FBYyxpQkFBaUIsY0FBYyxHQUFHLHNEQUFzRCxjQUFjLEdBQUcsMkNBQTJDLG1EQUFtRCxHQUFHLG1EQUFtRCxrQkFBa0IsMkJBQTJCLGNBQWMsaUJBQWlCLEdBQUcsaUNBQWlDLHNCQUFzQixzQkFBc0IsR0FBRyxnREFBZ0QsbUNBQW1DLHNCQUFzQixLQUFLLDRCQUE0QixnQkFBZ0IsNkJBQTZCLEtBQUsscURBQXFELGdCQUFnQixLQUFLLHdEQUF3RCxnQkFBZ0IsS0FBSyxHQUFHLDZDQUE2QyxzRkFBc0Ysb0JBQW9CLG1CQUFtQixLQUFLLHNHQUFzRyx3QkFBd0IsbUJBQW1CLEtBQUssNEdBQTRHLHdCQUF3QixLQUFLLEdBQUcsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixxQkFBcUIsdUJBQXVCLGVBQWUsa0JBQWtCLEdBQUcsdUJBQXVCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLDBCQUEwQiwwQkFBMEIsR0FBRyxzQkFBc0IsaUJBQWlCLHdCQUF3QixtREFBbUQsR0FBRywrQ0FBK0MsbUJBQW1CLGdCQUFnQixLQUFLLEdBQUcsNkNBQTZDLG1CQUFtQiw2QkFBNkIseUJBQXlCLEtBQUssd0JBQXdCLHVCQUF1QixrQkFBa0IsS0FBSyxHQUFHLDZDQUE2Qyx3QkFBd0IsbUJBQW1CLEtBQUssR0FBRyxjQUFjLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixxQkFBcUIsdUJBQXVCLEdBQUcsbUJBQW1CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGNBQWMsR0FBRyx1QkFBdUIsaUJBQWlCLGtCQUFrQix3QkFBd0IsR0FBRywyQkFBMkIsa0JBQWtCLDJCQUEyQix3QkFBd0IsaUJBQWlCLHdCQUF3QixnQkFBZ0IsR0FBRywrQ0FBK0MscUJBQXFCLDZCQUE2QixLQUFLLHlCQUF5Qix1QkFBdUIsbUJBQW1CLG9CQUFvQixLQUFLLDZCQUE2QixtQkFBbUIsS0FBSyxHQUFHLDZDQUE2Qyx5QkFBeUIsa0JBQWtCLG9CQUFvQixLQUFLLEdBQUcsY0FBYyxrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IscUJBQXFCLHVCQUF1QiwyQkFBMkIsY0FBYyxHQUFHLDBCQUEwQixrQkFBa0IsaUJBQWlCLGNBQWMsR0FBRyxxQkFBcUIsa0JBQWtCLEdBQUcsd0RBQXdELGtCQUFrQix1Q0FBdUMsY0FBYyxHQUFHLG9CQUFvQixpQkFBaUIsa0JBQWtCLHFCQUFxQixHQUFHLDhCQUE4Qix1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IscUJBQXFCLHFCQUFxQixtREFBbUQsR0FBRyxvQ0FBb0MsMkJBQTJCLG9EQUFvRCxvQkFBb0IsNkJBQTZCLEdBQUcseUJBQXlCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLHVCQUF1QixjQUFjLGdCQUFnQixpQkFBaUIsbUNBQW1DLGlCQUFpQixHQUFHLDRCQUE0QixVQUFVLGdCQUFnQixLQUFLLFFBQVEsb0JBQW9CLEtBQUssR0FBRyw0QkFBNEIsVUFBVSxvQkFBb0IsS0FBSyxRQUFRLGtCQUFrQixvQkFBb0IsS0FBSyxHQUFHLG1GQUFtRixtQkFBbUIsd0JBQXdCLHVCQUF1QixpQkFBaUIsaUJBQWlCLEdBQUcsaUNBQWlDLFVBQVUsb0JBQW9CLG1CQUFtQixtQkFBbUIsS0FBSyxRQUFRLHdCQUF3QixvQkFBb0IsZ0NBQWdDLEtBQUssR0FBRyxpQ0FBaUMsUUFBUSx3QkFBd0IsS0FBSyxTQUFTLG1CQUFtQixtQkFBbUIsS0FBSyxHQUFHLGdEQUFnRCwwREFBMEQscUNBQXFDLEtBQUssR0FBRyw2Q0FBNkMsMERBQTBELGlDQUFpQyxLQUFLLEdBQUcsbUZBQW1GLFVBQVUsMENBQTBDLHNCQUFzQixnQkFBZ0IsR0FBRyxPQUFPLDBCQUEwQixnQkFBZ0IsR0FBRyxRQUFRLG9CQUFvQixHQUFHLFFBQVEsc0JBQXNCLEdBQUcsZ0JBQWdCLHlCQUF5Qiw4Q0FBOEMsMkJBQTJCLHdCQUF3QixrQkFBa0IsS0FBSyxHQUFHLGNBQWMsdUNBQXVDLDJCQUEyQixzQkFBc0Isa0JBQWtCLEtBQUssR0FBRyxrQkFBa0IseUJBQXlCLGdCQUFnQixHQUFHLHVCQUF1QiwwQ0FBMEMsaUJBQWlCLG9CQUFvQixHQUFHLGVBQWUsa0NBQWtDLEdBQUcsdUNBQXVDLDJCQUEyQixzQkFBc0IsZ0NBQWdDLG9DQUFvQyxtREFBbUQsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsa0JBQWtCLGtCQUFrQiwrQkFBK0IscUJBQXFCLDBCQUEwQixzQkFBc0IsMkJBQTJCLHFCQUFxQixxQkFBcUIsZUFBZSxpQ0FBaUMsS0FBSyxHQUFHLGdCQUFnQixZQUFZLHNDQUFzQywyQkFBMkIsbUNBQW1DLGdDQUFnQyx5QkFBeUIseUJBQXlCLG1CQUFtQixxQ0FBcUMsU0FBUyxPQUFPLEtBQUssR0FBRyxnQkFBZ0IsdUNBQXVDLHlCQUF5QixtQkFBbUIsaUNBQWlDLDRCQUE0Qix1QkFBdUIseUJBQXlCLGlCQUFpQixtQ0FBbUMsT0FBTyxLQUFLLEdBQUcsY0FBYyxrQkFBa0Isd0JBQXdCLDRCQUE0QiwyQkFBMkIsY0FBYyxzQ0FBc0Msa0JBQWtCLG9CQUFvQixTQUFTLDhCQUE4QixvQkFBb0IsT0FBTyxvQkFBb0IsZ0JBQWdCLHlCQUF5QixLQUFLLGFBQWEsMEJBQTBCLG1CQUFtQixvQkFBb0Isc0NBQXNDLEtBQUssR0FBRywrQ0FBK0MsYUFBYSx3QkFBd0Isc0JBQXNCLGtCQUFrQixPQUFPLEtBQUssR0FBRyxjQUFjLGtCQUFrQixhQUFhLG1CQUFtQixvQkFBb0IsMkJBQTJCLGdCQUFnQixzQ0FBc0MsS0FBSyxHQUFHLFdBQVcsb0JBQW9CLHNDQUFzQyxrQkFBa0Isb0JBQW9CLHFDQUFxQyxxQkFBcUIsMEJBQTBCLGdCQUFnQixzQkFBc0IsdUJBQXVCLEtBQUssNEJBQTRCLG9CQUFvQixnQkFBZ0IsS0FBSyxpQkFBaUIsMkJBQTJCLHNCQUFzQixPQUFPLGdCQUFnQixzQkFBc0IsT0FBTyxLQUFLLEdBQUcsOEVBQThFLFVBQVUsa0JBQWtCLHNCQUFzQixPQUFPLG1CQUFtQix3QkFBd0IsMkJBQTJCLCtCQUErQix5QkFBeUIsNkJBQTZCLDJCQUEyQix5QkFBeUIsdUJBQXVCLG9CQUFvQixtQkFBbUIsc0NBQXNDLFNBQVMsa0NBQWtDLHVCQUF1Qix3QkFBd0IsMEJBQTBCLGtDQUFrQyx1QkFBdUIscUJBQXFCLFNBQVMsNkJBQTZCLHdCQUF3QixpQ0FBaUMsa0NBQWtDLDRCQUE0QixzQkFBc0IsdUJBQXVCLHlCQUF5QixrQkFBa0IsbUJBQW1CLDBDQUEwQyx1Q0FBdUMscUJBQXFCLGdDQUFnQyw0REFBNEQsU0FBUyxzRkFBc0YseUJBQXlCLDBCQUEwQiw2QkFBNkIsdUJBQXVCLDBCQUEwQixrREFBa0QsMEJBQTBCLDZCQUE2QixXQUFXLFNBQVMsT0FBTyxLQUFLLEdBQUcsb0JBQW9CLGtCQUFrQiwyQkFBMkIsY0FBYyx1QkFBdUIsV0FBVyxtQkFBbUIsMEJBQTBCLHFEQUFxRCxLQUFLLGtCQUFrQixvQkFBb0IseUJBQXlCLDhCQUE4QixtQkFBbUIseUNBQXlDLGFBQWEseURBQXlELFNBQVMsb0RBQW9ELHdCQUF3QixpQ0FBaUMsb0JBQW9CLHlCQUF5QixvQkFBb0IsZ0JBQWdCLHNCQUFzQixXQUFXLFNBQVMsT0FBTywwQ0FBMEMsYUFBYSx5REFBeUQsU0FBUyxvREFBb0Qsd0JBQXdCLGlDQUFpQyxvQkFBb0IsdUJBQXVCLFNBQVMsT0FBTyxLQUFLLHlCQUF5Qix3QkFBd0Isd0JBQXdCLEtBQUssR0FBRyxnREFBZ0QsbUJBQW1CLHlCQUF5Qix3QkFBd0IsT0FBTyxvQkFBb0Isa0JBQWtCLCtCQUErQiw2Q0FBNkMsd0RBQXdELHNCQUFzQixnQkFBZ0Isd0JBQXdCLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyxHQUFHLCtDQUErQyxtQkFBbUIsa0JBQWtCLCtDQUErQyxlQUFlLDBCQUEwQix5QkFBeUIsV0FBVywyQkFBMkIsZ0JBQWdCLGdDQUFnQyxhQUFhLDhCQUE4Qix5QkFBeUIsV0FBVyxTQUFTLE9BQU8sS0FBSyxHQUFHLGtCQUFrQixrQkFBa0IsNEJBQTRCLHdCQUF3QixrQkFBa0IscUJBQXFCLHVCQUF1QixHQUFHLG9CQUFvQixrQkFBa0IsZUFBZSxrQkFBa0IsZUFBZSxvQkFBb0IsNkJBQTZCLGdCQUFnQixZQUFZLDhCQUE4QixPQUFPLEtBQUssY0FBYyxtQkFBbUIsMEJBQTBCLHFEQUFxRCxLQUFLLEdBQUcsNkVBQTZFLG1CQUFtQixnQkFBZ0IsbUJBQW1CLDRCQUE0Qix1QkFBdUIsVUFBVSxLQUFLLEdBQUcsK0NBQStDLG1CQUFtQiw2QkFBNkIseUJBQXlCLGdCQUFnQix5QkFBeUIsb0JBQW9CLE9BQU8sS0FBSyxHQUFHLCtDQUErQyxtQkFBbUIsY0FBYyxxQkFBcUIsT0FBTyxLQUFLLEdBQUcsaUJBQWlCLGtCQUFrQixjQUFjLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdCQUFnQixlQUFlLHFCQUFxQixzQkFBc0IsOEJBQThCLE9BQU8sbUJBQW1CLHNCQUFzQiwrQkFBK0IsNEJBQTRCLHFCQUFxQiw0QkFBNEIsb0JBQW9CLE9BQU8sS0FBSyxHQUFHLDZFQUE2RSxnQkFBZ0IsY0FBYywrQkFBK0IsZUFBZSwyQkFBMkIsdUJBQXVCLHdCQUF3QixTQUFTLG1CQUFtQix1QkFBdUIsU0FBUyxPQUFPLEtBQUssR0FBRywrQ0FBK0MsZ0JBQWdCLGNBQWMsZUFBZSxzQkFBc0Isd0JBQXdCLFNBQVMsT0FBTyxLQUFLLEdBQUcsaUJBQWlCLGtCQUFrQiwyQkFBMkIsY0FBYyxxQkFBcUIsb0JBQW9CLG1CQUFtQixnQkFBZ0IsS0FBSyxnQkFBZ0Isb0JBQW9CLG1DQUFtQyxzQkFBc0IsMkNBQTJDLGtCQUFrQixPQUFPLEtBQUssZUFBZSxtQkFBbUIsb0JBQW9CLHVCQUF1QixxQkFBcUIsMkJBQTJCLHNCQUFzQixnQ0FBZ0MsOEJBQThCLHlCQUF5Qix5QkFBeUIsdURBQXVELG1CQUFtQixpQ0FBaUMsMERBQTBELDBCQUEwQixtQ0FBbUMsU0FBUyxPQUFPLGdCQUFnQixzQkFBc0IsdUNBQXVDLDRCQUE0Qiw2QkFBNkIsa0JBQWtCLG9CQUFvQixxQkFBcUIsMkNBQTJDLHFCQUFxQixvQ0FBb0MsZ0JBQWdCLHNCQUFzQixXQUFXLGdCQUFnQiwwQkFBMEIsV0FBVyxTQUFTLG9DQUFvQyxnQkFBZ0IsMEJBQTBCLFdBQVcsZ0JBQWdCLHdCQUF3QiwwQkFBMEIsV0FBVyxTQUFTLHdCQUF3QixrQ0FBa0MsMkJBQTJCLGdDQUFnQywrQkFBK0IseUJBQXlCLHlCQUF5QixXQUFXLDJDQUEyQyxrQkFBa0IsNEJBQTRCLDJCQUEyQiwyQkFBMkIsYUFBYSxrQkFBa0IsZ0NBQWdDLDRCQUE0Qix5Q0FBeUMsYUFBYSxXQUFXLDJDQUEyQyxnQkFBZ0IsZ0NBQWdDLGFBQWEsbUJBQW1CLDJCQUEyQiwyQkFBMkIsYUFBYSxXQUFXLFNBQVMsT0FBTyxLQUFLLEdBQUcsOEVBQThFLGdCQUFnQixnQkFBZ0IscUNBQXFDLHlDQUF5QyxTQUFTLE9BQU8saUJBQWlCLHFCQUFxQiwwQkFBMEIsMkJBQTJCLFNBQVMsT0FBTyxLQUFLLEdBQUcsK0NBQStDLGdCQUFnQixnQkFBZ0IscUNBQXFDLHFDQUFxQyxTQUFTLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUM5bWxDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBaUo7QUFDako7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywySEFBTzs7OztBQUkyRjtBQUNuSCxPQUFPLGlFQUFlLDJIQUFPLElBQUksa0lBQWMsR0FBRyxrSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjBEO0FBQ2dCO0FBQ25COztBQUV4QztBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLGtFQUFnQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLDBEQUFRO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyx3REFBTztBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkU0RTs7QUFFN0Q7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbUVBQWlCO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0M4RDtBQUNwQzs7QUFFWDtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsMERBQVk7QUFDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpREFBSTtBQUNSLEdBQUc7O0FBRUg7QUFDQSxJQUFJLGlEQUFJO0FBQ1IsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUM4RjtBQUNEO0FBQ2hCO0FBQ0U7QUFDYjs7QUFFbEU7QUFDOEQ7QUFDQTtBQUNGO0FBQ0k7QUFDRjtBQUNBO0FBQ0U7QUFDTjtBQUNJO0FBQ0Y7QUFDQTtBQUNNOztBQUVuRDtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLHlEQUFhOztBQUU1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQix5REFBYTs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsd0RBQVk7O0FBRTFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLDBEQUFjOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLHlEQUFhOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLDBEQUFhOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkRBQWM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsd0RBQVc7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsMERBQWE7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIseURBQVk7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIseURBQVk7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsNERBQWU7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLDRFQUEwQjs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QywyRUFBMEI7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsbUVBQWtCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLG9FQUFtQjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQiw2REFBYTs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hVQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWE7O0FBRWdCOztBQUVVO0FBQ0Q7QUFDTjtBQUNBOztBQUVvQjtBQUNTOztBQUU3RCx1REFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBUTtBQUM1QjtBQUNBLG9CQUFvQix1REFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDJEQUFhO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksdURBQUk7QUFDUjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLElBQUksdURBQUk7QUFDUjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLElBQUksMkRBQU87QUFDWDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLElBQUksMERBQU87QUFDWDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyxtREFBSTtBQUN0QyxrQ0FBa0MsbURBQUk7QUFDdEMscUNBQXFDLHVEQUFPO0FBQzVDLHFDQUFxQyxzREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtc3VzaGltYS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc3VzaGltYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zdXNoaW1hLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zdXNoaW1hLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXN1c2hpbWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zdXNoaW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXN1c2hpbWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zdXNoaW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc3VzaGltYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc3VzaGltYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc3VzaGltYS8uL3NyYy9qcy9wYWdlcy9hYm91dC11cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXN1c2hpbWEvLi9zcmMvanMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXN1c2hpbWEvLi9zcmMvanMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXN1c2hpbWEvLi9zcmMvanMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXN1c2hpbWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zdXNoaW1hL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtc3VzaGltYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zdXNoaW1hL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zdXNoaW1hL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zdXNoaW1hL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zdXNoaW1hL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtc3VzaGltYS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1zdXNoaW1hLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWNsb25pY2EmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkFjbG9uaWNhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxufVxcblxcbi5tYWluLWhvbWUge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcbi5tYWluLWhvbWVfX2N0YS1idG4tLW9mZmVyLCAubWFpbi1ob21lX19jdGEtYnRuLS1tZW51IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1haW4tbWVudV9fc3VzaGktYnRuLCAubWFpbi1tZW51X19iZXZlcmFnZXMtYnRuIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5uYXZfX2J1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubmF2X19tb2JpbGVfX2J0biB7XFxuICBmb250LWZhbWlseTogXFxcIkFjbG9uaWNhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcXG59XFxuXFxuYnV0dG9uOm5vdCgubmF2X19tb2JpbGVfX2J0bikge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdl9fYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCAjZmQ0OTFiO1xcbiAgbWluLXdpZHRoOiAxNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG4ubmF2X19idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkNDkxYjtcXG59XFxuXFxuLm1haW4taG9tZV9fY3RhLWJ0bi0tb2ZmZXIsIC5tYWluLWhvbWVfX2N0YS1idG4tLW1lbnUge1xcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZkNDkxYjtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG4ubWFpbi1ob21lX19jdGEtYnRuLS1vZmZlcjpob3ZlciwgLm1haW4taG9tZV9fY3RhLWJ0bi0tbWVudTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ0OTFiO1xcbn1cXG5cXG4ubWFpbi1tZW51X19zdXNoaS1idG4sIC5tYWluLW1lbnVfX2JldmVyYWdlcy1idG4ge1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgd2lkdGg6IDEzcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZkNDkxYjtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG4ubWFpbi1tZW51X19zdXNoaS1idG46aG92ZXIsIC5tYWluLW1lbnVfX2JldmVyYWdlcy1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkNDkxYjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG4uZm9vdGVyX19jb250ZW50LTEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZvb3Rlcl9fY29udGVudC0xIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5mb290ZXIgLmxvZ28ge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGhlaWdodDogMTByZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDY1cHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG4gIC5mb290ZXJfX2NvbnRlbnQtMSB7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG59XFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbn1cXG4uaGVhZGVyIC5sb2dvIHtcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIGhlaWdodDogMTZyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyNSUpO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XFxufVxcbi5uYXZfX2Rlc2t0b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMCA1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG4gIGhlaWdodDogMTByZW07XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ubmF2X19sZWZ0LCAubmF2X19yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG4ubmF2X19tb2JpbGVfX2hhbWJ1cmdlci1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdl9fbW9iaWxlX19idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5uYXZfX2Rlc2t0b3Age1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm5hdl9fbW9iaWxlIHtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAubmF2X19tb2JpbGVfX2hhbWJ1cmdlci1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBoZWlnaHQ6IDQuM3JlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICByaWdodDogNSU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB9XFxuICAubmF2X19tb2JpbGVfX2hhbWJ1cmdlci1taWQtbGF5ZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG4gIC5uYXZfX21vYmlsZV9faGFtYnVyZ2VyLW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMi41JSk7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTVweCAyMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB9XFxuICAubmF2X19tb2JpbGVfX2J0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtaW4taGVpZ2h0OiAyNSU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggMjZweCAxcHggLTI0cHggI2ZkNDkxYjtcXG4gIH1cXG4gIC5uYXZfX21vYmlsZV9fYnRuOmxhc3QtY2hpbGQge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgfVxcbn1cXG4ubWFpbi1hYm91dHVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTV2dztcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICBtYXJnaW46IDEycmVtIGF1dG87XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA5cmVtO1xcbiAgcGFkZGluZzogNHJlbSAxMHZ3O1xcbn1cXG4ubWFpbi1hYm91dHVzIGltZyB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1haW4tYWJvdXR1c19fc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDE0LjVyZW07XFxufVxcbi5tYWluLWFib3V0dXNfX3NlY3Rpb246bnRoLWNoaWxkKDIpIGltZyB7XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWFpbi1hYm91dHVzX19zZWN0aW9uOm50aC1jaGlsZCgyKSA6bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIG9yZGVyOiAtMTtcXG59XFxuLm1haW4tYWJvdXR1c19fc2VjdGlvbjpudGgtY2hpbGQoMikgOmxhc3QtY2hpbGQgaDQge1xcbiAgb3JkZXI6IC0xO1xcbn1cXG4ubWFpbi1hYm91dHVzX19zZWN0aW9uOm50aC1jaGlsZCgzKSBpbWcge1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1haW4tYWJvdXR1c19fc2VjdGlvbjpudGgtY2hpbGQoMykgOmxhc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICB3aWR0aDogMzUwcHg7XFxufVxcbi5tYWluLWFib3V0dXNfX3Jlc3RhdXJhbnQtaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDYwcmVtO1xcbiAgbWluLXdpZHRoOiAxMDByZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAubWFpbi1hYm91dHVzX19yZXN0YXVyYW50LWltZyB7XFxuICAgIG1pbi13aWR0aDogOTB2dztcXG4gIH1cXG4gIC5tYWluLWFib3V0dXNfX3NlY3Rpb24ge1xcbiAgICBnYXA6IDVyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubWFpbi1hYm91dHVzX19zZWN0aW9uOm50aC1jaGlsZCgzKSA6bGFzdC1jaGlsZCB7XFxuICAgIG9yZGVyOiAtMTtcXG4gIH1cXG4gIC5tYWluLWFib3V0dXNfX3NlY3Rpb246bnRoLWNoaWxkKDMpIDpsYXN0LWNoaWxkIGg0IHtcXG4gICAgb3JkZXI6IC0yO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAubWFpbi1hYm91dHVzX19zZWN0aW9uOm50aC1jaGlsZCgzKSBpbWcsIC5tYWluLWFib3V0dXNfX3NlY3Rpb246bnRoLWNoaWxkKDIpIGltZyB7XFxuICAgIGhlaWdodDogMzByZW07XFxuICAgIHdpZHRoOiAzNnJlbTtcXG4gIH1cXG4gIC5tYWluLWFib3V0dXNfX3NlY3Rpb246bnRoLWNoaWxkKDMpIDpsYXN0LWNoaWxkLCAubWFpbi1hYm91dHVzX19zZWN0aW9uOm50aC1jaGlsZCgyKSA6bGFzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuICAubWFpbi1hYm91dHVzX19zZWN0aW9uOm50aC1jaGlsZCgzKSA6bGFzdC1jaGlsZCBoNCwgLm1haW4tYWJvdXR1c19fc2VjdGlvbjpudGgtY2hpbGQoMikgOmxhc3QtY2hpbGQgaDQge1xcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXG4gIH1cXG59XFxuLm1haW4tY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDk1dnc7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgbWFyZ2luOiAxMnJlbSBhdXRvO1xcbiAgZ2FwOiAxNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tYWluLWNvbnRhY3RfX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxufVxcbi5tYWluLWNvbnRhY3RfX2luZm8gaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbn1cXG4ubWFpbi1jb250YWN0X19pbWcge1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5tYWluLWNvbnRhY3Qge1xcbiAgICBnYXA6IDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcXG4gIC5tYWluLWNvbnRhY3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAubWFpbi1jb250YWN0X19pbWcge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICB3aWR0aDogODB2dztcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLm1haW4tY29udGFjdF9faW1nIHtcXG4gICAgd2lkdGg6IDM2cmVtO1xcbiAgfVxcbn1cXG4ubWFpbi1ob21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTV2dztcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICBtYXJnaW46IDEycmVtIGF1dG87XFxufVxcbi5tYWluLWhvbWVfX2N0YSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cmVtO1xcbn1cXG4ubWFpbi1ob21lX19jdGEtaW1nIHtcXG4gIHdpZHRoOiA0OHJlbTtcXG4gIGhlaWdodDogNDhyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbn1cXG4ubWFpbi1ob21lX19jdGEtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzlyZW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgZ2FwOiAxLjRyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTIwcHgpIHtcXG4gIC5tYWluLWhvbWVfX2N0YSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubWFpbi1ob21lX19jdGEtaW1nIHtcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgd2lkdGg6IDQwcmVtO1xcbiAgICBoZWlnaHQ6IDQwcmVtO1xcbiAgfVxcbiAgLm1haW4taG9tZV9fY3RhLWNvbnRlbnQge1xcbiAgICB3aWR0aDogMzByZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5tYWluLWhvbWVfX2N0YS1pbWcge1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgaGVpZ2h0OiAzNXJlbTtcXG4gIH1cXG59XFxuLm1haW4tbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDk1dnc7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgbWFyZ2luOiAxMnJlbSBhdXRvO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM3JlbTtcXG59XFxuLm1haW4tbWVudV9fY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG4ubWFpbi1tZW51X19pdGVtcyB7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG4ubWFpbi1tZW51X19pdGVtcy1zdXNoaSwgLm1haW4tbWVudV9faXRlbXMtYmV2ZXJhZ2VzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ2FwOiA0cmVtO1xcbn1cXG4ubWFpbi1tZW51X19pdGVtIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogMzkwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG4ubWFpbi1tZW51X19pdGVtLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWFpbi1tZW51X19pdGVtLWNvbnRhaW5lcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxufVxcbi5tYWluLW1lbnVfX2l0ZW0taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5Aa2V5ZnJhbWVzIGluZm9BbmltRW50ZXIge1xcbiAgZnJvbSB7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBpbmZvQW5pbUxlYXZlIHtcXG4gIGZyb20ge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLm1haW4tbWVudV9faXRlbS1pbmZvIC5pdGVtLWluZm9fX25hbWUsIC5tYWluLW1lbnVfX2l0ZW0taW5mbyAuaXRlbS1pbmZvX19wcmljZSB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbkBrZXlmcmFtZXMgaW5mb0FuaW1DaGlsZEVudGVyIHtcXG4gIGZyb20ge1xcbiAgICBwYWRkaW5nOiAwcmVtO1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZDQ5MWI7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgaW5mb0FuaW1DaGlsZExlYXZlIHtcXG4gIDAlIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICB9XFxuICA4MCUge1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5tYWluLW1lbnVfX2l0ZW1zLXN1c2hpLCAubWFpbi1tZW51X19pdGVtcy1iZXZlcmFnZXMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYwcHgpIHtcXG4gIC5tYWluLW1lbnVfX2l0ZW1zLXN1c2hpLCAubWFpbi1tZW51X19pdGVtcy1iZXZlcmFnZXMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9iYXNlL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9iYXNlL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYmFzZS9fZ2VuZXJhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dC9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbGF5b3V0L19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9sYXlvdXQvX25hdmlnYXRpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9wYWdlcy9fYWJvdXQtdXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9hYnN0cmFjdHMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3BhZ2VzL19jb250YWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcGFnZXMvX2hvbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9wYWdlcy9fbWVudS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBQ1RBO0VBQ0UsbUNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QURZRjs7QUNUQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBRFlGOztBQ1RBO0VBQ0UsZUFBQTtB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O0FZbFlRO0VBRUUsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBWm1ZVjtBWWhZUTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0Vaa1lWO0VZL1hRO0lBQ0UsaUJBQUE7SUFDQSxhQUFBO0lBQ0EseUJBQUE7RVppWVY7QUFDRjtBWTlYUTtFQUNFO0lBQ0UsaUJBQUE7RVpnWVY7RVk3WFE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFWitYVjtBQUNGOztBWXRYQTtFQUdNO0lBRUUsOEJBQUE7RVpzWE47QUFDRjtBWTFXQTtFQUdNO0lBRUUsMEJBQUE7RVp5V047QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFjbG9uaWNhJmRpc3BsYXk9c3dhcFxcXCIpO1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBY2xvbmljYVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG4ubWFpbi1ob21lIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG4ubWFpbi1ob21lX19jdGEtYnRuLS1vZmZlciwgLm1haW4taG9tZV9fY3RhLWJ0bi0tbWVudSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tYWluLW1lbnVfX3N1c2hpLWJ0biwgLm1haW4tbWVudV9fYmV2ZXJhZ2VzLWJ0biB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubmF2X19idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm5hdl9fbW9iaWxlX19idG4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBY2xvbmljYVxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XFxufVxcblxcbmJ1dHRvbjpub3QoLm5hdl9fbW9iaWxlX19idG4pIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXZfX2J1dHRvbiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZkNDkxYjtcXG4gIG1pbi13aWR0aDogMTVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuLm5hdl9fYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDQ5MWI7XFxufVxcblxcbi5tYWluLWhvbWVfX2N0YS1idG4tLW9mZmVyLCAubWFpbi1ob21lX19jdGEtYnRuLS1tZW51IHtcXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZDQ5MWI7XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuLm1haW4taG9tZV9fY3RhLWJ0bi0tb2ZmZXI6aG92ZXIsIC5tYWluLWhvbWVfX2N0YS1idG4tLW1lbnU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkNDkxYjtcXG59XFxuXFxuLm1haW4tbWVudV9fc3VzaGktYnRuLCAubWFpbi1tZW51X19iZXZlcmFnZXMtYnRuIHtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gIHdpZHRoOiAxM3JlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZDQ5MWI7XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuLm1haW4tbWVudV9fc3VzaGktYnRuOmhvdmVyLCAubWFpbi1tZW51X19iZXZlcmFnZXMtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDQ5MWI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuLmZvb3Rlcl9fY29udGVudC0xIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb290ZXJfX2NvbnRlbnQtMSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uZm9vdGVyIC5sb2dvIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB3aWR0aDogMTByZW07XFxuICBoZWlnaHQ6IDEwcmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2NXB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuICAuZm9vdGVyX19jb250ZW50LTEge1xcbiAgICBnYXA6IDFyZW07XFxuICB9XFxufVxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG59XFxuLmhlYWRlciAubG9nbyB7XFxuICB3aWR0aDogMTZyZW07XFxuICBoZWlnaHQ6IDE2cmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMjUlKTtcXG59XFxuXFxuLm5hdiB7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xcbn1cXG4ubmF2X19kZXNrdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDAgNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLm5hdl9fbGVmdCwgLm5hdl9fcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuLm5hdl9fbW9iaWxlX19oYW1idXJnZXItYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5uYXZfX21vYmlsZV9fYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAubmF2X19kZXNrdG9wIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5uYXZfX21vYmlsZSB7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgLm5hdl9fbW9iaWxlX19oYW1idXJnZXItYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgaGVpZ2h0OiA0LjNyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmlnaHQ6IDUlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgfVxcbiAgLm5hdl9fbW9iaWxlX19oYW1idXJnZXItbWlkLWxheWVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuICAubmF2X19tb2JpbGVfX2hhbWJ1cmdlci1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjIuNSUpO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDE1cHggMjBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgfVxcbiAgLm5hdl9fbW9iaWxlX19idG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWluLWhlaWdodDogMjUlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDI2cHggMXB4IC0yNHB4ICNmZDQ5MWI7XFxuICB9XFxuICAubmF2X19tb2JpbGVfX2J0bjpsYXN0LWNoaWxkIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIH1cXG59XFxuLm1haW4tYWJvdXR1cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDk1dnc7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgbWFyZ2luOiAxMnJlbSBhdXRvO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOXJlbTtcXG4gIHBhZGRpbmc6IDRyZW0gMTB2dztcXG59XFxuLm1haW4tYWJvdXR1cyBpbWcge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tYWluLWFib3V0dXNfX3NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxNC41cmVtO1xcbn1cXG4ubWFpbi1hYm91dHVzX19zZWN0aW9uOm50aC1jaGlsZCgyKSBpbWcge1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1haW4tYWJvdXR1c19fc2VjdGlvbjpudGgtY2hpbGQoMikgOmxhc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICB3aWR0aDogMzUwcHg7XFxuICBvcmRlcjogLTE7XFxufVxcbi5tYWluLWFib3V0dXNfX3NlY3Rpb246bnRoLWNoaWxkKDIpIDpsYXN0LWNoaWxkIGg0IHtcXG4gIG9yZGVyOiAtMTtcXG59XFxuLm1haW4tYWJvdXR1c19fc2VjdGlvbjpudGgtY2hpbGQoMykgaW1nIHtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tYWluLWFib3V0dXNfX3NlY3Rpb246bnRoLWNoaWxkKDMpIDpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG4ubWFpbi1hYm91dHVzX19yZXN0YXVyYW50LWltZyB7XFxuICBtYXgtaGVpZ2h0OiA2MHJlbTtcXG4gIG1pbi13aWR0aDogMTAwcmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLm1haW4tYWJvdXR1c19fcmVzdGF1cmFudC1pbWcge1xcbiAgICBtaW4td2lkdGg6IDkwdnc7XFxuICB9XFxuICAubWFpbi1hYm91dHVzX19zZWN0aW9uIHtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1haW4tYWJvdXR1c19fc2VjdGlvbjpudGgtY2hpbGQoMykgOmxhc3QtY2hpbGQge1xcbiAgICBvcmRlcjogLTE7XFxuICB9XFxuICAubWFpbi1hYm91dHVzX19zZWN0aW9uOm50aC1jaGlsZCgzKSA6bGFzdC1jaGlsZCBoNCB7XFxuICAgIG9yZGVyOiAtMjtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLm1haW4tYWJvdXR1c19fc2VjdGlvbjpudGgtY2hpbGQoMykgaW1nLCAubWFpbi1hYm91dHVzX19zZWN0aW9uOm50aC1jaGlsZCgyKSBpbWcge1xcbiAgICBoZWlnaHQ6IDMwcmVtO1xcbiAgICB3aWR0aDogMzZyZW07XFxuICB9XFxuICAubWFpbi1hYm91dHVzX19zZWN0aW9uOm50aC1jaGlsZCgzKSA6bGFzdC1jaGlsZCwgLm1haW4tYWJvdXR1c19fc2VjdGlvbjpudGgtY2hpbGQoMikgOmxhc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbiAgLm1haW4tYWJvdXR1c19fc2VjdGlvbjpudGgtY2hpbGQoMykgOmxhc3QtY2hpbGQgaDQsIC5tYWluLWFib3V0dXNfX3NlY3Rpb246bnRoLWNoaWxkKDIpIDpsYXN0LWNoaWxkIGg0IHtcXG4gICAgZm9udC1zaXplOiAyLjRyZW07XFxuICB9XFxufVxcbi5tYWluLWNvbnRhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5NXZ3O1xcbiAgbWluLWhlaWdodDogODB2aDtcXG4gIG1hcmdpbjogMTJyZW0gYXV0bztcXG4gIGdhcDogMTVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubWFpbi1jb250YWN0X19pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG4ubWFpbi1jb250YWN0X19pbmZvIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG59XFxuLm1haW4tY29udGFjdF9faW1nIHtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAubWFpbi1jb250YWN0IHtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MHB4KSB7XFxuICAubWFpbi1jb250YWN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLm1haW4tY29udGFjdF9faW1nIHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5tYWluLWNvbnRhY3RfX2ltZyB7XFxuICAgIHdpZHRoOiAzNnJlbTtcXG4gIH1cXG59XFxuLm1haW4taG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDk1dnc7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgbWFyZ2luOiAxMnJlbSBhdXRvO1xcbn1cXG4ubWFpbi1ob21lX19jdGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHJlbTtcXG59XFxuLm1haW4taG9tZV9fY3RhLWltZyB7XFxuICB3aWR0aDogNDhyZW07XFxuICBoZWlnaHQ6IDQ4cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG59XFxuLm1haW4taG9tZV9fY3RhLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDM5cmVtO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGdhcDogMS40cmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyMHB4KSB7XFxuICAubWFpbi1ob21lX19jdGEge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1haW4taG9tZV9fY3RhLWltZyB7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgIHdpZHRoOiA0MHJlbTtcXG4gICAgaGVpZ2h0OiA0MHJlbTtcXG4gIH1cXG4gIC5tYWluLWhvbWVfX2N0YS1jb250ZW50IHtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAubWFpbi1ob21lX19jdGEtaW1nIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogMzVyZW07XFxuICB9XFxufVxcbi5tYWluLW1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5NXZ3O1xcbiAgbWluLWhlaWdodDogODB2aDtcXG4gIG1hcmdpbjogMTJyZW0gYXV0bztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxufVxcbi5tYWluLW1lbnVfX2NhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMnJlbTtcXG4gIGdhcDogMnJlbTtcXG59XFxuLm1haW4tbWVudV9faXRlbXMge1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuLm1haW4tbWVudV9faXRlbXMtc3VzaGksIC5tYWluLW1lbnVfX2l0ZW1zLWJldmVyYWdlcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdhcDogNHJlbTtcXG59XFxuLm1haW4tbWVudV9faXRlbSB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDM5MHB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuLm1haW4tbWVudV9faXRlbS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1haW4tbWVudV9faXRlbS1jb250YWluZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xcbn1cXG4ubWFpbi1tZW51X19pdGVtLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuQGtleWZyYW1lcyBpbmZvQW5pbUVudGVyIHtcXG4gIGZyb20ge1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgaW5mb0FuaW1MZWF2ZSB7XFxuICBmcm9tIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5tYWluLW1lbnVfX2l0ZW0taW5mbyAuaXRlbS1pbmZvX19uYW1lLCAubWFpbi1tZW51X19pdGVtLWluZm8gLml0ZW0taW5mb19fcHJpY2Uge1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIGluZm9BbmltQ2hpbGRFbnRlciB7XFxuICBmcm9tIHtcXG4gICAgcGFkZGluZzogMHJlbTtcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuICB0byB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmQ0OTFiO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGluZm9BbmltQ2hpbGRMZWF2ZSB7XFxuICAwJSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAubWFpbi1tZW51X19pdGVtcy1zdXNoaSwgLm1haW4tbWVudV9faXRlbXMtYmV2ZXJhZ2VzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XFxuICAubWFpbi1tZW51X19pdGVtcy1zdXNoaSwgLm1haW4tbWVudV9faXRlbXMtYmV2ZXJhZ2VzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVwiLFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWNsb25pY2EmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkFjbG9uaWNhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxufVxcblxcbi5tYWluLWhvbWUge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuXFxuICAmX19jdGEtYnRuLS1vZmZlcixcXG4gICZfX2N0YS1idG4tLW1lbnUge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG4ubWFpbi1tZW51IHtcXG4gICZfX3N1c2hpLWJ0bixcXG4gICZfX2JldmVyYWdlcy1idG4ge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG59XFxuXFxuLm5hdl9fYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5uYXZfX21vYmlsZV9fYnRuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWNsb25pY2FcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cIixcIiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xcbn1cXG5cIixcIi8vIENPTE9SU1xcblxcbiRiYWNrZ3JvdW5kOiAjMmIyYjJiO1xcbiRiYWNrZ3JvdW5kLXR3bzogIzIzMjMyMztcXG5cXG4kcHJpbWFyeTogI2ZkNDkxYjtcXG5cXG4kcHJpbWFyeS1jb250YWluZXI6ICMyYzA5MDA7XFxuXCIsXCJidXR0b246bm90KC5uYXZfX21vYmlsZV9fYnRuKSB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2X19idXR0b24ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICRwcmltYXJ5O1xcbiAgbWluLXdpZHRoOiAxNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcbiAgfVxcbn1cXG5cXG4ubWFpbi1ob21lIHtcXG4gICZfX2N0YSB7XFxuICAgICYtYnRuLS1vZmZlcixcXG4gICAgJi1idG4tLW1lbnUge1xcbiAgICAgIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAkcHJpbWFyeTtcXG5cXG4gICAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5tYWluLW1lbnUge1xcbiAgJl9fc3VzaGktYnRuLFxcbiAgJl9fYmV2ZXJhZ2VzLWJ0biB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gICAgd2lkdGg6IDEzcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC10d287XFxuICBwYWRkaW5nOiAycmVtO1xcblxcbiAgJl9fY29udGVudC0xIHtcXG4gICAgYSB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICB9XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmxvZ28ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2NXB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxuICAgICZfX2NvbnRlbnQtMSB7XFxuICAgICAgZ2FwOiAxcmVtO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLmhlYWRlciB7XFxuICBoZWlnaHQ6IDEwcmVtO1xcblxcbiAgLmxvZ28ge1xcbiAgICB3aWR0aDogMTZyZW07XFxuICAgIGhlaWdodDogMTZyZW07XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyNSUpO1xcbiAgfVxcbn1cXG5cIixcIi5uYXYge1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtdHdvO1xcblxcbiAgJl9fZGVza3RvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwIDVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG5cXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIH1cXG5cXG4gICZfX2xlZnQsXFxuICAmX19yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gIH1cXG5cXG4gICZfX21vYmlsZSB7XFxuICAgICZfX2hhbWJ1cmdlci1idXR0b24ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgJl9fYnRuIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vKioqIFBIT05FICYgVEFCTEVUICoqKi8vXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5uYXYge1xcbiAgICAmX19kZXNrdG9wIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICZfX21vYmlsZSB7XFxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAmX19oYW1idXJnZXItYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGhlaWdodDogNC4zcmVtO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgcmlnaHQ6IDUlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgfVxcblxcbiAgICAgICZfX2hhbWJ1cmdlci1taWQtbGF5ZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICAgb3BhY2l0eTogMC42O1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICB9XFxuXFxuICAgICAgJl9faGFtYnVyZ2VyLW1lbnUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiA3MHZoO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMi41JSk7XFxuICAgICAgICB6LWluZGV4OiAyO1xcblxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTVweCAyMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgfVxcblxcbiAgICAgIC8vQ0FOJ1QgRklHVVJFIE9VVCBXSFkgQlVUVE9OIFdPTidUIERJU1BMQVkgT04gX2J1dHRvbnMuc2Nzc1xcbiAgICAgICZfX2J0biB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1JTtcXG5cXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMjZweCAxcHggLTI0cHggJHByaW1hcnk7XFxuXFxuICAgICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi5tYWluLWFib3V0dXMge1xcbiAgQGluY2x1ZGUgbWFpbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDlyZW07XFxuICBwYWRkaW5nOiA0cmVtIDEwdnc7XFxuXFxuICBpbWcge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB9XFxuXFxuICAmX19zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLy8gZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNC41cmVtO1xcblxcbiAgICAvL3NlY3Rpb24gMlxcbiAgICAmOm50aC1jaGlsZCgyKSB7XFxuICAgICAgaW1nIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgICAgfVxcbiAgICAgIC8vcGFyYWdyYXBoIGNvbnRhaW5lclxcbiAgICAgICYgOmxhc3QtY2hpbGQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDJyZW07XFxuXFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICBvcmRlcjogLTE7XFxuXFxuICAgICAgICBoNCB7XFxuICAgICAgICAgIG9yZGVyOiAtMTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gc2VjdGlvbiAzXFxuICAgICY6bnRoLWNoaWxkKDMpIHtcXG4gICAgICBpbWcge1xcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgICB9XFxuICAgICAgLy9wYXJhZ3JhcGggY29udGFpbmVyXFxuICAgICAgJiA6bGFzdC1jaGlsZCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX3Jlc3RhdXJhbnQtaW1nIHtcXG4gICAgbWF4LWhlaWdodDogNjByZW07XFxuICAgIG1pbi13aWR0aDogMTAwcmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLm1haW4tYWJvdXR1cyB7XFxuICAgICZfX3Jlc3RhdXJhbnQtaW1nIHtcXG4gICAgICBtaW4td2lkdGg6IDkwdnc7XFxuICAgIH1cXG5cXG4gICAgJl9fc2VjdGlvbiB7XFxuICAgICAgZ2FwOiA1cmVtO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgLy9zZWN0aW9uIDNcXG4gICAgICAmOm50aC1jaGlsZCgzKSB7XFxuICAgICAgICAvL3BhcmFncmFwaCBjb250YWluZXJcXG4gICAgICAgICYgOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICBvcmRlcjogLTE7XFxuICAgICAgICAgIGg0IHtcXG4gICAgICAgICAgICBvcmRlcjogLTI7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLm1haW4tYWJvdXR1cyB7XFxuICAgICZfX3NlY3Rpb24ge1xcbiAgICAgICY6bnRoLWNoaWxkKDMpLFxcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgIGhlaWdodDogMzByZW07XFxuICAgICAgICAgIHdpZHRoOiAzNnJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICBoNCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAbWl4aW4gbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgd2lkdGg6IDk1dnc7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgbWFyZ2luOiAxMnJlbSBhdXRvO1xcbn1cXG5cIixcIi5tYWluLWNvbnRhY3Qge1xcbiAgQGluY2x1ZGUgbWFpbjtcXG4gIGdhcDogMTVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgJl9faW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3JlbTtcXG5cXG4gICAgaDMge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9faW1nIHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgfVxcbn1cXG5cXG4vLyoqKiBQSE9ORSAmIFRBQkxFVCAqKiovL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5tYWluLWNvbnRhY3Qge1xcbiAgICBnYXA6IDNyZW07XFxuXFxuICAgIC8vICZfX2ltZyB7XFxuICAgIC8vICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgLy8gICB3aWR0aDogOTB2dztcXG4gICAgLy8gfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MHB4KSB7XFxuICAubWFpbi1jb250YWN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAmX19pbWcge1xcbiAgICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgICAgd2lkdGg6IDgwdnc7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLm1haW4tY29udGFjdCB7XFxuICAgICZfX2ltZyB7XFxuICAgICAgd2lkdGg6IDM2cmVtO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLm1haW4taG9tZSB7XFxuICBAaW5jbHVkZSBtYWluO1xcblxcbiAgJl9fY3RhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHJlbTtcXG5cXG4gICAgJi1pbWcge1xcbiAgICAgIHdpZHRoOiA0OHJlbTtcXG4gICAgICBoZWlnaHQ6IDQ4cmVtO1xcblxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgIH1cXG5cXG4gICAgJi1jb250ZW50IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogMzlyZW07XFxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgICBnYXA6IDEuNHJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyoqKiBQSE9ORSAmIFRBQkxFVCAqKiovL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTIwcHgpIHtcXG4gIC5tYWluLWhvbWUge1xcbiAgICAmX19jdGEge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgJi1pbWcge1xcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgICAgIHdpZHRoOiA0MHJlbTtcXG4gICAgICAgIGhlaWdodDogNDByZW07XFxuICAgICAgfVxcbiAgICAgICYtY29udGVudCB7XFxuICAgICAgICB3aWR0aDogMzByZW07XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5tYWluLWhvbWUge1xcbiAgICAmX19jdGEge1xcbiAgICAgICYtaW1nIHtcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAzNXJlbTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIubWFpbi1tZW51IHtcXG4gIEBpbmNsdWRlIG1haW47XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcblxcbiAgJl9fY2F0ZWdvcmllcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcblxcbiAgJl9faXRlbXMge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcblxcbiAgICAmLXN1c2hpLFxcbiAgICAmLWJldmVyYWdlcyB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICAgIGdhcDogNHJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9faXRlbSB7XFxuICAgIHdpZHRoOiA0MjBweDtcXG4gICAgaGVpZ2h0OiAzOTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG5cXG4gICAgJi1jb250YWluZXIge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYtaW5mbyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDMpO1xcbiAgICAgIG9wYWNpdHk6IDAuNztcXG5cXG4gICAgICBAa2V5ZnJhbWVzIGluZm9BbmltRW50ZXIge1xcbiAgICAgICAgZnJvbSB7XFxuICAgICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRvIHtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgQGtleWZyYW1lcyBpbmZvQW5pbUxlYXZlIHtcXG4gICAgICAgIGZyb20ge1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdG8ge1xcbiAgICAgICAgICBoZWlnaHQ6IDBweDtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLml0ZW0taW5mb19fIHtcXG4gICAgICAgICZuYW1lLFxcbiAgICAgICAgJnByaWNlIHtcXG4gICAgICAgICAgbWFyZ2luOiAwIDFyZW07XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAa2V5ZnJhbWVzIGluZm9BbmltQ2hpbGRFbnRlciB7XFxuICAgICAgICAgIGZyb20ge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDByZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICB0byB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAkcHJpbWFyeTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgQGtleWZyYW1lcyBpbmZvQW5pbUNoaWxkTGVhdmUge1xcbiAgICAgICAgICAwJSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgODAlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8vKioqIFBIT05FICYgVEFCTEVUICoqKi8vXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5tYWluLW1lbnUge1xcbiAgICAmX19pdGVtcyB7XFxuICAgICAgJi1zdXNoaSxcXG4gICAgICAmLWJldmVyYWdlcyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2l0ZW0ge1xcbiAgICAgICYtY29udGFpbmVyIHtcXG4gICAgICAgIC8vIHdpZHRoOiAzOTBweDtcXG4gICAgICAgIC8vIGhlaWdodDogMzgwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYwcHgpIHtcXG4gIC5tYWluLW1lbnUge1xcbiAgICAmX19pdGVtcyB7XFxuICAgICAgJi1zdXNoaSxcXG4gICAgICAmLWJldmVyYWdlcyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBoZWFkQ2hlZiBmcm9tIFwiLi4vLi4vYXNzZXRzL2Fib3V0dXMvaGVhZC1jaGVmLmpwZ1wiO1xuaW1wb3J0IHJlc3RhdXJhbnRJbmRvb3IgZnJvbSBcIi4uLy4uL2Fzc2V0cy9hYm91dHVzL3Jlc3RhdXJhbnQtaW5kb29yLmpwZ1wiO1xuaW1wb3J0IHNlcnZpbmcgZnJvbSBcIi4uLy4uL2Fzc2V0cy9hYm91dHVzL3NlcnZpbmcuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0VXMoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3QgYWJvdXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0dXNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLWFib3V0dXNcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXR1c0NvbnRhaW5lcik7XG5cbiAgY29uc3Qgc2VjdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBzZWN0aW9uT25lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1hYm91dHVzX19zZWN0aW9uXCIpO1xuICBhYm91dHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb25PbmUpO1xuXG4gIGNvbnN0IHJlc3RhdXJhbnRJbmRvb3JJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICByZXN0YXVyYW50SW5kb29ySW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1hYm91dHVzX19yZXN0YXVyYW50LWltZ1wiKTtcbiAgcmVzdGF1cmFudEluZG9vckltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcmVzdGF1cmFudEluZG9vcik7XG4gIHNlY3Rpb25PbmUuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEluZG9vckltZyk7XG4gIC8vLy8vXG4gIGNvbnN0IHNlY3Rpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgc2VjdGlvblR3by5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tYWJvdXR1c19fc2VjdGlvblwiKTtcbiAgYWJvdXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uVHdvKTtcblxuICBjb25zdCBoZWFkQ2hlZkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGhlYWRDaGVmSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBoZWFkQ2hlZik7XG4gIHNlY3Rpb25Ud28uYXBwZW5kQ2hpbGQoaGVhZENoZWZJbWcpO1xuXG4gIGNvbnN0IHNUd29QYXJhZ3JhcGhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzZWN0aW9uVHdvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIHNlY3Rpb25Ud29UaXRsZS50ZXh0Q29udGVudCA9IFwiSGVhZCBDaGVmIFRzdW5ha2kgU29tYVwiO1xuXG4gIHNUd29QYXJhZ3JhcGhDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvblR3b1RpdGxlKTtcbiAgLy8gc1R3b1BhcmFncmFwaENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tYWJvdXR1c19fc2VjdGlvbi10d28tcFwiKTtcblxuICBjb25zdCBzZWN0aW9uVHdvUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHNlY3Rpb25Ud29QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgTWFlY2VuYXMgY29uc2VxdWF0IHRpbmNpZCB1bnQgb3JjaSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lYyB0cmlzdGlxdWUgc2VtLiBOdWxsYSBjdXJzdXMgZWxpdCBjb25kaW1lbnR1bSBtYXR0aXMgaW50ZXJkdW0uIE1hZWNlbmFzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXBpYnVzIHZlbCBlbmltIHV0IHByZXRpdW0uIFF1aXNxdWUgdWx0cmljZXMgcmlzdXMgZXUgZXJvcyBjb21tb2RvLCBldCBkaWN0dW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW0gdmVuZW5hdGlzLiBGdXNjZSB2dWxwdXRhdGUgcnV0cnVtIG1hdXJpcywgZXQgdmVzdGlidWx1bSBvZGlvIHJ1dHJ1bSB1dC4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyYXMgcG9ydHRpdG9yIHRlbGx1cyB0ZWxsdXMsIGV0IGFsaXF1YW0gbWFzc2EgaW50ZXJkdW0gcXVpcy5cbmA7XG4gIHNlY3Rpb25Ud28uYXBwZW5kQ2hpbGQoc1R3b1BhcmFncmFwaENvbnRhaW5lcik7XG4gIHNUd29QYXJhZ3JhcGhDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvblR3b1BhcmFncmFwaCk7XG5cbiAgLy8vLy9cbiAgY29uc3Qgc2VjdGlvblRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHNlY3Rpb25UaHJlZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tYWJvdXR1c19fc2VjdGlvblwiKTtcbiAgYWJvdXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uVGhyZWUpO1xuXG4gIGNvbnN0IHNlcnZpbmdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBzZXJ2aW5nSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzZXJ2aW5nKTtcbiAgc2VjdGlvblRocmVlLmFwcGVuZENoaWxkKHNlcnZpbmdJbWcpO1xuXG4gIGNvbnN0IHNUaHJlZVBhcmFncmFwaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3Qgc2VjdGlvblRocmVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIHNlY3Rpb25UaHJlZVRpdGxlLnRleHRDb250ZW50ID0gXCJBbWF6aW5nIHNlcnZpY2VcIjtcblxuICBzVGhyZWVQYXJhZ3JhcGhDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvblRocmVlVGl0bGUpO1xuXG4gIGNvbnN0IHNlY3Rpb25UaHJlZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzZWN0aW9uVGhyZWVQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgSW50ZWdlciBpbiBlbGl0IGxhY3VzLiBGdXNjZSB2ZWwgY29tbW9kbyBzYXBpZW4uIFByb2luIHVsdHJpY2llcyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0dGl0b3IgYW50ZSwgZXUgbW9sZXN0aWUgb2RpbyB2ZXN0aWJ1bHVtIG5vbi4gQWxpcXVhbSBwb3J0dGl0b3IgaW1wZXJkaWV0IGxlY3R1cyBzaXQgYW1ldCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pYnVzLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBNYWVjZW5hcyB2aXRhZSBjb21tb2RvIGV4LCB2aXRhZSBzdXNjaXBpdCBzYXBpZW4uIFBlbGxlbnRlc3F1ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWx2aW5hciBlcm9zIHF1aXMgbG9yZW0gY29uZ3VlLCBhdWN0b3Igc29kYWxlcyB0b3J0b3IgZXVpc21vZC4gQWVuZWFuIHBlbGxlbnRlc3F1ZSBsYW9yZWV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlY3R1cyB2ZWwgcG9ydGFcbmA7XG4gIHNlY3Rpb25UaHJlZS5hcHBlbmRDaGlsZChzVGhyZWVQYXJhZ3JhcGhDb250YWluZXIpO1xuICBzVGhyZWVQYXJhZ3JhcGhDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvblRocmVlUGFyYWdyYXBoKTtcbn1cbiIsImltcG9ydCByZXN0YXVyYW50T3V0ZG9vciBmcm9tIFwiLi4vLi4vYXNzZXRzL2NvbnRhY3QvcmVzdGF1cmFudC1vdXRkb29yLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1jb250YWN0XCIpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuXG4gIC8vIElNQUdFXG4gIGNvbnN0IHJlc3RhdXJhbnRPdXRzaWRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgcmVzdGF1cmFudE91dHNpZGVJbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLWNvbnRhY3RfX2ltZ1wiKTtcbiAgcmVzdGF1cmFudE91dHNpZGVJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHJlc3RhdXJhbnRPdXRkb29yKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50T3V0c2lkZUltZyk7XG5cbiAgLy8gQ09OVEFDVCBJTkZPXG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdEluZm8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLWNvbnRhY3RfX2luZm9cIik7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuXG4gIGNvbnN0IGFkZHJlc3NJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzc0luZm8pO1xuICBjb25zdCBhZGRyZXNzSW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBhZGRyZXNzSW5mb1RpdGxlLnRleHRDb250ZW50ID0gXCJBZHJlc2E6XCI7XG4gIGFkZHJlc3NJbmZvLmFwcGVuZENoaWxkKGFkZHJlc3NJbmZvVGl0bGUpO1xuICBjb25zdCBhZGRyZXNzSW5mb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWRkcmVzc0luZm9UZXh0LnRleHRDb250ZW50ID0gXCJCbGQuIEl1bGl1IE1hbml1IDI0LCBCdWN1cmVzdGlcIjtcbiAgYWRkcmVzc0luZm8uYXBwZW5kQ2hpbGQoYWRkcmVzc0luZm9UZXh0KTtcblxuICBjb25zdCBlbWFpbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChlbWFpbEluZm8pO1xuICBjb25zdCBlbWFpbEluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZW1haWxJbmZvVGl0bGUudGV4dENvbnRlbnQgPSBcIkVtYWlsOlwiO1xuICBlbWFpbEluZm8uYXBwZW5kQ2hpbGQoZW1haWxJbmZvVGl0bGUpO1xuICBjb25zdCBlbWFpbEluZm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVtYWlsSW5mb1RleHQudGV4dENvbnRlbnQgPSBcImNvbnRhY3RAc3VzaGltYS5jb21cIjtcbiAgZW1haWxJbmZvLmFwcGVuZENoaWxkKGVtYWlsSW5mb1RleHQpO1xuXG4gIGNvbnN0IG51bWJlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChudW1iZXJJbmZvKTtcbiAgY29uc3QgbnVtYmVySW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBudW1iZXJJbmZvVGl0bGUudGV4dENvbnRlbnQgPSBcIk51bWFyOlwiO1xuICBudW1iZXJJbmZvLmFwcGVuZENoaWxkKG51bWJlckluZm9UaXRsZSk7XG4gIGNvbnN0IG51bWJlckluZm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG51bWJlckluZm9UZXh0LnRleHRDb250ZW50ID0gXCIwNzk5NDgzOTk5XCI7XG4gIG51bWJlckluZm8uYXBwZW5kQ2hpbGQobnVtYmVySW5mb1RleHQpO1xufVxuIiwiaW1wb3J0IGhvbWVJbWdPZmZlciBmcm9tIFwiLi4vLi4vYXNzZXRzL21lbnUvZm9vZHMvbmFydXRvLmpwZ1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1ob21lXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xuXG4gIC8vKioqKioqKioqICBDYWxsIHRvIGFjdGlvbiAgKioqKioqKioqKi8vXG4gIC8vKioqKioqICAgICAgICAgICAgICAgICAgICAgICAgKioqKioqLy9cblxuICBjb25zdCBob21lQ3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZUN0YS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4taG9tZV9fY3RhXCIpO1xuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVDdGEpO1xuXG4gIGNvbnN0IG9mZmVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgb2ZmZXJJbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLWhvbWVfX2N0YS1pbWdcIik7XG4gIG9mZmVySW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBob21lSW1nT2ZmZXIpO1xuICBob21lQ3RhLmFwcGVuZENoaWxkKG9mZmVySW1nKTtcblxuICBjb25zdCBjdGFDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3RhQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4taG9tZV9fY3RhLWNvbnRlbnRcIik7XG4gIGhvbWVDdGEuYXBwZW5kQ2hpbGQoY3RhQ29udGVudCk7XG5cbiAgY29uc3QgY3RhVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjdGFUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1ob21lX19jdGEtdGV4dFwiKTtcbiAgY3RhVGV4dC50ZXh0Q29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzdGUgZWFydW0gdmVsIGVzc2UgYXV0ZW0gYW5pbWkgZXggdW5kZSwgdm9sdXB0YXRlcyBhZGlwaXNjaVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWxsYXQgcmF0aW9uZSBpZCwgZWFxdWUgaXBzYW0hIEFjY3VzYW11cyBjb25zZXF1YXR1ciBkZWxlbml0aVxuICAgICAgICAgICAgICAgICAgICAgICAgaXN0ZSBpbGxvIHZvbHVwdGF0ZW0uYDtcbiAgY3RhQ29udGVudC5hcHBlbmRDaGlsZChjdGFUZXh0KTtcblxuICBjb25zdCBjdGFCdG5PZmZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGN0YUJ0bk9mZmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1ob21lX19jdGEtYnRuLS1vZmZlclwiKTtcbiAgY3RhQnRuT2ZmZXIudGV4dENvbnRlbnQgPSBcIlZlemkgb2ZlcnRhXCI7XG4gIGN0YUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3RhQnRuT2ZmZXIpO1xuXG4gIGNvbnN0IGN0YUJ0bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjdGFCdG5NZW51LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1ob21lX19jdGEtYnRuLS1tZW51XCIpO1xuICBjdGFCdG5NZW51LnRleHRDb250ZW50ID0gXCJWZXppIG1lbml1XCI7XG4gIGN0YUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3RhQnRuTWVudSk7XG5cbiAgY3RhQnRuT2ZmZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtZW51KCk7XG4gIH0pO1xuXG4gIGN0YUJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtZW51KCk7XG4gIH0pO1xufVxuIiwiLy8gQmV2ZXJhZ2VzIGl0ZW1zXG5pbXBvcnQgbWVudUl0ZW1Db2NrdGFpbExvbmdJc2xhbmQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9tZW51L2JldmVyYWdlcy9jb2NrdGFpbC1sb25nLWlzbGFuZC5qcGdcIjtcbmltcG9ydCBtZW51SXRlbUNvY2t0YWlsV2F0ZXJtZWxvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL21lbnUvYmV2ZXJhZ2VzL2NvY2t0YWlsLXdhdGVybWVsb24uanBnXCI7XG5pbXBvcnQgbWVudUl0ZW1GcmFwcGVPcmVvIGZyb20gXCIuLi8uLi9hc3NldHMvbWVudS9iZXZlcmFnZXMvZnJhcHBlLW9yZW8uanBnXCI7XG5pbXBvcnQgbWVudUl0ZW1GcmVzaE9yYW5nZSBmcm9tIFwiLi4vLi4vYXNzZXRzL21lbnUvYmV2ZXJhZ2VzL2ZyZXNoLW9yYW5nZS5qcGdcIjtcbmltcG9ydCBtZW51SXRlbVdhdGVyIGZyb20gXCIuLi8uLi9hc3NldHMvbWVudS9iZXZlcmFnZXMvd2F0ZXIuanBnXCI7XG5cbi8vIFN1c2hpIGl0ZW1zXG5pbXBvcnQgbWVudUl0ZW1Ba2lyYSBmcm9tIFwiLi4vLi4vYXNzZXRzL21lbnUvZm9vZHMvYWtpcmEuanBnXCI7XG5pbXBvcnQgbWVudUl0ZW1DaGloYSBmcm9tIFwiLi4vLi4vYXNzZXRzL21lbnUvZm9vZHMvY2hpaGEuanBnXCI7XG5pbXBvcnQgbWVudUl0ZW1IYW5hIGZyb20gXCIuLi8uLi9hc3NldHMvbWVudS9mb29kcy9oYW5hLmpwZ1wiO1xuaW1wb3J0IG1lbnVJdGVtSXRzdWtpIGZyb20gXCIuLi8uLi9hc3NldHMvbWVudS9mb29kcy9pdHN1a2kuanBnXCI7XG5pbXBvcnQgbWVudUl0ZW1LYWl0byBmcm9tIFwiLi4vLi4vYXNzZXRzL21lbnUvZm9vZHMva2FpdG8uanBnXCI7XG5pbXBvcnQgbWVudUl0ZW1LYW5haSBmcm9tIFwiLi4vLi4vYXNzZXRzL21lbnUvZm9vZHMva2FuYWkuanBnXCI7XG5pbXBvcnQgbWVudUl0ZW1OYXJ1dG8gZnJvbSBcIi4uLy4uL2Fzc2V0cy9tZW51L2Zvb2RzL25hcnV0by5qcGdcIjtcbmltcG9ydCBtZW51SXRlbVJlbiBmcm9tIFwiLi4vLi4vYXNzZXRzL21lbnUvZm9vZHMvcmVuLmpwZ1wiO1xuaW1wb3J0IG1lbnVJdGVtU2Fla28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9tZW51L2Zvb2RzL3NhZWtvLmpwZ1wiO1xuaW1wb3J0IG1lbnVJdGVtU2F5byBmcm9tIFwiLi4vLi4vYXNzZXRzL21lbnUvZm9vZHMvc2F5by5qcGdcIjtcbmltcG9ydCBtZW51SXRlbVNvcmEgZnJvbSBcIi4uLy4uL2Fzc2V0cy9tZW51L2Zvb2RzL3NvcmEuanBnXCI7XG5pbXBvcnQgbWVudUl0ZW1UYWthc2hpIGZyb20gXCIuLi8uLi9hc3NldHMvbWVudS9mb29kcy90YWthc2hpLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51XCIpO1xuICBtZW51Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudUNvbnRhaW5lclwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxuICBjb25zdCBtZW51Q2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDYXRlZ29yaWVzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19jYXRlZ29yaWVzXCIpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yaWVzKTtcblxuICBjb25zdCBtZW51U3VzaGlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51U3VzaGlCdG4uY2xhc3NOYW1lID0gXCJtYWluLW1lbnVfX3N1c2hpLWJ0blwiO1xuICBtZW51U3VzaGlCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51U3VzaGlCdG5cIik7XG4gIG1lbnVTdXNoaUJ0bi5pbm5lclRleHQgPSBcIlN1c2hpXCI7XG4gIG1lbnVDYXRlZ29yaWVzLmFwcGVuZENoaWxkKG1lbnVTdXNoaUJ0bik7XG5cbiAgbWVudVN1c2hpQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWVudUl0ZW1zQmV2ZXJhZ2VzLnRleHRDb250ZW50ID0gdW5kZWZpbmVkO1xuICAgIG1lbnVBcHBlbmRTdXNoaSgpO1xuICAgIG1lbnUoKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUl0ZW1zQmV2ZXJhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUl0ZW1zQmV2ZXJhZ2VzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19pdGVtcy1iZXZlcmFnZXNcIik7XG5cbiAgY29uc3QgbWVudUJldmVyYWdlc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCZXZlcmFnZXNCdG4uY2xhc3NOYW1lID0gXCJtYWluLW1lbnVfX2JldmVyYWdlcy1idG5cIjtcbiAgbWVudUJldmVyYWdlc0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVCZXZlcmFnZXNCdG5cIik7XG4gIG1lbnVCZXZlcmFnZXNCdG4uaW5uZXJUZXh0ID0gXCJCYXV0dXJpXCI7XG5cbiAgbWVudUJldmVyYWdlc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1lbnVJdGVtc1N1c2hpLnRleHRDb250ZW50ID0gdW5kZWZpbmVkO1xuICAgIG1lbnVBcHBlbmRCZXZlcmFnZXMoKTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW1zQmV2ZXJhZ2VzKTtcbiAgfSk7XG5cbiAgbWVudUNhdGVnb3JpZXMuYXBwZW5kQ2hpbGQobWVudUJldmVyYWdlc0J0bik7XG5cbiAgLy8gaXRlbXNcbiAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUl0ZW1zLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19pdGVtc1wiKTtcblxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XG5cbiAgLy8qKioqKioqKioqKiBTVVNISSBJVEVNUyAqKioqKioqKioqKiovL1xuICAvLyoqKioqKiAgICAgICAgICAgICAgICAgICAgICAgICoqKioqKi8vXG4gIGNvbnN0IG1lbnVJdGVtc1N1c2hpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUl0ZW1zU3VzaGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW1zLXN1c2hpXCIpO1xuICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW1zU3VzaGkpO1xuXG4gIC8vLy8vLy8vLyBBS0lSQSAvLy8vLy8vL1xuXG4gIGNvbnN0IGFraXJhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWtpcmFDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW0tY29udGFpbmVyXCIpO1xuICBtZW51SXRlbXNTdXNoaS5hcHBlbmRDaGlsZChha2lyYUNvbnRhaW5lcik7XG5cbiAgY29uc3QgYWtpcmFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBha2lyYUltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tbWVudV9faXRlbVwiKTtcbiAgYWtpcmFJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIG1lbnVJdGVtQWtpcmEpO1xuXG4gIC8vLy8vLy8vLyBDSElIQSAvLy8vLy8vL1xuXG4gIGNvbnN0IGNoaWhhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hpaGFDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW0tY29udGFpbmVyXCIpO1xuICBtZW51SXRlbXNTdXNoaS5hcHBlbmRDaGlsZChjaGloYUNvbnRhaW5lcik7XG5cbiAgY29uc3QgY2hpaGFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjaGloYUltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tbWVudV9faXRlbVwiKTtcbiAgY2hpaGFJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIG1lbnVJdGVtQ2hpaGEpO1xuXG4gIC8vLy8vLy8vLyBIQU5BIC8vLy8vLy8vXG5cbiAgY29uc3QgaGFuYUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhhbmFDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW0tY29udGFpbmVyXCIpO1xuICBtZW51SXRlbXNTdXNoaS5hcHBlbmRDaGlsZChoYW5hQ29udGFpbmVyKTtcblxuICBjb25zdCBoYW5hSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaGFuYUltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tbWVudV9faXRlbVwiKTtcbiAgaGFuYUltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbWVudUl0ZW1IYW5hKTtcblxuICAvLy8vLy8vLy8gSVRTVUtJIC8vLy8vLy8vXG5cbiAgY29uc3QgaXRzdWtpQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRzdWtpQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19pdGVtLWNvbnRhaW5lclwiKTtcbiAgbWVudUl0ZW1zU3VzaGkuYXBwZW5kQ2hpbGQoaXRzdWtpQ29udGFpbmVyKTtcblxuICBjb25zdCBpdHN1a2lJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpdHN1a2lJbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW1cIik7XG4gIGl0c3VraUltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbWVudUl0ZW1JdHN1a2kpO1xuXG4gIC8vLy8vLy8vLyBLQUlUTyAvLy8vLy8vL1xuICBjb25zdCBrYWl0b0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGthaXRvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19pdGVtLWNvbnRhaW5lclwiKTtcbiAgbWVudUl0ZW1zU3VzaGkuYXBwZW5kQ2hpbGQoa2FpdG9Db250YWluZXIpO1xuXG4gIGNvbnN0IGthaXRvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAga2FpdG9JbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW1cIik7XG4gIGthaXRvSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBtZW51SXRlbUthaXRvKTtcblxuICAvLy8vLy8vLy8gS0FOQUkgLy8vLy8vLy9cbiAgY29uc3Qga2FuYWlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBrYW5haUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tbWVudV9faXRlbS1jb250YWluZXJcIik7XG4gIG1lbnVJdGVtc1N1c2hpLmFwcGVuZENoaWxkKGthbmFpQ29udGFpbmVyKTtcblxuICBjb25zdCBrYW5haUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGthbmFpSW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19pdGVtXCIpO1xuICBrYW5haUltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbWVudUl0ZW1LYW5haSk7XG5cbiAgLy8vLy8vLy8vIE5BUlVUTyAvLy8vLy8vL1xuICBjb25zdCBuYXJ1dG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXJ1dG9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW0tY29udGFpbmVyXCIpO1xuICBtZW51SXRlbXNTdXNoaS5hcHBlbmRDaGlsZChuYXJ1dG9Db250YWluZXIpO1xuXG4gIGNvbnN0IG5hcnV0b0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG5hcnV0b0ltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tbWVudV9faXRlbVwiKTtcbiAgbmFydXRvSW1nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmFydXRvXCIpO1xuICBuYXJ1dG9JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIG1lbnVJdGVtTmFydXRvKTtcblxuICAvLy8vLy8vLy8gUkVOIC8vLy8vLy8vXG4gIGNvbnN0IHJlbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJlbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tbWVudV9faXRlbS1jb250YWluZXJcIik7XG4gIG1lbnVJdGVtc1N1c2hpLmFwcGVuZENoaWxkKHJlbkNvbnRhaW5lcik7XG5cbiAgY29uc3QgcmVuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgcmVuSW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19pdGVtXCIpO1xuICByZW5JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIG1lbnVJdGVtUmVuKTtcblxuICAvLy8vLy8vLy8gU0FFS08gLy8vLy8vLy9cbiAgY29uc3Qgc2Fla29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzYWVrb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tbWVudV9faXRlbS1jb250YWluZXJcIik7XG4gIG1lbnVJdGVtc1N1c2hpLmFwcGVuZENoaWxkKHNhZWtvQ29udGFpbmVyKTtcblxuICBjb25zdCBzYWVrb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHNhZWtvSW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19pdGVtXCIpO1xuICBzYWVrb0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbWVudUl0ZW1TYWVrbyk7XG5cbiAgLy8vLy8vLy8vIFNBWU8gLy8vLy8vLy9cbiAgY29uc3Qgc2F5b0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNheW9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW0tY29udGFpbmVyXCIpO1xuICBtZW51SXRlbXNTdXNoaS5hcHBlbmRDaGlsZChzYXlvQ29udGFpbmVyKTtcblxuICBjb25zdCBzYXlvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgc2F5b0ltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tbWVudV9faXRlbVwiKTtcbiAgc2F5b0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbWVudUl0ZW1TYXlvKTtcblxuICAvLy8vLy8vLy8gU09SQSAvLy8vLy8vL1xuICBjb25zdCBzb3JhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc29yYUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tbWVudV9faXRlbS1jb250YWluZXJcIik7XG4gIG1lbnVJdGVtc1N1c2hpLmFwcGVuZENoaWxkKHNvcmFDb250YWluZXIpO1xuXG4gIGNvbnN0IHNvcmFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBzb3JhSW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19pdGVtXCIpO1xuICBzb3JhSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBtZW51SXRlbVNvcmEpO1xuXG4gIC8vLy8vLy8vLyBUQUtBU0hJIC8vLy8vLy8vXG4gIGNvbnN0IHRha2FzaGlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWthc2hpQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19pdGVtLWNvbnRhaW5lclwiKTtcbiAgbWVudUl0ZW1zU3VzaGkuYXBwZW5kQ2hpbGQodGFrYXNoaUNvbnRhaW5lcik7XG5cbiAgY29uc3QgdGFrYXNoaUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHRha2FzaGlJbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW1cIik7XG4gIHRha2FzaGlJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIG1lbnVJdGVtVGFrYXNoaSk7XG5cbiAgZnVuY3Rpb24gbWVudUFwcGVuZFN1c2hpKCkge1xuICAgIGFraXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKGFraXJhSW1nKTtcbiAgICBjaGloYUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGloYUltZyk7XG4gICAgaGFuYUNvbnRhaW5lci5hcHBlbmRDaGlsZChoYW5hSW1nKTtcbiAgICBpdHN1a2lDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRzdWtpSW1nKTtcbiAgICBrYWl0b0NvbnRhaW5lci5hcHBlbmRDaGlsZChrYWl0b0ltZyk7XG4gICAga2FuYWlDb250YWluZXIuYXBwZW5kQ2hpbGQoa2FuYWlJbWcpO1xuICAgIG5hcnV0b0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYXJ1dG9JbWcpO1xuICAgIHJlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5JbWcpO1xuICAgIHNhZWtvQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhZWtvSW1nKTtcbiAgICBzYXlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHNheW9JbWcpO1xuICAgIHNvcmFDb250YWluZXIuYXBwZW5kQ2hpbGQoc29yYUltZyk7XG4gICAgdGFrYXNoaUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWthc2hpSW1nKTtcbiAgfVxuXG4gIG1lbnVBcHBlbmRTdXNoaSgpO1xuXG4gIC8vKioqKioqKioqIEJFVkVSQUdFUyBJVEVNUyAqKioqKioqKioqLy9cbiAgLy8qKioqKiogICAgICAgICAgICAgICAgICAgICAgICAqKioqKiovL1xuICAvLyBjb25zdCBtZW51SXRlbXNCZXZlcmFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyBtZW51SXRlbXNCZXZlcmFnZXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW1zLWJldmVyYWdlc1wiKTtcbiAgLy8gbWVudUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVJdGVtc0JldmVyYWdlcyk7XG5cbiAgLy8vLy8vLy8gQ09DS1RBSUwgTE9ORyBJU0xBTkQgLy8vLy8vLy9cblxuICBjb25zdCBjb2NrdGFpbExvbmdJc2xhbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvL3ByZXR0aWVyLWlnbm9yZVxuICBjb2NrdGFpbExvbmdJc2xhbmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcIm1haW4tbWVudV9faXRlbS1jb250YWluZXJcIik7XG4gIG1lbnVJdGVtc0JldmVyYWdlcy5hcHBlbmRDaGlsZChjb2NrdGFpbExvbmdJc2xhbmRDb250YWluZXIpO1xuXG4gIGxldCBjb2NrdGFpbExvbmdJc2xhbmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb2NrdGFpbExvbmdJc2xhbmRJbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW1cIik7XG4gIGNvY2t0YWlsTG9uZ0lzbGFuZEltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbWVudUl0ZW1Db2NrdGFpbExvbmdJc2xhbmQpO1xuXG4gIC8vLy8vLy8vIENPQ0tUQUlMIFdBVEVSTUVMT04gLy8vLy8vLy9cblxuICBjb25zdCBjb2NrdGFpbFdhdGVybWVsb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvL3ByZXR0aWVyLWlnbm9yZVxuICBjb2NrdGFpbFdhdGVybWVsb25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcIm1haW4tbWVudV9faXRlbS1jb250YWluZXJcIik7XG4gIG1lbnVJdGVtc0JldmVyYWdlcy5hcHBlbmRDaGlsZChjb2NrdGFpbFdhdGVybWVsb25Db250YWluZXIpO1xuXG4gIGxldCBjb2NrdGFpbFdhdGVybWVsb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb2NrdGFpbFdhdGVybWVsb25JbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW1cIik7XG4gIGNvY2t0YWlsV2F0ZXJtZWxvbkltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbWVudUl0ZW1Db2NrdGFpbFdhdGVybWVsb24pO1xuXG4gIC8vLy8vLy8vIEZSQVBQRSBPUkVPIC8vLy8vLy8vXG4gIGNvbnN0IGZyYXBwZU9yZW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmcmFwcGVPcmVvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19pdGVtLWNvbnRhaW5lclwiKTtcbiAgbWVudUl0ZW1zQmV2ZXJhZ2VzLmFwcGVuZENoaWxkKGZyYXBwZU9yZW9Db250YWluZXIpO1xuXG4gIGxldCBmcmFwcGVPcmVvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZnJhcHBlT3Jlb0ltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tbWVudV9faXRlbVwiKTtcbiAgZnJhcHBlT3Jlb0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbWVudUl0ZW1GcmFwcGVPcmVvKTtcblxuICAvLy8vLy8vLyBGUkVTSCBPUkVPIC8vLy8vLy8vXG4gIGNvbnN0IGZyZXNoT3JhbmdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZnJlc2hPcmFuZ2VDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW0tY29udGFpbmVyXCIpO1xuICBtZW51SXRlbXNCZXZlcmFnZXMuYXBwZW5kQ2hpbGQoZnJlc2hPcmFuZ2VDb250YWluZXIpO1xuXG4gIGxldCBmcmVzaE9yYW5nZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGZyZXNoT3JhbmdlSW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19pdGVtXCIpO1xuICBmcmVzaE9yYW5nZUltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbWVudUl0ZW1GcmVzaE9yYW5nZSk7XG5cbiAgLy8vLy8vLy8gV0FURVIgQk9UVExFIC8vLy8vLy8vXG4gIGNvbnN0IHdhdGVyQm90dGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2F0ZXJCb3R0bGVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLW1lbnVfX2l0ZW0tY29udGFpbmVyXCIpO1xuICBtZW51SXRlbXNCZXZlcmFnZXMuYXBwZW5kQ2hpbGQod2F0ZXJCb3R0bGVDb250YWluZXIpO1xuXG4gIGxldCB3YXRlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHdhdGVySW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19pdGVtXCIpO1xuICB3YXRlckltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbWVudUl0ZW1XYXRlcik7XG5cbiAgZnVuY3Rpb24gbWVudUFwcGVuZEJldmVyYWdlcygpIHtcbiAgICBjb2NrdGFpbExvbmdJc2xhbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29ja3RhaWxMb25nSXNsYW5kSW1nKTtcbiAgICBjb2NrdGFpbFdhdGVybWVsb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29ja3RhaWxXYXRlcm1lbG9uSW1nKTtcbiAgICBmcmFwcGVPcmVvQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyYXBwZU9yZW9JbWcpO1xuICAgIGZyZXNoT3JhbmdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyZXNoT3JhbmdlSW1nKTtcbiAgICB3YXRlckJvdHRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3YXRlckltZyk7XG4gIH1cblxuICAvLyBJVEVNIElORk9cblxuICBjb25zdCBpdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1JbmZvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1tZW51X19pdGVtLWluZm8gaXRlbS1pbmZvXCIpO1xuXG4gIGNvbnN0IGl0ZW1JbmZvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1JbmZvTmFtZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW0taW5mb19fbmFtZVwiKTtcbiAgaXRlbUluZm8uYXBwZW5kQ2hpbGQoaXRlbUluZm9OYW1lKTtcblxuICBjb25zdCBpdGVtSW5mb1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbUluZm9QcmljZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW0taW5mb19fcHJpY2VcIik7XG4gIGl0ZW1JbmZvLmFwcGVuZENoaWxkKGl0ZW1JbmZvUHJpY2UpO1xuXG4gIGZ1bmN0aW9uIGhvdmVySW1nKGltZywgbmFtZSwgcHJpY2UpIHtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgaW1nLmFwcGVuZENoaWxkKGl0ZW1JbmZvKTtcblxuICAgICAgaXRlbUluZm8uc3R5bGUuYW5pbWF0aW9uID0gXCJpbmZvQW5pbUVudGVyIDAuMnMgZm9yd2FyZHNcIjtcbiAgICAgIGl0ZW1JbmZvTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICBpdGVtSW5mb1ByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgICAgIGl0ZW1JbmZvTmFtZS5zdHlsZS5hbmltYXRpb24gPSBcImluZm9BbmltQ2hpbGRFbnRlciAwLjJzIGZvcndhcmRzXCI7XG4gICAgICBpdGVtSW5mb1ByaWNlLnN0eWxlLmFuaW1hdGlvbiA9IFwiaW5mb0FuaW1DaGlsZEVudGVyIDAuMnMgZm9yd2FyZHNcIjtcbiAgICB9KTtcblxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICBpdGVtSW5mby5zdHlsZS5hbmltYXRpb24gPSBcImluZm9BbmltTGVhdmUgMC4ycyBmb3J3YXJkc1wiO1xuXG4gICAgICBpdGVtSW5mb05hbWUuc3R5bGUuYW5pbWF0aW9uID0gXCJpbmZvQW5pbUNoaWxkTGVhdmUgMC4ycyBmb3J3YXJkc1wiO1xuICAgICAgaXRlbUluZm9QcmljZS5zdHlsZS5hbmltYXRpb24gPSBcImluZm9BbmltQ2hpbGRMZWF2ZSAwLjJzIGZvcndhcmRzXCI7XG4gICAgfSk7XG4gIH1cblxuICBob3ZlckltZyhha2lyYUNvbnRhaW5lciwgXCJBa2lyYVwiLCBcIjM1IFJPTlwiKTtcbiAgaG92ZXJJbWcoY2hpaGFDb250YWluZXIsIFwiQ2hpaGFcIiwgXCI1MCBST05cIik7XG4gIGhvdmVySW1nKGhhbmFDb250YWluZXIsIFwiSGFuYVwiLCBcIjYwIFJPTlwiKTtcbiAgaG92ZXJJbWcoaXRzdWtpQ29udGFpbmVyLCBcIkl0c3VraVwiLCBcIjM1IFJPTlwiKTtcbiAgaG92ZXJJbWcoa2FpdG9Db250YWluZXIsIFwiS2FpdG9cIiwgXCIyNSBST05cIik7XG4gIGhvdmVySW1nKGthbmFpQ29udGFpbmVyLCBcIkthbmFpXCIsIFwiNjAgUk9OXCIpO1xuICBob3ZlckltZyhuYXJ1dG9Db250YWluZXIsIFwiTmFydXRvXCIsIFwiMjAgUk9OXCIpO1xuICBob3ZlckltZyhyZW5Db250YWluZXIsIFwiUmVuXCIsIFwiMzUgUk9OXCIpO1xuICBob3ZlckltZyhzYWVrb0NvbnRhaW5lciwgXCJTYWVrb1wiLCBcIjQwIFJPTlwiKTtcbiAgaG92ZXJJbWcoc2F5b0NvbnRhaW5lciwgXCJTYXlvXCIsIFwiMzUgUk9OXCIpO1xuICBob3ZlckltZyhzb3JhQ29udGFpbmVyLCBcIlNvcmFcIiwgXCIzNSBST05cIik7XG4gIGhvdmVySW1nKHRha2FzaGlDb250YWluZXIsIFwiVGFrYXNoaVwiLCBcIjQwIFJPTlwiKTtcblxuICBob3ZlckltZyhjb2NrdGFpbExvbmdJc2xhbmRDb250YWluZXIsIFwiQ29ja3RhaWwgTG9uZyBJc2xhbmRcIiwgXCIyMCBST05cIik7XG4gIGhvdmVySW1nKGNvY2t0YWlsV2F0ZXJtZWxvbkNvbnRhaW5lciwgXCJDb2NrdGFpbCBXYXRlcm1lbG9uXCIsIFwiMTggUk9OXCIpO1xuICBob3ZlckltZyhmcmFwcGVPcmVvQ29udGFpbmVyLCBcIkZyYXBwZSBPcmVvXCIsIFwiMTUgUk9OXCIpO1xuICBob3ZlckltZyhmcmVzaE9yYW5nZUNvbnRhaW5lciwgXCJGcmVzaCBPcmFuZ2VcIiwgXCIxMCBST05cIik7XG4gIGhvdmVySW1nKHdhdGVyQm90dGxlQ29udGFpbmVyLCBcIlN0aWNsYSBBcGFcIiwgXCI1IFJvblwiKTtcblxuICByZXR1cm4gbmFydXRvSW1nO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9zdHlsZXMvbWFpbi5zY3NzXCI7XG5cbmltcG9ydCBhYm91dHVzIGZyb20gXCIuL3BhZ2VzL2Fib3V0LXVzXCI7XG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9wYWdlcy9jb250YWN0XCI7XG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9wYWdlcy9tZW51XCI7XG5cbmltcG9ydCBsb2dvTWFpbiBmcm9tIFwiLi4vYXNzZXRzL2xvZ28vbG9nby1tYWluLnBuZ1wiO1xuaW1wb3J0IGhhbWJ1cmdlckljb24gZnJvbSBcIi4uL2Fzc2V0cy9uYXYvaGFtYnVyZ2VyLWljb24ucG5nXCI7XG5cbmhvbWUoKTtcblxuLy8gaW5zZXJ0IGxvZ29cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xuY29uc3QgbG9nb0hlYWRlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5sb2dvSGVhZGVySW1nLnNyYyA9IGxvZ29NYWluO1xuY29uc3QgbG9nb0Zvb3RlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5sb2dvRm9vdGVySW1nLnNyYyA9IGxvZ29NYWluO1xuaGVhZGVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgbG9nb0hlYWRlckltZyk7XG5mb290ZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBsb2dvRm9vdGVySW1nKTtcbmxvZ29IZWFkZXJJbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2dvXCIpO1xubG9nb0Zvb3RlckltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvZ29cIik7XG5cbi8vIEhBTUJVUkdFUiBNRU5VXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb25zdCBuYXZNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fbW9iaWxlXCIpO1xuY29uc3QgaGFtYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYW1idXJnZXJCdG5cIik7XG5jb25zdCBoYW1idXJnZXJCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmhhbWJ1cmdlckJ0bkljb24uc2V0QXR0cmlidXRlKFwiY2xhc1wiLCBcIm5hdl9fbW9iaWxlX19oYW1idXJnZXItaWNvblwiKTtcbmhhbWJ1cmdlckJ0bkljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGhhbWJ1cmdlckljb24pO1xuaGFtYnVyZ2VyQnRuLmFwcGVuZENoaWxkKGhhbWJ1cmdlckJ0bkljb24pO1xuXG5oYW1idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgaGFtYnVyZ2VyTWlkTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoYW1idXJnZXJNaWRMYXllci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdl9fbW9iaWxlX19oYW1idXJnZXItbWlkLWxheWVyXCIpO1xuICBuYXZNb2JpbGUuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWlkTGF5ZXIpO1xuXG4gIGNvbnN0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoYW1idXJnZXJNZW51LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2X19tb2JpbGVfX2hhbWJ1cmdlci1tZW51XCIpO1xuICBuYXZNb2JpbGUuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudSk7XG5cbiAgY29uc3QgbW9iaWxlSG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1vYmlsZUhvbWVCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXZfX21vYmlsZV9fYnRuXCIpO1xuICBoYW1idXJnZXJNZW51LmFwcGVuZENoaWxkKG1vYmlsZUhvbWVCdG4pO1xuICBtb2JpbGVIb21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgY29uc3QgbW9iaWxlTWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1vYmlsZU1lbnVCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXZfX21vYmlsZV9fYnRuXCIpO1xuICBoYW1idXJnZXJNZW51LmFwcGVuZENoaWxkKG1vYmlsZU1lbnVCdG4pO1xuICBtb2JpbGVNZW51QnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgY29uc3QgbW9iaWxlQWJvdXR1c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1vYmlsZUFib3V0dXNCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXZfX21vYmlsZV9fYnRuXCIpO1xuICBoYW1idXJnZXJNZW51LmFwcGVuZENoaWxkKG1vYmlsZUFib3V0dXNCdG4pO1xuICBtb2JpbGVBYm91dHVzQnRuLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiO1xuXG4gIGNvbnN0IG1vYmlsZUNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtb2JpbGVDb250YWN0QnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2X19tb2JpbGVfX2J0blwiKTtcbiAgaGFtYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChtb2JpbGVDb250YWN0QnRuKTtcbiAgbW9iaWxlQ29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gIG1vYmlsZUhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBob21lKCk7XG4gICAgaGFtYnVyZ2VyTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaGFtYnVyZ2VyTWlkTGF5ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcblxuICBtb2JpbGVNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWVudSgpO1xuICAgIGhhbWJ1cmdlck1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGhhbWJ1cmdlck1pZExheWVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG5cbiAgbW9iaWxlQWJvdXR1c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFib3V0dXMoKTtcbiAgICBoYW1idXJnZXJNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBoYW1idXJnZXJNaWRMYXllci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuXG4gIG1vYmlsZUNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250YWN0KCk7XG4gICAgaGFtYnVyZ2VyTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaGFtYnVyZ2VyTWlkTGF5ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcblxuICBoYW1idXJnZXJNaWRMYXllci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhhbWJ1cmdlck1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGhhbWJ1cmdlck1pZExheWVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG59KTtcblxuLy8gc3dpdGNoIGxvZ2ljIGRlc2t0b3BcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVCdG5cIik7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51QnRuXCIpO1xuY29uc3QgYWJvdXR1c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXR1c0J0blwiKTtcbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RCdG5cIik7XG5cbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWUpO1xubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudSk7XG5hYm91dHVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhYm91dHVzKTtcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRhY3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9