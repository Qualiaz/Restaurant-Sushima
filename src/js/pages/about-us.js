import headChef from "../../assets/aboutus/head-chef.jpg";
import restaurantIndoor from "../../assets/aboutus/restaurant-indoor.jpg";
import serving from "../../assets/aboutus/serving.jpg";

export default function aboutUs() {
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
  restaurantIndoorImg.setAttribute("src", restaurantIndoor);
  sectionOne.appendChild(restaurantIndoorImg);
  /////
  const sectionTwo = document.createElement("section");
  sectionTwo.setAttribute("class", "main-aboutus__section");
  aboutusContainer.appendChild(sectionTwo);

  const headChefImg = document.createElement("img");
  headChefImg.setAttribute("src", headChef);
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
  servingImg.setAttribute("src", serving);
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
