const express = require('express');
//这里的router 其实就是小型的express()
let router = express.Router();
 

//和app一样，正常使用router
router.get('/home',(req,res)=>{ 
    res.end('home');
});

router.get('/admin',(req,res)=>{ 
    res.end('admin');
});
router.get('/settings',(req,res)=>{ 
    res.end('settings');
});

//将对象router暴露出去
module.exports = router;