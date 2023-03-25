const express = require('express');
const app = express();
/**
 * 按照顺序响应，如果第一个匹配上，就不去找第二个了
 */
//get请求
app.get('/home',(req,res)=>{
    res.end("hello express!");
});

//post请求
app.post('/home',(req,res)=>{
    res.end("post!");
});

//所以方式
app.all('/*',(req,res)=>{
    res.end("all!");
});

app.listen(9000,()=>{
    console.log('服务启动成功!');
})