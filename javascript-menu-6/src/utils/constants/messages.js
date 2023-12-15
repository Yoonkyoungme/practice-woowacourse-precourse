export const INPUT_MESSAGES = {
  COACH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)',
  MENU: (name) => `${name}(이)가 못 먹는 메뉴를 입력해 주세요.`,
};

export const OUTPUT_MESSAGES = {
  START_RECOMMENDATION: '점심 메뉴 추천을 시작합니다.',
  RESULT_HEADER: '메뉴 추천 결과입니다.',
  RESULT_DAYS: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  COMPLETE_RECOMMENDATION: '추천을 완료했습니다.',
};

export const ERROR_MESSAGES = {
  COACH_NAME: '[ERROR] 코치의 이름은 최소 2글자, 최대 4글자여야 합니다.',
  COACH_NUMBER:
    '[ERROR] 코치는 최소 2명, 최대 5명까지 식사를 함께 해야 합니다.',
  MENU: '[ERROR] 각 코치는 최소 0개, 최대 2개의 못 먹는 메뉴를 가질 수 있습니다.',
};
