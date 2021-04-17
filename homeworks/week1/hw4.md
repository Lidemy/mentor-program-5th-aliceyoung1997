## 跟你朋友介紹 Git
版本控制：管理每次修改後不同版本，能夠記錄每次版本的更動，保留歷史紀錄，支援本地、遠端版本控制，讓一個專案可以同時修改不同部分並合併完成最終版本。就像是在做簡報時最初會有樣本，和其他人討論過後會再修正直到完整，在這之間我們會保留每次修改的版本確保中間沒有出其他差錯，而 git 就是在幫我們管理這些版本。

開始使用git
到官網下載 git，接下來就可打開 command line 開始使用。

git init 初始化
先切換到要版本控制的資料夾，再輸入 git init 指令，把 git 加進這個資料夾中，讓這個資料夾可以開始使用 git。

git add 把更動過檔案加入暫存區
要加入版本控制還需下 git add 指令，或使用 git add . 把整個資料夾的內容都加入版本控制。

git commit 建立節點
現在已可進行版本控制，之後新增的笑話可以用 git commit -m '名稱' 把最新的部分加到版本控制中。

git status 
查看版本目前的狀態，檢查目前有哪些檔案已加入版本控制，哪些已加入版本控制但還沒 commit。

git log 歷史紀錄
可以看自己做了幾次 commit。想看簡短的資料的話可以用 git log --oneline

git checkout
可以切換到其他版本。 git checkout master 則可以回到最新版本。

git branch 建立分支
一開始的預設分支 master，會作為主幹保持穩定性，之後的更動都會在其他分支，修正完後再合併回 master。

git push 把電腦中的檔案 push 到遠端資料庫
先用git remote add (網址) ，接著再 git push origin master。就可以把笑話傳到遠端的資料庫中了。

git pull 把遠端資料庫中最新的資料抓下來
可以使用 git pull origin master 指令來執行。

使用 git 小整理：
1. git init
2. git add
3. git commit -m'名稱' 或 git commit -am'名稱'
4. 遠端建立repository，再用 git remote add 網址，之後就可以執行 git push origin master
5. 把最新版本載到自己的電腦 git pull origin master
