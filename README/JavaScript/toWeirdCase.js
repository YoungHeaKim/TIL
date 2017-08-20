// # 6. 이상한 문자만들기

// toWeirdCase함수는 문자열 s를 매개변수로 입력받는다.
// 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로
// 바꾼 문자열을 리턴하도록 함수를 완성하라.
// 예를 들어 s가 ‘try hello world’라면 첫 번째 단어는 ‘TrY’, 두 번째 단어는 ‘HeLlO’, 세 번째 단어는 ‘WoRlD’로 바꿔 ‘TrY HeLlO WoRlD’를 리턴한다.

// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

function toWeirdCase(s) {
  // result라는 변수를 선언해준다.
  var result;

  // sArr이라는 변수안에 s의 문자열을 단어씩 잘라서 배열로 바꾸어준다.
  var sArr = s.split(' ');

  // sArr의 길이만큼 반복문을 돌린다. 
  for(var num = 0; num < sArr.length; num++){

    // sArr[num]을 사용하여 단어를 한번씩 순회한다.  
    s = sArr[num];
    // result라는 빈문자열을 만들어준다.  
    result = '';

    // s의 길이만큼 반복문을 돌린다.
    for(var i = 0; i < s.length; i++){
      
      // 짝수의 글자에는 대문자로 만들고 홀수의 글자는 소문자로 출력하게 하는 조건문을 써준다.
      if(i % 2 === 0){
        result += s[i].toUpperCase();
      } else {
        result += s[i].toLowerCase();
      }
    }
    sArr[num] = result;
  }
  // s.Arr의 배열을 join을 사용하여 문자열로 만들어준다.
  return sArr.join(' ');
}

console.log(toWeirdCase('try hello world')); // 'TrY HeLlO WoRlD'