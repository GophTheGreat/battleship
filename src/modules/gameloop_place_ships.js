import Ship from './ship';
import { cpuPlaceShips } from './cpu_actions';

const humShips = [];
const cpuShips = [];

export function glPlaceShip(grid, coordinate, shipPlacementOrientation, boardType) {
  console.log('calling glplaceship');
  let ships;
  if (boardType === 'hum') {
    ships = humShips;
  } else {
    ships = cpuShips;
  }
  console.log(ships);
  const curShip = ships[ships.length - 1];
  const shipPlaced = grid.placeShip(curShip, coordinate, shipPlacementOrientation);
  if (shipPlaced === '') {
    ships.pop();
  } else {
    return 'glplaceship error';
  }
  return 'done';
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
