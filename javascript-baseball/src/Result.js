class Result {
  constructor(computerNumbers, numbersList) {
    this.computerNumbers = computerNumbers;
    this.numbersList = numbersList;
    this.strike = 0;
    this.ball = 0;
    this.getResultCount();
  }

  getResultCount() {
    this.computerNumbers.map((number, index) => {
      if (number === this.numbersList[index]) {
        this.strike++;
      } else if (this.numbersList.includes(number)) {
        this.ball++;
      }
    });
    console.log(`strike: ${this.strike}\nball: ${this.ball}`);
  }
}

module.exports = Result;
