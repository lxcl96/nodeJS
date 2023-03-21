//给当前practise.js所在目录，下以fs开头的文件 前面加上0
const fs=require('fs');

fs.readdir(__dirname,(err,files)=>{
    console.log(__filename);
    if(err) {
        console.log("目录"+__dirname+"读取失败");
        return;
    }

    files.forEach(filename => {
        let file=__dirname + "/" + filename;//可以用模版字符串let file="${__dirname}/${filename}"
        fs.stat(file,(err,stat)=>{
            if (err) {
                console.log(file+" 获取类型失败，跳过");
                return;
            }
            if(stat.isFile()&&file!=__filename) {
                //foreach是一个函数而不是循环，所以无法continue
                fs.rename(file,__dirname + "/" + filename,err=>{
                    if(err) {
                        console.log(file+"重命名失败");
                        return;
                    }
                });
            }
        })
    });
})
