import protocol from './protocol'
import { invoke } from './iframe'

function feedback(text) {
  const txt = text ? '/' + encodeURIComponent(text) : ''
  invoke('pushview__feedback', protocol.pushview + 'feedback' + txt)
}
function personalcenter() {
  invoke('pushview__personalcenter', protocol.pushview + 'personalcenter')
}
function mytask() {
  invoke('pushview__mytask', protocol.pushview + 'mytask')
}
function inapppurchase() {
  invoke('pushview__inapppurchase', protocol.pushview + 'inapppurchase')
}
function wallet(type) {
  invoke(`pushview__wallet${type}`, protocol.pushview + 'wallet/' + type)
}
function coupon() {
  invoke('pushview__coupon', protocol.pushview + 'wallet/coupon')
}
function applicationsettings() {
  invoke('pushview__applicationsettings', protocol.pushview + 'applicationsettings')
}
function settings() {
  invoke('pushview__settings', protocol.pushview + 'settings')
}
function qrcode() {
  invoke('pushview__qrcode', protocol.pushview + 'qrcode')
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