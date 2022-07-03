const fs = require("fs");
const path = require("path");

const string = process.argv[2];

const fileContents = fs.readFileSync(path.join(__dirname, "example.txt")).toString();
console.log(fileContents.includes(string));