const fs = require("fs");

// Function to read data from Data.txt
function readFileData() {
  return fs.readFileSync("Data.txt", "utf-8");
}

module.exports = readFileData;
