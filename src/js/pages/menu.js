export default function menu() {
  const main = document.querySelector("#main");

  const mainMenu = `<div class="main-home" id="homeContainer">
                      <div class="main-home__cta">
                        <p>Menu</p>
                      </div>
                    </div>
`;

  main.innerHTML = mainMenu;
}
