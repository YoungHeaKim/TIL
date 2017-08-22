// 4. 문자열 다루기

function alphaString46(s) {
  // s가 아니면 false로 출력한다.
  if (!s) return false; 
  // isNaN(‘a234’) // true
  // isNaN(‘1234’) // false
  // 밑의 코드 의미는 4글자 이상 6글자 이하의 글자는 true로 출력을하고 !isNaN(s)의 의미는 NaN가 나오면 false를 출력하고 NaN이 아니면 true를 출력한다.   
  return ((s.length >= 4 && s.length <= 6) && !isNaN(s));
}

// function alphaString46(s) {
//   if (!s) return false;

//  return /^\d{4,6}$/.test(s);
// }
console.log(alphaString46('1234')); // true
console.log(alphaString46('123456')); // true
console.log(alphaString46('a234')); // false
console.log(alphaString46('a23'));  // false
console.log(alphaString46('1234567')); // false
console.log(alphaString46('a2b3c4')); // false