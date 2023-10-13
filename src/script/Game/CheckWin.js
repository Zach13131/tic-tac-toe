import { count } from "../Variables/Variables";

export function checkForWin(array) {
  let resultIndexes = false;
  let winner = "WINNER : ";
  const firstDiagonal = new Set([array[0][0], array[1][1], array[2][2]]);
  const secondDiagonal = new Set([array[0][2], array[1][1], array[2][0]]);
  for (let i = 0, j = 2; i < 3; i++, j--) {
    const horSet = new Set(array[i]);
    const VerSet = new Set([array[0][i], array[1][i], array[2][i]]);

    if (horSet.size === 1 && !horSet.has(null)) {
      resultIndexes = [
        [i, 0],
        [i, 1],
        [i, 2],
      ];
      winner += horSet.values().next().value;

      // return resultIndexes;
    }

    if (VerSet.size === 1 && !VerSet.has(null)) {
      resultIndexes = [
        [0, i],
        [1, i],
        [2, i],
      ];

      winner += VerSet.values().next().value;
    }
  }
  if (firstDiagonal.size === 1 && !firstDiagonal.has(null)) {
    resultIndexes = [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
    winner += firstDiagonal.values().next().value;
  }
  if (secondDiagonal.size === 1 && !secondDiagonal.has(null)) {
    resultIndexes = [
      [0, 2],
      [1, 1],
      [2, 0],
    ];
    winner += secondDiagonal.values().next().value;
  }

  if (count === 9) {
    console.log("ksldfjkldajfkdjflkdj");
    resultIndexes = true;
    winner = "TIE";
  }
  winner += "!!!";
  return [resultIndexes, winner];
}
