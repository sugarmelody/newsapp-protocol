[客户端与前端交互协议wiki](http://doc.ws.netease.com/pages/viewpage.action?pageId=2886075)
### API Usage
```
import newsappAPI from 'newsapp-protocol'

```
## share
```
// 设置分享文案
window.newsappAPI.share.setShareData({
      wxUrl: 'http://m.163.com',
      wxImg: '',
      wxTitle: '标题',
      wxText: '描述',
      wbImg: ''
    })

//调起分享组件
window.newsappAPI.share.invokeShare({
      wxUrl: 'http://m.163.com',
      wxImg: '',
      wxTitle: '标题',
      wxText: '描述',
      wbImg: ''
    })

//如果是图片分享 wxUrl参数设为空即可
```