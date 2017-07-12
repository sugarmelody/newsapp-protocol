import protocol from './protocol'
import queue from './queue'

export default function setting(callback) {
  queue.invoke('setting', protocol.setting)

  window.__newsapp_settings_done = function (info) {
    callback && callback(info)
  }
}
