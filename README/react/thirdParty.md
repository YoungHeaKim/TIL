# Context API vs Redux

## 사용 이유
- - -
React는 component들 간에 부모에서 자식으 전역 상태 관리를 위해 사용

## Context API란?
---
Props Drilling을 방지 하고자 사용하는데 단지 종속성 주입의 한 형태일 뿐 아무것도 관리하지 않고 상태관리는 `useState`와 `useReducer`를 통해 일어난다.
단순 값을 전달하는 파이프 역할을 한다. (prop-passing 로직을 작성할 필요가 없기 때문에 코드가  단순해진다.)

## Redux란?
---
상태 중앙 저장소 역할을 하며 액션이라는 이벤트를 사용하여 애플리케이션의 상태를 예측 가능한 방식으로 업데이트하기 위한 패턴 또는 라이브러리이다.
Redux에서 제공하는 패턴과 도구들을 사용하면 상태가 언제, 어디서, 어떻게, 왜 업데이트 되었는지 쉽게 이해할 수 있다.


## React-Redux
- - -
`React`에서 `Redux`를 사용하기 위해 `React-Redux`라이브러리는 Redux에서 상태 값을 읽고 action을 React 컴포넌트에게 전달하여 Redux 저장소와 상호 작용 할 수 있도록 도와주는 UI 바인딩 레이어이다. 
`React-Redux` 내부에는 Context를 사용하기 때문에 React 요소들이 Redux 저장소에 접근이 가능하다. 또한 현재의 상태값이 아닌 Context를 통해 Redux 저장소 인스턴스만 전달한다는 점이다.