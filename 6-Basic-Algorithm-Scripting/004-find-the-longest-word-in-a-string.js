function findLongestWordLength(str) {

  let splitStr = str.split(" ");
  let lengthArr = splitStr.map(splitStr => splitStr.length);
  return Math.max(...lengthArr);

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");