const express = require('express');
const bodyParser = require('body-parser');

let app = express();

//在访问静态资源之前进行鉴权  如果是img标签 中的src 需要查看refer的值
app.use((req,res,next)=>{
    //console.log(req.ip.indexOf('127.0.0.1'));
    if(req.ip.indexOf('127.0.0.1') !=-1||req.ip.indexOf('192.168.31.54')!=-1) {
        next();
    } else{
    res.statusCode=403;
    res.send('forbidden');
    console.log('[outer ip] ' + req.ip);
    return;
    }
});
app.use(express.static(__dirname+'/'));

app.get("/login",(req,res) => {
    res.redirect('/login.html');
});

app.listen(9000);