import restaurantOutdoor from "../../assets/contact/restaurant-outdoor.jpg";

export default function contact() {
  const main = document.querySelector("#main");
  main.textContent = undefined;

  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("class", "main-contact");
  main.appendChild(contactContainer);

  // IMAGE
  const restaurantOutsideImg = document.createElement("img");
  restaurantOutsideImg.setAttribute("class", "main-contact__img");
  restaurantOutsideImg.setAttribute("src", restaurantOutdoor);
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
