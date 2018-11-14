function truncateString(str, num) {

  if (str.length > num) {
    return str.slice(0, num) + "...";
    
  } else {
    return str;
  }
  // Clear out that junk in your trunk
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);