const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;
const path = require('path');

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded());


//PUG SPECIFIC STUFF
app.set('view engine', 'pug'); //setting the template engine as pug
app.set('views', path.join(__dirname, 'views')); //set the views directory


//ENDPOINTS
app.get('/', (req, res) => {
    // const con = "This is how pug works";
    // const params = {title: "pug template" , content: con}
    res.status(200).render('index.pug');
});

app.post('/', (req, res) => {
    const name = req.body.name;
    const gender = req.body.gender;
    const email = req.body.email;
    const more = req.body.more;
    const output = `Client name is ${name},gender ${gender},email ${email},more about him ${more}`;
    // const output = {
    //     name: req.body.name,
    //     gender :req.body.gender,
    //     email: req.body.email,
    //     more: req.body.more
    // }; output cannot be written inside your file as an object
    fs.writeFileSync('output.txt',output);
    const params = {
        message: "YOur form is submitted successfully."
    }
    res.status(200).render('index.pug', params);
    

});

//START THE SERVER
app.listen(port, () => {
    console.log(`The server started successfully on port ${port}`)
})