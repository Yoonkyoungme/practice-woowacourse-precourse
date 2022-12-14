const InputView = require("./InputView");

class Game {
  constructor() {
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize();
  }
}

module.exports = Game;
