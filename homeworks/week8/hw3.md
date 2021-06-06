## 什麼是 Ajax？

全名是 「Asynchronous JavaScript and XML」，非同步和伺服器交換資料的 JavaScript。

平常寫得JavaScript 幾乎都是同步執行的，若是在執行 sendRequest時，由於同步執行，所以會等待 Response回來才繼續執行接下去的程式，可能非常耗時，因此會採 Ajax 非同步執行。

非同步執行就是執行完之後不等結果回來就繼續執行下一行。

## 用 Ajax 與我們用表單送出資料的差別在哪？

表單透過瀏覽器送出 request 給 server，server 回傳 response 給瀏覽器，瀏覽器會直接呈現結果。
表單送出資料後會根據 response 中的內容而換到其他頁面。

用 Ajax 送出資料的話，由瀏覽器上的 js 透過瀏覽器發 request 給 server，而 server 回傳response後，
瀏覽器會把結果給 js，可以只讓部分畫面改變，而不用換頁面。


## JSONP 是什麼？

跨來源請求除了 CORS 以外的另外一種方法。
利用 <script> 這個標籤不受同源政策限制來達成跨領域來源請求。
利用<script>裡面放資料，透過指定好的 function 把資料給帶回去。
但 JSONP 的缺點就是你要帶的那些參數永遠都只能用附加在網址上的方式（GET）帶過去，沒辦法用 POST。

## 要如何存取跨網域的 API？

CORS(Cross-Origin Resource Sharing)跨來源資源共享：不同 origin 之間傳輸資料的規範。

如果你想開啟跨來源 HTTP 請求的話，Server 必須在 Response 的 Header 裡面加上Access-Control-Allow-Origin。
當瀏覽器收到 Response 之後，會先檢查Access-Control-Allow-Origin裡面的內容，如果裡面有包含現在這個發起 Request 的 Origin 的話，就會允許通過，讓程式順利接收到 Response。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

第四週時是用 node.js 透過作業系統發 request 給 server，而 response 也是由 server 直接回傳給 node.js 中間並沒有其他東西干擾、限制。

但這週是用瀏覽器上的 js 透過瀏覽器發 request 給 server，回傳 response 時 server 透過瀏覽器把response 傳給 js。
在這個過程中，會受到瀏覽器的規則限制，可能會被瀏覽器阻止做一些事情或新增東西在 request 中，而跨網域的問題就是瀏覽器規則的其中之一。
