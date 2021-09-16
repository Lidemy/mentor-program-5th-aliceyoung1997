## 為什麼我們需要 React？可以不用嗎？

可以不用。
但 React 可以做出蒙垢重複利用的元件，使管理維護上更方便。
React 有使用 VirtualDOM 可以對新舊 VirtualDOM 進行比對，並只針對不同之處到實體的 DOM 中進行更新，提升瀏覽器的效能。

>https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E7%AD%86%E8%A8%98-why-react-424f2abaf9a2

## React 的思考模式跟以前的思考模式有什麼不一樣？

寫 React 主要關注的是資料的狀態，當資料狀態改變的時候才會去重新渲染畫面，和之前直接去改變 DOM 上的東西很不一樣。
在傳遞變數上雖然變得很方便，但也常常要回去檢查到底有沒有傳對東西，可能是還不熟練的關係，所以花了不少時間在檢查上。


## state 跟 props 的差別在哪裡？

props：
-無法改變
-是由外部傳進去元件的資料
-是父層和子元件之間溝通的傳輸資料方式

state：
-可以修改
-是該元件自身內部的資料

>https://ithelp.ithome.com.tw/articles/10210221?sc=iThelpR
