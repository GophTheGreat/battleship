import Gameboard from './gameboard';

export default function Player(boardlength, boardwidth, humanOrCPU) {
  const player = {
    gameboard: Gameboard(boardlength, boardwidth),
    isTurn: false,
    humanOrCPU,
  };

  return player;
}
