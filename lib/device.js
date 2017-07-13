import protocol from './protocol'
import { invoke } from './iframe'

export default function device(callback) {
  invoke('device', protocol.device)

  window.__newsapp_device_done = function (info) {
    window.__newsapp_device_done = null
    callback && callback(JSON.stringify(info))
  }
}