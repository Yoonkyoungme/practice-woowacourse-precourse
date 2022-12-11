const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/messages");

class App {
  play() {
    this.start();
  }
  start() {
    Console.print(MESSAGE.START);
  }
}

const app = new App();
app.play();

module.exports = App;
