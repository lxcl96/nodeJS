const express = require('express');
let app = express();

app.get('/',(req,res)=>{
    console.log(req.method);
    console.log(req.url);//port后面的
    console.log(req.httpVersion);
    console.log(req.headers);

    //路径和参数
    console.log(req.path);
    console.log(req.query);
    //获取ip
    console.log(req.ip);
    res.end('ok');
    //获取单独的请求头
    console.log(req.get('host'));

});

app.listen(9000,()=>{
    console.log('start server successfully！');
})