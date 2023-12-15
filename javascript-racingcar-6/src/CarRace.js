import CarNames from './domain/models/CarNames.js';
import RaceTimes from './domain/models/RaceTimes.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class CarRace {
  #carNames;

  #raceTimes;

  async start() {
    this.#carNames = await this.readCarNames();
    this.#raceTimes = await this.readRaceTimes();
    this.playRacingGame();
  }

  async readCarNames() {
    try {
      return new CarNames(await InputView.readCarNames()).getCarNames();
    } catch (error) {
      OutputView.print(error.message);
      throw error;
    }
  }

  async readRaceTimes() {
    try {
      return new RaceTimes(await InputView.readRaceTimes()).getRaceTimes();
    } catch (error) {
      OutputView.print(error.message);
      throw error;
    }
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  initRaceBoards() {
    const gameBoard = new Map();
    this.#carNames.forEach((carName) => {
      gameBoard.set(carName, '');
    });

    return gameBoard;
  }

  updateCarPositions(gameBoard) {
    this.#carNames.forEach((carName) => {
      const randomNumber = this.getRandomNumber();
      if (randomNumber >= 4) {
        gameBoard.set(carName, `${gameBoard.get(carName)}-`);
      }
    });
  }

  getWinners(gameBoard) {
    const counts = [...gameBoard.values()].map((move) => move.length);
    const maxCount = Math.max(...counts);
    const winners = [...gameBoard.keys()].filter(
      (carName, index) => counts[index] === maxCount,
    );

    return winners;
  }

  playRacingGame() {
    OutputView.printResultTitle();

    const gameBoard = this.initRaceBoards();
    for (let i = 0; i < this.#raceTimes; i++) {
      this.updateCarPositions(gameBoard);
      OutputView.printRaceResult(gameBoard);
    }

    OutputView.printWinners(this.getWinners(gameBoard));
  }
}

export default CarRace;
