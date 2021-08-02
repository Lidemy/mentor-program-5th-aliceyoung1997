``` js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```

輸出結果：
1
3
5
2
4

JavaScript 的運行環境(Runtime)一次只能做一件事情，但由於瀏覽器不只有提供 Runtime，還提供許多 WebAPI(像是 document, setTimeout)，所以才能一次處理超過一件事。

call stack: 堆入(pop in)要執行的程式，一次執行一個，完成後便跳出(pop out)。

WebAPIs：執行非同步的程式，執行完後將程式排進 task queque。

Task/Callback queque：放 callback function 的地方，等著進入 stack 被執行

Event Loop：持續看 call stack 是否空下來，若是空了，就把 task queque 裡的程式放入 stack 執行。

程式執行過程：

1. 開始執行程式，把整段程式包成 main() 堆入 call stack 執行裡面的程式碼
2. 把 `console.log(1)` 堆入 call stack，執行後輸出 `1` 然後從 call stack 跳出。 
3. 把 `setTimeout(() => {console.log(2)}, 0)` 堆入 call stack。 因為是非同步程式，將 `console.log(2)`作為 callback 從 call stack 移出到 WebAPIs，`setTimeout()`從 call stack 跳出。經過設定的 0 秒，`console.log(2)` 進入 task queque 等待進入 call stack被執行。
4. 把 `console.log(3)` 堆入 call stack，執行後輸出 `3` 然後從 call stack 跳出。
5. 把 `setTimeout(() => {console.log(4)}, 0)` 堆入 call stack。 因為是非同步程式，將 `console.log(4)`作為 callback 從 call stack 移出到 WebAPIs ，`setTimeout()`從 call stack 跳出。經過設定的 0 秒，`console.log(4)` 進入 task queque 等待進入 call stack 被執行。
6. 把 `console.log(5)` 堆入 call stack，執行後輸出 `5` 然後從 call stack 跳出。
7. 整段程式馬執行結束，main() 從 call stack 跳出。
8. Eventloop 看到 call stack 空了，把 `console.log(2)` 堆入 call stack，執行後輸出 `2` 然後從 call stack 跳出。 
9. Eventloop 看到 call stack 空了，把 `console.log(4)` 堆入 call stack，執行後輸出 `4` 然後從 call stack 跳出。


參考
>https://blog.huli.tw/2019/10/04/javascript-async-sync-and-callback/
>https://medium.com/itsems-frontend/javascript-event-loop-event-queue-call-stack-74a02fed5625