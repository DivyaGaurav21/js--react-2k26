//  check whether array is sorted or not

function isArraySorted(arr, si = 0) {
  if (si === arr.length - 1) {
    return true; // base case
  }

  if (arr[si] > arr[si + 1]) {
    return false;
  }

  return isArraySorted(arr, si + 1);
}

console.log(isArraySorted([1,2,3,4,5])); // true
console.log(isArraySorted([1,5,3,4]));   // false

