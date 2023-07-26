const express = require('express') ;
const app = express() ;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

const PORT=3000;

const path = require('path');

const collection=require("./mongoose");

app.get('/',(req,res)=>{
    const filePath = path.join(__dirname, './public/homepage.html');
    res.sendFile(filePath);
})


app.get('/homepage',(req,res)=>{
    const filePath = path.join(__dirname, './public/homepage.html');
    res.sendFile(filePath);
})

app.get('/login',(req,res)=>{
    const filePath = path.join(__dirname, './public/login.html');
    res.sendFile(filePath);
})

app.get('/register',(req,res)=>{
    const filePath = path.join(__dirname, './public/register.html');
    res.sendFile(filePath);
})

app.get('/prob1',(req,res)=>{
    const filePath = path.join(__dirname, './public/prob1.html');
    res.sendFile(filePath);
})

app.get('/prob2',(req,res)=>{
    const filePath = path.join(__dirname, './public/prob2.html');
    res.sendFile(filePath);
})

app.get('/prob3',(req,res)=>{
    const filePath = path.join(__dirname, './public/prob3.html');
    res.sendFile(filePath);
})

app.get('/prob4',(req,res)=>{
    const filePath = path.join(__dirname, './public/prob4.html');
    res.sendFile(filePath);
})

const Router = require("./routes");
app.use(Router);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


// Online Compiler 

const fs = require('fs');
const {c, cpp, node, python, java, default: compileRun} = require('compile-run');

const multer = require('multer');
const upload = multer({dest :'uploads/'});
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

app.post('/prob1Submit',upload.single('code'), (req,res)=>{
    console.log(req.file);

    try {
        const filePath = path.join(__dirname, req.file.path);
        const data = fs.readFileSync(filePath, 'utf8');
        console.log(data);

        let resultPromise = cpp.runSource(data);
        resultPromise
            .then(result => {
                console.log(result);

                const answerfilePath = path.join(__dirname, './answer/answer1.txt');
                const answerData = fs.readFileSync(answerfilePath, 'utf8');
                console.log(answerData);

                // Final check

                var data1 = result.stdout.replace(/\s/g, '');
                var data2 = answerData.replace(/\s/g, '');
                if(data1 === data2)
                {
                    console.log("Success");
                    const verdict='AC';
                    res.send({verdict});
                }
                else
                {    
                    console.log("Failed");
                    const verdict='WA';
                    res.send({verdict});
                    console.log(data1);
                    console.log(data2);
                }
            })
            .catch(err => {
                const verdict='Error';
                res.send({verdict});
                console.log(err);
            });
    }
    catch (err) {
        console.error(err);
    }
})

app.post('/prob2Submit',upload.single('code'), (req,res)=>{
    console.log(req.file);

    try {
        const filePath = path.join(__dirname, req.file.path);
        const data = fs.readFileSync(filePath, 'utf8');
        console.log(data);

        let resultPromise = cpp.runSource(data,{ stdin:'5 7 '});
        resultPromise
            .then(result => {
                console.log(result);

                const answerfilePath = path.join(__dirname, './answer/answer2.txt');
                const answerData = fs.readFileSync(answerfilePath, 'utf8');
                console.log(answerData);

                // Final check

                var data1 = result.stdout.replace(/\s/g, '');
                var data2 = answerData.replace(/\s/g, '');
                if(data1 === data2)
                {
                    console.log("Success");
                    const verdict='AC';
                    res.send({verdict});
                }
                else
                {    
                    console.log("Failed");
                    const verdict='WA';
                    res.send({verdict});
                    console.log(data1);
                    console.log(data2);
                }
            })
            .catch(err => {
                const verdict='Error';
                res.send({verdict});
                console.log(err);
            });
    }
    catch (err) {
        console.error(err);
    }
})

app.post('/prob3Submit',upload.single('code'), (req,res)=>{
    console.log(req.file);

    try {
        const filePath = path.join(__dirname, req.file.path);
        const data = fs.readFileSync(filePath, 'utf8');
        console.log(data);

        let resultPromise = cpp.runSource(data,{ stdin:'7 \n 5 6 7 11 10 9 8'});
        resultPromise
            .then(result => {
                console.log(result);

                const answerfilePath = path.join(__dirname, './answer/answer3.txt');
                const answerData = fs.readFileSync(answerfilePath, 'utf8');
                console.log(answerData);

                // Final check

                var data1 = result.stdout.replace(/\s/g, '');
                var data2 = answerData.replace(/\s/g, '');
                if(data1 === data2)
                {
                    console.log("Success");
                    const verdict='AC';
                    res.send({verdict});
                }
                else
                {    
                    console.log("Failed");
                    const verdict='WA';
                    res.send({verdict});
                    console.log(data1);
                    console.log(data2);
                }
            })
            .catch(err => {
                const verdict='Error';
                res.send({verdict});
                console.log(err);
            });
    }
    catch (err) {
        console.error(err);
    }
})

app.post('/prob4Submit',upload.single('code'), (req,res)=>{
    console.log(req.file);

    try {
        const filePath = path.join(__dirname, req.file.path);
        const data = fs.readFileSync(filePath, 'utf8');
        console.log(data);

        let resultPromise = cpp.runSource(data,{stdin:'1000000000 9'});
        resultPromise
            .then(result => {
                console.log(result);

                const answerfilePath = path.join(__dirname, './answer/answer4.txt');
                const answerData = fs.readFileSync(answerfilePath, 'utf8');
                console.log(answerData);

                // Final check

                var data1 = result.stdout.replace(/\s/g, '');
                var data2 = answerData.replace(/\s/g, '');
                if(data1 === data2)
                {
                    console.log("Success");
                    const verdict='AC';
                    res.send({verdict});
                }
                else
                {    
                    console.log("Failed");
                    const verdict='WA';
                    res.send({verdict});
                    console.log(data1);
                    console.log(data2);
                }
            })
            .catch(err => {
                const verdict='Error';
                res.send({verdict});
                console.log(err);
            });
    }
    catch (err) {
        console.error(err);
    }
})
