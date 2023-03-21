const path=require('path');
//D:\0\JWork\vscode\nodeJS\src\3-path\index.html\a.txt
console.log(path.resolve(__dirname,'./index.html','a.txt'));//相对路径
console.log(path.resolve(__dirname,'index.html','a.txt'));//相对路径
//D:\index.html\a.txt 切记第一个绝对路径为准，后面就跟在后面了
console.log(path.resolve(__dirname,'/index.html','a.txt'));//绝对路径
console.log(`${__dirname}/a.txt`);

// console.log(path.sep);
// console.log(path.parse('./path.js'));//输入什么路径，就返回什么路径
// console.log(path.basename('./path.js'));
// console.log(path.dirname('./path.js'));
// console.log(path.extname('./path.js'));
