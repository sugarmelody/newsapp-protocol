import protocol from './protocol'
import { invoke } from './iframe'

export default function opencomment(docId) {
  invoke('opencomment', protocol.opencomment.replace('{{docId}}', docId))
}