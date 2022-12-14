const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const exp = require('constants');
const connectDB = require('./server/database/connection');
const { connect } = require('http2');
const app = express();
const mongoose = require('mongoose');


dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

app.use(morgan("tiny")); //log requests

//mongofb connection

const uri = "mongodb+srv://Sathira:Sathira@cluster0.rrthfo6.mongodb.net/users?retryWrites=true&w=majority";

async function connectg(){
    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB")
    }catch(error){
        console.error(error);
    }
}

// module.exports = connectDB  
connectg();

app.use(bodyparser.urlencoded({extended:true})) //parse request to body-parser

app.set("view engine", "ejs") //set view enjine 
// app.set("views", path.resolve(__dirname, "views/ejs"))

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// css/style.css
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//load routers
app.subscribe('/', require('./server/routes/router'))

app.listen(PORT, () => { console.log('Server is running on http://localhost:$(PORT)') });