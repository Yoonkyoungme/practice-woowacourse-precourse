import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../utils/constants/messages.js';

const InputView = {
  async readCarNames() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.CAR_NAMES);
    return input;
  },

  async readRaceTimes() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.RACE_TIMES);
    return input;
  },
};

export default InputView;
