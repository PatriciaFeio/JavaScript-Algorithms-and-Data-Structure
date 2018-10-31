function reverseString(str) {
  let arr = str.split("");
  arr.reverse();
  str = arr.join("");

  return str;

  //built-in functions
  //return str.split("").reverse().join("");
}

reverseString("hello");