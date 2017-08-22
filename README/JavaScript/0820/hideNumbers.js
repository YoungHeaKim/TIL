// # 7. 핸드폰번호 가리기

// 핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 ‘*’으로 바꿔야 한다.
// 전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라
// 예를들어 s가 ‘01033334444’면 ‘*******4444’를 리턴하고, ‘027778888’인 경우는 ‘*****8888’을 리턴한다.  

function hideNumbers(str){
  // hideNum이라는 변수에 str로 받은 값의 길이에서 4개를 빼준다.(이유는 뒤의 4개의 변수만 숫자로 표시해주어야하기때문)
  var hideNum = str.length - 4;

  // result라는 변수에 str의 substirng이라는 메소드를 사용하여 hideNum를 출력하는 값을 넣는다.
  var result = str.substring(hideNum);
  
  // for문을 사용하여 hideNum만큼 길이를 *로 찍어주는 반복문을 사용한다.  
  for(var num=0; num < hideNum; num++){
    result = "*" + result;
  }
  return result;
}

// 정규표현식
// function hideNumbers(str) {
//   // .replace()메소드를 사용하여 뒤에 4개를 빼고 *을 넣어준다. 
//   return str.replace(/\d(?=\d{4})/g, "*");
// }

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888