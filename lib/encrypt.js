import protocol from './protocol'
import queue from './queue'

export default function encrypt(text, callback) {
  const encodeText = encodeURIComponent(text)
  queue.invoke(protocol.encrypt.replace('{{text}}', encodeText))

  window.__newsapp_encrypt_done = function (encryptedText) {
    callback && callback(encryptedText)
  }

  if (window.extra) {
    callback(window.extra.__newsapp_encrypt (encodeText))
  }
}