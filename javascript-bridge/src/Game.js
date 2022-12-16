const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validation = require("./Validation");

class Game {
  constructor() {
    this.brigeList;
    this.bridgeSize;
    this.direction;
    this.index = 0;
    this.canMove;
    this.upperBrigde = [];
    this.lowerBrigde = [];
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
    this.canMove = new BridgeGame().move(
      this.brigeList,
      this.direction,
      this.index
    );

    this.makeMap();
    this.getIndex();
  }

  handleRetryOrQuit(command) {
    const result = Validation.checkInputCommand(command);
    if (!result) {
      return this.inputRetryOrQuit();
    }

    if (result === "R") {
      this.index = 0;
      this.tries += 1;
      this.upperBrigde = [];
      this.lowerBrigde = [];
      this.inputMovingBridge();
    }
  }

  makeMap() {
    if (!this.canMove) {
      this.direction === "U"
        ? (this.upperBrigde.push("X"), this.lowerBrigde.push(" "))
        : (this.upperBrigde.push(" "), this.lowerBrigde.push("X"));
    } else {
      this.direction === "U"
        ? (this.upperBrigde.push("O"), this.lowerBrigde.push(" "))
        : (this.upperBrigde.push(" "), this.lowerBrigde.push("O"));
    }
    this.output = OutputView.printMap(this.upperBrigde, this.lowerBrigde);
  }

  getIndex() {
    if (!this.canMove) return this.inputRetryOrQuit();
    this.index = this.canMove;
    this.index === this.bridgeSize
      ? OutputView.printResult(this.output, this.tries, true)
      : this.inputMovingBridge();
  }
}

module.exports = Game;
