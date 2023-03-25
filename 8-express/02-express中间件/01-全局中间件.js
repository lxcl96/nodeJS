/**
 * 记录每次请求的ip和地址
 */

 const express = require('express');
 const fs = require('fs');
 let app = express();
 
 const log = function(req,res,next){
    let {url,ip} = req;
    fs.writeFile('./log/access.log',new Date() + ' ' + ip + ' access ' + url + '\r\n', {flag:'a+'},(err)=>{
        if(err) {
            console.log(err);
            console.log('[error ]' + new Date() + ' ' + ip + ' access ' + url);
            return;
        }
    });

    //执行器链，继续调用路由函数
    next();
 }

 //使用全局中间件函数
app.use(log);

 app.get('/home',(req,res)=>{ 
     res.end('home');
 });
 app.get('/admin',(req,res)=>{ 
    res.end('admin');
});

app.all('*',(req,res)=>{ 
    res.end('404');
});
 
 app.listen(9000,()=>{
     console.log('start server successfully！');
 })