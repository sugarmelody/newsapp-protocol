import protocol from './protocol'
import queue from './queue'

export default function otherappinfo(callback) {
  queue.invoke('otherappinfo', protocol.otherappinfo)

  window.__newsapp_device_done = function (info) {
    callback && callback(JSON.stringify(info))
  }
}