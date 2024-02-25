# 2024년 3월 원티드 프리온보딩 챌린지 프론트엔드 사전과제

- 전유영
- bitterns96@gmail.com
- [사전과제 내용](https://github.com/summerdidi/wanted-pre-onboarding-frontend-challenge-19)

## 배포 주소

- https://pollygotacracker.github.io/wanted-react-tech-assignment/

## 실행 화면

![todo](https://github.com/PollyGotACracker/wanted-react-tech-assignment/assets/92136750/9e5288ef-6b31-4d23-9b69-be585527c31b)

## 사용 라이브러리

- React
- Typescript
- Redux, Redux Toolkit
- Framer Motion
- GitHub Pages(gh-pages)

## 구현 내용

1. store 구성 및 state 관리:

- store/index.ts:
  - `configureStore` 를 사용하여 store 생성
  - state 의 type `RootState` export, store 는 default export
- store/todo.ts:
  - `createSlice` 로 state 와 reducer 작성
  - type 과 reducer 메서드 export, reducer 는 default export
- 컴포넌트에서 `useSelector`, `useDispatch` 를 사용하여 state 조회 및 수정

2. state 변경:

- `addItem()`:
  1. 사용자가 입력한 내용 받아오기
  2. `newId` 와 함께 새로운 Todo 아이템 `newItem` 생성
  3. list 복사본에 `unshift(newItem)` 실행
  4. `state.list` 에 변경된 list, `state.newId` 에 1 증가값을 각각 적용
- `deleteItem()`:
  1. 삭제할 아이템의 id 받아오기
  2. list 복사본에 `filter(({id}) => id !== targetId)` 실행한 결과를 변수로 저장
  3. `state.list` 에 변경된 list 적용

3. 기타:

- CSS Module 을 사용하여 스타일 모듈화

## 공부

1. Object literal 을 컴포넌트에 spread 하여 props 를 적용할 수 있음
2. Button active 시 CSS transition 적용:

- `transition` 이 양방향으로 적용되어 버튼 클릭 시 원하는 효과가 나타나지 않을 때
- `:active` 시 `transition` 시간을 `0s` 로 설정
- 이때 애니메이션 흐름은 `:active` -> 기본 스타일 방향임에 주의

```css
.add::after {
  content: "";
  position: absolute;
  top: calc(50% - (150px / 2));
  left: calc(50% - (150px / 2));
  width: 150px;
  height: 150px;
  transform-origin: center;
  /* 100% 상태의 스타일 */
  transform: scale(1);
  opacity: 0;
  transition: transform 1s ease, opacity 1s ease;
  border-radius: 50%;
  background-color: var(--primary);
}
.add:enabled:active::after {
  /* 0% 상태의 스타일 */
  transform: scale(0);
  opacity: 1;
  transition: 0s;
}
```
