import protocol from './protocol'
import queue from './queue'

export default function userinfo(callback) {
  queue.invoke(protocol.userinfo)

  window.__newsapp_userinfo_done = function (info) {
    callback && callback(info)
  }
}