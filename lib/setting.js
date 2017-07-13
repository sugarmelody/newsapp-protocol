import protocol from './protocol'
import { invoke } from './iframe'

export default function setting(callback) {
  invoke('setting', protocol.setting)

  window.__newsapp_settings_done = function (info) {
    window.__newsapp_settings_done = null
    callback && callback(info)
  }
}
