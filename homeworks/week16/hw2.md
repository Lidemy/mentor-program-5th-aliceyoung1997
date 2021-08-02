``` js
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```

輸出：
i:0
i:1
i:2
i:3
i:4
5
5
5
5
5

執行過程：

`console.log('i:' + i)`

1. 迴圈第一圈 i = 0, console.log('i:' + 0)，輸出 0
2. 迴圈第二圈 i = 1, console.log('i:' + 1)，輸出 1
3. 迴圈第三圈 i = 2, console.log('i:' + 2)，輸出 2
4. 迴圈第四圈 i = 3, console.log('i:' + 3)，輸出 3
5. 迴圈第五圈 i = 4, console.log('i:' + 4)，輸出 4

`setTimeout(() => {console.log(i)}, i * 1000)`

1. 迴圈第一圈 i = 0, (() => {console.log(i)}, 0 * 1000)被放入 WebAPIs，等過了設定的 0 秒後，排進 task queque 等待進入 call stack 執行
2. 迴圈第二圈 i = 1, (() => {console.log(i)}, 1 * 1000)被放入 WebAPIs，等過了設定的 1 秒後，排進 task queque 等待進入 call stack 執行
3. 迴圈第三圈 i = 2, (() => {console.log(i)}, 2 * 1000)被放入 WebAPIs，等過了設定的 2 秒後，排進 task queque 等待進入 call stack 執行
4. 迴圈第四圈 i = 3, (() => {console.log(i)}, 3 * 1000)被放入 WebAPIs，等過了設定的 3 秒後，排進 task queque 等待進入 call stack 執行
5. 迴圈第五圈 i = 4, (() => {console.log(i)}, 4 * 1000)被放入 WebAPIs，等過了設定的 4 秒後，排進 task queque 等待進入 call stack 執行
6. 等到 call stack 清空，把 (() => {console.log(i)}, 0 * 1000) 堆入 call stack 執行。由於此時的 i = 5 已經跳出迴圈執行，所以此時輸出的 console.log(i) 會是 5，執行完後從 call stack 跳出。
7. 重複步驟 6 到所有程式執行完成。