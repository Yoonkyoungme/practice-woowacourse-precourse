const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const Validation = require("./Validation");

class Game {
  constructor() {
    this.bridgeSize;
    this.moving;
    this.brigeList;
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  inputMovingBridge() {
    InputView.readMoving(this.handleMovingBridge.bind(this));
  }

  handleBridgeSize(size) {
    const getValue = Validation.checkInputNumber(size);
    this.bridgeSize = getValue;

    this.brigeList = BridgeMaker.makeBridge(
      this.bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.inputMovingBridge();
  }

  handleMovingBridge(moving) {
    console.log(moving);
  }
}

module.exports = Game;
