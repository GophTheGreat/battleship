import Ship from './ship';
import { cpuPlaceShips } from './cpu_actions';

const humShips = [];
const cpuShips = [];

export function glPlaceShip(grid, coordinate, shipPlacementOrientation, boardType, gamestate) {
  console.log('calling glplaceship');
  let ships;
  if (boardType === 'hum') {
    ships = humShips;
  } else {
    ships = cpuShips;
  }
  const curShip = ships[ships.length - 1];
  const shipPlaced = grid.placeShip(curShip, coordinate, shipPlacementOrientation);
  if (shipPlaced === '') {
    ships.pop();
  } else {
    return 'glplaceship error';
  }

  console.log(ships);
  // If the player is out of ships to place
  // return 'done'
  if (ships.length === 0) {
    if (gamestate.state !== 'cpuPlaceShip') {
      gamestate.set('cpuPlaceShip');
      cpuPlaceShips();
    } else {
      gamestate.set('playerTurn');
      return 'done';
    }
    console.log(gamestate.state);
  }
  return '';
}

export function createShips() {
  while (humShips.length > 0) {
    humShips.pop();
  }

  while (cpuShips.length > 0) {
    cpuShips.pop();
  }

  humShips.push(Ship(2)); // Patrol Boat
  humShips.push(Ship(3)); // Submarine
  humShips.push(Ship(3)); // Destroyer
  humShips.push(Ship(4)); // Battleship
  humShips.push(Ship(5)); // Carrier

  cpuShips.push(Ship(2)); // Patrol Boat
  cpuShips.push(Ship(3)); // Submarine
  cpuShips.push(Ship(3)); // Destroyer
  cpuShips.push(Ship(4)); // Battleship
  cpuShips.push(Ship(5)); // Carrier
}

export { humShips };
