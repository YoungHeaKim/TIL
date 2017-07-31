var print = ''; // 결과를 출력할 변수를 빈문자열로 선언한다.
for (var i = 0; i < 10; i++){ // 0부터 시작하여 10보다 작은 수까지 커지게 한다.
  if (i%2 == 0) { // Even이라는 수르 2로 나누어 나머지가 0이 나오면 if문 실행
    print += i // Even의 값과 print의 값을 더하여 print값에 저장한다.
}
console.log(print); // console.log로 한번에 값을 출력