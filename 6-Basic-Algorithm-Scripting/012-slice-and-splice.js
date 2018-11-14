
function frankenSplice(arr1, arr2, n) {

  //to ensure that arr2 is not mutated, we assign the result of slice() method to a variable

  var newarr2 = arr2.slice();

  //iterate through every item in arr1

  for(var i = 0; i < arr1.length; i++) {

    //use splice() function to insert the item into index n of newarr2
    
    newarr2.splice(n, 0, arr1[i]);

    //increment the index by one to ensure that every item from arr1 is inserted into newarr2 in the proper index position
    n++;
  }
  // It's alive. It's alive!
  return newarr2;
  
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);