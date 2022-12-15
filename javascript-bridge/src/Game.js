const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const Validation = require("./Validation");

class Game {
  constructor() {
    this.brigeList;
    this.bridgeSize;
    this.moving;
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  inputMovingBridge() {
    InputView.readMoving(this.handleMovingBridge.bind(this));
  }

  handleBridgeSize(size) {
    this.bridgeSize = Validation.checkInputSize(size);
    this.brigeList = BridgeMaker.makeBridge(
      this.bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.inputMovingBridge();
  }

  handleMovingBridge(moving) {
    this.moving = Validation.checkInputMoving(moving);
  }
}

module.exports = Game;
