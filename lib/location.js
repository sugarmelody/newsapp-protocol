import protocol from './protocol'
import queue from './queue'

function current(callback) {
  queue.invoke('location', protocol.location + 'current')

  window.__newsapp_location_done = function (info) {
    callback && callback(info)
  }
}

function change(callback) {
  queue.invoke('location', protocol.location + 'switch')

  window.__newsapp_location_done = function (info) {
    callback && callback(info)
  }
}

const location = {
  current,
  change
}

export default location