//sum of all element in array
function sumRec(arr, index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + sumRec(arr, index + 1);
}
const arr = [1, 2, 3, 4, 5];
console.log(sumRec(arr));


//sum of odd numbers in array
function oddSum(arr, index = 0) {
  if (arr.length === index) return 0;

  if (arr[index] % 2 !== 0) {
    return arr[index] + oddSum(arr, index + 1);
  } else {
    return 0 + oddSum(arr, index + 1);
  }
}
let arr2 = [1, 2, 3, 4];
console.log(oddSum(arr2));
