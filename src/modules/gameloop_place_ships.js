import Ship from './ship';

export default function glPlaceShip() {
  const ships = [];
  ships.push(Ship(5)); // Carrier
  ships.push(Ship(4)); // Battleship
  ships.push(Ship(3)); // Destroyer
  ships.push(Ship(3)); // Submarine
  ships.push(Ship(2)); // Patrol Boat
};
