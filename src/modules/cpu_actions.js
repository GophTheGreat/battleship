/* eslint-disable import/no-cycle */
import { glPlaceShip } from './gameloop_place_ships';

import {
  cpuGrid, cpuGridVisual, gamestate, humGrid, humGridVisual, updateVisualGrid,
} from './dom';
import Player from './player';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function cpuPlaceShips() {
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
    status = glPlaceShip(cpuGrid, coordinate, orientation, 'cpu', gamestate);
    console.log(status);
  }
  gamestate.set('playerTurn');
  updateVisualGrid(cpuGridVisual, cpuGrid);
}

export function cpuTakeTurn() {
  let status = 'Invalid Attack';
  const row = getRandomInt(cpuGrid.length);
  const column = getRandomInt(cpuGrid.width);
  const coordinate = [row, column];
  while (status === 'Invalid Attack') {
    status = humGrid.receiveAttack(coordinate);
  }
  gamestate.set('playerTurn');
  updateVisualGrid(humGridVisual, humGrid);
}
