const ejs = require('ejs');


//类似jsp   <%= china%>是一个表达式 
let str=ejs.render('我爱你 <%= china%>',{china:'中国'});
console.log(str);