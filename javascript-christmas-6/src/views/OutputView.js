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
  printMenu(order) {
    Console.print(OUTPUT_MESSAGES.MENU);
    order.map(([menu, quantity]) => Console.print(`${menu} ${quantity}개`));
  },
  printBeforeDiscount(totalPrice) {
    Console.print(OUTPUT_MESSAGES.BEFORE_DISCOUNT);
    Console.print(`${totalPrice.toLocaleString('ko-KR')}원`);
  },
};

export default OutputView;
