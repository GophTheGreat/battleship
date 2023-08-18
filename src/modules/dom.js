import Gameboard from './gameboard';
import Ship from './ship';
import Player from './player';

const humGridHTML = document.getElementById('grid1');
const cpuGridHTML = document.getElementById('grid2');

function makeGrid(gridHTML, logicalGrid) {
  const visualGrid = [];
  for (let i = 0; i < logicalGrid.length; i += 1) {
    visualGrid[i] = [];
    for (let j = 0; j < logicalGrid.width; i += 1) {
      visualGrid[i][j] = document.createElement('div');
      const cell = visualGrid[i][j];
      cell.style.border = '2px solid darkgrey';
      cell.class = 'cell';
      gridHTML.appendChild(cell);
      // set up the cells to listen for input
      // cell.addEventListener('click', setPos);
      // cell.setAttribute('data-position', `[${i}, ${j}]`);
    }
  }
  return visualGrid;
}

export default function init() {
  let playerHum = Player(3, 3, 'human');
  const humGrid = playerHum.gameboard;
  playerHum.isTurn = true;
  let playerCPU = Player(3, 3, 'cpu');
  const cpuGrid = playerCPU.gameboard;

  const humGridVisual = makeGrid(humGridHTML, humGrid);
  const cpuGridVisual = makeGrid(cpuGridHTML, cpuGrid);

  
}
