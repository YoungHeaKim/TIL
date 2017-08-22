// 1. 두 수를 입력받아 큰 수를 반환하는 함수
// if문(사용)
// function max (a, b) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
//   return max;
// }

// 3항 연산자
// function max (a, b) {
//   return a > b ? a : b;
// }
// max(4, 4);

// 2. 숫자를 입력하면 한글 요일을 반환하는 함수
// function getDayName(a) {
//   var dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
//   if (a < dayNames.length){
//     console.log(dayNames[a])
//   } else {
//     console.log(dayNames[a % 7]);; // 입력값이 만약 7이상이면 다시 0으로 돌아간다.
//   }
// }
// getDayName(120);

// 3. 숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수
function (numArr) {
  
}

// 4. 숫자를 n개로 전달 받아 숫자들의 평균을 반환하는 함수

// 5. 문자열을 배열로 전달 받아 문자열 하나로 반환하는 함수
// function oneString(stringArr) {
//   return stringArr.join('');
// }
// console.log(oneString(['a', 'b', 'c', 'd']));

// 6. 세 수를 입력받아 큰 수를 반환하는 함수 1번 함수 사용하기

// 7. n개의 인자를 받아서 가장 큰 수를 반환

// 8. 문자열을 역순으로 바꿔주는 함수
function str(stringArr) {
  return stringArr.split('').reverse().join('');  
}
console.log(str('안녕하세요'));

// 9. 비밀번호 문자열 validation 최소 8글자 최대 20글자 영어 대소문자 숫자 포함x