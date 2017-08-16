// function checkPalindrom(str){
//   // 단어를 체크해준다.
//   var strReverse = str .split('').reverse().join('');
//   // strReverse를 선언해주어 역문자열을 저장한다.
//   // .split('') -> 단어를 하나씩 나누어 객체로 담아주어야 한다.
//   // .split('').reverse() -> 객채로 담아놓은 단어를 뒤집어 준다.
//   // .split('').reverse().join('') -> 뒤집어준 단어들을 다시 문자열로 변환시켜준다.  
//   if(str == strReverse) { // 위에서 선언한 역문자열과 문자열을 같은지 체크해주는 조건문을 만든다.
//     if (str.length == 1){ //한글자 이상이어야 true를 반환하는 조건문을 생성한다.
//       return(false);
//     } else {
//       return (true);
//     }
//   } else {
//     return (false);
//   }
// }

function checkPalindrom(str){
  return str === str.split('').reverse().join('');
}

console.log(checkPalindrom('dad')); //true
console.log(checkPalindrom('mom')); //true
console.log(checkPalindrom('palindrom')); //false
console.log(checkPalindrom('s')); //true
// 문자열을 뒤집어서(split-> reverse -> join)바꿔서 체크