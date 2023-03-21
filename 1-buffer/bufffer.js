//alloc
// let buf_1 = Buffer.alloc(10);
// console.log(buf_1);
//allocUnsafe
// let buf_2 = Buffer.allocUnsafe(10000);
// console.log(buf_2);
//from
// let buf_3 = Buffer.from("hello");
// console.log(buf_3);
// let buf_4 = Buffer.from(['h','e','l','l','o',0]);
// console.log(buf_4);//c
// let buf_5 = Buffer.from([104,101,108,108,111]);
// console.log(buf_5.toString('base64'));//c

// let buf_6 = Buffer.from("hello");
// console.log(buf_6[0]);
// console.log(buf_6[0].toString(2));
// console.log(buf_6[0].toString(16));
// buf_6[0]=99;
// console.log(buf_6);
// console.log(buf_6.toString());
// buf_6[0]=555;//555的二进制为：10 0010 1011,那么舍弃后就是0010 1011,对应十进制43
// console.log(buf_6[0])
let buf_7=Buffer.from("你好");
console.log(buf_7);
