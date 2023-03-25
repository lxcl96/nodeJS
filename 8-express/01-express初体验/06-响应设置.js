const express = require('express');
let app = express();


app.get('/:id',(req,res)=>{ 
    
    //支持原生响应
    // res.statusCode = 404;
    // res.setHeader('content-type','text/html;charset=utf8');
    // res.statusMessage = '404';
    // res.write('1');
    // res.end('ok');

    //express响应
    // res.status(203).status().send();//状态码
    // res.set('aaa','bbb');//响应头
    // res.send('hah   ');//响应体，默认utf8，


    //其他响应
    res.redirect('baidu.com');//重定向
    res.download('a.png');//下载响应,客户端下载这个文件
    res.render();//转发
    res.json({
        'a':'blur',
        'b':'c'
    });//响应json
    res.sendFile('a.txt');//响应文件内容，把文件内容响应
    res.attachment();//附件

});

app.listen(9000,()=>{
    console.log('start server successfully！');
})