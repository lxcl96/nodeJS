const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname+'/'));
//app.use(express.json());
//app.use(express.urlencoded({extended:false}));


// create application/json parser 解析json格式的请求体
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser 解析url格式
const urlencodedParser = bodyParser.urlencoded({ extended: false })



app.get("/login",(req,res) => {
    res.redirect('/login.html');
});

app.post("/login",urlencodedParser,(req,res) => {
    //console.log(req.method);
    //console.log(req);
    console.log(req.body);

    res.send('ok');
});

app.listen(9000);