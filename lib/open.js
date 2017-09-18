import protocol from './protocol'
import { invoke } from './iframe'

function open(type, id, channelId) {
    let protocolUrl
  switch (type) {
      case 'article':
        protocolUrl = protocol.openArticle.replace('{{docId}}', encodeURIComponent(id))
        break
      case 'vedio':
        protocolUrl = protocol.openVedio.replace('{{videoId}}', encodeURIComponent(id))
        break
      case 'photo':
        protocolUrl = protocol.openPhoto.replace('{{docId}}', encodeURIComponent(id)).replace('{{channelId}}', encodeURIComponent(channelId))
        break
      default:
        return
  }
  invoke(`open_${type}_${id}`, protocolUrl)
}

export default open