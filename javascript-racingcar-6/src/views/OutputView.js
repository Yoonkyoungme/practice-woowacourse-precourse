import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../utils/constants/messages.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printResultTitle() {
    Console.print(OUTPUT_MESSAGES.RESULT_TITLE);
  },
};

export default OutputView;
