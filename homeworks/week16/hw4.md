``` js
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```

輸出結果：
2
2
undefined

### obj.inner.hello()
可看成是 obj.inner.hello.call(obj.inner)，obj.inner.value 就是 2 

### obj2.hello()
可看成是 obj2.hello.call(obj2)，而 `const obj2 = obj.inner`，所以也會找到的值也會和上一題一樣是 obj.inner.value 就是 2

### hello()
可看成 hello.call()，因為沒有傳東西進去，在非嚴格的模式下，會輸出 window.value，就是預設值 undefined。