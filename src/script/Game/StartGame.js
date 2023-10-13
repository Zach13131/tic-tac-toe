import { getRandomInt } from "./../Utilities/GetRandomNum.js";
import { FONTS, GAME_ICONS } from "./../Variables/Variables.js";
import { updateGameArr } from "./UpdateGame.js";
import { index, modifyX, count } from "./../Variables/Variables.js";

const toUpperLowerCase = (str) =>
  getRandomInt(0, 1) ? str.toLowerCase() : str;

export function startGameHandler(e) {
  if (
    !e.target.className.split(" ").includes("main__game-item") &&
    !(e.target.tagName === "P")
  ) {
    return;
  }

  if (
    e.target.getAttribute("data-icon") ||
    e.target.parentNode.getAttribute("data-icon")
  ) {
    let targetElem = e.target;

    if (e.target.parentNode.getAttribute("data-icon")) {
      targetElem = e.target.parentNode;
    }

    targetElem.classList.add("blocked");
    setTimeout(() => {
      targetElem.classList.remove("blocked");
    }, 1000);
    return;
  }
  const curFontIndex = getRandomInt(0, FONTS.length - 1);

  e.target.style = `font-family : ${FONTS[curFontIndex]}`;
  e.target.setAttribute("data-icon", GAME_ICONS[index]);

  e.target.innerHTML = `<p class="main__text ">${toUpperLowerCase(
    GAME_ICONS[index]
  )}</p>`;

  if (index) {
    // index = 0;
    modifyX(0);
  } else {
    // index = 1;
    modifyX(1);
  }
  count++;
  updateGameArr();
}
