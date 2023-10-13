const gameBlock = document.querySelector(".main__game-block");

const gameItems = document.querySelectorAll(".main__game-item");
const gameItemsArr = Array.from(gameItems);

const firstThree = gameItemsArr.slice(0, 3);

const secondThree = gameItemsArr.slice(3, 6);

const thirdThree = gameItemsArr.slice(6, 9);

const gameItemsMatrix = [firstThree, secondThree, thirdThree];

const newGameBtn = document.querySelector(".main__btn");

export { gameBlock, gameItems, gameItemsMatrix, newGameBtn };
