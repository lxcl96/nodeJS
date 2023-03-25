const express = require('express');
const honmeRouter = require('./router/homeRouter');

let app = express();

app.use(honmeRouter)



app.all('*',(req,res)=>{ 
    res.end('404');
});
 
 app.listen(9000,()=>{
     console.log('start server successfully！');
 })