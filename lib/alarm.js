import protocol from './protocol'
import { invoke, isAndroid } from './iframe'

export default function alarm(options, callback) {
  const { url, date, title = '', message, type } = options
  const legalType = (type === 'add' || type === 'remove' || type === 'check' || type === 'enable')
  if (!legalType) return
  for (let key in options) {
    if (key !== 'type') {
      let ele = document.getElementById('__newsapp_alarm_' + key)
      if (!ele) {
        ele = document.createElement('div')
        ele.style.display = 'none'
        ele.id = '__newsapp_alarm_' + key
        document.body.appendChild(ele)
      }
      ele.innerHTML = options[key]
    }
  }

  invoke(`alarm_${type}`, protocol.alarm + type)

  let win = window
  if (isAndroid && window.extra) {
    //win = window.extra
  }
  const func = `__newsapp_alarm_${type}_done`
  win[func] = function (bool) {
    win.func = null
    callback && callback(bool)
  }
}