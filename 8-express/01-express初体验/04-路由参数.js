const express = require('express');
let app = express();


//http://127.0.0.1:9000/454854848.html
app.get('/:id',(req,res)=>{ //匹配任意字符，但是只能是一层的，像/a/b/c.html是不行的
    //获取参数
    console.log(req.params);
    console.log(req.params.id);//id和:id 保持一致

    res.end('ok');

});

app.listen(9000,()=>{
    console.log('start server successfully！');
})