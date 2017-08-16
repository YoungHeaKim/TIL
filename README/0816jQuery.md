2017/08/16

# jQuery
---
웹페이지에서는 거의 대부분 jQuery를 사용한다.  
jQuery의 장점
- jQuery의 가장 큰 장점은 브라우저와의 호환성이 좋다. (여러개의 브라우저의 방어코드가 잘 작성되어 있다.)  
- css의 선택자를 똑같이 사용하고 있다.  
- 다양한 플러그인들이 많다.  
- 이벤트 처리, Ajax, Animation 효과를 쉽게 사용할 수 있다.  

## jQuet의 설치
---
jQuery 1.x과 jQuery 2.x 두가지 버전이 존재한다. 두가지 버전 모두 동일한 API을 제공하지만 jQuery 2.x는 IE 8 이하를 지원하지 않으므로 주의가 필요하다. jQuery 1.x는 IE 8이하를 지원한다.  
만약 IE8이하의 것을 지원할 필요가 없을경우에는 jQuety 2.x를 사용한다. 그 이유는 방어코드가 없기 때문에 좀 더 가볍다.    

## jQuery 함수
---
jQuery함수를 선언하면 객체를 반환한다.  
```js
jQuery();
// jQuery의 숏컷
$();
```
인자가 어떤것이 들어오냐에따라 다르다.  

### 1. CSS 스타일의 selector를 인수로 전달받을 때
---
css스타일의 selector를 사용할 수 있다.  
jQuery() 함수는 선택자에 의해 선택된 요소들을 jQuery 객체를 반환한다.  
```js
jQuery(h1);
// jQuery의 숏컷
$(h1);
```
jQuery() 함수에 의해 생성된 객체를 Matched set 또는 jQuery selection이라 한다.  

### 2. HTML을 인수로 전달받을 때
---
HTML 문자열을 인수로 받으면 새로운 HTML 요소를 생성한다.  
```js
$('<p id="test">My <em>new</em> text</p>').appendTo('body');
```
apppend라는 요소를 사용할때는 'body'와 '<p id="test">My <em>new</em> text</p>'의 자리를 바꿔준다.  

### 3. JavaScript 객체를 인수로 전달받을 때
---
JavaScript 객체(plain object, DOM element, array 등)를 인수로 받으면 그 객체를 jQuery 객체로 wrap한 객체를 반환한다.  

```js
// Define a plain object
var foo = { foo: 'bar', hello: 'world' };

// Pass it to the jQuery function
var $foo = $(foo);

// Accessing property values
var test1 = $foo.prop('foo');
console.log(test1); // bar

// Setting property values
$foo.prop('foo', 'foobar');

// Accessing property values
var test2 = $foo.prop('foo');
console.log(test2); // foobar
```

### 4. 콜백함수를 인수로 전달받을 때
---
```js
jQuery(document).ready(function () {
  // Do something...
});

// Shorthand for jQuery(document).ready()
$(document).ready(function () {
  // Do something...
});

// Shorthand for $(document).ready()
$(function () {
  // Do something...
});
```
DOM을 조작하기 위해서는 DOM이 완전히 로드된 후 자바스크립트가 실행되는 것이 바람직한데 이를 위해 이벤트 처리가 필요하다.  
DOM이 완전히 로드되기 전까지 대기하다가 로드가 완료되면 매개변수로 전달된 콜백함수가 실행된다.

## Selector
---
CSS에서 배운 선택자와 같다.  

### 1. 태그/ ID/ Class 선택자
---
jQuery는 반복문 없이 해당하는 모든 요소에 접근/조작할 수 있다. 이를 묵시적 반복(implicit iteration)이라 한다.  
```js
// Tag Selector
$('li');

// ID Selector
$('#container');

// Class Selector
$('.articles');
```

### 2. 후손 선택자
---
CSS의 선택자와 같다. (부모요소 자식요소)  
```js
$(function () {
  $('#destinations .promo').text('Orlando');

  // var el = document.querySelectorAl ('#destinations .promo');
  // for (var i = 0; i < el.length; i++) {
  //   el[i].textContent = 'Orlando';
  // }
});
```

### 3. 자식 선택자
---
CSS의 선택자와 같다. (부모요소 > 자식요소)  
```js
$(function () {
  $('#destinations > li').text('Orlando').css('color', 'red');

  // var el = document.querySelectorA  ('#destinations > li');
  // for (var i = 0; i < el.length; i++) {
  //   el[i].textContent = 'Orlando';
  //   el[i].style.color = 'red';
  // }
});
```

.text()는 string이 반납되고 .text(text)는 jQuery가 반남된다.  

### 4. 복합 선택자
---
CSS의 선택자와 같다.
```js
$(function () {
  $('#france > li, .promo').text('Orlando');

  // var el = document.querySelectorAll('#france > li, .promo');
  // for (var i = 0; i < el.length; i++) {
  // el[i].textContent = 'Orlando';
  // }
});
```
위의 코드에서 선택자를 여러개를 선택할 경우 속도가 느려질 수 있어 명확하게 선택을 해주는 것이 좋다.  
선택자를 어떻게 선택하느냐에 따라 중첩관계가 깨질 수 있으니 조심해야한다.  

### 5. 가상 클래스 선택자 (Pseudo-Class Selector)
---
CSS의 선택자와 같다.

## Traversing
---
Selector를 사용하여 matched set을 생성한 이후, matched set의 요소들과 관련있는 다른 요소에 접근할 수 있다. 이를 DOM 탐색(DOM Traversing)이라 한다.  
```js
$(function () {
  var el1 = $('#destinations li');         // Descendant Selector
  var el2 = $('#destinations').find('li'); // Traversing

  console.log(el1);
  // [li, li, li.promo, prevObject: n.fn.init(1), context: document, selector: "#destinations li"]
  console.log(el2);
  // [li, li, li.promo, prevObject: n.fn.init(1), context: document, selector: "#destinations li"]
});
```
Traversing은 선택자 방식보다 더 빠르다.  
```js
$("#destinations").find('li');
```
위의 처럼 find를 사용하여도 된다.  

## Manipulation
---
### 1. Appending
---
HTML에 의해 생성된 DOM에 새로운 요소를 추가한다. 우선 jQuery 함수를 사용하여 추가할 요소를 생성한다.  
- append() : 선택 요소의 닫는 태그 앞에 콘텐츠를 삽입한다.  
- prepend() : 선택 요소의 여는 태그 뒤에 콘텐츠를 삽입한다.  
- after() : 선택 요소의 뒤에 콘텐츠를 삽입한다.  
- before() : 선택 요소의 앞에 콘텐츠를 삽입한다.  

### 2. Removing
---
요소의 제거는 remove()메소드를 사용한다.  

## CSS / Attributes
---
attribute는 html의 속성을 의미하고 property는 객체의 속성을 의미한다.  
어트리뷰트가 DOM으로 변환이 되었을 때 프로퍼티로 매핑한다.  
class어트리뷰트는 classList 프로퍼티로 변환된다.  
td 요소의 colspan 어트리뷰트의 경우 매핑하는 프로퍼티가 존재하지 않는다.  
textContent 프로퍼티의 경우 어트리뷰트가 존재하지 않는다.  
input 요소의 value 어트리뷰트는 value 프로퍼티와 1:1 매핑하지만 서로 다르게 동작한다.  
```js
.attr(); 
.prop();
```
위의 두개는 구별해서 사용해야 한다.  

## Event
---
```js
.on( events [, selector ] [, data ], handler )
```
event를 두개 이상 지정할 수 있다.  
- events: 1개 또는 2개 이상의 공백으로 구분된 이벤트명
- selector: 이벤트를 바인딩할 매치드셋의 후손 선택자
- data: 이벤트핸들러에 전달할 데이터. 이벤트핸들러의 매개변수 event.data에 담겨 전달된다.  
- handler: 이벤트가 발생했을 때 실행될 함수. 첫번째 인자로 이벤트 객체가 암묵적으로 전달된다.  

`closest()` 메소드는 매치드셋과 가장 근접한 상위 요소를 반환한다.

# Ajax & JSON
---
## Ajax with jQuery
---
jQuery는 Ajax 요청과 응답을 위해 유용한 메소드들을 제공한다.  

### 1. Low-Level Interface
---
```js
jQuery.ajax( url [, settings ] )  // Returns: jqXHR
jQuery.ajax( [settings ] )        // Returns: jqXHR
```

#### 1.1 Load HTML
---
```js
$.ajax({
  url: "data/data.html",
  cache: false
})
.done(function(data, textStatus, jqXHR) {
  $("#content").html(data);
})
.fail(function(jqXHR, textStatus, errorThrown){
  console.log("fail: ", jqXHR);
})
.always(function(data, textStatus, jqXHR){
  console.log("always: ", data);
});
```
위에서 `cache: false`는 cache에 있는 것을 쓰지말고 서버에서 새로 전송하라는 의미이다.  
위의 .done와 .fail, .always를 생략할 수 있다.  

### 2. Shorthand Method
---
#### 2.1 jQuery.get()
---
HTTP GET request를 사용하여 서버로부터 데이터를 로드한다.  
```js
jQuery.get( url [, data ] [, success ] [, dataType ] ) // Returns: jqXHR
```

#### 2.2 jQuery.getJSON()
---
HTTP GET request를 사용하여 서버로부터 JSON-encoded 데이터를 로드한다.  
```js
jQuery.getJSON( url [, data ] [, success ] ) // Returns: jqXHR
```

#### 2.3 jQuery.getScript()
---
HTTP GET request를 사용하여 서버로부터 JavaScript 파일을 로드한 후 실행한다.  
```js
jQuery.getScript( url [, success ] ) // Returns: jqXHR
```

#### 2.4 jQuery.post()
---
HTTP GET request를 사용하여 서버로부터 데이터를 로드한다.  
```js
jQuery.post( url [, data ] [, success ] [, dataType ] ) // Returns: jqXHR
```

#### 2.5 load()
---
서버로부터 HTML 데이터를 로드하고 매치드셋에 적용한다.  
```js
.load( url [, data ] [, complete ] ) // Returns: jQuery
```