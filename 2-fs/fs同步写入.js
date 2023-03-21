const fs = require('fs');
try{
    fs.writeFileSync('./你好.txt','你好，hello9999');
}catch(e){
    console.log(e);
}
setTimeout(() => {
    console.log("等待3s"); //异步
},3000);
console.log("程序结束！");