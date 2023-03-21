console.log("hello nodejs!");
//alert("hello nodejs!");
setTimeout(()=>{
    console.log("延迟1秒");
},1000);

// setInterval(()=>{
//     console.log("间隔1s，循环下去")
// },1000);
console.log(global);
console.log(globalThis);
