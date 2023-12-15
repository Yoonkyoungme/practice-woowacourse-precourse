import CarNames from './domain/models/CarNames.js';
import RaceTimes from './domain/models/RaceTimes.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class CarRace {
  #carNames;

  #raceTimes;

  #gameBoard;

  async start() {
    this.#carNames = await this.readCarNames();
    this.#raceTimes = await this.readRaceTimes();
    this.#gameBoard = this.playRacingGame();
  }

  async readCarNames() {
    try {
      return new CarNames(await InputView.readCarNames()).getCarNames();
    } catch (error) {
      OutputView.print(error.message);
    }
  }

  async readRaceTimes() {
    try {
      return new RaceTimes(await InputView.readRaceTimes()).getRaceTimes();
    } catch (error) {
      OutputView.print(error.message);
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

  playRacingGame() {
    const gameBoard = this.initRaceBoards();
    return gameBoard;
  }
}

export default CarRace;
