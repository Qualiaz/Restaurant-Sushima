import homeImgOffer from "../../assets/menu/foods/naruto.jpg";
import menu from "./menu";

export default function home() {
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
  offerImg.setAttribute("src", homeImgOffer);
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
    menu();
  });

  ctaBtnMenu.addEventListener("click", () => {
    menu();
  });
}
