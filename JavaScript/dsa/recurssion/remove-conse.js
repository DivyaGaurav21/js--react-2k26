// Remove Consecutive Duplicate Characters
function removeConsecutive(str) {
  if (str.length <= 1) {
    return str; // base case
  }

  if (str[0] === str[1]) {
    return removeConsecutive(str.substring(1));
  } else {
    return str[0] + removeConsecutive(str.substring(1));
  }
}

console.log(removeConsecutive("aabbccdaa"));
