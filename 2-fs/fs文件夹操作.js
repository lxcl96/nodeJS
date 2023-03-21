const fs=require('fs');
//fs.mkdir("./html",err=>{});//单目录创建
//fs.mkdir("./a/b/c/d",{recursive:true},err=>{});//递归创建文件夹
// fs.readdir('./',(err,data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })
// fs.rmdir('./html',err=>{
//     if(err){
//         console.log(err);
//     }
// });//只删除单层空目录，若非空会报错
//2 Deprecate 不推荐
// fs.rmdir('./html',{recursive:true},err=>{
//     if(err){
//         console.log(err);
//     }
// });//可递归删除目录，不管里面是否有文件

fs.rm('./a',{recursive:true},err=>{
    if (err) {
        console.log(err);
    }
})