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

  handleBridgeSize(size) {
    const getValue = Validation.checkInputNumber(size);
    this.bridgeSize = getValue;
  }
}

module.exports = Game;
