import protocol from './protocol'
import { invoke, isNewsApp } from './iframe'

function getCookie (sKey) {
  return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

export default function userinfo(callback) {
  invoke('userinfo', protocol.userinfo)

  window.__newsapp_userinfo_done = function (info) {
    window.__newsapp_userinfo_done = null
    if (info) {
      invoke('login', protocol.login)
      callback && callback(info)
    } else {
      alert(info)
    }
  }

  if (!isNewsApp) {
    const sInfo = getCookie('S_INFO')
    const pInfo = getCookie('P_INFO')
    sInfo && callback && callback({
      nickname: pInfo.split('|')[0]
    })
  }
}