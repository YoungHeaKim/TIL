var result = ''; // result라는 빈문자열을 만들어 준다.
for (var line=0; line <= 5; line++){ // line이 0에서부터 5까지 1씩 증가한다.
  for (var star = 0; star < line; star++){ // 별이 line이 증가할 때 마다 1개씩 늘어난다.
    result += '*';  // 결과값은 result + *이 result값이 된다. 
  }
  result += "\n"; // 결과값이 나오면 개행을 한다.
}
console.log(result); // result값으로 출력을 한다.