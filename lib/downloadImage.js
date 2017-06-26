import protocol from './protocol'
import queue from './queue'

export default function downloadImage(imgUrl, callback) {
  queue.invoke(protocol.downloadImage.replace('{{imgUrl}}', encodeURIComponent(imgUrl)))

  window.__newsapp_download_image_done = function (success, imgurl) {
    success && callback(imgurl)
  }
}