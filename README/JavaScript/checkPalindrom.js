function checkPalindrom(str){
  // 단어를 체크해준다.
  var strReverse = str .split('').reverse().join(''); // strReverse를 선언해주어 역문자열을 저장한다.  
  if(str == strReverse) {
    if (str.length == 1){
      return(false);
    } else {
      return (true);
    }
  } else {
    return (false);
  }
}

console.log(checkPalindrom('dad')); //true
console.log(checkPalindrom('mom')); //true
console.log(checkPalindrom('palindrom')); //false
console.log(checkPalindrom('s')); //false
// 문자열을 뒤집어서(split-> reverse -> join)바꿔서 체크