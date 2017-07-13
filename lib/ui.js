import protocol from './protocol'
import { invoke } from './iframe'

function showToolbar() {
  invoke('showToolbar', protocol.ui + 'toolbar/show')
}

function hideToolbar() {
  invoke('hideToolbar', protocol.ui + 'toolbar/hide')
}

function modifyTitle(title) {
  invoke('modifyTitle', protocol.ui + 'modifytitle/' + encodeURIComponent(title))
}

function button(name, callback) {
  invoke('button', protocol.ui + 'actionbutton/' + encodeURIComponent(name))
  window.__newsapp_browser_actionbutton = function () {
    window.__newsapp_browser_actionbutton = null
    callback && callback()
  }
}

const ui = {
  showToolbar,
  hideToolbar,
  modifyTitle,
  button
}

export default ui