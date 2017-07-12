import protocol from './protocol'
import queue from './queue'

function camera(width, height, callback) {
  let param = ''
  if (width && height) {
    param += '/' + width + 'x' + height
  }
  queue.invoke('uploadimage', protocol.uploadimage + 'camera' + param)

  window.__newsapp_upload_image_done = function (url) {
    callback && callback(url)
  }
}

function album(width, height, callback) {
  let param = ''
  if (width && height) {
    param += '/' + width + '_' + height
  }
  queue.invoke('uploadimage', protocol.uploadimage + 'album' + param)

  window.__newsapp_upload_image_done = function (url) {
    alert(url)
    callback && callback(url)
  }
}

const uploadimage = {
  camera,
  album
}

export default uploadimage