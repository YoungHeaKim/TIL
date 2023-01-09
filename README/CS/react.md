# React 질문

## Class-component VS Functional-component
- - -
- 클래스형 컴포넌트는 로직과 상태를 컴포넌트 내에서 구현하기 때문에 stateful로 불리는 것이며 상대적으로 복잡한 UI 로직을 가지고 있다. 반면 함수형 컴포넌트는 state를 사용하지 않고 단순하게 데이터를 받아서(props) UI에 뿌려주기 때문에 stateless라고 불리는 것이다.
- 리액트 훅이 도입되면서 함수형 컴포넌트를 사용하는 추세가 되었다.

## UseEffect와 UseLayoutEffect
- - -
### useEffect
- 컴포넌트들이 render 와 paint 된 후 실행
- 비동기적으로 실행
- DOM에 영향을 주는 코드가 있을때 사용자 입장에서 화면의 깜빡거림을 보게된다.

### useLayoutEffect
- 컴포넌트들이 render된 후 실행되며, 실행 후에 Paint 실행
- 동기적으로 실행
- DOM에 영향을 주는 코드가 있을때 사용자 입장에서 화면의 깜빡거림을 보지 않아도 된다.

### 장단점
- useLayoutEffect는 동기적으로 실행되기 때문에 화면이 그려지기 전에 실행 되기 때문에 레이아웃을 보는데까지 오래걸린다는 단점이 있어 useEffect를 사용하는 것을 권장하고 있다.

## State vs Props
- - -
### State
- state는 컴포넌트 상태를 나타낸다.
- 컴포넌트 내부에서 선언되기 때문에 state는 외부에 공개되지 않고 컴포넌트가 스스로 관리한다.
- 상태에 따라 변화하는 것
- 직접 변경 가능
- State 변경 시 Re-render 된다.

### Props
- 컴포넌트는 상속하는 부모 컴포넌트로 부터 Props를 받고 이 Props는 상속받는 컴포넌트 내에서 수정이 불가능하다.
- React는 부모 -> 자식 일방향성 상속이라는 특징이 있기 때문이다.
- 읽기 전용
- 부모요소에서 설정하는 것
- 초기값과 자료형의 유효성 검사 가능