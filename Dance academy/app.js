const express = require('express');
const app = express();
// const fs = require('fs');
const path = require('path');
const port = 80;

//EXPRES SPECIFIC STUFF
app.use('/static', express.static('static')); //for sercving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, "views")); // set the views directory

//ENDPOINTS
app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('index.pug');
});

// app.post('/contact', (req, res) => {
//     const params = { "Your Form Submitted Successfully" };
//     res.status(200).render(params);

// });

//START THE SERVER
app.listen(port, () => {
    console.log(`The server started at port ${port}`);

});