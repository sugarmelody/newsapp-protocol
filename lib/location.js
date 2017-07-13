import protocol from './protocol'
import { invoke } from './iframe'

export default function location(type, callback) {
  const legalType = (type === 'current' || type === 'switch')
  if (!legalType) return
  invoke(`location_${type}`, protocol.location + type)
  window.__newsapp_location_done = function (info) {
    window.__newsapp_location_done = null
    callback && callback(info)
  }
}
