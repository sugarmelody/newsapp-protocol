import protocol from './protocol'
import { invoke } from './iframe'

export default function userinfo(callback) {
  invoke('userinfo', protocol.userinfo)

  window.__newsapp_userinfo_done = function (info) {
    window.__newsapp_userinfo_done = null
    callback && callback(info)
  }
}