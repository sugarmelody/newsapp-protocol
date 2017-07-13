import protocol from './protocol'
import { invoke, isAndroid } from './iframe'

export default function encrypt(data, callback) {
  const encodeText = encodeURIComponent(JSON.stringify(data))
  invoke('encrypt', protocol.encrypt.replace('{{text}}', encodeText))

  window.__newsapp_encrypt_done = function (encryptedText) {
    window.__newsapp_encrypt_done = null
    callback && callback(encryptedText)
  }

  if (isAndroid && window.extra) {
    callback(window.extra.__newsapp_encrypt (encodeText))
  }
}