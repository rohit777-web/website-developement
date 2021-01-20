const fs = require("fs");
const { fileURLToPath } = require("url");
let text = fs.readFileSync("file.txt");
// text = text.replace("cricket", "hockey");

console.log("The content of the file is");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("rohan.txt", text);
