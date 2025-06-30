class Game {
  constructor(board, player) {
    this.board = board;
    this.player = player;
    this.landmineHit = 0;
    this.isWon = false;
    this.isLost = false;
  }


  start() {
    console.log("Welcome to the chess game that isn't really chess. Try not to blow up...!")
    // Welcome message
    this.displayBoardLocation();
    // display current location on the board.
    // starting location should always be [0, 0] 
    // displays the current number of landmines hit


    process.stdin.on('data', (input) => {
      const direction = input.toString().trim().toUpperCase();
      // getting user input and converting to uppercase to make it case insensitive
      // trimming any empty whitespace so input is just a single character
      const arr = ["U", "D", "L", "R"]
      // array of directions. Used in the below ternary statement for comparison / checking
      
      arr.includes(direction) ? this.movePlayer(direction) : console.log("Please Enter U, D, L or R to move.")
      // ternary statement to move a player providing they pressed U, D, L or R
      // used the movePlayer function created below
      
      if (this.isWon || this.isLost) {
        process.stdin.pause();
        // stops the game when a player wins / loses
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
  // if statement to check the direction the player enters. 


  this.board.isLandmine(position) ? 
  this.landmineHit++ && console.log("You hit a landmine! You have hit", this.landmineHit, "landmines.") : console.log("You moved", movement, "safely.")

  this.displayBoardLocation();
  this.checkGameStatus();
}

  // logic to: move the player around the board
  // logs landmine hits and safe/successful movements.
  // logs the current location of the player on the board by calling the displayBoardLocation function


displayBoardLocation() {
  const { x, y } = this.player.position;
  // displays the players current location on the board (using x and y coordinates)
  // x = horizontal position
  // y = vertical position

  if (this.landmineHit === 0 && this.player.position.x === 0 && this.player.position.y === 0) {
    console.log("----------------------------------------------------------------")
    console.log("You are at the starting position [0, 0].");
    console.log("----------------------------------------------------------------")
    // logs when a user starts the game showing the starting position of [0, 0]
  } else if (this.landmineHit > 0 && this.player.position !== "[0, 0]") {
    console.log("----------------------------------------------------------------")
    console.log(`Player is now at position [${x}, ${y}]`);
    console.log(`Landmines hit: ${this.landmineHit}`);   
    console.log("----------------------------------------------------------------")
    // logs the current position and current number of landmines hit if a player has hit 1 or more landmines. 
  } else {
    console.log("----------------------------------------------------------------")
    console.log(`Player is now at position [${x}, ${y}]`);
    console.log("0 landmines hit.");
    console.log("----------------------------------------------------------------")
    // logs the current position of the player when the player has not hit any landmines. 
  }
}

checkGameStatus() {
  if (this.landminesHit > 2) {
    this.isLost = true;
    console.log("You hit 2 landmines. Game over!");
    // logs when a player has hit 3 or more landmines and loses the game.
  } else if (this.player.position.y === this.board.size - 1) {
    this.isWon = true;
    console.log("🏆 You reached the top of the board. Congratulations!");
    // logs when a player reaches the top of the board and wins the game.
  }
}


}




module.exports = Game 

// export the function Game
// function can then be required in other files (playGame.js)


