import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../utils/constants/messages.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },
  printIntro() {
    Console.print(OUTPUT_MESSAGES.INTRO);
  },
  printPreView(visitDate) {
    Console.print(OUTPUT_MESSAGES.PREVIEW(visitDate));
  },
};

export default OutputView;
