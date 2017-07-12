import { getIframe, removeIframe } from './iframe'

let queue = []

function invoke (id, src) {
  const ifram = getIframe(id)
  ifram.src = src
  removeIframe(id)
}
function clear () {
  queue = []
}
export default {
  invoke
}