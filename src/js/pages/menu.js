// Beverages items
import menuItemCocktailLongIsland from "../../assets/menu/beverages/cocktail-long-island.jpg";
import menuItemCocktailWatermelon from "../../assets/menu/beverages/cocktail-watermelon.jpg";
import menuItemFrappeOreo from "../../assets/menu/beverages/frappe-oreo.jpg";
import menuItemFreshOrange from "../../assets/menu/beverages/fresh-orange.jpg";
import menuItemWater from "../../assets/menu/beverages/water.jpg";

// Sushi items
import menuItemAkira from "../../assets/menu/foods/akira.jpg";
import menuItemChiha from "../../assets/menu/foods/chiha.jpg";
import menuItemHana from "../../assets/menu/foods/hana.jpg";
import menuItemItsuki from "../../assets/menu/foods/itsuki.jpg";
import menuItemKaito from "../../assets/menu/foods/kaito.jpg";
import menuItemKanai from "../../assets/menu/foods/kanai.jpg";
import menuItemNaruto from "../../assets/menu/foods/naruto.jpg";
import menuItemRen from "../../assets/menu/foods/ren.jpg";
import menuItemSaeko from "../../assets/menu/foods/saeko.jpg";
import menuItemSayo from "../../assets/menu/foods/sayo.jpg";
import menuItemSora from "../../assets/menu/foods/sora.jpg";
import menuItemTakashi from "../../assets/menu/foods/takashi.jpg";

export default function menu() {
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
  });

  const menuBeveragesBtn = document.createElement("button");
  menuBeveragesBtn.className = "main-menu__beverages-btn";
  menuBeveragesBtn.setAttribute("id", "menuBeveragesBtn");
  menuBeveragesBtn.innerText = "Bauturi";

  menuBeveragesBtn.addEventListener("click", () => {
    menuItemsSushi.textContent = undefined;
    menuAppendBeverages();
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

  const akiraImg = document.createElement("img");
  akiraImg.setAttribute("class", "main-menu__item");
  akiraImg.setAttribute("src", menuItemAkira);

  const chihaImg = document.createElement("img");
  chihaImg.setAttribute("class", "main-menu__item");
  chihaImg.setAttribute("src", menuItemChiha);

  const hanaImg = document.createElement("img");
  hanaImg.setAttribute("class", "main-menu__item");
  hanaImg.setAttribute("src", menuItemHana);

  const itsukiImg = document.createElement("img");
  itsukiImg.setAttribute("class", "main-menu__item");
  itsukiImg.setAttribute("src", menuItemItsuki);

  const kaitoImg = document.createElement("img");
  kaitoImg.setAttribute("class", "main-menu__item");
  kaitoImg.setAttribute("src", menuItemKaito);

  const kanaiImg = document.createElement("img");
  kanaiImg.setAttribute("class", "main-menu__item");
  kanaiImg.setAttribute("src", menuItemKanai);

  const narutoImg = document.createElement("img");
  narutoImg.setAttribute("class", "main-menu__item");
  narutoImg.setAttribute("src", menuItemNaruto);

  const renImg = document.createElement("img");
  renImg.setAttribute("class", "main-menu__item");
  renImg.setAttribute("src", menuItemRen);

  const saekoImg = document.createElement("img");
  saekoImg.setAttribute("class", "main-menu__item");
  saekoImg.setAttribute("src", menuItemSaeko);

  const sayoImg = document.createElement("img");
  sayoImg.setAttribute("class", "main-menu__item");
  sayoImg.setAttribute("src", menuItemSayo);

  const soraImg = document.createElement("img");
  soraImg.setAttribute("class", "main-menu__item");
  soraImg.setAttribute("src", menuItemSora);

  const takashiImg = document.createElement("img");
  takashiImg.setAttribute("class", "main-menu__item");
  takashiImg.setAttribute("src", menuItemTakashi);

  function menuAppendSushi() {
    menuItemsSushi.appendChild(akiraImg);
    menuItemsSushi.appendChild(chihaImg);
    menuItemsSushi.appendChild(hanaImg);
    menuItemsSushi.appendChild(itsukiImg);
    menuItemsSushi.appendChild(kaitoImg);
    menuItemsSushi.appendChild(kanaiImg);
    menuItemsSushi.appendChild(narutoImg);
    menuItemsSushi.appendChild(renImg);
    menuItemsSushi.appendChild(saekoImg);
    menuItemsSushi.appendChild(sayoImg);
    menuItemsSushi.appendChild(soraImg);
    menuItemsSushi.appendChild(takashiImg);
  }

  menuAppendSushi();

  //********* BEVERAGES ITEMS **********//
  //******                        ******//
  const menuItemsBeverages = document.createElement("div");
  menuItemsBeverages.setAttribute("class", "main-menu__items-beverages");
  menuItems.appendChild(menuItemsBeverages);

  let cocktailLongIslandImg = document.createElement("img");
  cocktailLongIslandImg.setAttribute("class", "main-menu__item");
  cocktailLongIslandImg.setAttribute("src", menuItemCocktailLongIsland);

  let cocktailWatermelonImg = document.createElement("img");
  cocktailWatermelonImg.setAttribute("class", "main-menu__item");
  cocktailWatermelonImg.setAttribute("src", menuItemCocktailWatermelon);

  let frappeOreoImg = document.createElement("img");
  frappeOreoImg.setAttribute("class", "main-menu__item");
  frappeOreoImg.setAttribute("src", menuItemFrappeOreo);

  let freshOrangeImg = document.createElement("img");
  freshOrangeImg.setAttribute("class", "main-menu__item");
  freshOrangeImg.setAttribute("src", menuItemFreshOrange);

  let waterImg = document.createElement("img");
  waterImg.setAttribute("class", "main-menu__item");
  waterImg.setAttribute("src", menuItemWater);

  function menuAppendBeverages() {
    menuItemsBeverages.appendChild(cocktailLongIslandImg);
    menuItemsBeverages.appendChild(cocktailWatermelonImg);
    menuItemsBeverages.appendChild(frappeOreoImg);
    menuItemsBeverages.appendChild(freshOrangeImg);
    menuItemsBeverages.appendChild(waterImg);
  }
}
