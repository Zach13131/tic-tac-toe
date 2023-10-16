import { gameItems, gameBlock } from "./../Utilities/DOMitems.js";
import { startGameHandler } from "./StartGame.js";
import { index, modifyX, count } from "../Variables/Variables.js";
export const newGameHandler = () => {
  gameBlock.addEventListener("click", startGameHandler);

  const gameResultElem = document.querySelector(".main__result");

  gameResultElem.textContent = `WINNER : `;

  for (let item of gameItems) {
    item.removeAttribute("data-icon");
    item.classList.remove("blur");
    item.classList.remove("win");
    item.textContent = "";
    modifyX(0);
    count = 0;
    // index = 0;
  }
};
