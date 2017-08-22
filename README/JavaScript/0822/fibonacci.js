// #14. 피보나치 수

// 피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946…

// 2 이상의 n이 입력되었을 때, fibonacci 함수를 작성하여 n번째 피보나치 수를 반환하라. 예를 들어 n = 3이라면 2를 반환한다.

function fibonacci(n) {
  // 초기 배열에 [0,1]을 담아놓는다.
  var result = [0, 1];
  var fiboArr = [0, 1];
  // n만큼 돌리는 반복문을 만들어준다.(n-1을 해준 이유는 0번째부터 출력을 해야하기 떄문이다.)
  for(var i = 0; i < n-1 ; i++ )
    // reduce메소드를 사용해서 전값과 현재값을 비교한다.
    fiboArr.reduce(function (pre, cur, cunNum) {
      // cunNum이라는 변수에 두 값을 더한값을 저장해 준다.
      var cunNum = pre + cur;
      // 배열을 만들때 reduce가 현재값을 한번씩 더 출력해주는 것을 배열에서 빼주기위해 사용한다.
      fiboArr.shift(cunNum);
      // result 배열에 push로 더한값을 추가해준다.
      result.push(cunNum);
      // fiboArr에 배열에 더한 값을 추가해준다.
      fiboArr.push(cunNum);
      return pre + cur;
    });
  // sort 메소드를 사용하여 내림차순으로 만들어준다.
  result.sort(function (a, b) {
    return b - a;
  });
  // 배열이 맞는지 확인을 한다.  
  console.log(result);
  // 내림차순으로 정렬된 배열에 첫번째 인자를 뽑아낸다.
  return result[0];
  // console.log(result);
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8