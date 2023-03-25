/**
 * 针对/admin和/settings的请求，要求携带code=521参数，如未携带提示 暗号错误
 */

 const e = require('express');
const express = require('express');
 const fs = require('fs');
 let app = express();
 
//函数
let routerMiddleware = (req,res,next) => {
    if(true) {
        next();
    } else {
        res.send('');
    }
}

//全局中间件函数，实现静态资源调用
app.use(express.static(__dirname + '/public'))

 app.get('/home',(req,res)=>{ 
     res.end('home');
 });
 //路由中间函数先调用，再执行路由回调函数
 app.get('/admin',routerMiddleware,(req,res)=>{ 
    res.end('admin');
});
app.get('/settings',(req,res)=>{ 
    res.end('settings');
});

app.all('*',(req,res)=>{ 
    res.end('404');
});
 
 app.listen(9000,()=>{
     console.log('start server successfully！');
 })