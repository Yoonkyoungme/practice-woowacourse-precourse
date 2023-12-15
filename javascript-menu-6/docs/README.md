## 기능 목록

### 사용자 입력 처리

- [ ] 코치의 이름을 입력받는다.
  - [ ] 유효성 검사: 코치의 이름은 최소 2글자, 최대 4글자
  - [ ] 유효성 검사: 코치는 최소 2명, 최대 5명 입력
  - [ ] 유효성 검사: 올바른 형태로 입력 (`토미,제임스`)
- [ ] 각 코치별로 못 먹는 메뉴 입력받기
  - [ ] 유효성 검사: 최소 0개, 최대 2개의 못 먹는 메뉴 입력 가능
  - [ ] 유효성 검사: 올바른 형태로 입력 (`마파두부,고추잡채`)

### 메뉴 추천

- [ ] 요일별로 추천할 카테고리를 무작위로 정한다.
  - 한 주에 같은 카테고리는 최대 2회까지만 고를 수 있다.
- [ ] 각 코치가 먹을 메뉴를 추천한다.
  - 각 코치에게 한 주에 중복되지 않는 메뉴를 추천한다.

### 결과 출력

- [ ] 서비스 시작 문구 출력
- [ ] 메뉴 추천 결과 출력
  - [ ] 요일 출력
  - [ ] 카테고리 출력
  - [ ] 코치별 추천 메뉴 결과 출력
- [ ] 서비스 종료 문구를 출력

### 예외 처리

- [ ] throw문을 사용하여 예외 발생 시 처리
- `[ERROR]`로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받기
  - [ ] 코치의 이름 입력 예외 처리
  - [ ] 코치의 수 입력 예외 처리
  - [ ] 못 먹는 메뉴 입력 예외 처리