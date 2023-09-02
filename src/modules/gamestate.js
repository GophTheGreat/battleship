export default function Gamestate() {
  const gamestate = {
    gamestates: ['pregame', 'playerPlaceShip', 'cpuPlaceShip', 'playerTurn', 'cpuTurn', 'playerVictory', 'cpuVictory'],
    state: 'pregame',
    gameover: false,

    set(value) {
      if (this.gamestates.includes(value)) {
        this.state = value;
      } else {
        console.error(`Invalid state:  ${value}`);
      }
    },
  };

  return gamestate;
}
