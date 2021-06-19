## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

varchar: 適合用在長度可變的屬性
1.可以有預設值
2.可以設最大長度
3.資料查詢速度較快

text:適合用在不知道最大長度的屬性
1.不允許預設值
2.不能設定最大長度，固定最大長度為65535 bytes
3.資料查詢速度較慢

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

1.由於 HTTP 是無狀態的，而 Cookie 就是存在瀏覽器裡的一些資訊，能把使用者的狀態紀錄、儲存起來。
2. server 透過 header 的屬性 Set-Cookie，把使用者的狀態紀錄在 Cookie，之後瀏覽器在發 request 時，都在 Header 中設定 Cookie 屬性， server 就能藉由檢視 Cookie 的內容知道使用者的狀態。


## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

users 資料庫和 comments資料庫之間沒有連動，所以若從 users 資料庫中修改 nickname，
但 comments 資料庫中的 nickname 還是維持原本的暱稱，因此留言板中顯示的暱稱還是和原本修改前的相同。




