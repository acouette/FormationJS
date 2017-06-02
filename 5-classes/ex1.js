class Ship {
  constructor(positions) {
    this.positions = positions;
    this.shipState = {};
    for (let i = 0; i < this.positions.length; i++) {
      this.shipState[this.positions[i].x] = this.shipState[this.positions[i].x] || {};
      this.shipState[this.positions[i].x][this.positions[i].y] = 'ok';
    }
  }

  isShipAt(x, y) {
    return this.shipState[x] && this.shipState[x][y];
  }
}

class Board {

  constructor(ships) {
    this.ships = ships;
  }

  isShipAt(x, y) {
    return this.ships.filter(s => s.isShipAt(x, y)) > 0;
  }

}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const player1 = new Player('Dylan');
const ships = [new Ship([{ x: 4, y: 2 }, { x: 4, y: 3 }]),
  new Ship([{ x: 10, y: 4 }, { x: 11, y: 4 }, { x: 12, y: 4 }]),
  new Ship([{ x: 5, y: 10 }, { x: 5, y: 11 }, { x: 5, y: 12 }])];
const board = new Board(15, 15, ships);

let state = {
  board,
  player: player1
};

rl.on('line', (input) => {

  const positions = input.split(' ');

  const shipAt = board.isShipAt(positions[0], positions[1]);
  console.log('touched : ' + shipAt);

  if (false) {
    console.log('you win');
    rl.close();
  }
  console.log('current word : ' + state.currentProgress);

});



