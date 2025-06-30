class Game {
  constructor(board, player) {
    this.board = board;
    this.player = player;
    this.landmineHit = 0;
    this.isWon = false;
    this.isLost = false;
  }


  start() {
    console.log("----------------------------------------------------------------")
    console.log("Welcome to the chess game that isn't really chess. Try not to blow up...!")
    console.log("Rules:")
    console.log("")
    console.log("The objective is to avoid landing on landmines and reach the exit on the opposite side of the board.")
    console.log("If you hit more than 2 landmines, you blow yourself to bits and unfortunately, lose the game.")
    console.log("")
    console.log("You may enter the following keys to move 1 space in the following directions:")
    console.log("U or u (up)")
    console.log("D or d (down)")
    console.log("L or l (left)")
    console.log("R or r (right)")
    console.log("")
    console.log("Good Luck, and may Math.random() have mercy on your soul!")
    this.displayBoardLocation();


    process.stdin.on('data', (input) => {
      const direction = input.toString().trim().toUpperCase();
      const arr = ["U", "D", "L", "R"]
      
      arr.includes(direction) ? this.movePlayer(direction) : console.log("Please Enter U, D, L or R to move.")
      
      if (this.isWon || this.isLost) {
        process.stdin.pause();
    }
  })
}




movePlayer(direction) {
  this.player.move(direction, this.board.size)
  const position = this.player.position;
  let movement; 

  if (direction === 'U') {
    movement = 'Up 1 space'
  } else if (direction === 'D') {
    movement = 'Down 1 space'
  } else if (direction === 'L') {
    movement = 'Left 1 space'
  } else if (direction === 'R') {
    movement = 'Right 1 space'
  }


  this.board.isLandmine(position) ? 
  this.landmineHit++ && console.log("You hit a landmine! You have hit", this.landmineHit, "landmines.") : console.log("You moved", movement, "safely.")

  this.displayBoardLocation();
  this.checkGameStatus();
}


displayBoardLocation() {
  const { x, y } = this.player.position;

  if (this.landmineHit === 0 && this.player.position.x === 0 && this.player.position.y === 0) {
    console.log("----------------------------------------------------------------")
    console.log("You are at the starting position [0, 0].");
    console.log("----------------------------------------------------------------")
  } else if (this.landmineHit > 0 && this.player.position !== "[0, 0]") {
    console.log("----------------------------------------------------------------")
    console.log(`Player is now at position [${x}, ${y}]`);
    console.log(`💣 Landmines hit: ${this.landmineHit} 💣`);   
    console.log("----------------------------------------------------------------")
  } else {
    console.log("----------------------------------------------------------------")
    console.log(`Player is now at position [${x}, ${y}]`);
    console.log("0 landmines hit.");
    console.log("----------------------------------------------------------------")
  }
}

checkGameStatus() {
  if (this.landminesHit > 2) {
    this.isLost = true;
    console.log("💣 You hit over 2 landmines. Game over! 💣");
    console.log("🙀")
    console.log("----------------------------------------------------------------")
  } else if (this.player.position.y === this.board.size - 1) {
    this.isWon = true;
    console.log("🏆 You reached the top of the board 🏆");
    console.log("🏆🏆🏆 Congratulations! 🏆🏆🏆")
    console.log("----------------------------------------------------------------")
    console.log("To play again, type >>> node GameStart.js <<< into the terminal")
    console.log("----------------------------------------------------------------")
  }
}


}




module.exports = Game 

// export the function Game
// function can then be required in other files (playGame.js)



