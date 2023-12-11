const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/messages");
const Game = require("./Game");

class App {
  play() {
    Console.print(MESSAGE.START);
    this.start();
  }
  start() {
    const game = new Game();
  }
}

const app = new App();
app.play();

module.exports = App;
