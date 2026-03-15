// Put "*" Between Two Adjacent Same Letters
function addStars(str) {
  if (str.length === 1) {
    return str; // base case
  }

  const smallAns = addStars(str.slice(1));

  if (str[0] === smallAns[0]) {
    return str[0] + "*" + smallAns;
  } else {
    return str[0] + smallAns;
  }
}

console.log(addStars("aabbcc"));


// Dry Run
// Input : "aabb"

// Steps
// addStars("aabb")
// a + addStars("abb")
// addStars("abb")
// a + addStars("bb")
// addStars("bb")
// b + addStars("b")

// Now return back
// b*b
// ab*b
// a*ab*b

// function addStars(str) {
//   if (str.length <= 1) return str;

//   const rest = addStars(str.slice(1));

//   return str[0] === rest[0]
//     ? str[0] + "*" + rest
//     : str[0] + rest;
// }