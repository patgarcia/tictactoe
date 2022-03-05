const squares = document.querySelectorAll('.square'); // NodeList
let gameWon = false;


const markSquare = ev => {
  if (!ev.target.innerText) {
    ev.target.innerText = ['X', '0'][Math.round(Math.random())];
    const rowsandcols = getRowsColsDiag();
    console.log(rowsandcols.map(combo => testCombo(combo)))
    const comboBooleansArr = rowsandcols.map(combo => testCombo(combo))
    gameWon = comboBooleansArr.some(val => val)
    console.log("has the game been won yet? ", gameWon)
  }
};

const getVals = nodeList =>
  Array.from(nodeList).map(square => square.innerText);

const addListeners = square => square.addEventListener('click', markSquare);

squares.forEach(addListeners);

winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function testCombo(arr) {
  if (arr.includes('')) {
    return false;
  }
  return arr[0] === arr[1] && arr[1] === arr[2];
}

const getRowsColsDiag = () => {
  const values = getVals(squares);
  return winningCombo.map(indices => [
    values[indices[0]],
    values[indices[1]],
    values[indices[2]],
  ]);
};
