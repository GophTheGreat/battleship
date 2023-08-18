/* eslint-disable no-param-reassign */
import Gameboard from './gameboard';
import Ship from './ship';
import Player from './player';

const humGridHTML = document.getElementById('grid1');
const cpuGridHTML = document.getElementById('grid2');

function makeGrid(gridHTML, logicalGrid) {
  const visualGrid = [];

  // The magic number should be the width of the grid on the page
  const magic = 700;
  const cellLength = magic / logicalGrid.length;
  const cellWidth = magic / logicalGrid.width;

  for (let i = 0; i < logicalGrid.length; i += 1) {
    visualGrid[i] = [];
    for (let j = 0; j < logicalGrid.width; j += 1) {
      visualGrid[i][j] = null;
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
  gridHTML.style.display = 'grid';
  gridHTML.style.gridTemplateColumns = `repeat(${logicalGrid.length}, 1fr)`;
  gridHTML.style.gridTemplateRows = `repeat(${logicalGrid.width}, 1fr)`;
  gridHTML.style.width = `${logicalGrid.length * (cellLength + 2 * 2)}px`;
  gridHTML.style.height = `${logicalGrid.width * (cellWidth + 2 * 2)}px`;
  console.log(visualGrid);
  return visualGrid;
}

export default function init() {
  let playerHum = Player(5, 5, 'human');
  const humGrid = playerHum.gameboard;
  playerHum.isTurn = true;
  let playerCPU = Player(3, 3, 'cpu');
  const cpuGrid = playerCPU.gameboard;

  const humGridVisual = makeGrid(humGridHTML, humGrid);
  const cpuGridVisual = makeGrid(cpuGridHTML, cpuGrid);

  
}
