import protocol from './protocol'
import queue from './queue'
import { isIos, isAndroid } from './iframe'

export default function downloadImage(imgUrl, callback) {
  queue.invoke('downloadImage', protocol.downloadImage.replace('{{imgUrl}}', encodeURIComponent(imgUrl)))

  window.__newsapp_download_image_done = function (success, imgurl) {
    success && callback(imgurl)
  }

  if (isAndroid) {
    if (window.extra && window.extra.__newsapp_download_image_don) {
      window.extra.__newsapp_download_image_don = function (success, imgurl) {
        success && callback(imgurl)
      }
    }
  }
}