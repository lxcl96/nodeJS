const http=require('http');

//当接收到请求就会执行
//request是nodejs对request进行封装一次
//response就是响应
let server=http.createServer((request,response)=>{
    //console.log(request);
    response.setHeader('content-type','text/html;charset=utf-8');
    response.end("你好");
});

//监听端口，启动服务
server.listen(9000,()=>{
    console.log("http服务创建成功！");
});