// 17. 배열의 인접한 요소곱 중 가장 큰 값 구하기

// 정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라.
// 예를 들어 인수가 [3, 6, -2, -5, 7, 3]인 경우, 21을 반환한다.

function adjacentElementsProduct(arr) {
  // 가까운 값끼리 곱을 저장해주는 변수 
  var mulNum = 0;
  var minNum = Number.NEGATIVE_INFINITY;
  arr.reduce(function (pre, cur, mulNum, arr){
    // 가까운 두수을 곱하여 mulNum 변수에 저장을 한다.
    mulNum = pre * cur;
    // 곱하여 저장된 값과 최소로 저장해놓은 값을 비교
    if(minNum < mulNum){
      // minNum에 곱하였을때 가장 큰 값을 할당한다.
      minNum = mulNum;
    }
    // 현재의 값을 이전에 값으로 할당해준다.
    return pre = cur;
  });
  return minNum;
}

// // 곱한값을 배열로 담아 놓고 배열의 MAX를 사용하여 가장 큰값을 빼오는 방법
// function adjacentElementsProduct(arr) {

// }


console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 5])); // 35
console.log(adjacentElementsProduct([3, -6, 2, -5, 7, -3])); // -10
