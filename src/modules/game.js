import { cpuTakeTurn, cpuPlaceShip } from './cpu_actions';
import {
  previewShip, previewShipOff,
  previewAttack, previewAttackOff,
  uiAddListener, uiRemoveListener,
  updateUI,
} from './dom';

import { glPlaceShip } from './gameloop_place_ships';

export default function Game(humGrid, humGridVisual, cpuGrid, cpuGridVisual) {
  const game = {
    gamestates: ['pregame', 'playerPlaceShip', 'cpuPlaceShip', 'playerTurn', 'cpuTurn', 'playerVictory', 'cpuVictory'],
    state: 'pregame',
    gameover: false,
    humGrid,
    humGridVisual,
    cpuGrid,
    cpuGridVisual,
    shipCount: 5,

    setState(value) {
      if (this.gamestates.includes(value)) {
        this.state = value;
      } else {
        console.error(`Invalid state:  ${value}`);
      }
    },

    advance() {
      // Game outline:
      // pregame
      // Player places 5 ships
      // CPU places 5 ships
      // Loop until one team is out of ships {
      //     Player turn
      //     CPU turn
      // }
      // Victory state

      console.log(`Current state is: ${this.state}`);
      // pregame step
      if (this.state === 'pregame') {
        this.setState('playerPlaceShip');
        updateUI();
        this.processCurrentState();
        return;
      }

      // placeship step
      if (this.state === 'playerPlaceShip') {
        // Check the ship count
        if (humGrid.ships.length >= this.shipCount) {
          uiRemoveListener(previewShip, previewShipOff, this.humGridVisual);
          console.log('Advancing game state to cpuPlaceShip');
          previewShipOff();
          this.setState('cpuPlaceShip');
          updateUI();
          this.processCurrentState();
          return;
        }
        updateUI();
        this.processCurrentState();
        return;
      }

      // cpu placeship step
      if (this.state === 'cpuPlaceShip') {
        if (cpuGrid.ships.length >= this.shipCount) {
          console.log('Advancing game state to playerTurn');
          this.setState('playerTurn');
          updateUI();
          this.processCurrentState();
          return;
        }
        this.processCurrentState();
        return;
      }

      // Turn taking loop
      if (this.state === 'playerTurn') {
        if (cpuGrid.checkAllDead() === true) {
          console.log('playerVictory');
          this.setState('playerVictory');
          uiRemoveListener(previewAttack, previewAttackOff, this.humGridVisual);
          previewAttackOff();
          updateUI();
          this.processCurrentState();
          return;
        }
        console.log('Advancing game state to cpuTurn');
        this.setState('cpuTurn');
        updateUI();
        this.processCurrentState();
        return;
      }

      if (this.state === 'cpuTurn') {
        if (humGrid.checkAllDead() === true) {
          console.log('cpuVictory');
          this.setState('cpuVictory');
          uiRemoveListener(previewAttack, previewAttackOff, this.cpuGridVisual);
          previewAttackOff();
          updateUI();
          this.processCurrentState();
          return;
        }
        console.log('Advancing game state to playerTurn');
        this.setState('playerTurn');
        updateUI();
        this.processCurrentState();
      }
    },

    processCurrentState() {
      console.log(`Processing state ${this.state}`);
      // gamestates: ['pregame', 'playerPlaceShip', 'cpuPlaceShip', 'playerTurn',
      // 'cpuTurn', 'playerVictory', 'cpuVictory'],
      switch (this.state) {
        case 'pregame':
          this.advance();
          break;
        case 'playerPlaceShip':
          // activate the UI for placing ships
          uiAddListener(previewShip, previewShipOff, this.humGridVisual);
          // await input from dom.js > handleInput()
          // do not advance from here
          return;
        case 'cpuPlaceShip':
          cpuPlaceShip();
          updateUI();
          break;
        case 'playerTurn':
          uiAddListener(previewAttack, previewAttackOff, this.cpuGridVisual);
          // await input from dom.js > handleInput()
          // do not advance from here
          return;
        case 'cpuTurn':
          cpuTakeTurn();
          updateUI();
          break;
        default:
          return;
      }
      this.advance();
    },
  };

  return game;
}
