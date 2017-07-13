import protocol from './protocol'
import { invoke, isIos, isAndroid } from './iframe'

export default function downloadImage(imgUrl, callback) {
  invoke('downloadImage', protocol.downloadImage.replace('{{imgUrl}}', encodeURIComponent(imgUrl)))

  let win = window
  if (isAndroid && window.extra) {
    win = window.extra
  }
  win.__newsapp_download_image_done = function (success, imgurl) {
    win.__newsapp_download_image_done = null
    success && callback(imgurl)
  }
}