import protocol from './protocol'
import queue from './queue'

export default function trash(callback) {
  queue.invoke(protocol.trash)

  window.__newsapp_trashid_done = function (trashid) {
    callback && callback(JSON.stringify(trashid))
  }
}