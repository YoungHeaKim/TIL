var result = '';
for (var line=0; line <= 3; line++){
  for (var star = 0; star < line; star++){
    result += '*';
  }
  result += "\n";
}
for(var line_1=4; line_1 <=8; line_1++){
  for (var star_1 = 0; star_1 < line_1-3; star_1++){
    result += '*'; 
  }
  result += "\n";
}
console.log(result);