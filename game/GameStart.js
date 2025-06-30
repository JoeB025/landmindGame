const Game = require('./Game');
const Player = require('./Player');
const Board = require('./Board');

const boardSize = 8;
const player = new Player();
const board = new Board(boardSize);
const game = new Game(board, player);

game.start();
