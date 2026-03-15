function binarySearch(arr, x, si, ei) {
  if (si > ei) {
    return -1; // base case
  }

  let mi = Math.floor((si + ei) / 2);

  if (arr[mi] === x) {
    return mi;
  } else if (arr[mi] < x) {
    return binarySearch(arr, x, mi + 1, ei);
  } else {
    return binarySearch(arr, x, si, mi - 1);
  }
}

let arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr, 7, 0, arr.length - 1));
