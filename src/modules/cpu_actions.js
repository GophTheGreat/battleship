/* eslint-disable import/no-cycle */
import { glPlaceShip } from './gameloop_place_ships';

import {
  cpuGrid, humGrid,
} from './dom';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function cpuPlaceShip() {
  console.log('placing CPU ship');
  let status = '';
  while (status !== 'done') {
    const row = getRandomInt(cpuGrid.length);
    const column = getRandomInt(cpuGrid.width);
    const coordinate = [row, column];
    let orientation;
    switch (getRandomInt(2)) {
      case 0:
        orientation = 'Vertical';
        break;
      case 1:
        orientation = 'Horizontal';
        break;
      default:
        orientation = 'Vertical';
        break;
    }
    status = glPlaceShip(cpuGrid, coordinate, orientation, 'cpu');
    console.log(status);
  }
}

export function cpuTakeTurn() {
  let status = 'Invalid attack';
  let row = getRandomInt(cpuGrid.length);
  let column = getRandomInt(cpuGrid.width);
  let coordinate = [row, column];
  while (status === 'Invalid attack') {
    row = getRandomInt(cpuGrid.length);
    column = getRandomInt(cpuGrid.width);
    coordinate = [row, column];
    status = humGrid.receiveAttack(coordinate);
  }
}
