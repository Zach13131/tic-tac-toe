import { startGameHandler } from "./Game/StartGame.js";

import { gameBlock } from "./Utilities/DOMitems.js";
import { newGameHandler } from "./Game/NewGame.js";
import { newGameBtn } from "./Utilities/DOMitems.js";

import "../css/main.css";

gameBlock.addEventListener("click", startGameHandler);

newGameBtn.addEventListener("click", newGameHandler);
