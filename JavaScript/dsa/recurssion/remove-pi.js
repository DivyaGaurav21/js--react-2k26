function replacePi(str) {
  if (str.length <= 1) {
    return str; // base case
  }

  if (str[0] === "p" && str[1] === "i") {
    return "3.141" + replacePi(str.substring(2));
  } else {
    return str[0] + replacePi(str.substring(1));
  }
}

console.log(replacePi("pip"));
console.log(replacePi("xpix"));
// Output
// 3.141p
// x3.141x
