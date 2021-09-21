function reverseString(str) {
    var listOfChars = str.split("");
    var reversedListOfChar = listOfChars.reverse();
    var reversedString = reversedListOfChar.join("");
    return reversedString;
  }

  function isStringPalindrome(str) {
    var reversedString = reverseString(str);
    return str === reversedString;
  }

  function convertDateToString(date){
    var dateStr = { day: "", month: "", year: "" };
  
    if (date.day < 10) {
    dateStr.day = "0" + date.day;
} else {
  dateStr.day = date.day.toString();
}

if (date.month < 10) {
  dateStr.month = "0" + date.month;
} else {
  dateStr.month = date.month.toString();
}

dateStr.year = date.year.toString();
return dateStr;
}
  