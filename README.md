# nodeclub

基於nodejs的社區系統

## 介紹

Node Club 是用 **Node.js** 和 **MongoDb** 開發的新型社區軟件，界面優雅，功能豐富，小巧迅速，
已在Node.js 中文技術社區 [CNode](http://cnodejs.org) 得到應用，但你完全可以用它搭建自己的社區。

## 安裝部署

```
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

```
if (req.body && req.body.user_action === 'upload_image') return next();
```

## Authors
Below is the output from git-summary.

```
project: nodeclub
commits: 24
files  : 238
authors: 
   9  muyuan                  37.5%
   8  fengmk2                 33.3%
   3  dead-horse              12.5%
   1  LeToNode                4.2%
   1  roymax                  4.2%
   1  thebrecht               4.2%
   1  張洋                     4.2%
```
