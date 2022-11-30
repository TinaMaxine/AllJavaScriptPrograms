/**
 * The function checks if the string is a palindrome by comparing the first character with the last
 * character, the second character with the second last character and so on. If all the characters
 * match, then it is a palindrome. If even one character does not match, then it is not a palindrome.
 * @param string - "DAD"
 * @returns It is a palindrome
 */
function checkPalindrome(string) {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

const string = "DAD";

const value = checkPalindrome(string);

console.log(value);
