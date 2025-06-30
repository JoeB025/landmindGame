class Player {
  constructor() {
      this.position = { x: 0, y: 0 }; 
  }

  move(direction, boardSize) {
    if (direction === 'U' && this.position.y < boardSize - 1) {
        this.position.y++;
    } else if (direction === 'D' && this.position.y > 0) {
        this.position.y--;
    } else if (direction === 'L' && this.position.x > 0) {
        this.position.x--;
    } else if (direction === 'R' && this.position.x < boardSize - 1) {
        this.position.x++;
    }
  }
}

module.exports = Player;
