const { urlencoded } = require('body-parser');
const mongoose = require('mongoose');

// const connectDB = async()=>{
//     try{
//         //mongodb connection string
//         const con = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false,
//             useCreateIndex: true
//         })
//     }catch(err)
// {
//     console.log(err);
//     process.exit(1);
// }}