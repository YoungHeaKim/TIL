// 4.) 문자열 다루기
// alphaString46 함수는 문자열 s를 매개변수로 입력받는다.
// s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.
// 예를들어 s가 ‘a234’이면 false를 리턴하고 ‘1234’라면 true를 리턴한다.

function alphaString46(s) {
  // 문자열을 배열의 형태로 따로따로 분리해야한다.
  var sArr = s.split('');
  // 분리한 배열의 길이를 확인한다.
  if (sArr.length > 3 && sArr.length < 7){
    var sNum = parseInt(s);
    if (typeof sNum === 'number'){
      //NaN을 catch를 해야한다.  
      if(isNaN(sNum)){
        return false;
      } else {
        return true;
      }
    }
  }
  return false;
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('123456')); // true
console.log(alphaString46('a234')); // false
console.log(alphaString46('a23'));  // false
console.log(alphaString46('1234567')); // false
console.log(alphaString46('a2b3c4')); // false