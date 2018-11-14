function repeatStringNumTimes(str, num) {

  let newStr = '';

  if(num > 0) {
    for (let i = 0; i < num; i++) {
     newStr += str;
     }
  }  else {
      return '';
   }
   
return newStr;
  // repeat after me
}

repeatStringNumTimes("*", 3);

/*function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}*/