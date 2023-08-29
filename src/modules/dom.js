/* eslint-disable no-param-reassign */
import Gameboard from './gameboard';
import Ship from './ship';
import Player from './player';

let humGrid;
let cpuGrid;

let humGridVisual;
let cpuGridVisual;

let shipPlacementOrientation = 'Vertical';

const humGridHTML = document.getElementById('grid1');
const cpuGridHTML = document.getElementById('grid2');

let gamestate = null;
// const gamestates = ['pregame', 'playerPlaceShip', 'cpuPlaceShip', 'playerTurn', 'cpuTurn', 'playerVictory', 'cpuVictory'];

// Updates the visuals like when ships are placed, hit, or sunk
function updateVisualGrid(visualGrid, logicalGrid) {
  console.log('updating visuals');
  // console.log(`Current grid is ${logicalGrid.grid}`);
  for (let i = 0; i < logicalGrid.length; i += 1) {
    for (let j = 0; j < logicalGrid.width; j += 1) {
      visualGrid[i][j].innerHTML = logicalGrid.grid[i][j];
    }
  }
}

export function handleInput(e) {
  const cell = e.target;
  const coordinate = cell.getAttribute('data-position');
  console.log(coordinate);
  // depending on the game's state
  // do stuff with the input
  gamestate = 'playerTurn';

  if (gamestate === 'playerTurn') {
    console.log(cpuGrid.receiveAttack(JSON.parse(coordinate)));
    updateVisualGrid(humGridVisual, humGrid);
    updateVisualGrid(cpuGridVisual, cpuGrid);
  }
}

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
      cell.className = 'cell';
      cell.setAttribute('data-position', `[${i}, ${j}]`);
      cell.addEventListener('click', handleInput);
      cell.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'red';
      });
      cell.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'white';
      });
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

function deleteChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function resetGame() {
  // clear boards

  // begin in "placeship" phase

  // Initiate Gameboards
  const playerHum = Player(8, 8, 'human');
  humGrid = playerHum.gameboard;
  playerHum.isTurn = true;
  const playerCPU = Player(8, 8, 'cpu');
  cpuGrid = playerCPU.gameboard;

  humGridVisual = makeGrid(humGridHTML, humGrid);
  cpuGridVisual = makeGrid(cpuGridHTML, cpuGrid);

  // clear start/reset button
  deleteChildren(document.getElementById('buttonContainer'));

  // Initiate placement buttons
  const buttonContainer = document.getElementById('buttonContainer');
  const verticalButton = document.createElement('button');
  const horizontalButton = document.createElement('button');

  verticalButton.id = 'verticalButton';
  horizontalButton.id = 'horizontalButton';
  verticalButton.className = 'placementButton';
  horizontalButton.className = 'placementButton';
  verticalButton.innerHTML = 'Vertical Placement';
  horizontalButton.innerHTML = 'Horizontal Placement';

  verticalButton.addEventListener('click', () => {
    shipPlacementOrientation = 'Vertical';
    console.log(shipPlacementOrientation);
  });
  buttonContainer.appendChild(verticalButton);

  horizontalButton.addEventListener('click', () => {
    shipPlacementOrientation = 'Horizontal';
    console.log(shipPlacementOrientation);
  });
  buttonContainer.appendChild(horizontalButton);

  // Prompt the player for to make a ship
  // Enter the "Placing a ship" state
  // Let's just place 5 ships pre-determined
  humGrid.placeShip(Ship(5), [0, 0], 'vertical');
  humGrid.placeShip(Ship(4), [2, 2], 'vertical');
  humGrid.placeShip(Ship(3), [2, 3], 'horizontal');
  humGrid.placeShip(Ship(3), [3, 3], 'horizontal');
  humGrid.placeShip(Ship(2), [6, 6], 'horizontal');

  cpuGrid.placeShip(Ship(5), [0, 0], 'vertical');
  cpuGrid.placeShip(Ship(4), [0, 1], 'vertical');
  cpuGrid.placeShip(Ship(3), [3, 3], 'horizontal');
  cpuGrid.placeShip(Ship(3), [2, 3], 'horizontal');
  cpuGrid.placeShip(Ship(2), [6, 6], 'horizontal');

  updateVisualGrid(humGridVisual, humGrid);
  updateVisualGrid(cpuGridVisual, cpuGrid);

  // Start the game loop
}

// Set up a new game
// Create the gameboard
// Prompt player for 5 ships
// Place 5 ships for the opponent
// Start the game loop
export default function init() {
  // Initiate game state
  gamestate = 'pregame';

  // Prompt player to start
  // do something to make the player hit a button to start the game
  const startButton = document.createElement('button');
  startButton.innerHTML = 'Start game!';
  startButton.addEventListener('click', resetGame);
  const buttonContainer = document.getElementById('buttonContainer');
  buttonContainer.appendChild(startButton);
}
