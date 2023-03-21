const fs=require('fs');
// fs.readFile("./儿歌.txt",(err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     //返回的数据为Buffer类型
//     console.log(data.toString());
// });

let content=fs.readFileSync("./儿歌.txt");
let content1=fs.readFileSync("./儿歌.txt",{encoding:'utf8'});
console.log(content.toString());
console.log(content1);