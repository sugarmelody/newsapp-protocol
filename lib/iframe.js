export function getIframe(id) {
  // const id = '__newsapp__protocol'
  let iframe = document.getElementById(id)
  if (iframe) return iframe

  iframe = document.createElement('iframe')
  iframe.id = id
  iframe.style.display = 'none'
  document.body.appendChild(iframe)
  return iframe
}

export function removeIframe(id) {
  setTimeout(() =>{
    const iframe = document.getElementById(id)
    if (!iframe) return
    document.body.removeChild(iframe)
  }, 3000)
}

export function invoke (id, src) {
  const ifram = getIframe(id)
  ifram.src = src
  removeIframe(id)
}

const ua = window.navigator.userAgent
export const isNewsApp = (/newsapp/i).test(ua)
export const isIos = ua.match(/ipad|iphone|ipod/i)
export const isAndroid = ua.match(/android/i)