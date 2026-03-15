//Ascending Order
function printAsc(num) {
  if (num === 0) return;
  printAsc(num - 1);
  console.log(num);
}
printAsc(10);

//Descending Order
function printDesc(num) {
  if (num === 0) return;
  console.log(num);
  printDesc(num - 1);
}
printDesc(10);

//sum of n number
function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
console.log(sum(5));

//factorial of n number
function factorialNum(num) {
  if (num === 0) return 1;
  return num * factorialNum(num - 1);
}
console.log(factorialNum(5));


// Fibonacci Number
// Formula
// f(n) = f(n-1) + f(n-2)
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));
