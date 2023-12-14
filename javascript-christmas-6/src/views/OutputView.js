import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../utils/constants/messages.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },
  printIntro() {
    Console.print(OUTPUT_MESSAGES.INTRO);
  },
  printMenu() {
    Console.print('<주문 메뉴>');
  },
};

export default OutputView;
