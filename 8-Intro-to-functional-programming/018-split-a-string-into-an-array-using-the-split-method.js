function splitify(str) {
  // Add your code below this line
  
  // /\W/ Matches any non-word character
  return str.split(/\W/).join(" ");
  
  // Add your code above this line
}

console.log(splitify("Hello World,I-am code"));


