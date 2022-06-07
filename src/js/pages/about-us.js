export default function aboutUs() {
  const main = document.querySelector("#main");

  const mainAboutus = `<div class="main-home" id="homeContainer">
                          <div class="main-home__cta">
                            <p>About us</p>
                          </div>
                        </div>
`;

  main.innerHTML = mainAboutus;
}
