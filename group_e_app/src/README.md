## css 檔案放置方式

說明：與各檔案放在相同資料夾

# className 命名方式

## 共用 className

src/style/

## 個別（個人） className

說明：名字掛在最前面，後面接自己要的名稱

範例：
bing_h1FontList
loveyu_cardStyle
yu_cardItem

## React Router

react router 錄影檔 7/19 14:33


## 如何拿取會員sid??

先登入(可以先在註冊會員頁面註冊一個帳號),登入成功之後會發jwt token 存到 res.locals.payload
故前端發fetch的時候 要把檔頭加上  headers: {Authorization: `Bearer ${token}`} token給後端解析
後端api sql語法找sid 寫法 :
WHERR {res.locals.payload.sid}
