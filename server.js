const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const exp = require('constants');

const app = express();

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

app.use(morgan("tiny")); //log requests

app.use(bodyparser.urlencoded({extended:true})) //parse request to body-parser

app.set("view engine", "ejs") //set view enjine 
// app.set("views", path.resolve(__dirname, "views/ejs"))

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// css/style.css
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => { console.log('Server is running on http://localhost:$(PORT)') });