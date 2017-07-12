import protocol from './protocol'
import queue from './queue'

function feedback(text) {
  const txt = text ? '/' + encodeURIComponent(text) : ''
  queue.invoke('pushview', protocol.pushview + 'feedback' + txt)
}
function personalcenter() {
  queue.invoke('pushview', protocol.pushview + 'personalcenter')
}
function mytask() {
  queue.invoke('pushview', protocol.pushview + 'mytask')
}
function inapppurchase() {
  queue.invoke('pushview', protocol.pushview + 'inapppurchase')
}
function wallet(type) {
  queue.invoke('pushview', protocol.pushview + 'wallet/' + type)
}
function coupon() {
  queue.invoke('pushview', protocol.pushview + 'wallet/coupon')
}
function applicationsettings() {
  queue.invoke('pushview', protocol.pushview + 'applicationsettings')
}
function settings() {
  queue.invoke('pushview', protocol.pushview + 'settings')
}
function qrcode() {
  queue.invoke('pushview', protocol.pushview + 'qrcode')
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