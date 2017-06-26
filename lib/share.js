import protocol from './protocol'
import queue from './queue'

export default function share(callback) {
  queue.invoke(protocol.share)

  window.__newsapp_device_done = function (info) {
    callback && callback(JSON.stringify(info))
  }
}