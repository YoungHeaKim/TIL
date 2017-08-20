// # 9. 수박수박수박수박수박수?

// waterMelon 함수는 정수 n을 매개변수로 입력받는다.
// 길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.

// 예를들어 n이 4이면 ‘수박수박‘을 리턴하고 3이라면 ‘수박수‘를 리턴한다.

function waterMelon(n){
  // nArr이라는 변수에 배열의 형태로 수와 박을 담음
  var nArr = ['수', '박'];

  // result를 배열리털방식으로 빈 배열을 만들어줌
  var result = [];

  // for문을 사용하여 입력받은 n보다 작게 반복문을 돌려준다.
  for (var i = 0; i < n; i++){
    // push를 사용하여 result 배열 뒤에 수와 박을 n개만큼 사용해준다. 이때 (i%2)라는 뜻은 배열은 짝수이면 수를 출력하고 홀수이면 박을 출력하라는 의미이다. 
    result.push(nArr[i%2]);
  }
  // result는 배열이기 떄문에 join메소드를 사용해서 문자열로 바꿔준다.
  return result.join('');
};

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));
