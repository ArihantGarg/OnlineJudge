const mongoose=require("mongoose") ;
const dotenv = require("dotenv");

require('dotenv').config();
dotenv.config({path: "./envfile/.env"})
const uri=process.env.uri;

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error(error);
    }
}

connect();

//

