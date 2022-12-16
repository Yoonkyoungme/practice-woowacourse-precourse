const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validation = require("./Validation");

class Game {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.brigeList;
    this.bridgeSize;
    this.direction;
    this.index = 0;
    this.canMove;
    this.output;
    this.tries = 1;
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  inputMovingBridge() {
    InputView.readMoving(this.handleMovingBridge.bind(this));
  }

  inputRetryOrQuit() {
    InputView.readGameCommand(this.handleRetryOrQuit.bind(this));
  }

  handleBridgeSize(size) {
    this.bridgeSize = Validation.checkInputSize(size);
    if (!this.bridgeSize) {
      return this.inputBridgeSize();
    }
    this.brigeList = BridgeMaker.makeBridge(
      this.bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    console.log(this.brigeList);
    this.inputMovingBridge();
  }

  handleMovingBridge(moving) {
    this.direction = Validation.checkInputMoving(moving);

    if (!this.direction) return this.inputMovingBridge();
    this.canMove = this.bridgeGame.move(
      this.brigeList,
      this.direction,
      this.index
    );

    console.log(this.canMove);

    this.getBrigeMap();
    this.getIndex();
  }
  handleRetryOrQuit(command) {
    const result = Validation.checkInputCommand(command);
    if (!result) {
      return this.inputRetryOrQuit();
    }

    if (result === "R") {
      this.retryGame();
    }
  }

  getBrigeMap() {
    const result = this.bridgeGame.sendBridgeMap();
    this.output = OutputView.printMap(result);
  }

  getIndex() {
    if (!this.canMove) return this.inputRetryOrQuit();
    this.index += 1;
    this.index === this.bridgeSize
      ? OutputView.printResult(this.output, this.tries, true)
      : this.inputMovingBridge();
  }

  retryGame() {
    const newTries = this.bridgeGame.retry();
    this.tries += 1;
    this.index = 0;
    this.inputMovingBridge();
  }
}

module.exports = Game;
