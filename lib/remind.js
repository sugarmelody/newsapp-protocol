import protocol from './protocol'
import { invoke, isAndroid } from './iframe'

export default function remind(options, callback) {
  const { id, url, start, end, pattern, title = '', message, type } = options
  const legalType = (type === 'add' || type === 'remove' || type === 'check' || type === 'change' || type === 'enable')
  if (!legalType) return
  for (let key in options) {
    if (key !== 'type') {
      let ele = document.getElementById('__newsapp_alert_' + key)
      if (!ele) {
        ele = document.createElement('div')
        ele.style.display = 'none'
        ele.id = '__newsapp_alert_' + key
        document.body.appendChild(ele)
      }
      ele.innerHTML = options[key]
    }
  }

  invoke(`remind_${type}`, protocol.remind + type)

  let win = window
  if (isAndroid && window.extra) {
    //win = window.extra
  }
  const func = `__newsapp_alert_${type}_done`
  win[func] = function (bool) {
    win.func = null
    callback && callback(bool)
  }
}