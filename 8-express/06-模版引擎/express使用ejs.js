const express = require('express'); 
const path = require('path');

let app = express();

//设置express的模版引擎
app.set('view engine','ejs');
//设置模版文件位置
app.set('views', path.resolve(__dirname,'./views')); //不能用绝对路径即 /开头

app.get('/',(req,res)=>{
    //发送模版文件，进行渲染 （模块文件名，数据）
    res.render("index",{title:'欢迎观临'});
});

app.listen(9000);