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
  