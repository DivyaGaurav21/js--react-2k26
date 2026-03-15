// Remove 'x' from String using Recursion

function removeX(str) {
  if (str.length === 0) {
    return str; // base case
  }

  if (str[0] === 'x') {
    return removeX(str.substring(1));
  } else {
    return str[0] + removeX(str.substring(1));
  }
}

console.log(removeX("axbxcxd"));

// abcd