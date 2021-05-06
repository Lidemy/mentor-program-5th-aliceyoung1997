## 請以自己的話解釋 API 是什麼
提供兩用戶端之間交流訊息、資源的介面。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹

1. 100：到目前執行都正常，用戶端需繼續完成 request 或如果 request 執行完畢忽略這個訊息。
2. 303 ：把用戶端導向另一個 URL 去取得 request 中所請求的資源。
3. 511： 用戶端須被審查才能進入這個網絡。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

回傳所有餐廳資料：
method: GET
path: /restaurant
參數: _limit:限制回傳資料
範例： /restaurant?_limit=10

回傳單一餐廳資料：
method: GET
path: /restaurant/:id
範例： /restaurant/2

刪除餐廳:
method: DELETE
path: /restaurant/:id

新增餐廳:
method: POST
path: /restaurant
參數: name:餐廳名稱

更改餐廳:
method: PATCH
path: /restaurant/:id
參數: name:餐廳名稱



