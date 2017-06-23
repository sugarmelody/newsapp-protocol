import protocol from './protocol'
import { invoke } from './queue'

export function trash(callback) {
  invoke(protocol.trash)
  window.__newsapp_trashid_done = function (trashid) {
    callback && callback(JSON.stringify(trashid))
  }
}