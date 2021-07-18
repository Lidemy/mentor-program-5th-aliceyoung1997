## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
Domain Name System 網域名稱系統：將某個域名(網址)轉成對應的 IP 位址。
由於路由器只認得 IP 位址，不認得網址，所以當使用者在瀏覽器輸入網址時，使用者的電腦必須先向 DNS 伺服器查詢網址對應的 IP 位址。

一般大眾的好處：上網速度會比較快、提升網路安全、直接取得 DNS 查詢結果(不會轉向去查上層 DNS 的紀錄)。
對 Google 的好處：更能掌握使用者常訪問的網站。

參考
>https://blog.miniasp.com/post/2009/12/08/Use-Google-Public-DNS-may-not-surfing-faster-as-you-expected

## 什麼是資料庫的 lock？為什麼我們需要 lock？

利用交易對於要存取的資料先進行鎖定，以避免交易之間同時讀取和寫入同一筆資料時產生的衝突，達到交易的「並行控制」。
當交易想要存取某一資料時，先將該資料予以「鎖定」(Lock)，如果該資料已經被其他交易鎖定時，則交易便需要等待，直到該資料已經被其他交易「解除鎖定」(Unlock) 為止。
可以避免超賣的問題。

參考
>https://docs.microsoft.com/zh-tw/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide?view=sql-server-ver15

## NoSQL 跟 SQL 的差別在哪裡？

SQL(Structured Query Language)：用來管理與查詢關聯式資料庫的程式語言

關聯試資料庫(Relational Database Management System, RDBMS)：
- 資料以表格的方式儲存
- 資料之間有明確的關聯：資料庫儲存結構化的資料，而資料之間會有清楚的關聯性
- 以 SQL 操作：透過 SQL 在資料庫中新增、查詢、更新、刪除資料
- 資料庫的 schema 難以修改

NoSQL (Not Only SQL)非關聯式資料庫：
- 並不支持 SQL 語法 與 SQL 的邏輯
- 不需要固定的結構 (也就是 schema-free)，可以儲存任何資料，不像 data tables 那樣嚴格
- 是以類似 JSON, 欄位與數值成對的型態去儲存資料
```
{
  ISBN: 9780992461225,
  title: "JavaScript: Novice to Ninja",
  author: "Darren Jones",
  format: "ebook",
  price: 29.00
}
```

參考
>https://www.kshuang.xyz/doku.php/database:sql_vs_nosql


## 資料庫的 ACID 是什麼？
Atomicity原子性：資料操作結果只有重工或失敗，不能出現部分完成。

例如：
一個 Transaction(交易) 裡要執行 Update 和 Delete ．如果 Update 成功了而 Delete 失敗了，則這個交易便是失敗的。

Consistency一致性：transaction 完成前後，資料皆處於合乎所有規則的狀態，保持資料與資料庫的一致性。

Isolation隔離性：資料庫允許多個 transactions 同時對其資料進行操作，不同的 transaction 之間執行時不能被彼此干擾，但也同時確保這些 transaction 的交叉執行，不會導致數據的不一致。

Durability耐久性：transaction 完成後，對資料的操作就是永久的，即便系統故障也不會丟失。

參考
>http://www.woolycsnote.tw/2017/07/54-transaction-acid.html