const INPUT = {
  START: "다리 건너기 게임을 시작합니다.\n",
  SIZE: "다리의 길이를 입력해주세요.\n",
  MOVING: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
};

const OUTPUT = {
  END: "\n최종 게임 결과\n",
  SUCCESS: "\n게임 성공 여부",
  TRIES: "\n총 시도한 횟수:",
};

const ERROR = {
  SIZE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n",
  MOVING: "[ERROR] 이동할 칸은 U와 D 중 하나를 입력해야 합니다.\n",
};
module.exports = { INPUT, OUTPUT, ERROR };
