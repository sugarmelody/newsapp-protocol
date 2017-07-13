import { getIframe, removeIframe } from './iframe'

function invoke (id, src) {
  const ifram = getIframe(id)
  ifram.src = src
  removeIframe(id)
}
export default {
  invoke
}