import protocol from './protocol'
import { invoke } from './queue'

export default function device(callback) {
  invoke(protocol.device)
  window.__newsapp_device_done = function (info) {
    callback && callback(info)
  }
}