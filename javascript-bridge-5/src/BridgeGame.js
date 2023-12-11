/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.upperBrigde = [];
    this.lowerBrigde = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridgeList, direction, bridgeIndex) {
    if (bridgeList[bridgeIndex] === direction) {
      this.successMap(direction);
      return true;
    }
    this.failureMap(direction);
    return false;
  }

  successMap(direction) {
    direction === "U"
      ? (this.upperBrigde.push("O"), this.lowerBrigde.push(" "))
      : (this.upperBrigde.push(" "), this.lowerBrigde.push("O"));
  }

  failureMap(direction) {
    direction === "U"
      ? (this.upperBrigde.push("X"), this.lowerBrigde.push(" "))
      : (this.upperBrigde.push(" "), this.lowerBrigde.push("X"));
  }

  sendBridgeMap() {
    return [this.upperBrigde, this.lowerBrigde];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(tries) {
    this.upperBrigde = [];
    this.lowerBrigde = [];
  }
}

module.exports = BridgeGame;
