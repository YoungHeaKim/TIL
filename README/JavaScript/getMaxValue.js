// 11. 배열의 최대/최소값 구하기

// 배열의 요소 중 최대값/최소값을 반환하는 함수를 완성하라.

function getMaxValueFromArray(array) {
  // 배열을 내림차순으로 정렬한다.
  array.sort(function (a, b) {
    return b - a;
  });
  // 내림차순으로 정렬된 배열에 첫번째 인자를 뽑아낸다.
  return array[0];
  
}

console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7
  
function getMinValueFromArray(array) {
  // 배열을 오름차순으로 정렬한다.
  array.sort(function (a, b) {
    return a - b;
  });
  // 오름차순으로 정렬된 배열에 첫번째 인자를 뽑아낸다.
  return array[0];
  
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5