# `React.memo` & `useMemo` & `useCallBack`

## 공통점

불필요한 렌더링 또는 연산을 제어하는 용도로 성능 최적화에 목적이 있음

## 차이점 
- `React.memo`
  - `HOC(Higher-Order Components: 컴포넌트를 인자로 받아서 새로운 컴포넌트를 return해주는 구조의 함수)`이기 때문에 `class-component`, `functional-component` 사용 가능
  ```js
    function MyComponent(props) {
      /* 컴포넌트 로직 */
    }
    function areEqual(prevProps, nextProps) {
      /*
      전달되는 nextProps가 prevProps와 같다면 true를 반환, 같지 않다면 false를 반환해 준다.
      */
    }

    export default React.memo(MyComponent, areEqual);
  ```
- `useMemo`
  - `hook`이기 때문에 component 안에서만 사용 가능
  - 함수의 연산량이 많을때 이전 결과값을 재사용하는 목적
  ```js
    const memoizedValue = useMemo(() => a+b, [a, b]);
  ```
- `useCallback`
  - `hook`이기 때문에 component 안에서만 사용 가능
  - 함수가 재생성 되는 것을 방지하기 위한 목적
  ```js
    const onSave = useCallback(() => saveToServer(name, age), [name, age]);
  ```