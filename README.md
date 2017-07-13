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
## encrypt 加密
```
var data = {
      a: 1,
      b: 2,
      c: 3
    }
 // 数据无需做stringify处理，协议中会处理
 newsappAPI.encrypt(data, function (encryText) {
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
newsappAPI.ui.button('刷新', function () {
  alert('回调')
})
```
## copy
```
// 复制文字
newsappAPI.copy('点击复制按纽文本')

```
## location
```
// 获取当前位置信息
newsappAPI.location('current', function (info) {
      alert(JSON.stringify(info))
})
// 切换位置
newsappAPI.location('switch', function (info) {
      alert(JSON.stringify(info))
})

```
## setting
```
// 获取客户端设置信息
newsappAPI.setting(function (info) {
      alert(JSON.stringify(info))
})

```
## pushview
```
// 反馈界面
newsappAPI.pushview.feedback()
// 优惠券界面
newsappAPI.pushview.coupon()
// 个人中心
newsappAPI.pushview.personalcenter()
// 我的任务
newsappAPI.pushview.mytask()
// 内购支付页面
newsappAPI.pushview.inapppurchase()
// 钱包
newsappAPI.pushview.wallet('coupon')
// 系统设置
newsappAPI.pushview.applicationsettings()
// app设置
newsappAPI.pushview.settings()
// 扫一扫
newsappAPI.pushview.qrcode()

```
## 单次提醒
```
// type 为 add remove check enable 中任一
newsappAPI.alarm({
      url:'http://163.com',
      date: '2017-07-13 21:30:00',
      title: '啦啦啦',
      message: 'push来咯',
      type: 'add',
    }, function (bool) {
    alert(bool)
})

```
## 多次提醒
```
// type 为 add remove check change enable 中任一
newsappAPI.remind({
      id: 'test20170712',
      url:'http://m.163.com',
      start: '2017-07-12 18:30:00',
      end: '2017-07-13 18:30:00',
      pattern: 'daily',
      title: '啦啦啦',
      message: 'push来啦',
      type: 'add',
    }, function (bool) {
    alert(bool)
})

```
## 下载图片
```
var url = 'http://cms-bucket.nosdn.127.net/4e6098a83e5f4bd7854fd31d2fc1738d20170620100645.jpeg'
newsappAPI.downloadImage(url, function (imgurl) {
   alert('图片下载成功' + imgurl)
})

```
## 上传图片
```
newsappAPI.uploadimage({ type: 'album' }, function (url) {
  alert(url)
})

```
## 写跟贴
```
newsappAPI.comment({
  boardid: '',
  docid: '',
  replyid: ''
 }, function (text) {
  alert(text)
})

```
## 兑奖成功更新
```
newsappAPI.updateprofile()

```

