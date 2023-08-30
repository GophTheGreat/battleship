/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
import Gameboard from './gameboard';
import Ship from './ship';
import Player from './player';

// Logical grids where all the data is stored
let humGrid;
let cpuGrid;

// Visual grids which just reflect the logical grids
let humGridVisual;
let cpuGridVisual;

let shipPlacementOrientation = 'Vertical';

const humGridHTML = document.getElementById('grid1');
const cpuGridHTML = document.getElementById('grid2');

let gamestate = null;
let shipLength = 3;
let shipsRemaining = 5;
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
  const coordinate = JSON.parse(cell.getAttribute('data-position'));
  console.log(coordinate);
  // depending on the game's state
  // do stuff with the input
  if (gamestate === 'playerPlaceShip' && cell.getAttribute('data-boardtype') === 'hum') {
    humGrid.placeShip(Ship(shipLength), coordinate, shipPlacementOrientation);
    updateVisualGrid(humGridVisual, humGrid);
  }

  if (gamestate === 'playerTurn' && cell.getAttribute('data-boardtype') === 'cpu') {
    console.log(cpuGrid.receiveAttack(JSON.parse(coordinate)));
    updateVisualGrid(humGridVisual, humGrid);
    updateVisualGrid(cpuGridVisual, cpuGrid);
  }
}

function previewShipHighlightHelperOn(cell) {
  cell.style.backgroundColor = 'gold';
}

function previewShipHighlightHelperOff(cell) {
  cell.style.backgroundColor = 'white';
}

function previewShip(e) {
  // First figure out mathematically which cells to draw the preview on
  // If the preview is invalid, don't draw it
  // If it's valid draw it
  const cell = e.target;
  const coordinate = JSON.parse(cell.getAttribute('data-position'));
  const row = coordinate[0];
  const column = coordinate[1];
  const childID = row * humGrid.length + column;
  // The following is for calculating spillover
  // It's just so we can use the same calculation
  // as the normal childID
  const childVertCalc = column * humGrid.width + row;

  console.log(`Firing on on ${coordinate}`);

  // Spillover and protection for the preview
  switch (shipPlacementOrientation) {
    case 'Horizontal':
      if ((childID % humGrid.length) + shipLength <= humGrid.length && gamestate === 'playerPlaceShip') {
        for (let i = 0; i < shipLength; i += 1) {
          console.log(`${row * humGrid.length + column + i} is on`);
          const ney = humGridHTML.childNodes[childID + i];
          previewShipHighlightHelperOn(ney);
        }
      }
      break;
    case 'Vertical':
      if ((childVertCalc % humGrid.width) + shipLength <= humGrid.width && gamestate === 'playerPlaceShip') {
        for (let i = 0; i < shipLength; i += 1) {
          // console.log(row * humGrid.length);
          console.log(`${row * i * humGrid.length + column} is on`);
          const ney = humGridHTML.childNodes[childID + (i * humGrid.width)];
          previewShipHighlightHelperOn(ney);
        }
      }
      break;
    default:
      break;
  }
}

function previewShipOff(e) {
  const cell = e.target;
  const coordinate = JSON.parse(cell.getAttribute('data-position'));
  const row = coordinate[0];
  const column = coordinate[1];
  const childID = row * humGrid.length + column;
  // The following is for calculating spillover
  // It's just so we can use the same calculation
  // as the normal childID
  const childVertCalc = column * humGrid.width + row;
  console.log(`Firing off on ${coordinate}`);

  // Spillover and protection for the preview
  switch (shipPlacementOrientation) {
    case 'Horizontal':
      if ((childID % humGrid.length) + shipLength <= humGrid.length && gamestate === 'playerPlaceShip') {
        for (let i = 0; i < 3; i += 1) {
          console.log(`${row * humGrid.length + column + i} is off`);
          const ney = humGridHTML.childNodes[childID + i];
          previewShipHighlightHelperOff(ney);
        }
      }
      break;
    case 'Vertical':
      if ((childVertCalc % humGrid.width) + shipLength <= humGrid.width && gamestate === 'playerPlaceShip') {
        for (let i = 0; i < shipLength; i += 1) {
          // console.log(row * humGrid.length);
          console.log(`${row * i * humGrid.length + column} is on`);
          const ney = humGridHTML.childNodes[childID + (i * humGrid.width)];
          previewShipHighlightHelperOff(ney);
        }
      }
      break;
    default:
      break;
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
      cell.setAttribute('data-boardtype', 'cpu');
      cell.setAttribute('data-position', `[${i}, ${j}]`);
      cell.addEventListener('click', handleInput);
      // cell.addEventListener('mouseover', previewShip);
      // cell.addEventListener('mouseout', previewShipOff);
      cell.addEventListener('mouseover', (event) => {
        if (gamestate === 'playerTurn') { event.target.style.backgroundColor = 'red'; }
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

function makePlayerGrid(gridHTML, logicalGrid) {
  const grid = makeGrid(gridHTML, logicalGrid);
  grid.forEach((array) => {
    array.forEach((cell) => {
      cell.addEventListener('mouseover', previewShip);
      cell.addEventListener('mouseout', previewShipOff);
      cell.setAttribute('data-boardtype', 'hum');
    });
  });
  return grid;
}

function deleteChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function resetGame() {
  // THE PLAN
  // 1. Clear existing gameboards
  // 2. Reset buttons and other UI elements
  // 3. Initiate new gameboards
  // 4. Begin in "placeship" phase
  // END PLAN

  // 1. Clear existing gameboards
  const grids = Array.from(document.getElementsByClassName('grid'));
  grids.forEach(deleteChildren);

  // 2. Reset buttons and other UI elements
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

  // 3. Initiate new gameboards
  const playerHum = Player(8, 8, 'human');
  humGrid = playerHum.gameboard;
  playerHum.isTurn = true;
  const playerCPU = Player(8, 8, 'cpu');
  cpuGrid = playerCPU.gameboard;

  humGridVisual = makePlayerGrid(humGridHTML, humGrid);
  cpuGridVisual = makeGrid(cpuGridHTML, cpuGrid);

  // 4. Begin in "placeship" phase
  gamestate = 'playerPlaceShip';
  console.log(gamestate);

  // Prompt the player for to make a ship

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
