## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫

兩個最主要的差異是加密可逆、雜湊不可逆。

雜湊：
1.不論原本內容的長度，透過雜湊演算法運算，輸出都會是固定的長度。
2.不同雜湊演算法輸出的雜湊值長度可能相同，所以無法用雜湊值長度來完全斷定使用哪種雜湊演算法。
3.相同的內容作為相同雜湊演算法的輸入，得到的輸出必定一樣。
  不同的內容作為相同雜湊演算法的輸入，得到相同輸出的機率極低，但還是有可能。
4.無法將雜湊演算法的輸出解回原本的輸入，雜湊是單向的。
5.為了防止被攻擊破解，通常會再加鹽 (salt)，指的是再加入一組亂數（有可能是以當下時間為基底的亂數），這樣就算破解了也難以知道原碼，除非連加入亂數的方式也被破解。


加密：拿到密鑰的方式就可以逆推回去
加密（英語：Encryption）是將明文資訊改變為難以讀取的密文內容，使之不可讀。
只有擁有解密方法的對象，經由解密過程，才能將密文還原為正常可讀的內容。

密碼需要經過雜湊的原因是能避免從最後顯示的字串倒推回使用者真正的密碼。


## `include`、`require`、`include_once`、`require_once` 的差別

include：將指定的檔案讀入並且執行裡面所有的程式。
include_once：和 include 的差別是會先檢查要匯入的檔案是不是已經在該程式中的其它地方被匯入過了，
如果有的話就不會再次重複匯入該檔案。
require:將目標檔案的內容讀入，並且把自己本身代換成這些讀入的內容。
require_once：和 require 的區別是PHP 會檢查該文件是否已經被包含過，如果是則不會再次包含。

include 和 require 的差別：
include在執行時，如果include進來的檔案發生錯誤的話，會顯示警告，不會立刻停止；
而require 則是會顯示錯誤，立刻終止程式，不再往下執行。


## 請說明 SQL Injection 的攻擊原理以及防範方法

若是系統後端 SQL 查詢語句是用字串拼接的方式，攻擊者將使用者的輸入後面新增額外的 SQL 語法，
來欺騙資料庫進而取得資料庫中的內容。

```
"SELECT * FROM person WHERE name = '%s' AND password = '%s',	$name, $password"
```

加上

```
'OR 1 = 1 --
```

拼起來：
```
SELECT * FROM user WHERE account = '' AND password = '' OR 1 = 1 --'
```
由於 1 = 1 結果會是 TRUE，攻擊者就可以透過這個方式拿到資料庫中的資料

防範方法：
用 prepared statement：參數化查詢是一種用於資料庫查詢時的技術，使用時會在SQL指令中需要填寫數值的地方用參數代替。

```
$query = "SELECT * FROM person WHERE name = ? AND password = ?";
$stmt = $db->prepare($query);
$stmt->bind_param("ss", $name, $password);
//用bind_param，去將我們的變數，與「?」做結合，而「”s”」，代表的是string，
另外還有i、b、d等英文字母，分別代表整數、blob、和浮點數。
$stmt->execute();
$result = $stmt->get_result();
```


參考：https://www.inote.tw/php-prepared-statements-query-mysql


##  請說明 XSS 的攻擊原理以及防範方法
Cross-Site Script 
利用再輸入欄位輸入 script tag 來造成攻擊，透過在輸入框中輸入特殊語法，變成可以執行的程式碼

攻擊方法主要有三種：
1.Stored XSS
常見於留言板、論壇。輸入的關鍵字會被當成 HTML 執行。
2.Reflected XSS
不會被儲存在資料庫中，常見以 GET 方式傳資料給伺服器，伺服器將內容回應到網頁上。
3.DOM-Based XSS
如果頁面中使用了如 innerHTML 等語法，就有注入 JS 程式碼的機會，進而改變頁面DOM樹。

防範方法：
任何允許使用者輸入的內容都需要檢查，將所有任何可能執行代碼的字串編碼。
```
<script>alert('xss')</script>
```
在輸出時經過編碼變成

```
&lt;script&gt;alert(&#x27;xss&#x27;);&lt;/script&gt;
```
讓瀏覽器會把它當作純文字，而不是可以執行的程式。


參考：https://forum.gamer.com.tw/Co.php?bsn=60292&sn=11267



## 請說明 CSRF 的攻擊原理以及防範方法
Cross Site Request Forgery(跨站請求偽造)
登入後網站會給一個通行證般的 cookie 或 session，帶上這個通行證後就不用再重複驗證身分，但由於網站是認通行證所以無法確定是否是真正的使用者。

攻擊原理：
可能在 <a> 或 <img> 帶上其他網址，可能發出其他request

```
<iframe style="display:none" name="csrf-frame"></iframe>
<form method='POST' action='https://small-min.blog.com/delete' target="csrf-frame" id="csrf-form">
  <input type='hidden' name='id' value='3'>
  <input type='submit' value='submit'>
</form>
```


如何防範：
1. 檢查 referer：
request 的 header 中的 referer，代表這個 request 是從哪個地方過來，可以檢查這個欄位的 domain 是否合法。
2. 加入驗證 token：
token值由 server 隨機產生並存在 session 中，再讓 server 比對 token 是否與自己的 session 裡存的一樣。
3. 加上圖形驗證碼、簡訊驗證碼：
加上攻擊者無法拿到的資訊就能確認是否是本人。




參考：https://blog.techbridge.cc/2017/02/25/csrf-introduction