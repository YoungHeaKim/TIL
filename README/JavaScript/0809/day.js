function getDayName(a,b){
  var today = new Date(2016, a-1, b);
  var dayNames = ['(SUN)', '(MON)', '(TUE)', '(WED)', '(THU)', '(FRI)', '(SAT)'];
  var day = dayNames[today.getDay()];
  return day;
}

console.log(getDayName(2,7));    // (SUN)
console.log(getDayName(5,24));   // (TUE)
console.log(getDayName(7,30));   // (SAT)
console.log(getDayName(10,04));  // (TUE)