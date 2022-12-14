const InputView = require("./InputView");
const Validation = require("./Validation");

class Game {
  constructor() {
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
    const getValue = Validation.checkInputNumber(size);
    this.bridgeSize = getValue;

    this.inputMovingBridge();
  }

  handleMovingBridge(moving) {
    console.log(moving);
  }
}

module.exports = Game;
