const http = require("http");
const fs = require("fs");

const port  = 3000;
const hostname = '127.0.0.1';
const filecontent = fs.readFileSync("file.html");
const server = http.createServer((req,res) =>{
   res.writeHead(200,{'content-type' : 'text/html'});
   res.end(filecontent);
})

server.listen(port,hostname,() =>{
  console.log(`server is running at http://${hostname}:${port}/`);
})
