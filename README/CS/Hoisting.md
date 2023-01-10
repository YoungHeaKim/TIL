# 호이스팅(Hoisting)

- 자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을 모두 모아서 유효 범위의 최상단에 선언한다.
  - 자바스크립트 Parser가 함수 실행 전 해당 함수를 한 번 훑는다.
  - 함수 안에 존재하는 변수/함수선언에 대한 정보를 기억하고 있다가 실행시킨다.
  - 유효 범위: 함수 블록 {} 안에서 유효

- 함수 내에서 아래쪽에 존재하는 내용 중 필요한 값들을 끌어올리는 것이다.
  - 실제로 코드가 끌어올려지는 건 아니며, 자바스크립트 Parser 내부적으로 끌어올려서 처리하는 것이다.
  - 실제 메모리에서는 변화가 없다.

- `var`와 `let` 변수 선언에서도 차이가난다.
  - `var`의 경우 변수선언을 밑에서 하고 위에서 변수 선언을 하면 변수를 가져올 수 있다.
  - `let`의 경우 변수선언을 호출하는 곳보다 밑에서 선언하면 에러를 반환한다. 

```js
console.log(foo); 
// undefined
var foo;

console.log(bar); 
// Error: Uncaught ReferenceError: bar is not defined
let bar;
```

## 특징
- var 변수 선언과 함수 선언문에서만 호이스팅이 일어난다.
- let/const 변수 선언과 함수 표현식에서는 호이스팅이 발생하지 않는다.

```js
// 함수 선언문
function name() {
  return console.log('함수 선언문')
}

// 함수 표현식
var name = function () {
  return console.log('함수 표현식')
}
```