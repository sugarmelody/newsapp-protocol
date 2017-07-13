import protocol from './protocol'
import { invoke } from './iframe'

export default function login(callback) {
  invoke('login', protocol.login)

  window.__newsapp_login_done = function (info) {
    window.__newsapp_login_done = null
    callback && callback(info)
  }
}