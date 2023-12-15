import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../utils/constants/messages.js';
import { FREE_GIFT, NOTHING } from '../utils/constants/events.js';

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

  printFreeGift(freeGift) {
    const { FREE_GIFT_MENU, FREE_GIFT_QUANTITY } = FREE_GIFT;

    Console.print(OUTPUT_MESSAGES.FREE_GIFT);

    if (freeGift) {
      Console.print(
        `${FREE_GIFT.FREE_GIFT_MENU} ${FREE_GIFT.FREE_GIFT_QUANTITY}개`,
      );
    } else {
      Console.print(NOTHING);
    }
  },

  printBenefitList(benefitList) {
    Console.print(OUTPUT_MESSAGES.BENEFITS);

    benefitList.forEach((discount, message) => {
      Console.print(`${message} -${discount.toLocaleString('ko-KR')}원`);
    });
  },
};

export default OutputView;
