const fs = require("fs");

// fs.writeFile("textpath.txt", "Hello World!!@", (err) => {
//   if (err) throw err;
//   console.log("File written");
// });

// fs.appendFile("textpath.txt", "\nNew Line content", (err) => {
//   if (err) throw err;
// });

fs.unlink("textpath.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});