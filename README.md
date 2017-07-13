[客户端与前端交互协议wiki](http://doc.ws.netease.com/pages/viewpage.action?pageId=2886075)
### API Usage
```
import newsappAPI from 'newsapp-protocol'

```
## share
```
// 设置分享文案
newsappAPI.share.setShareData({
      wxUrl: 'http://m.163.com',
      wxImg: '',
      wxTitle: '标题',
      wxText: '描述',
      wbImg: ''
    })

//调起分享组件
newsappAPI.share.invokeShare({
      wxUrl: 'http://m.163.com',
      wxImg: '',
      wxTitle: '标题',
      wxText: '描述',
      wbImg: ''
    })

//如果是图片分享 wxUrl参数设为空即可
```
## userinfo
```
 newsappAPI.userinfo(function (info) {
      alert(JSON.stringify(info))
 })
```
## login
```
 newsappAPI.login(function (info) {
      alert(JSON.stringify(info))
 })
```
## device
```
 newsappAPI.device(function (info) {
      alert(JSON.stringify(info))
 })
```
## encrypt
```
var data = {
      a: 1,
      b: 2,
      c: 3
    }
 newsappAPI.encrypt(JSON.stringify(data), function (encryText) {
      alert(encryText)
 })
```
## 工具栏UI相关
```
// 隐藏工具栏
newsappAPI.ui.hideToolbar()

// 修改标题
newsappAPI.ui.modifyTitle('修改标题')

// 定制右上角文字
window.newsappAPI.ui.button('刷新', function () {
  alert('回调')
})
```

