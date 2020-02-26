//Only change code below this line
function countdown(n){
   if (n < 1) {
    return []
  } else {
    const countArr = countdown(n - 1);
    countArr.unshift(n)
    return countArr;
  }
}
console.log(countdown(5)); // [5, 4, 3, 2, 1]
