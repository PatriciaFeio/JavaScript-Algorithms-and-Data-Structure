function chunkArrayInGroups(arr, size) {
  // Break it up.

  var subArr = [];

  for(var i = 0; i < arr.length; i += size) {

    subArr.push(arr.slice(i, i + size));
  }
  return subArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);