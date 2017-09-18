// 2) 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)

// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.   
// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// hint)  
// 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]

function searchEight(num) {
  // 변수의 선언위치가 중요하다. 만약 for문안에 count를 선언해주면 for문이 실행 될 때마다 count=0;으로 초기화가 되기때문에 for문 밖에 써주는 것이 중요하다.
  var count = 0;
  
  // 1부터 10000까지 확인을 해야해서 반복문 사용
  for (var numOrd = 1; numOrd <= num; numOrd++){
    
    // num은 숫자형이기 때문에 문자열로 바꿔주고 str은 배열이 아님으로 split메소드를 사용하여 배열로 변화를 줘야함. 
    var numArr = numOrd.toString().split('');
    
    // i는 0부터 10000까지 도는 숫자에서 8을 검색하는 for문을 만듬
    for (var i = 0; i < numArr.length; i++){
      
      // numArr[i]를 사용하여 각 자리의 값을 8인지 비교 , 이때 ===을 사용하면 undefined출력(이유는 numArr가 위에서 문자열로 바꿔주었기 때문)
      if(numArr[i] == 8){ 
        // 여기서 8이 나올때마다 1씩 증가시켜주는 연산식을 사용한다. 밑의 경우 count+1을 count에 저장한다는 뜻의 연산자인 +=을 사용하였다.   
        count += 1;
      }
    }
    
  }
  return count;
}
console.log(searchEight(10000));  // 4000
console.log(searchEight(10088));  // 4018
console.log(searchEight(50000));  // 20000