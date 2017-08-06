2017/08/02

# JavaScript
---
## Object
---
### what is object?
---
JavaSctript는 객체기반의 스크립트 언어로서 기본자료형을 제외한 나머지 값들은 모두 객체로 이루어져 있다.  
객체는 데이터(prooerty)와 그 데이터에 관련된 동작(Method)을 모두 포함할 수 있는 개념적 존재를 말한다.  
데이터를 한곳에 모으고 구조화하는데 유용하다.  

#### 1.1 property(프로퍼티)
---
객체는 이름과 값의 쌍인 프로퍼티들을 포함하는 컨테이너라고 할 수 있다.  
프로퍼티 이름은 빈문자열을 포함하는 문자열과 숫자이고 프로퍼티 값으로는 Undefined을 제외한 모든 값이 올 수 있다.  

#### 1.2 Method(메소드)
---
메소드는 객체 내에서 동작을 하게 만들어주는 것이다.  
프로퍼티에 달려있는 함수이다.  

### 객체 생성 방법
---
#### 1. 객체 리터럴
---
첫번째 방법으로써 가장 일반적이고 간편한 JavaScript 객체 생성 방식이다.  
객체 리터럴 방식은 생성자 함수를 사용한 객체 생성 방식과는 달리 New연산자를 사용할 필요 없이 선언과 동시에 인스턴스가 생성된다는 것이다.  
사용 예)
```js
var emptyObject = {}; // 빈 객체이다.
// 객체 리터럴 방식으로 만든 예이다.
var person = { // 객체를 선언해준다. 
  name : 'kim', // 속성(프로퍼티)와 값을 넣어주고 ,로 구분한다.
  gender: 'male',
  sayHello: function() { 
    console.log('Hi! My name is + this.name');
  } // 함수도 값으로 넣을 수 있다.(메소드) this는 person을 가르킨다. 
};
```

#### 2. Object() 생성자 함수
---
두번째 방식으로 new연산자와 object()생성자 함수를 사용하여 빈 객체를 만들고 프로퍼티와 메소드를 추가하여 객체를 만드는 방식이다.  
이 방법은 유용하지 않아 사용하지 않는다.  
객체는 프로퍼티에 새로운 값을 할당하면 프로퍼티 값을 갱신하게 되고 소유하지 않은 프로퍼티에 값을 할당하면 해당 객쳉에 프로퍼티를 추가하고 값을 할당한다.  
```js
var person = new Object(); // new연산자를 사용하여 빈 객체를 생성해준다.
person.name = 'Kim'; // 변수명.프로퍼티이름 = 프로퍼티값으로 빈객체에 추가를 해준다.  
person.gender = 'male';
person.sayHello = function() {
  console.log('Hi! My name is + this.name');
}
```
객체 리터럴 방식을 사용하여 빈객체를 만들어 사용하여 프로퍼티와 값을 추가해 주어도 된다.  

#### 3. 생성자 함수
---
객체 리터럴 방식과 Object() 생성자 함수 방식으로 객체를 생성하는 것은 프로퍼티 값만 다른 여러 개의 객체 생성에 불편이 있다. 여러 개의 객체에서 동일한 프로퍼티가 있으면 묶어서 생성하는 방법을 생성자 함수라고 한다.  
```js
var person1 = {
  name: 'Lee',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};
var person2 = {
  name: 'Kim',
  gender: 'female',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};
```
위의 두 코드에서 name, gender와 function함수를 동일하게 사용하는데 이때 이 3개의 프로퍼티를 한개의 함수로 묶고 밑에서 지정해줄 수 있다.  
```js
// 생성자 함수
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
  };
}
// 인스턴스의 생성
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');
```
- 생성자 함수 이름은 일반적으로 대문자로 시작한다. 이것은 생성자 함수임을 인식하도록 도움을 준다.  
- 프로퍼티 또는 메소드명 앞에 기술한 this는 생성자 함수로 생성될 instance를 가르킨다. 위의 경우에는 this에 연결되어 있는 프로퍼티와 메소드는 public이다.  
- 생성자 함수 내에서 선언된 일반 변수는 private이다. 즉 생성자 함수 내부에서는 자유롭게 접근이 가능하나 외부에서 접근할 수 있는 방법이 없다.   

### 객체 프로퍼티 접근
---
#### 1. 프로퍼티 이름
---
프로퍼티 이름에는 문자열(빈 문자열 포함)과 숫자가 올 수 있다. 프로퍼티 값에는 undefined을 제외한 모든 값과 표현식이 올 수 있고 프로퍼티 값이 함수인 경우에는 메소드라고 한다.  
```js
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
  function: 1 // OK. 하지만 예약어는 사용하지 말아야 한다.
};
```
위의 경우 'first-name'을 -를 연산자로 알아들어서 두개의 스트링값을 빼주기 때문에 (_)(스네이크케이스)와 대문자(카멜케이스)를 사용하는 것이 좋다.(ex: last_name, lastName)  
문장안에 ''를 써야할 경우 ""로 묶어주고 반대로 ""를 써줘야할 경우 ''를 사용하여 묶어준다.  
예약어나 키워드는 이름을 지을 때 사용하지 않는 것이 좋다.  
이름을 지을 때 가장 중요한 것은 이름이 길어지더라도 다른 사람이 알아볼 수 있도록 이름을 써주는 것이 좋다.  
변수명은 명사를 사용하고 메소드는 동사를 사용하는 것이 일반적이다.  

#### 2. 프로퍼티 값 읽기
---
문자열로된 이름을 사용하고 싶을 때는 대괄호([])를 사용하여 묶어준다. 대괄호 안에는 ''로 묶어주어야 한다.  
```js
console.log(person[first_name]);//이렇게 사용하면 ReferenceError가 뜬다.
console.log(person['first_name']); // 이렇게 사용해야 한다.
```
일반이름은 .을 사용하여 묶어준다.
```js
console.log(person.gender);
console.log(person['gender']); // 이렇게 사용해도 결과값이 .을 쓴것과 똑같이 나온다.  
```
객체에 없는 프로퍼티를 사용했을 경우에는 Undefined를 반환한다.  

#### 3. 프로퍼티 값 갱신
---
객체가 소유하고 있는 프로퍼티에 새로운 값을 할당하면 프로퍼티 값은 갱신된다.  
```js
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};
person['first-name'] = 'Kim'; // 이 코드가 새로운 값을 할당해주는 코드이다.  
console.log(person['first-name'] ); // 'Kim'
```

#### 4. 프로퍼티 동적 생성
---
객체가 소유하고 있지 않은 프로퍼티에 값을 할당하면 프로퍼티를 객체에 추가하고 값을 할당하면 된다.  
```js
person.age = 20;
```
위의 코드를 사용하면 객체에 age라는 프로퍼티가 생성되어 사용할 수 있다.  

#### 5. 프로퍼티 삭제
---
delate 연산자를 사용하여 객체의 프로퍼티를 삭제한다.  
객체 안에 사용하면 무시당한다.  
```js
delete person.gender;
```

#### 6. for-in문
---
이것은 거의 사용하지 않는다.

### pass-by-reference
---
기본자료형 object를 객체형 또는 참조형이라 한다. 참조형이란 객체의 모든 연산이 실제값이 아닌 참조값으로 처리됨을 의미한다.   
객체는 변경불가성이 아니기 때문에 이해를 못하는 개발자들과 대화를 하면 내가 만든 객체가 바끼는 경우도 있다.  
둘 중 하나가 연결되어 있을때 다른 하나가 참조값을 선언을 하면 두개다 영향을 받는다.  
```js
var foo = {
  val: 10
}
var bar = foo;
console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // true
bar.val = 20;
console.log(foo.val, bar.val); // 20 20
console.log(foo === bar);      // true
```
### pass-by-value
---
기본자료형의 값은 값으로 전달된다.  
기본자료형은 값이 한번 정해지면 변경할 수 없다.  
```js
// Pass-by-value
var a = 1;
var b = a;
console.log(a, b);    // 1  1
console.log(a === b); // true
a = 10;
console.log(a, b);    // 1  10
console.log(a === b); // false
```

### 객체의 분류
---
Built-in Object(내장 객체)
  - Standard built-in objects (or Global Objecta)
  - BOM : 홈페이지의 움직임을 감지할 수 있는 객체들의 집합(?)
  - DOM

Standard Built-in Objects(표준 빌트인 객체)를 제외한 BOM과 DOM을 Native Object라고 분류한다.  
사용자가 생성한 객체를 Host Object라 한다.  
