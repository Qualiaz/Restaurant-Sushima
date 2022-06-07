import homeImgOffer from "../../assets/ph1.jpeg";

export default function home() {
  const main = document.querySelector("#main");
  const mainHome = `
  <div class="main-home" id="homeContainer">
  <div class="main-home__cta">
            <div class="main-home__cta-img">
              <img src="${homeImgOffer}" />
            </div>
            <div class="main-home__cta-content">
              <p class="main-home__cta__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                iste earum vel esse autem animi ex unde, voluptates adipisci
                repellat ratione id, eaque ipsam! Accusamus consequatur deleniti
                iste illo voluptatem.
              </p>
              <button class="main-home__cta__btn--offer">Vezi Oferta</button>
              <button class="main-home__cta__btn--menu">Vezi Meniu</button>
            </div>
          </div>
          </div>
  `;

  main.innerHTML = mainHome;
}
