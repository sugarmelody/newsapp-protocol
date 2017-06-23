import { getIframe } from './iframe'
export function invoke (src) {
  const ifram = getIframe()
  ifram.src = src
}