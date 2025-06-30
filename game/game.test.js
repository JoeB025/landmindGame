const Game = require('./Game');
const Player = require('./Player');
const Board = require('./Board');


describe("Game tests", () => {


beforeEach(() => {
  player = new Player();
  board = new Board(8);
  game = new Game(board, player)
});

test('Player starts at the bottom-left of the board', () => {
  expect(player.position).toEqual({ x: 0, y: 0 });
  expect(player.position.x).toBe(0);
  expect(player.position.y).toBe(0);
})

test('Player can move up one space', () => {
  game.movePlayer('U');
  expect(player.position).toEqual({ x: 0, y: 1 });
  expect(player.position.x).toBe(0);
  expect(player.position.y).toBe(1);
})
test('Player can move right one space', () => {
  game.movePlayer('R');
  expect(player.position).toEqual({ x: 1, y: 0 });
  expect(player.position.x).toBe(1);
  expect(player.position.y).toBe(0);
})
test('Player cannot move Left one space at the start of the game', () => {
  game.movePlayer('L');
  expect(player.position).toEqual({ x: 0, y: 0 });
  expect(player.position.x).toBe(0);
  expect(player.position.y).toBe(0);
  expect(player.position.x).not.toBe(-1)
})
test('Player cannot move Down one space at the start of the game', () => {
  game.movePlayer('D');
  expect(player.position).toEqual({ x: 0, y: 0 });
  expect(player.position.x).toBe(0);
  expect(player.position.y).toBe(0);
  expect(player.position.y).not.toBe(-1)
})
test('Player movements are accurately recorded & updated', () => {
  game.movePlayer('U');
  game.movePlayer('R');
  game.movePlayer('R');
  game.movePlayer('R');
  expect(player.position).toEqual({ x: 3, y: 1 });
  expect(player.position.x).toBe(3);
  expect(player.position.y).toBe(1);
})
test('Players cannot leave the board.', () => {
  game.movePlayer('U');
  game.movePlayer('R');
  game.movePlayer('L');
  game.movePlayer('L');
  game.movePlayer('L');
  game.movePlayer('L');
  game.movePlayer('U');
  game.movePlayer('U');
  game.movePlayer('R');
  game.movePlayer('U');
  expect(player.position).toEqual({ x: 1, y: 4 });
  expect(player.position.x).toBe(1);
  expect(player.position.y).toBe(4);
  expect(player.position.x).not.toBe(-2)
})
test('Player wins the game by reaching the top', () => {
  player.position = { x: 0, y: 7 };
  game.checkGameStatus();
  expect(game.isWon).toBe(true);
});
test('Player loses the game by hitting too many landmines', () => {
  game.landminesHit = 3;
  game.checkGameStatus();
  expect(game.isLost).toBe(true);
});
test('Player hits a single landmine', () => {
  const testLandmine = { x: 0, y: 1 };
  board.landmines.add(`${testLandmine.x},${testLandmine.y}`);
  game.movePlayer('U');
  expect(player.position.x).toBe(0);
  expect(player.position.y).toBe(1);
  expect(game.landmineHit).toBe(1);
});
test('Player moves 3 times hitting landmines at positions [0,1], [1,1] and [2,1]', () => {
  const testLandmineOne = { x: 0, y: 1 };
  const testLandmineTwo = { x: 1, y: 1 };
  const testLandmineThree = { x: 2, y: 1 };
  board.landmines.add(`${testLandmineOne.x},${testLandmineOne.y}`);
  board.landmines.add(`${testLandmineTwo.x},${testLandmineTwo.y}`);
  board.landmines.add(`${testLandmineThree.x},${testLandmineThree.y}`);
  game.movePlayer('U'); 
  expect(player.position.x).toBe(0);
  expect(player.position.y).toBe(1);
  expect(game.landmineHit).toBe(1);
  game.movePlayer('R'); 
  expect(player.position.x).toBe(1);
  expect(player.position.y).toBe(1);
  expect(game.landmineHit).toBe(2);
  game.movePlayer('R'); 
  expect(player.position.x).toBe(2);
  expect(player.position.y).toBe(1);
  expect(game.landmineHit).toBe(3);
});
})