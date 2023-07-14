const express = require('express') ;
const app = express() ;

const PORT=3000;

const path = require('path');

app.get('/homepage',(req,res)=>{
    const filePath = path.join(__dirname, 'homepage.html');
    res.sendFile(filePath);
})

app.get('/login',(req,res)=>{
    const filePath = path.join(__dirname, 'login.html');
    res.sendFile(filePath);

    let username = req.query.userId ;
    let password = req.query.pswd ;

    let validLogin = true;

    validLogin = (username==="ari" && password==="123");

    if(validLogin)
        res.redirect('./homepage');
})

app.get('/register',(req,res)=>{
    const filePath = path.join(__dirname, 'register.html');
    res.sendFile(filePath);
})

app.get('/prob',(req,res)=>{
    const filePath = path.join(__dirname, 'prob.html');
    res.sendFile(filePath);
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});