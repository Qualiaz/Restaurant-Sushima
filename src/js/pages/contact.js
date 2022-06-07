export default function contact() {
  const main = document.querySelector("#main");

  const mainContact = `<div class="main-home" id="homeContainer">
                          <div class="main-home__cta">
                            <p>Contact</p>
                          </div>
                        </div>
`;

  main.innerHTML = mainContact;
}
