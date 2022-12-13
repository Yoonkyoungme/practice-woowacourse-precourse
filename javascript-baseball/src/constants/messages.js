const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  SUGGESTION: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  WIN: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
};

const ERROR = {
  LENGTH: "3자리 수를 입력하세요.",
  TYPE: "숫자를 입력하세요.",
  OVERLAP: "서로 다른 수를 입력하세요.",
  SELECT: "숫자 1 또는 2를 입력하세요.",
};

module.exports = { MESSAGE, ERROR };
