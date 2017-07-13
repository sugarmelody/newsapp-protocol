import protocol from './protocol'
import { invoke } from './iframe'

export default function comment(options, callback) {
  const { boardid, docid, replyid = '' } = options
  const id = '__newsapp_comment'
  let dom = document.getElementById(id)
  if (!dom) {
    dom = document.createElement('div')
    dom.style.display = 'none'
    dom.id = id
    document.body.appendChild(dom)
  }
  dom.setAttribute('boardid', boardid)
  dom.setAttribute('docid', docid)
  dom.setAttribute('replyid', replyid)

  invoke('comment', protocol.comment)

  window.__newsapp_comment_done = function (text) {
    window.__newsapp_comment_done = null
    callback && callback(text)
  }
}