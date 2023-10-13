import { checkForWin } from "./CheckWin.js";
import { endOfGame } from "./EndGame.js";
import { gameItemsMatrix } from "../Utilities/DOMitems.js";
export function updateGameArr() {
  const newArr = gameItemsMatrix.map((item) => {
    return item.map((elem) => elem.getAttribute("data-icon"));
  });

  const resultIndexes = checkForWin(newArr);
  endOfGame(resultIndexes);
}
