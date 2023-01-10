# Promise & Callback & async/await

## Promise
- - -
### 프로미스란?
- 프로미스는 자바스크립트 비동기 처리에 사용되는 객체이다.
- 비동기 처리란 `특정 코드의 실행이 완료될 때 까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성`이다

### 프로미스 특징
- return value를 이용할 수 있다는 점
- error handling이 동기식 코드와 유사하게 쓰일 수 있다는 점

## async/await
- - -
### async/await 탄생 이유
- callback & promise는 Callback hell OR .then 지옥(꼬리에 꼬리를 무는 코드가 나올 수 있다는 점)이 발생한다는 단점이 있는데 이러한 점을 해결하기 위해 async/await가 탄생하였다.

### async/await 특징
- async 함수 내의 await 를 통해 Promise 의 반환 값을 받아 올수 있는 특징이 있다.
- 사용시 주의점은 `try-catch`를 사용하여 에러를 핸들링 해주어야 한다.


## Promise와 Callback 차이점
- - -
- Callback을 사용하여 비동기 로직의 결과값을 처리하기 위해서는 Callback 안에서만 처리를 해야하고, 콜백 밖에서는 비동기에서 온 값을 알수가 없다. 하지만 Promise를 사용하면 비동기에서 가져온 값이 Promise 객체에 저장되기 때문에 코드 작성이 용이해진다.

## Promise와 async/await 차이점
- - -
- 에러 핸들링 부분 (Promise는 `.catch()`로 에러 핸들링 가능 async/await는 `try-catch()`로 에러 핸들링)
- 코드 가독성
  - Promise의 경우 `.then()`지옥의 가능성 때문에 코드가 길어지면 길어질 수록 async/await의 코드 가독성이 더 좋다.
  - async/await의 가독성은 동기식 코드처럼 읽히게 되어 코드 흐름을 이해하기 쉽다.