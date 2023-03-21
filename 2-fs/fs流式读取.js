const fs=require('fs');
let rs=fs.createReadStream("C:\\Users\\Administrator\\Pictures\\a.jpg");
let size = 0;
//需要给读取流绑定一个 on data事件
rs.on('data', chunk => {
    //console.log(chunk.length);//65536 最大一次可读去64kb块,
    size += chunk.length;
    //读一次64kb数据，调用回调函数，继续读取，调用回调，...直到读取完成
});
//可选的 on end事件，代表读取文件成功
rs.on('end',() =>{
    console.log("图片读取成功, 共" + size + "字节");
});
