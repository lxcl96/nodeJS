const http=require('http');
let server=http.createServer((request,response)=>{

    //结构赋值方式 因为request对象里面有这个method属性 （必须同名，否则返回undefined   ）
    let {method}=request;
    //console.log(method);
    if(request.method.toLowerCase()!='get') {
        response.setHeader('content-type','text/html;charset=utf8');
        response.statusCode=403;
        response.end("访问禁止");
        return;
    }

    let msg='访问禁止';
    response.statusCode=200;
    response.setHeader('content-type','text/html;charset=utf8');
    let obj=new URL(request.url,`http://${request.headers.host}`);
    //console.log(obj.pathname);
    if(obj.pathname==='/login') msg='登陆';
    else if(obj.pathname==='/reg') msg='注册';
    else {
        response.statusCode=403;
        msg='无效的路径名';
    }
    //对于不处理的地址必须关闭连接，节约资源
    response.end(msg);

});

server.listen(9000,()=>{
    console.log('服务启动成功！');
})