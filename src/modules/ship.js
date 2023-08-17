export default function Ship(length) {
  const ship = {
    length,
    hits: 0,

    hit() { this.hits += 1; },

    isSunk() { return this.hits >= this.length; },
  };
  return ship;
}
