# nodeclub

基於nodejs的社區系統

## 介紹

Node Club 是用 **Node.js** 和 **MongoDb** 開發的新型社區軟件，界面優雅，功能豐富，小巧迅速，
已在Node.js 中文技術社區 [CNode](http://cnodejs.org) 得到應用，但你完全可以用它搭建自己的社區。

## 安裝部署

```bash
// install node npm mongodb  
// run mongod
cd nodeclub
npm install ./
cp config.default.js config.js
// modify the config file as yours
node app.js
```
    
## 其它

小量修改了兩個依賴模塊：node-markdown，express
 
* node-markdown/lib/markdown.js  
allowedTags 添加：

```   
embed  //支持 flash 視頻
table|thead|tbody|tr|td|th|caption  //支持表格
```
   
allowedAttributes 添加：

```
embed:'src|quality|width|height|align|allowScriptAccess|allowFullScreen|mode|type'
table: 'class'
```

* express/node_modules/connect/lib/middleware/csrf.js 添加：

```javascript
if (req.body && req.body.user_action === 'upload_image') return next();
```

## 關於pull request

從現在開始，所有提交都要嚴格遵循[代碼規範](https://github.com/windyrobin/iFrame/blob/master/style.md)。

## Authors

Below is the output from `git-summary`.

```
 project: nodeclub
 commits: 53
 files  : 244
 authors: 
    25  fengmk2                 47.2%
     9  muyuan                  17.0%
     8  dead-horse              15.1%
     4  ericzhang               7.5%
     3  Kenny Zhao              5.7%
     1  LeToNode                1.9%
     1  roymax                  1.9%
     1  thebrecht               1.9%
     1  张洋                  1.9%
```
