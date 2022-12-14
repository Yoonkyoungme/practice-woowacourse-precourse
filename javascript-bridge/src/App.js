const BridgeGame = require("./BridgeGame");
const { INPUT } = require("./constants/messages");
const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    Console.print(INPUT.START);
  }
}

const app = new App();
app.play();

module.exports = App;
