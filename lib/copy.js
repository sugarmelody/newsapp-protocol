import protocol from './protocol'
import { invoke } from './iframe'

export default function copy(text) {
  invoke('copy', protocol.copy.replace('{{text}}', encodeURIComponent(text)))
}