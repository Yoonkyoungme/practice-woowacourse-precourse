import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../utils/constants/messages.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.DATE);
    return input;
  },
  async readOrder() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.ORDER);
    return input;
  },
};

export default InputView;
