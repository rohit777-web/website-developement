const http = require('http');
const fs = require('fs');
const home = fs.readFileSync('home.html');
const services = fs.readFileSync('services.html');
const contact = fs.readFileSync('contact.html');
const aboutus = fs.readFileSync('aboutus.html');

const port = 3000;
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {

    let url = require('url');
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    if (url == '/') {
        res.end(home);
    }
    else if (url == '/services') {
        res.end(services);
    }
    else if (url == '/contact') {
        res.end(contact);
    }
    else if (url == '/aboutus') {
        res.end(aboutus);
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }

})

server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}/`)
})
