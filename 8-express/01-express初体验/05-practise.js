const express = require('express');
const {singers} = require('./singers.json');//结构体赋值，直接把

let app = express();

app.get('/singer/:id.html',(req,res)=>{
    res.setHeader('content-type','text/html;charset=utf8');
    let singerId = req.params.id;
    //替代方法根据数组中属性值来找对象   singers.find(item=>{}) item.id=singerId
    let singer = singers[singerId-1];
    if(!singer) {
        console.log('error singerId=' + singerId);
        res.setHeader('content-type','text/html;charset=utf8');
        res.end('查无此人');
        return;
    }
    res.write('<div>');
    res.write(`<span>歌手：${singer.singer_name}</span>`);
    res.write(`<img src='${singer.singer_pic}' />`);
    res.write('</div>');
    res.end();
})

app.listen(9000,()=>{
    console.log('listening 9000 port ...');
})
