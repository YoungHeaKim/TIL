// #18. 배열에서 특정 값만을 구하기

// 배열 arr에서 짝수이고 3보다 큰 수만을 구하여 이를 배열로 반환하는 함수를 작성하라

function getArray(arr) {
  // Arr이라는 빈배열을 만들어 결과값을 넣을 배열을 만든다.
  var Arr = [];
  // arr객체수만큼 for문을 돌린다.
  for(var num = 0; num < arr.length; num++){
    //값이 3보다 크고 짝수인 경우를 return하는 조건문
    if(arr[num] > 3 && arr[num] % 2 == 0){
      //위의 조건이 맞은면 처음에 만들어 놓았던 Arr[]배열에 값을 할당헤준다.
      Arr.push(arr[num]); 
    }
  }
  return Arr;
}

var arr = [1, 2, 3, 4, 5, 6];
console.log(getArray(arr)); // [ 4, 6 ]