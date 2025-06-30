class Board {
  constructor(size) {
      this.size = size;
      this.landmines = this.generateLandmines();
  }

  generateLandmines() {
      const mineCount = Math.floor(Math.random() * 10) + 5;
      const landmines = new Set();

      while (landmines.size < mineCount) {
          const x = Math.floor(Math.random() * this.size);
          const y = Math.floor(Math.random() * this.size);
          if (x !== 0 || y !== 0) { // Avoid starting position
              landmines.add(`${x},${y}`);
          }
      }

      return landmines;
  }

  isLandmine(position) {
      return this.landmines.has(`${position.x},${position.y}`);
  }
}

module.exports = Board;
