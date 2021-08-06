``` js
1  var a = 1
2  function fn(){
3    console.log(a)
4    var a = 5
5    console.log(a)
6    a++
7    var a
8    fn2()
9    console.log(a)
10   function fn2(){
11     console.log(a)
12     a = 20
13     b = 100
14   }
15  }
16  fn()
17  console.log(a)
18  a = 10
19  console.log(a)
20  console.log(b)
```

輸出結果：
undefined
5
6
20
1
10
100

執行過程：

初始化 global EC 

```
global EC
global VO{
  a: undefined,
  fn: function
}
```

執行程式第1行 `var a =1`,把 global VO 中的 a 值改成 1

```
global EC
global VO{
  a: 1,
  fn: function
}
```

執行程式第2行遇到 fn，初始化 fn EC

```
fn EC
fn VO{
  a: undefined,
  fn2:function
}
```

執行程式第3行`console.log(a)`，此時 fn VO 中的 a 值為undefined，因此輸出 undefined
執行程式第4行`var a = 5`,將 fn VO 中的 a 值改成 5 

```
fn EC
fn VO{
  a: 5,
  fn2:function
}
```

執行程式第5行`console.log(a)`,此時 fn VO 中的 a 值為5，因此輸出 5
執行程式第6行`a++`,將此時fn VO 中的 a 值加 1

```
fn EC
fn VO{
  a: 6,
  fn2:function
}
```

執行程式第7行`var a`，因為 a 已經宣告過且有賦值，所以這裡的宣告沒有作用
執行程式第8行`fn2()`，跳到第10行執行 function fn2, 初始化 fn2 EC。沒有宣告變數也沒有 function，所以 VO 是空的

```
fn2 EC
fn2 VO{
  
}

fn EC
fn VO{
  a: 6,
  fn2:function
}

global EC
global VO{
  a: 1,
  fn: function
}

```

執行程式第11行`console.log(a)`，由於 fn2 VO裡沒有 a，所以往上找到 fn VO 裡的 a 值，輸出 6
執行程式第12行 `a = 20`，由於 fn2 VO裡沒有 a，所以往上找到 fn VO 裡的 a 值改成 20
執行程式第13行 `b = 100`，由於 fn2 VO裡沒有 a，往上找 fn VO 裡面也沒有 b 值，再繼續往上找 global VO 裡面也沒有 b 值，所以在 global VO 裡宣告 b 變數並賦值 100

```
fn2 EC
fn2 VO{
  
}

fn EC
fn VO{
  a: 20,
  fn2:function
}

global EC
global VO{
  a: 1,
  b: 100,
  fn: function
}
```
結束fn2, 執行程式第9行`console.log(a)`，此時fn VO 中的 a 值為 20 ，輸出 20
執行程式17行`console.log(a)`，已離開 fn，因此在global VO 中找 a 值，此時的 a 為 1 ，輸出 1
執行程式18行`a = 10`，將 global VO 的 a 值改為 10

```
global VO{
  a: 10,
  b: 100,
  fn: function
}
```

執行程式19行`console.log(a)`，此時global VO 中的 a 值為 10 ，輸出 10
執行程式20行`console.log(b)`，此時global VO 中的 b 值為 100 ，輸出 100