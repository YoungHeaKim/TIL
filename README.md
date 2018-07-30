# TIL
---
Today I Learned

---

| 종류 | 링크 | 날짜 |
|---|---|---|
| HTML | [HTML & CSS](./README/HTML&CSS.md) | 2017/07/17 ~ 2017/07/25 |
| JavaScript | [정리](./README/JavaScript.md) | 2017/07/28 ~ 2017/08/22 |
| BootStrap | [Bootstrap](./README/academy/0727.md) | 2017/07/27 |
| Sass | [Sass](./README/academy/0807sass.md) | 2017/08/07 |
| jQuery | [jQuery (Basic ~ Ajax & JSON)](./README/academy/0816jQuery.md) | 2017/08/16 |
| Computer Science and Engineering | [Computer](./README/computer.md) | 2017/07/21 ~ 2017/09/08 |
| Node.js | [Node 정리](./README/Nodejs.md) | 2017/08/28 ~ 2017/09/28 |
| algorithm | [algorithm](./README/algorithm.md) | 2017/07/25 ~ 2017/08/23 |
| Node.js with Mongodb | [실무에서 쓰이는 것들](./README/NodeJSWithMongo.md) |  |

---
## 공부를 하며 몰랐던 것
---
1. for문에서 count하는 법....(2017/08/17)
- 해결방안 [count문](./README/JavaScript/count.js)을 실제로 만들어서 확인해 보았다.

2. isNaN() 사용법을 잘 몰랐다.(2017/08/17)
- 문제에서 문자열을 숫자열로 바꿨을 때 NaN이라는 문제가 발생하는데 이때 isNaN()을 사용해주면 해결이 가능하다.

3. 이중 for문 이해...(2017/08/22)
- 소수찾기 문제에서 이중for문을 사용중 count의 위치에 따라 바끼는 것에 대해 이해를 하지 못하였다. 해결방안으로는 직접 또 다른 [2중 for문 count](./README/JavaScript/countFor.js)를 만들어 확인.

4. DOM을 사용하여 HTML파일에 연결하는 법...(2017/08/23)
- DOM문제를 풀며 이해가 안되는 부분이 많아서 혼자서 힘들었는데 아직 DOM을 사용하지 못하여서 DOM을 처음부터 메소드와 같은 것들의 이해를 하고 그 다음에 문제를 풀어나가니 훨씬 수월하였다.

5. Node.js를 사용할 때 304error가 뜨는 부분(2017/08/30)
- Node.js수업에서 redirect를 하여서 301 에러가 뜨도록 설정을 해놓았는데 304 에러가 떴다. 이때 문제는 새로운 페이지로 갔을 때 304에러의 의미는 해당 페이지에서 수정이 되지 않았다 라는 뜻으로 해당페이지가 변하는게 아니라 새로운 창으로 변하고 현재 페이지는 304에러를 띄워준다. 그렇지만 새창으로 가지 않고 해당 페이지에서 변하게 만들면 301에러가 반환된다.
- 304에러가 뜨는 이유는 성공적으로 보냈다라는 의미로서 301에러를 보내고 바로 304에러를 띄워주기 때문에 실질적으로는 301을 보내는 데 동시에 304에러를 보내서 우리가 보이는 것은 304에러를 볼 수 있다.  

6. Form 태그에서 버튼과 submit의 차이...(2017/08/31)
- Form 태그안에서는 submit을 사용해야 버튼을 눌렀을 때 서버로 요청을 보낸다. 이때 버튼을 누르면 아무일도 발생하지 않는다.  

7. gitHub fork를 한 뒤 branch 생성과 연결하는 법..(2017/09/07)
- [해결방안](./README/academy/fork.md)