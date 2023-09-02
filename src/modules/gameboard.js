export default function Gameboard(length, width) {
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
      console.log(`calling placeship`);
      const row = position[0];
      const column = position[1];
      // Check validity of position
      if (this.checkValidity(position, ship.length, orientation) === 'Invalid position') {
        return 'Invalid position';
      }

      // Store the ship object
      this.ships.push(ship);

      let id;

      // Increment shipIDs
      if (this.shipIDs.length !== 0) {
        const last = this.shipIDs.length - 1;
        this.shipIDs.push(this.shipIDs[last] + 1);
        id = this.shipIDs[this.shipIDs.length - 1];
      } else {
        this.shipIDs.push(0);
        id = 0;
      }

      console.log('placing the ship');
      // Place the ship (horizontal)
      if (orientation === 'Horizontal') {
        for (let i = 0; i < ship.length; i += 1) {
          this.grid[row][column + i] = id;
        }
      // Place the ship (vertical)
      } else {
        for (let i = 0; i < ship.length; i += 1) {
          this.grid[row + i][column] = id;
        }
      }
      console.log('ship placed');
      console.log(this.grid);
      return '';
    },

    checkValidity(position, shipLength, orientation) {
      const row = position[0];
      const column = position[1];
      console.log(`checkvalid on ${row},${column}`);
      // Sanity checks
      if (typeof column !== 'number' || typeof row !== 'number') {
        return 'Invalid position';
      }
      if (column < 0 || row < 0) {
        return 'Invalid position';
      }
      if (column > this.length - 1 || row > this.width - 1) {
        return 'Invalid position';
      }

      // Horizontal
      if (orientation === 'Horizontal') {
        for (let i = 0; i < shipLength; i += 1) {
          // Position check
          if (column + i > this.length - 1) {
            console.log('invalid h');
            return 'Invalid position';
          }

          // Occupation check
          if (this.grid[row][column + i] !== null) {
            console.log('invalid occupied');
            return 'Invalid position';
          }
        }
      }

      // Vertical check
      if (orientation === 'Vertical') {
        for (let i = 0; i < shipLength; i += 1) {
          // Position Check
          if (row + i > this.width - 1) {
            console.log('invalid v');
            return 'Invalid position';
          }

          // Occupation check
          if (this.grid[row + i][column] !== null) {
            console.log('invalid occupied');
            return 'Invalid position';
          }
        }
      }

      if (this.grid[row][column] !== null) {
        console.log('invalid occupied');
        return 'Invalid position';
      }
      return '';
    },

    receiveAttack(position) {
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
        // Check after a hit if all ships have been sunk
        if (this.checkAllDead() === true) {
          this.grid[column][row] = 'hit';
          return `Hit on ${this.shipIDs[loc]}! All ships sunk!`;
        }
        this.grid[column][row] = 'hit';
        return `Hit on ${this.shipIDs[loc]}!`;
      }
      // Else paint a miss
      this.grid[column][row] = 'miss';
      return 'Miss';
    },

    checkAllDead() {
      let allDead = false;
      let deadCount = 0;
      const shipCount = this.ships.length;
      this.ships.forEach((e) => {
        if (e.isSunk()) { deadCount += 1; }
      });
      if (deadCount === shipCount) {
        allDead = true;
      }
      console.log(`Dead count = ${deadCount}`);
      return allDead;
    },
  };

  gameboard.initGrid();

  return gameboard;
}
