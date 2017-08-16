// 20. 최단 거리 1차원 점의 쌍 구하기 (DAUM)

// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의 쌍을 배열로 반환하는 함수를 작성하라. (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 예를들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면, 결과값은 [[3, 4], [23, 24]]가 될 것이다.

function findMinDistance(array){
  // return용 배열(최단거리)
  var shortests = [];
  // 두점간의 최단거리 
  var minDistance = Number.MAX_VALUE;
  
  array.reduce(function (pre, cur) {
    var distance = Math.abs(pre - cur);
    
    // 두 점간의 거리가 지금까지 조사된 최단 거리
    if (distance === minDistance){
      shortests.push([pre, cur]);
    }

    // 두 점간의 거리가 최단 거리이면
    if (distance < minDistance){
      minDistance = distance ;
      shortests = [[pre, cur]];
    }
    return cur;
  });
  return shortests;
  
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]
array= [-5, -4, 1, 2, 3, 20, 23, 24];
console.log(findMinDistance(array)); // [ [ -5, -4 ], [ 1, 2 ], [ 2, 3 ], [ 23, 24 ] ]