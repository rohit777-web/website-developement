// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire.It allows the readFile() function to read the file completely. By the time the code is reading the file, the next block of code is executed. And when the reading is completed, it then prints the data. 

const fs = require("fs");
fs.readFile("file.txt","utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");
