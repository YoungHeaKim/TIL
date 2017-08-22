// 13. 소수 찾기

// numberOfPrime 메소드는 정수 n을 매개변수로 입력받는다. 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 함수를 완성하라.

// 소수(素數, prime number)는 양의 약수가 1과 자기 자신 뿐인 1보다 큰 자연수로 정의된다. 즉, 1과 자기 자신으로만 나누어지는 수를 의미한다.

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, …

// 예를 들어 10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환한다.

function numberOfPrime(n) {
  //priCount는 소수의 개수를 저장한 변수
  // divCount는 약수의 개수를 저장한 변수
  // divNum은 지정한 숫자까지 도는 변수
  var priCount = 0;

  // num을 n만큼 도는 반복문을 만든다.
  for(var num = 1; num <=n; num++){
  
    // 약수를 저장한다. 그리고 첫번째 for문을 한번 돌때마다 초기화를 해준다.
    var divCount = 0;
  
    // divNum을 사용하여 num만큼 도는 반복문을 만든다.
    for(var divNum = 1; divNum <= num; divNum++){
  
      // 약수를 구하는 조건문을 만들어 약수만 빼준다.
      if(num % divNum === 0){
        divCount++;
      }
    }
  
    // 약수가 2개인 소수를 찾는 조건문
    if(divCount === 2){
      priCount++;
    }
  }
  return priCount;
}

console.log(numberOfPrime(5)); // 3
console.log(numberOfPrime(10)); // 4
console.log(numberOfPrime(15)); // 6
console.log(numberOfPrime(100)); // 25
console.log(numberOfPrime(111)); // 29
