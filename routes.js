const express = require("express");
const userModel = require("./models");
const collection = require("./models");
const { default: mongoose } = require("mongoose");
const app = express();

var loggedIn=false;
var currUsername;

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
            res.redirect('/login?alert=UsernameDoesNotExist');
        }
        else
        {
            if(docs.password===data.password)
            {
                console.log("Logged in");
                currUsername=data.username;
                loggedIn=true;
                res.redirect('./homepage?alert=Successfully Logged In');
            }
            else
            {
                console.log("Incorrect password");
                res.redirect('/login?alert=IncorrectPassword');
            }
        }
    })
    .catch((err)=>{
        console.log(err);
        console.log("Failed authentication");
        res.redirect('/login?alert=FailedAuthentication');
    })
});

app.get("/isLoggedIn", (req, res) => {
    res.json({ loggedIn, username: currUsername });
  });

app.put("/logOut", (req,res) => {
    loggedIn=false;
})

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
                res.redirect('/login?alert=Account created');
            }
            else
            {
                console.log("Username/Password should be between 5 and 30 characters")
                res.redirect('/register?alert=Username/Password should be between 5 and 30 characters');
            }
        }
        else
        {
            console.log("This username already exists");
            res.redirect('/register?alert=This username already exists');
        }
    })
    .catch((err)=>{
        console.log(err);
        console.log("Failed authentication");
        res.redirect('./register');
    })
});

// Fetching solved problems from database

app.get('/api/user/:username', async (req, res) => {
    const { username } = req.params;

    try {
        const user = await collection.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ loggedIn: true, username, solvedProblems: user.solvedProblems });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = app;