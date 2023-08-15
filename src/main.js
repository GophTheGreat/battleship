function Ship(length) {
  const ship = {
    length,
    hits: 0,

    hit() { this.hits += 1; },

    isSunk() { return this.hits >= this.length; },
  };

  return ship;
}

function Gameboard(length, width) {
  const gameboard = {
    length,
    width,
    grid: [],
    shipIDs: [],
    ships: [],

    initGrid() {
      for (let i = 0; i < this.length; i += 1) {
        const row = [];
        for (let j = 0; j < this.width; j += 1) {
          row.push(null);
        }
        this.grid.push(row);
      }
    },

    placeShip(ship, position, orientation) {
      // Check validity of position
      if (this.checkValidity(position) === 'Invalid position') {
        return 'Invalid position';
      }

      // Store the ship object
      this.ships.push(ship);

      let id;

      // Increment shipIDs
      if (this.shipIDs.length !== 0) {
        const last = this.shipIDs.length - 1;
        this.shipIDs.push(this.shipIDs[last] + 1);
        id = this.shipIDs[last];
      } else {
        this.shipIDs.push(1);
        id = 1;
      }

      // Place the ship (vertical)
      if (orientation === 'vertical') {
        for (let i = 0; i < ship.length; i += 1) {
          this.grid[position[0]][position[1] + i] = id;
        }
      // Place the ship (horizontal)
      } else {
        for (let i = 0; i < ship.length; i += 1) {
          this.grid[position[0] + i][position[1]] = id;
        }
      }
      return '';
    },

    checkValidity(position) {
      if (position[0] < 0 || position[1] < 0) {
        return 'Invalid position';
      }
      if (position[0] > this.length || position[1] > this.width) {
        return 'Invalid position';
      }
      return '';
    },
  };

  gameboard.initGrid();

  return gameboard;
}

export { Ship, Gameboard };
