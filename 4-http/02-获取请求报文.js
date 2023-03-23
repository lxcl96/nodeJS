const http=require('http');
const url=require('url');
let server=http.createServer((request,response)=>{
    //if(request.url=='/favicon.ico') console.log(request);
    //console.log(request.method);
    //console.log(request.httpVersion);
    //http://127.0.0.1:9000/?t=1 就是/?t=1
    //console.log(request.url);//请求路径和请求参数
    //console.log(request.rawHeaders);

    //获取请求体，需要request绑定on-data事件
    let body='';
    request.on('data',chunk=>{
        body += chunk;//会自动转换
    })
    request.on('end',()=>{
        console.log(body);
    })


    //获取查询路径和请求参数，借助url模块进行解析
    //console.log(url.parse(request.url));
    //console.log(url.parse(request.url).pathname);
    //console.log(url.parse(request.url,true).query.t);//返回请求参数对象的方式

    //获取请求信息的第二中方式，URL更方便
    let urlObj = new URL(request.url,"http://"+request.headers.host);
    console.log(urlObj);
    console.log(urlObj.searchParams.get('t'));//获取参数用get方法
    console.log(urlObj.pathname);
    //返回
    response.setHeader('content-type','text/html;charset=utf8');
    response.end('收到请求\r\n');
});


server.listen(9000,()=>{
    console.log("http服务启动成功!");
})