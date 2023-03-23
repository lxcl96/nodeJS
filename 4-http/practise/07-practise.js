const http=require('http');
const fs=require('fs');
let server=http.createServer((request,response)=>{
    response.setHeader('content-type','text/html;charset=utf8')
    //异步回调需要最后调用response.end()，即放在异步调用函数内部
    //注意同步读取没有回调函数
    let rs=fs.createReadStream(`${__dirname}/04-response.html`)
    rs.on('data',(chunk)=>{
        response.write(chunk);
    });
    rs.on('end',()=>{
        response.end();
    });
    
});

server.listen(9000,()=>{
    console.log('服务器启动成功！');
})