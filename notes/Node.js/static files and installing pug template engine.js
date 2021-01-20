
const express = require('express')
const app = express();
const port = 80;
const path = require('path');

//serving static files in express:
//static files: These are the files we want to present without any functionalities.For example presenting css,javaScript files etc.we can serve these files in two ways:
// app.use(express.static('serving static files'));
// app.use('/static', express.static('serving static files'));//its url contains static keyword,rest of the things are same as that of above.

//Now if we want to serve custom static templates, then we can take the help of template engines. A template engine (template processor) is a software designed to combine templates with a data model to produce result documents. In simple words, if we feed anything to the template engine, it provides the custom template output.The template engine that we will use is called pug. We will install it by writing npm install pug

//set pug as template engine
app.set('view engine','pug');

//set the view directory where we keep all our pug files
app.set('views', path.join(__dirname, 'views'));

//our pug file endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo',{ title: 'Hey Rohit', message: 'Hello there and thanks for telling me how to use pubG!' });
});

app.get("/", (req, res) => {
    res.send("this is home page");
});

app.get("/about", (req, res) => {
    res.send("this is about page");
});

app.get("/services", (req, res) => {
    res.send("this is services page");
});

app.get("/contact", (req, res) => {
    res.send("this is contact page");
});

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});