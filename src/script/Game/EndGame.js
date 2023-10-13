import { startGameHandler } from "./StartGame.js";
import {
  gameBlock,
  gameItems,
  gameItemsMatrix,
} from "./../Utilities/DOMitems.js";
export function endOfGame([indexes, winner]) {
  if (!indexes) return;

  gameBlock.removeEventListener("click", startGameHandler);

  const gameResultElem = document.querySelector(".main__result");

  gameResultElem.textContent = winner;

  gameItems.forEach((item) => {
    item.classList.add("blur");
  });

  for (let i = 0; i < indexes.length; i++) {
    const arr = indexes[i];
    setTimeout(() => {
      gameItemsMatrix[arr[0]][arr[1]].classList.add("win");
    }, i * 200);
  }
}
