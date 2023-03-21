const fs = require('fs');
// fs.appendFile("./你好.txt","\r\nhello，你好！",err => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("追加成功！");
// })
// console.log("程序结束！");
fs.appendFileSync("./你好.txt","\r\nohayo,...");
console.log('程序结束');