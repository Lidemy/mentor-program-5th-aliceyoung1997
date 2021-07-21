## 短網址
把普通網址，轉換成比較短的網址，點擊短網址後，就能跳轉到對應的頁面。
比較容易記得和宣傳。

KGS(Key Generation Service)：通過KGS 服務，隨機生成特定位數的字串，然後把這些 key儲存到資料庫裡。當收到生成短連結請求的時候，直接從備用的庫裡提取使用。
對於存在備用資料庫的key，可能還是會出現多個 Server 拿到相同 key 的狀況。 這時候就可以再新增一個 table，存已經使用過key。

Cache: 將更常用的 URL 加到 cache 中，若是在 cache 中沒有找到時再到資料庫中找，這樣可以提升查詢的效率。

Load Balancer：能夠將流量轉移到多個 server，藉此支援更多 request。

Cleanup Service: 清理過期的短網址以釋放資料庫的儲存空間。




參考
>https://learnsystemdesign.blogspot.com/p/system-design-designing-url-shortening.html
>https://hufangyun.com/2017/short-url/
>https://www.gushiciku.cn/pl/p46t/zh-tw