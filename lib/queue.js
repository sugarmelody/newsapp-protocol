import { getIframe } from './iframe'

let queue = []

function invoke (src) {
  const ifram = getIframe()
  ifram.src = src
}
function clear () {
  queue = []
}
export default {
  invoke
}