const fs = require("fs");
const path = require("path");

const string = process.argv[2];

const file = fs.readFileSync(path.join(__dirname, "example.txt")).toString();
console.log(file.includes(string));