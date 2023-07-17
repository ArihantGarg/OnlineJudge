const express = require("express");
const userModel = require("./models");
const collection = require("./models");
const { default: mongoose } = require("mongoose");
const app = express();


app.post('/submit',(req,res)=>{

    var data={
        username : req.body.username,
        password : req.body.password 
    }

    collection.findOne({username: data.username})
    .then((docs)=>{
        if(docs===null)
        {
            console.log("This username does not exist");
            res.redirect('./login');
        }
        else
        {
            if(docs.password===data.password)
            {
                console.log("Logged in");
                res.redirect('./homepage');
            }
            else
            {
                console.log("Incorrect password");
                res.redirect('./login');
            }
        }
    })
    .catch((err)=>{
        console.log(err);
        console.log("Failed authentication");
        res.redirect('./login');
    })
});

app.post("/signup", async (req, res) => {

    var data={
        username : req.body.username,
        password : req.body.password 
    }

    console.log(data.username+" "+data.password);
    
    collection.findOne({username: data.username})
    .then((docs)=>{
        if(docs===null)
        {
            if(data.username.length<31 && data.password.length<31 && data.username.length>4 && data.password.length>4)
            {
                userModel.create(data);
                console.log("Success : Account registered");
                res.redirect('./login');
            }
            else
            {
                console.log("Username/Password should be between 5 and 30 characters")
                res.redirect('./register');
            }
        }
        else
        {
            console.log("This username already exists");
            res.redirect('./register');
        }
    })
    .catch((err)=>{
        console.log(err);
        console.log("Failed authentication");
        res.redirect('./register');
    })
});

module.exports = app;