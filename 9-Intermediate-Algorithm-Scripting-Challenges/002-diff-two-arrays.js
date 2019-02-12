function diffArray(arr1, arr2) {
  var newArr = [];

  function compare(arr3, arr4) {
    /*
    for(let i = 0; i <= arr3.length; i++) {
      if(arr4.indexOf(arr3[i]) === -1) {
        newArr.push(arr3[i]);
      }
    }
    */
    arr3.forEach( x => {
    if(!arr4.includes(x)) newArr.push(x);
  });
  };
  // Same, same; but different.
  //return newArr;
  compare(arr1,arr2);
  compare(arr2, arr1);
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));