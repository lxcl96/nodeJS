const fs=require('fs');
const process=require('process');
let rs=fs.createReadStream("C:\\Users\\Administrator\\Pictures\\a.jpg");
let ws=fs.createWriteStream("./a.jpg");
//读取下载
rs.on('data', chunk =>{
    try {
        if(chunk.length>0) ws.write(chunk);
    } catch (error) {
        console.log("图片保存失败！");
        return;
    }
})
//
rs.on('end',()=>{
    ws.close();
    console.log(process.memoryUsage());
    console.log("图片保存成功！");
})