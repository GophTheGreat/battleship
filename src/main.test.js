const { Ship, Gameboard } = require('./main');

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

  expect(gameboard.length).toBe(length);
  expect(gameboard.width).toBe(width);
});

test('Placing a ship on the gameboard', () => {
  const length = 8;
  const width = 7;
  const shiplength = 3;
  const shipOrientation = 'vertical';
  const gameboard = Gameboard(length, width);

  gameboard.placeShip()
});

test('Placing an invalid ship on the gameboard', () => {
  const length = 8;
  const width = 7;
  const shipLength = 3;
  const shipOrientation = 'vertical';
  const position = [-1, -1];
  const gameboard = Gameboard(length, width);

  expect(gameboard.placeShip(shipLength, shipOrientation, position)).toBe('Invalid location');
});
