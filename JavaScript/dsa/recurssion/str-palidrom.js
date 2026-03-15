function checkStringPalindrome(str) {
  if (str.length <= 1) {
    return true; // base case
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return checkStringPalindrome(str.slice(1, -1));
}

console.log(checkStringPalindrome("madam")); // true
console.log(checkStringPalindrome("hello")); // false

// =================================

function checkStringPalindrome(str) {
  let n = str.length;

  if (str.length <= 1) {
    return true;
  }

  let firstLetter = str.substring(0, 1);
  let lastLetter = str.substring(n - 1, n);

  if (firstLetter !== lastLetter) {
    return false;
  } else {
    return checkStringPalindrome(str.substring(1, n - 1));
  }
}

console.log(checkStringPalindrome("madam")); // true
console.log(checkStringPalindrome("hello")); // false