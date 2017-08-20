// # 10. 정수제곱근 판별하기

// nextSqaure함수는 정수 n을 매개변수로 받는다.
// n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 ‘no’을 리턴하는 함수를 작성하라.
// 예를들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 ‘no’을 리턴한다.

function nextSqaure(n){
  //  n의 값의 양의 제곱근을 반환하여 nMath라는 변수에 저장한다.
  var nMath = Math.sqrt(n);

  // 만약 위에서 반환된 양의 제곱근이 정수이면 조건문 실행한다.
  if(Number.isInteger(nMath)){
    // 반환된 양의 제곱근에 +1을 한다.
    nMath += 1;
    // 위에서 더하기한 값의 제곱을 result에 저장을 한다.
    var result = Math.pow(nMath, 2);
  } else {
    // 양의 제곱근이 아닐 경우 no를 반환한다.
    return 'no';
  }
  // 결과값을 반환한다.  
  return result;
}
  
console.log(nextSqaure(3));   // no
console.log(nextSqaure(121)); // 144