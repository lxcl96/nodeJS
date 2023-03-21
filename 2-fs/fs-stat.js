const fs=require('fs');
fs.stat('./fs-stat.js',(err,stat)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(stat);
    console.log(stat.isFile());//是否为文件
    console.log(stat.isDirectory());//是否为目录  【等等。。块设备，fifo，socket等等】
})