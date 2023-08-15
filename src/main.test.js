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

  expect(gameboard.grid).toEqual([[1, 1, 1], [null, null, null], [null, null, null]]);
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

  expect(gameboard.grid).toEqual([[1, null, null], [1, null, null], [1, null, null]]);
});

test('Placing an invalid ship on the gameboard', () => {
  const length = 8;
  const width = 7;
  const shipLength = 3;
  const shipOrientation = 'vertical';
  const position = [-1, -1];
  const gameboard = Gameboard(length, width);

  const ship = Ship(shipLength);

  expect(gameboard.placeShip(ship, position, shipOrientation)).toBe('Invalid position');
});
