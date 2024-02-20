const fs = require("fs");
// const path = require("path");
const readline = require("readline");

const file = readline.createInterface({
  input: fs.createReadStream("readLine.txt"),
  ouput: process.stdout,
  terminal: false,
});
file.on("line", (line) => {
  console.log(line);
});
