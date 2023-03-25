var express = require('express');
let formidable = require('formidable');
let fs = require('fs');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('fileupload');
});


router.post('/', function(req, res, next) {
    const form = formidable({
        multiples: true,
        //设置文件保存目录 __dirname表示当前正在运行的脚本所在目录（不是启动脚本的目录）
        uploadDir: __dirname + '/../upload',
        //设置文件保存后缀
        keepExtensions: true,
        filename: (name,ext,part,form) => { //不加这个字段就使用默认生成的新名字
            return part.originalFilename;
        }
    });
    //fields请求参数（如：a=1&b=2）
    //files中保存的是文件
    form.parse(req,(err,fields,files)=>{
        //console.log(__dirname + '/../upload');
        if(err) {
            next(err);
            return;
        }

        // console.log(fields);
        // console.log(files);
    });
    res.send('ok');
  });
  
module.exports = router;
