export default {
  ui: 'docmode://', // 工具栏UI
  copy: 'copy://{{text}}', // 复制
  share: 'share://', // 分享
  device: 'device://', // 设备信息
  trash: 'trashid://', // 防刷码
  encrypt: 'encrypt://{{text}}', // 加密
  login: 'login://', // 登录
  userinfo: 'userinfo://', // userinfo
  location: 'location://', // 位置信息
  setting: 'settings://', // 设置信息
  alarm: 'alarm://', // 客户端单次push
  remind: 'alert://', // 客户端多次push
  comment: 'comment://', // 弹出原生跟贴框发送跟贴
  opencomment: 'newsapp://tie/{{docId}}', // 打开跟贴
  pushview: 'pushview://', // 进入客户端指定界面
  updateprofile: 'updateprofile://', // 用户兑奖成功后，客户端会收到该协议，然后利用它去更新最新数据
  uploadimage: 'uploadimage://', // 上传图片
  downloadImage: 'downloadimage://{{imgUrl}}', // 下载图片
  otherappinfo: 'downloadimage://{{imgUrl}}' // 第三方App信息
}
