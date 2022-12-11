const { Console, Random } = require("@woowacourse/mission-utils");

class Game {
  constructor() {
    this.computerNumbers = [];
    this.start();
  }
  start() {
    this.selectComputerNumber();
    console.log(this.computerNumbers);
  }

  selectComputerNumber() {
    while (this.computerNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }
}

module.exports = Game;
