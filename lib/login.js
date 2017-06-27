import protocol from './protocol'
import queue from './queue'

export default function login(callback) {
  queue.invoke(protocol.login)

  window.__newsapp_login_done = function (info) {
    callback && callback(info)
  }
}