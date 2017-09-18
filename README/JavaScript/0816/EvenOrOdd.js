// 3) 짝수와 홀수
// evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. num이 짝수일 경우 ‘Even’을 반환하고 홀수인 경우 ‘Odd’를 반환하도록 evenOrOdd에 코드를 작성하라.
// If문
function EvenOrOdd(num) {
  if (num % 2 == 0) { // num을 짝수인지 조건을 써준다.
    return 'Even';
  } else {            // 그렇지않은 경우 홀수인지를 써준다.
    return 'Odd'; 
  }
} 

// 3항 연산자
// function EvenOrOdd(num) {
//     return (num % 2  == 0) ? "Even" : "Odd"; // num이 짝수인지 홀수인지 확인하는 조건을 써주고 삼항연산문을 사용하여 값을 정한후 값을 출력한다.
// }  
console.log(EvenOrOdd(0));  // even
console.log(EvenOrOdd(2));  // even
console.log(EvenOrOdd(3));  // odd
console.log(EvenOrOdd(15)); // odd
// 단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.