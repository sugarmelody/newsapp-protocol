import protocol from './protocol'
import queue from './queue'

function showToolbar() {
  queue.invoke('showToolbar', protocol.ui + 'toolbar/show')
}

function hideToolbar() {
  queue.invoke('hideToolbar', protocol.ui + 'toolbar/hide')
}

function modifyTitle(title) {
  queue.invoke('modifyTitle', protocol.ui + 'modifytitle/' + encodeURIComponent(title))
}

function button(name, callback) {
  queue.invoke('button', protocol.ui + 'actionbutton/' + encodeURIComponent(name))
  window.__newsapp_browser_actionbutton = function () {
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