import protocol from './protocol'
import { invoke, isAndroid, isIos } from './iframe'

// ios 通过 input file 上传
function uploadDom() {
  const id = '__newsapp_upload_image'
  let dom = document.getElementById(id)
  if (!dom) {
    dom = document.createElement('input')
    dom.id = id
    dom.type = 'file'
    dom.style.display = 'none'
    dom.accept = 'image/*'
    document.body.appendChild(dom)
  }
  return dom
}

export default function uploadimage(options, callback) {
  const { width = 750, height = 10000, type = 'album' } = options
  if (isAndroid) {
    invoke(`upload${type}`, `${protocol.uploadimage}${type}\/${width}x${height}`)
    window.__newsapp_upload_image_done = function (url) {
      window.__newsapp_upload_image_done = null
      alert(url)
      callback && callback(`http://s.cimg.163.com/i/${url.replace('http://', '')}.${width}x${height}.75.auto.jpg`)
    }
  } else {
    const dom = uploadDom()
    dom.onchange = () => {
      const file = dom.files[0]
      if (!file || !/image/.test(file.type)) {
        alert('请上传图片类型')
        return
      }
      const formData = new FormData()
      formData.append('files', file)
      typeof options.loadingStart === 'function' && options.loadingStart()
      const xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://upfile.m.163.com/nos/upload/pub')
      xhr.onload = (e) => {
        let result = null
        if (xhr.status === 200) {
          result = JSON.parse(xhr.responseText)
        }
        typeof options.loadingEnd === 'function' && options.loadingEnd()
        callback(result ? `${result.url}?imageView&thumbnail=${width}x${height}&quality=75` : null)
      }
      xhr.send(formData)
    }
    dom.click()
  }

}
