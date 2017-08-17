// 20. 최단 거리 1차원 점의 쌍 구하기 (DAUM)

// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의 쌍을 배열로 반환하는 함수를 작성하라. (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 예를들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면, 결과값은 [[3, 4], [23, 24]]가 될 것이다.

function findMinDistance(array){
  // return용 배열(최단거리)
  var shortests = [];
  // 두점간의 최단거리
  var minDistance = Number.MAX_VALUE;
  
  // reduce를 사용하여 배열에서 자기자신과 바로 전 값을 비교하여 준다.  
  array.reduce(function (pre, cur) {
    // distance라는 변수를 선언해주어 현재값과 전값을 빼주어 그 차이를 저장을 해준다.
    var distance = Math.abs(pre - cur);
    
    // 두 점간의 거리가 지금까지 조사된 최단 거리(이때 위에서 저장한 distance의 값과 다시 재할당된 minDistance의 값을 비교해 준다.)
    if (distance === minDistance){
      // 최단 거리가 점점 짧아지는데 제일 짧은 distance와 갔다면 push메소드를 사용하여 조건을 만족하는 두 수를 배열의 형태로 만들어 뒤에 저장시켜준다.  
      shortests.push([pre, cur]);
    }

    // 두 점간의 거리가 최단 거리이면
    if (distance < minDistance){
      // distance값과 minDistance값을 비교하여 그것보다 작으면 mindistance에 세로 할당하여 넣어준다.
      minDistance = distance ;
      // shortests에 새로 배열의 형태로 값을 할당한다.
      shortests = [[pre, cur]];
    }
    return cur;
  });
  return shortests;
  
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]
var array= [-5, -4, 1, 2, 3, 20, 23, 24];
console.log(findMinDistance(array)); // [ [ -5, -4 ], [ 1, 2 ], [ 2, 3 ], [ 23, 24 ] ]