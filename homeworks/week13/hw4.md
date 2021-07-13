## Webpack 是做什麼用的？可以不用它嗎？

Webpack 是一個「模組打包工具」，會從 entry point 分析整個專案的結構，找出每個模組之間的依賴關係，並分析是否有瀏覽器不支援的語法(ES6, SCSS)，將他們轉換並打包在一起產出瀏覽器可以識別的檔案。

模組除了 JavaScript 外，CSS 、圖片等資源也會被當成模組。在 Webpack 可以利用各種 loader 來將檔案轉成瀏覽器看得懂的語法。像是做 Babel 設定來轉譯 ES6 語法。也可將透過 NPM 安裝的第三方套件，直接在專案中引入使用。

可以不用 Webpack，但就沒有辦法引入其他的模組，需要自己寫。由於部分瀏覽器不支援 ES6 模組，例如 IE，若要使用 import、export 等語法，則需要其他工具來進行轉換。

參考
>https://ithelp.ithome.com.tw/articles/10243595
>https://blog.huli.tw/2020/01/21/webpack-newbie-tutorial/

## gulp 跟 webpack 有什麼不一樣？

gulp:是「任務管理」工具。使用gulp你可以簡化工作量，可以自訂屬於自己的前端自動化環境。可以將 SASS 自動編譯為 CSS、壓縮圖片、打包壓縮 CSS 與 JS、瀏覽器自動重新整理。

webpack:是「模組整合工具」。可將零散的 JavaScript 模組打包，然後在瀏覽器上運行，解決舊瀏覽器不支援部分新語法的問題，也利於後續管理與維護。
此外，Webpack 也提供了前端開發缺乏的模組化開發方式，可將各種靜態資源視為模組，例如 JS、CSS、SASS、圖片檔等，透過不同的 loader 將資源轉換並載入，再利用 Webpack 進行打包成 JS 檔，生成最佳化過的程式碼。

參考
>https://hackmd.io/@Heidi-Liu/note-fe201-gulp-and-webpack

## CSS Selector 權重的計算方式為何？
權重可以說是 CSS 的優先權：
1. 當多個選擇器作用在同一元素上時，會執行權重高的
2. 相同權重時，後寫的 CSS 會蓋過前面的

權重大小： !important > Inline style > ID > Class> Element
權重值(Inline style, ID, Class, Element)

!important：權重可蓋過所有的權重

```
.box{
    color: #aaa;!important
}
```

Inline style：指的是直接寫在 html 內的 style。權重為(1,0,0,0)

```
<div style="color:red">
  Hi!
</div>
```

ID:在 CSS 用 ＃ 選到的 id 名稱。權重(0,1,0,0)

Class:在 CSS 用 . 選到的 class 名稱。權重(0,0,1,0)。psuedo-class(像是:hover, :nth-child())和 arrtibute(像是[type:checkbox])，這兩個權重也和 class 一樣。

Element: 常見的有 div, p, li, footer 等。權重為(0, 0, 0, 1)。

參考：
>https://ithelp.ithome.com.tw/articles/10196454
>https://ithelp.ithome.com.tw/articles/10221486
