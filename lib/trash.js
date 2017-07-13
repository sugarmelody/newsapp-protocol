import protocol from './protocol'
import { invoke } from './iframe'

export default function trash(callback) {
  invoke('trash', protocol.trash)

  window.__newsapp_trashid_done = function (trashid) {
    window.__newsapp_trashid_done = null
      callback && callback(JSON.stringify(trashid))
  }
}