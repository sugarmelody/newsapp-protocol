import protocol from './protocol'
import { invoke } from './iframe'

export default function updateprofile() {
  invoke('updateprofile', protocol.updateprofile)
}