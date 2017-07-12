import protocol from './protocol'
import queue from './queue'

export default function copy(text) {
  queue.invoke('copy', protocol.copy.replace('{{text}}', encodeURIComponent(text)))
}