# 0.nodeJs引入

## 1.JavaScript在浏览器和nodeJS中的区别

### 1.底层架构

<img src='img/image-20230320132224540.png' style='zoom:50%'>

<img src='img/image-20230320132347395.png' style='zoom:50%'>

***以下API均不可再用：***

+ `window`
+ `history`
+ `navigator`
+ `location`
+ `ajax`
+ ...

***可用的公共API：***

+ `console`
+ `定时器`
  ```javascript
  setTimeout(()=>{
      console.log("延迟1秒");
  },1000);
  
  setInterval(()=>{
      console.log("间隔1s，循环下去")
  },1000);
  
  ```

### 2.顶级对象不同

 + 浏览器中顶级对象：`window`
 + nodeJs中顶级对象：`global` (必须小写)，当然也可以使用`globalThis`指向`global`(ES2020引入的规范)

# 1.Buffer（缓冲器）

## 1.概念 

Buffer 是一个类似于数组的 对象 ，用于表示**固定长度的字节序列**。

Buffer 本质是一段内存空间，专门用来处理 二进制数据 。

<img src='img\nodeJS笔记\image-20230320151735339.png'>

## 2.特点

+ Buffer大小固定且无法调整
+ Buffer性能较好，可以直接对计算机内存进行操作
+ 每个元素的大小为1字节（byte 8位）

<img src='img\nodeJS笔记\image-20230320151920914.png'>

## 3.使用

### 3.1 Node.js中创建Buffer的三种方式：
