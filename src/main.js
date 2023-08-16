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
      // We push nulls into each grid space to mark them empty
      for (let i = 0; i < this.length; i += 1) {
        const row = [];
        for (let j = 0; j < this.width; j += 1) {
          row.push(null);
        }
        this.grid.push(row);
      }
    },

    placeShip(ship, position, orientation) {
      const column = position[0];
      const row = position[1];
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
        id = 0;
      }

      // Place the ship (vertical)
      if (orientation === 'vertical') {
        for (let i = 0; i < ship.length; i += 1) {
          this.grid[column][row + i] = id;
        }
      // Place the ship (horizontal)
      } else {
        for (let i = 0; i < ship.length; i += 1) {
          this.grid[column + i][row] = id;
        }
      }
      return '';
    },

    checkValidity(position) {
      const column = position[0];
      const row = position[1];
      if (typeof column !== 'number' || typeof row !== 'number') {
        return 'Invalid position';
      }
      if (column < 0 || row < 0) {
        return 'Invalid position';
      }
      if (column > this.length || row > this.width) {
        return 'Invalid position';
      }
      return '';
    },

    receiveAttack(position) {
      if (this.checkValidity(position) === 'Invalid position') {
        return 'Invalid position';
      }
      const column = position[0];
      const row = position[1];
      const loc = this.grid[column][row];
      // Filter through unmarked grids, marked grids, and ships
      if (loc !== null) {
        if (loc === 'miss' || loc === 'hit') {
          // Invalid attack. Have them redo the attack
          return 'Invalid attack';
        }
        // Else we have a ship and its ID is the mark
        this.ships[loc].hit();
        this.grid[column][row] = 'hit';
        return `Hit on ${this.ships[loc]}!`;
      }
      // Else paint a miss
      this.grid[column][row] = 'miss';
      return 'Miss';
    },
  };

  gameboard.initGrid();

  return gameboard;
}

export { Ship, Gameboard };
