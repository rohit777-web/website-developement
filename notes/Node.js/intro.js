const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 404;// The status code is used to indicate the result of the request. It has been categorised into 5 parts
//1.Informational responses (100–199)
//2.Successful responses (200–299)
//3.Redirects (300–399)
//4.Client errors (400–499)
//5.Server errors (500–599)
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// What is Node.Js?
// ANS: 1.Node.Js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
// 2.Node.Js is designed to build scalable network applications.
// 3.Node.Js can be download from the official Node.js website.
// 4.Node.Js is a free and open-source server environment.
// 5.Node.Js allows us to run JavaScript on the server.
// 6.Node.Js can run on multiple operating systems.


// Why use Node.Js?
// ANS:1.You can use JavaScript in the entire stack.
// 2.Many famous companies use Node.Js as their backend.
// 3.Node.Js comes with a lot of useful built-in modules.
// 4.Node.Js is fast.