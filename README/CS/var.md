# var & let & const

## var
- - -

- 다음과 같이 에러 없이 변수가 중복 선언됬음에도 불구하고 에러를 찹을 수 없다.
```js
var name = 'kim';
console.log(name);
// kim

var name = 'lee';
console.log(name);
// lee
```

## let
- - -

- 다음과 같이 에러 없이 변수를 중복 선언하면 SyntaxError를 반환하고 변수에 다음과 같이 새로운 값을 할당하면 변수의 값이 변경 된다.
```js
let name = 'kim';
console.log(name);
// kim

let name = 'lee';
console.log(name) 
// Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'react';
console.log(name);
// react
```

## const
- - -

- 다음과 같이 에러 없이 변수를 중복 선언하면 SyntaxError를 반환하고 변수에 다음과 같이 새로운 값을 할당하면 TypeError를 반환하며 변수 재선언, 변수 재할당 모두 불가능하다.
```js
const name = 'kim';
console.log(name) // kim

const name = 'lee';
console.log(name) // Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'react';
console.log(name) // Uncaught TypeError: Assignment to constant variable.
```

