const express = require('express') ;
const app = express() ;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

const PORT=3000;

const path = require('path');

const collection=require("./mongoose");

app.get('/homepage',(req,res)=>{
    const filePath = path.join(__dirname, 'homepage.html');
    res.sendFile(filePath);
})

app.get('/login',(req,res)=>{
    const filePath = path.join(__dirname, 'login.html');
    res.sendFile(filePath);
})

app.get('/register',(req,res)=>{
    const filePath = path.join(__dirname, 'register.html');
    res.sendFile(filePath);
})

app.get('/prob',(req,res)=>{
    const filePath = path.join(__dirname, 'prob.html');
    res.sendFile(filePath);
})

const Router = require("./routes");
app.use(Router);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


