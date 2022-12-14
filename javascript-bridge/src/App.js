const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const { INPUT } = require("./constants/messages");
const { Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {}
  play() {
    Console.print(INPUT.START);
    this.game();
  }
  game() {
    const inputBrigeSize = InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
