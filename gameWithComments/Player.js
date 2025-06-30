class Player {
  constructor() {
      this.position = { x: 0, y: 0 };  // Starting position (0, 0) - bottom-left
  }

  move(direction, boardSize) {
    if (direction === 'U' && this.position.y < boardSize - 1) {
        this.position.y++;
        // add 1 to the vertical position (y) when moving up 1 space.
    } else if (direction === 'D' && this.position.y > 0) {
        this.position.y--;
        // subtract 1 to the vertical position (y) when moving down 1 space
    } else if (direction === 'L' && this.position.x > 0) {
        this.position.x--;
        // subtract 1 to the horizontal position (x) when moving left 1 space
    } else if (direction === 'R' && this.position.x < boardSize - 1) {
        this.position.x++;
        // add 1 to the horizontal position (x) when moving right 1 space
    }
  }
}


// direction is defined in the parent class Game (line 17)
// boardSize is defined on the main page


module.exports = Player;




  