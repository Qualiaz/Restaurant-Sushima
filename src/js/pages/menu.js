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
  akiraImg.setAttribute("src", menuItemAkira);

  ///////// CHIHA ////////

  const chihaContainer = document.createElement("div");
  chihaContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(chihaContainer);

  const chihaImg = document.createElement("img");
  chihaImg.setAttribute("class", "main-menu__item");
  chihaImg.setAttribute("src", menuItemChiha);

  ///////// HANA ////////

  const hanaContainer = document.createElement("div");
  hanaContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(hanaContainer);

  const hanaImg = document.createElement("img");
  hanaImg.setAttribute("class", "main-menu__item");
  hanaImg.setAttribute("src", menuItemHana);

  ///////// ITSUKI ////////

  const itsukiContainer = document.createElement("div");
  itsukiContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(itsukiContainer);

  const itsukiImg = document.createElement("img");
  itsukiImg.setAttribute("class", "main-menu__item");
  itsukiImg.setAttribute("src", menuItemItsuki);

  ///////// KAITO ////////
  const kaitoContainer = document.createElement("div");
  kaitoContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(kaitoContainer);

  const kaitoImg = document.createElement("img");
  kaitoImg.setAttribute("class", "main-menu__item");
  kaitoImg.setAttribute("src", menuItemKaito);

  ///////// KANAI ////////
  const kanaiContainer = document.createElement("div");
  kanaiContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(kanaiContainer);

  const kanaiImg = document.createElement("img");
  kanaiImg.setAttribute("class", "main-menu__item");
  kanaiImg.setAttribute("src", menuItemKanai);

  ///////// NARUTO ////////
  const narutoContainer = document.createElement("div");
  narutoContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(narutoContainer);

  const narutoImg = document.createElement("img");
  narutoImg.setAttribute("class", "main-menu__item");
  narutoImg.setAttribute("src", menuItemNaruto);

  ///////// REN ////////
  const renContainer = document.createElement("div");
  renContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(renContainer);

  const renImg = document.createElement("img");
  renImg.setAttribute("class", "main-menu__item");
  renImg.setAttribute("src", menuItemRen);

  ///////// SAEKO ////////
  const saekoContainer = document.createElement("div");
  saekoContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(saekoContainer);

  const saekoImg = document.createElement("img");
  saekoImg.setAttribute("class", "main-menu__item");
  saekoImg.setAttribute("src", menuItemSaeko);

  ///////// SAYO ////////
  const sayoContainer = document.createElement("div");
  sayoContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(sayoContainer);

  const sayoImg = document.createElement("img");
  sayoImg.setAttribute("class", "main-menu__item");
  sayoImg.setAttribute("src", menuItemSayo);

  ///////// SORA ////////
  const soraContainer = document.createElement("div");
  soraContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(soraContainer);

  const soraImg = document.createElement("img");
  soraImg.setAttribute("class", "main-menu__item");
  soraImg.setAttribute("src", menuItemSora);

  ///////// TAKASHI ////////
  const takashiContainer = document.createElement("div");
  takashiContainer.setAttribute("class", "main-menu__item-container");
  menuItemsSushi.appendChild(takashiContainer);

  const takashiImg = document.createElement("img");
  takashiImg.setAttribute("class", "main-menu__item");
  takashiImg.setAttribute("src", menuItemTakashi);

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
  cocktailLongIslandImg.setAttribute("src", menuItemCocktailLongIsland);

  //////// COCKTAIL WATERMELON ////////

  const cocktailWatermelonContainer = document.createElement("div");
  //prettier-ignore
  cocktailWatermelonContainer.setAttribute("class","main-menu__item-container");
  menuItemsBeverages.appendChild(cocktailWatermelonContainer);

  let cocktailWatermelonImg = document.createElement("img");
  cocktailWatermelonImg.setAttribute("class", "main-menu__item");
  cocktailWatermelonImg.setAttribute("src", menuItemCocktailWatermelon);

  //////// FRAPPE OREO ////////
  const frappeOreoContainer = document.createElement("div");
  frappeOreoContainer.setAttribute("class", "main-menu__item-container");
  menuItemsBeverages.appendChild(frappeOreoContainer);

  let frappeOreoImg = document.createElement("img");
  frappeOreoImg.setAttribute("class", "main-menu__item");
  frappeOreoImg.setAttribute("src", menuItemFrappeOreo);

  //////// FRESH OREO ////////
  const freshOrangeContainer = document.createElement("div");
  freshOrangeContainer.setAttribute("class", "main-menu__item-container");
  menuItemsBeverages.appendChild(freshOrangeContainer);

  let freshOrangeImg = document.createElement("img");
  freshOrangeImg.setAttribute("class", "main-menu__item");
  freshOrangeImg.setAttribute("src", menuItemFreshOrange);

  //////// WATER BOTTLE ////////
  const waterBottleContainer = document.createElement("div");
  waterBottleContainer.setAttribute("class", "main-menu__item-container");
  menuItemsBeverages.appendChild(waterBottleContainer);

  let waterImg = document.createElement("img");
  waterImg.setAttribute("class", "main-menu__item");
  waterImg.setAttribute("src", menuItemWater);

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
  hoverImg(cocktailWatermelonContainer, "Watermelon", "18 RON");
  hoverImg(frappeOreoContainer, "Frappe Oreo", "15 RON");
  hoverImg(freshOrangeContainer, "Fresh Orange", "10 RON");
  hoverImg(waterBottleContainer, "Sticla Apa", "5 Ron");
}
