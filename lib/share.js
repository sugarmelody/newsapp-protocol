import protocol from './protocol'
import { invoke } from './iframe'

function setShareData (options) {
  const shareData = [
    {
      id: '__newsapp_sharewxurl',
      text: options.wxUrl
    },
    {
      id: '__newsapp_sharewxthumburl',
      text: options.wxImg
    },
    {
      id: '__newsapp_sharewxtitle',
      text: options.wxTitle
    },
    {
      id: '__newsapp_sharewxtext',
      text: options.wxText
    },
    {
      id: '__newsapp_sharephotourl',
      text: options.wbImg
    }
  ]

  const shareDomId = '__newsapp_shareDom'
  let shareDom = document.getElementById(shareDomId)
  if (!shareDom) {
    shareDom = document.createElement('div')
    shareDom.id = shareDomId
    shareDom.style.display = 'none'
    document.body.appendChild(shareDom)
  }
  shareDom.innerHTML = ''

  shareDom.innerHTML = shareData.map((div) => {
    return div.text ? `<div id="${div.id}">${div.text}</div>` : ''
  }).join('')
}

function invokeShare(data, callback) {
  setShareData (data)
  invoke('share', protocol.share)

  window.__newsapp_share_done = function () {
    window.__newsapp_share_done = null
    callback && callback()
  }
}

const share = {
  invokeShare,
  setShareData
}

export default share
