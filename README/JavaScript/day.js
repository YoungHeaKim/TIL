function getDayName(a,b){
  var today = new Date(2016, a-1, b);
  var dayNames = ['(SUN)', '(MON)', '(TUE)', '(WED)', '(THU)', '(FRI)', '(SAT)'];
  var day = dayNames[today.getDay()];
  return day;
}
console.log(getDayName(5,24));