const Game = require("./Game");
const { INPUT } = require("./constants/messages");
const { Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {}
  play() {
    Console.print(INPUT.START);
    const game = new Game().inputBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
