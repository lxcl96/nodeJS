const http=require('http');
let server=http.createServer((request,response)=>{
    //响应状态码
    response.statusCode=403;
    //响应状态码描述
    response.statusMessage='NOT AUTHORITY';
    response.setHeader('verity','no');
    //设置多个同名的响应头，给数组即可
    response.setHeader('nums',[1,2,3,4,5,6]);

    //设置响应体两个方法：write和end
    response.write('g\r\n');
    response.write('o\r\n');
    response.write('o\r\n');
    response.write('d\r\n');
    response.end();//就不传参了，end必须有而且仅有一个
    //response.end('x');
});

server.listen(9000,()=>{
    console.log('服务器启动成功！');
})