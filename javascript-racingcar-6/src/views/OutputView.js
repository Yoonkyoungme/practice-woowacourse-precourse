import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../utils/constants/messages.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printResultTitle() {
    Console.print(OUTPUT_MESSAGES.RESULT_TITLE);
  },

  printRaceResult(result) {
    result.forEach((move, carName) => Console.print(`${carName} : ${move}`));
    Console.print('');
  },

  printWinners(result) {
    Console.print(`${OUTPUT_MESSAGES.WINNER_ANNOUNCEMENT}${result.join(', ')}`);
  },
};

export default OutputView;
