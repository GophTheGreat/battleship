import Ship from './modules/ship';
import Gameboard from './modules/gameboard';
import Player from './modules/player';

test('Make a ship and check that it was created properly', () => {
  const shipLength = 10;
  const ship = Ship(shipLength);

  expect(ship.length).toBe(shipLength);
  expect(ship.hits).toBe(0);
  expect(ship.isSunk()).toBe(false);
});

test('Incrementing ship hits', () => {
  const shipLength = 10;
  const ship = Ship(shipLength);

  expect(ship.hits).toBe(0);
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(2);
});

test('Create a gameboard', () => {
  const length = 8;
  const width = 7;
  const gameboard = Gameboard(length, width);

  const testGrid = [];

  for (let i = 0; i < length; i += 1) {
    const row = [];
    for (let j = 0; j < width; j += 1) {
      row.push(null);
    }
    testGrid.push(row);
  }

  expect(gameboard.length).toBe(length);
  expect(gameboard.width).toBe(width);
  expect(gameboard.grid).toEqual(testGrid);
});

test('Placing a ship vertically on the gameboard', () => {
  const length = 3;
  const width = 3;
  const shipLength = 3;
  const shipOrientation = 'vertical';
  const position = [0, 0];
  const gameboard = Gameboard(length, width);

  const ship = Ship(shipLength);

  gameboard.placeShip(ship, position, shipOrientation);

  expect(gameboard.grid).toEqual([[0, 0, 0], [null, null, null], [null, null, null]]);
});

test('Placing a ship horizontally on the gameboard', () => {
  const length = 3;
  const width = 3;
  const shipLength = 3;
  const shipOrientation = 'horizontal';
  const position = [0, 0];
  const gameboard = Gameboard(length, width);

  const ship = Ship(shipLength);

  gameboard.placeShip(ship, position, shipOrientation);

  expect(gameboard.grid).toEqual([[0, null, null], [0, null, null], [0, null, null]]);
});

test('Placing invalid ships on the gameboard', () => {
  const length = 3;
  const width = 3;
  const shipLength = 3;
  const shipOrientation = 'vertical';
  const position1 = [-1, -1];
  const position2 = [5, 2];
  const position3 = [1, -1];
  const position4 = [2, 'j'];
  const gameboard = Gameboard(length, width);

  const ship = Ship(shipLength);

  expect(gameboard.placeShip(ship, position1, shipOrientation)).toBe('Invalid position');
  expect(gameboard.placeShip(ship, position2, shipOrientation)).toBe('Invalid position');
  expect(gameboard.placeShip(ship, position3, shipOrientation)).toBe('Invalid position');
  expect(gameboard.placeShip(ship, position4, shipOrientation)).toBe('Invalid position');
});

test('Receiving attacks on the gameboard', () => {
  const length = 3;
  const width = 3;
  const shipLength = 3;
  const shipOrientation = 'vertical';
  const position = [0, 0];
  const attack1 = [0, 0];
  const attack2 = [1, 1];
  const attack3 = [0, 2];
  const attackInvalid1 = [0, 2];
  const attackInvalid2 = [-1, 2];
  const gameboard = Gameboard(length, width);
  const ship = Ship(shipLength);

  gameboard.placeShip(ship, position, shipOrientation);

  gameboard.receiveAttack(attack1);
  gameboard.receiveAttack(attack2);
  gameboard.receiveAttack(attack3);
  expect(gameboard.receiveAttack(attackInvalid1)).toBe('Invalid attack');
  expect(gameboard.receiveAttack(attackInvalid2)).toBe('Invalid position');

  expect(gameboard.grid).toEqual([['hit', 0, 'hit'], [null, 'miss', null], [null, null, null]]);
  expect(gameboard.ships[0].hits).toBe(2);
});

test('Sinking the last ship', () => {
  const length = 3;
  const width = 3;
  const shipLength = 2;
  const shipOrientation = 'vertical';
  const position = [0, 0];
  const attack1 = [0, 0];
  const attack2 = [0, 1];
  const gameboard = Gameboard(length, width);
  const ship = Ship(shipLength);

  gameboard.placeShip(ship, position, shipOrientation);

  expect(gameboard.receiveAttack(attack1)).toBe('Hit on 0!');
  expect(gameboard.receiveAttack(attack2)).toBe('Hit on 0! All ships sunk!');
});

test('Creating a player (who owns a gameboard)', () => {
  const length = 3;
  const width = 3;
  const player = Player(length, width);

  expect(player.gameboard.length).toBe(3);
});

test('Testing turn switching', () => {
  const length = 3;
  const width = 3;
  const player1 = Player(length, width, 'human');
  const player2 = Player(length, width, 'computer');

  expect(player1.isTurn).toBe(false);
  expect(player2.isTurn).toBe(false);
  player1.isTurn = true;
  expect(player1.isTurn).toBe(true);
});
