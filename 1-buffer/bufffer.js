//alloc
let buf_1 = Buffer.alloc(10);
console.log(buf_1);
//allocUnsafe
let buf_2 = Buffer.allocUnsafe(10000);
console.log(buf_2);
//from
let buf_3 = Buffer.from("hello");
console.log(buf_3);