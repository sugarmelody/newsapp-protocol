import protocol from './protocol'
import queue from './queue'

function feedback(text) {
  const txt = text ? '/' + encodeURIComponent(text) : ''
  queue.invoke('pushview__feedback', protocol.pushview + 'feedback' + txt)
}
function personalcenter() {
  queue.invoke('pushview__personalcenter', protocol.pushview + 'personalcenter')
}
function mytask() {
  queue.invoke('pushview__mytask', protocol.pushview + 'mytask')
}
function inapppurchase() {
  queue.invoke('pushview__inapppurchase', protocol.pushview + 'inapppurchase')
}
function wallet(type) {
  queue.invoke(`pushview__wallet${type}`, protocol.pushview + 'wallet/' + type)
}
function coupon() {
  queue.invoke('pushview__coupon', protocol.pushview + 'wallet/coupon')
}
function applicationsettings() {
  queue.invoke('pushview__applicationsettings', protocol.pushview + 'applicationsettings')
}
function settings() {
  queue.invoke('pushview__settings', protocol.pushview + 'settings')
}
function qrcode() {
  queue.invoke('pushview__qrcode', protocol.pushview + 'qrcode')
}

const pushview = {
  feedback,
  personalcenter,
  mytask,
  inapppurchase,
  wallet,
  coupon,
  applicationsettings,
  settings,
  qrcode
}

export default pushview