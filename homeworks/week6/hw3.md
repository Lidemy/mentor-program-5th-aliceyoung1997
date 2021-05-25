## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. caption: 表格的標題
    <table><caption>文字</caption></table>
2. hr: 水平線
    <hr />
3. i : 斜體
   <i>文字</i>


## 請問什麼是盒模型（box modal）

在 CSS 裡，將每個 HTML 元素視為一個盒子，可針對這個盒子做空間上的調整。
盒模型包含：

margin: 負責元素外部邊界的調整
border:元素最外層的邊界
padding:元素內所有內容與元素自身的邊界間距
content:顯示 HTML 元素的內容和圖像

box-sizing: content-box
此為預設屬性，寬度會隨著padding,border影響。

box-sizing:border-box
用這個屬性的話，會把padding, border考慮進來，而自動內縮調整。


## 請問 display: inline, block 跟 inline-block 的差別是什麼？

block:
* 元素會戰滿一整排
* 可以設定長、寬、margin、padding
* 常見 block 元素： div, ul li, p , h1......

inline:
* 元素可在同一行內呈現，圖片、文字不換行。
* 不可設定長、寬，元素的寬高由他的內容撐開
* 常見 inline 元素： span, a , img
* margin, padding 還是能設定，但排版不會隨設定改變

inline-block:
* 以inline的方式呈現，但同時擁有block的屬性
* 可水平排列
* 可設定元素的長、寬、margin、padding



## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

static: 是預設值。不會被特別定位，照著瀏覽器預設的配置自動排版。

relative:若沒有增加額外的屬性，表現會和 static 一樣。
若設定top, right, bottom, left 屬性，會使其元素「相對的」調整原本的位置，但不會影響到其他元素所在的位置。

absolute:往上找找到第一個不是 static 的地方，並相對那個點進行定位。
若是找不到不是 static 的點時，就會相對於網頁的所有內容 <body> 定位。

fixed:相對於瀏覽器視窗定位，即使頁面捲動，還是會固定在相同位置。

