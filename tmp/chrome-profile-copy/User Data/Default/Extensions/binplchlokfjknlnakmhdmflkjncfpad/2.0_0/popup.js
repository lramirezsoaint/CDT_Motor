/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/constants.js

const constants_constants = {
  EXTENSION_REFERENCE:  false
    ? 0
    : `QRExt-05-${chrome.runtime.getManifest().version.replaceAll('.', '')}`,
  GOOGLE_ANALYTICS: {
    Enable: 'true',
    trackingID: 'UA-211425505-2'
  },
  QR_SERVICES: [
    'https://hybridapps.net/apps/URLShortner/bitly.php',
    'https://amazonspot.net/apps/URLShortner/bitly.php'
  ],
  INSTALL_URL: 'https://ggle.io/QR2ScanInstall',
  UPDATE_URL: 'https://ggle.io/QR2ScanInstall',
  UNINSTALL_URL: 'https://ggle.io/QR2ScanUninstall',
  INSTALLATION_ID: undefined,
  EVENT_SOURCE_POPUP: 'PUPUP',
  EVENTS_SOURCE_BACKGROUND: 'BACKGROUND',
  APP_STORE_KEY: 'URLScanner_Extn_Data',
  EVENTS_SOURCE: undefined, // Popup or Background,
  QRSERVICES_COMBINED_TIMEOUT: 6000,
  MAX_SHORT_URLS_CACHE: 500,
  EXTENSION_DATA_KEYS: {
    HISTORY: 'history',
    QR_CACHE: 'qrCache'
  },
  CONFIGS: {
    TEST: false
  }
}

globalThis.CONFIGS = constants_constants.CONFIGS



;// CONCATENATED MODULE: ./src/common.js
function common_isEmpty (valueOfObj) {
  let v
  try {
    if (valueOfObj === null || valueOfObj === undefined) { return true }

    if (typeof (valueOfObj) === 'number') { return false }

    if (valueOfObj && Object.keys(valueOfObj).length === 0) { return true }

    if (typeof (valueOfObj) === 'object') {
      for (const i in valueOfObj) {
        v = valueOfObj[i]
        if (v !== undefined && typeof (v) !== 'function') {
          return false
        }
      }
    } else if (typeof (valueOfObj) === 'string' && valueOfObj.trim().length > 0) {
      // TODO: String can be "{}"
      return false
    }
  } catch (e) {
    this.error("couldn't check emptyness: " + e)
  }
  return true
}

function parseJson (str, defaultValue) {
  try {
    return JSON.parse(str)
  } catch (e) {

  }

  return defaultValue
}



;// CONCATENATED MODULE: ./src/logger.js



const logger = (function () {
  // Constructor
  function logger (pageId) {
    this.pageId = pageId
    // this.functionName = null;
  }
  // Private method
  function print (msg, type, obj) {
    let logTime = new Date()
    logTime = logTime.getHours() + ':' + logTime.getMinutes() + ':' + logTime.getSeconds() + ':' + Math.floor(logTime.getMilliseconds())
    if (constants_constants.CONFIGS.TEST) {
      try {
        if (obj) {
          try {
            msg = msg + JSON.stringify(obj)
          } catch (err) {

          }
        }
        const logMsg = this.pageId + '[' + logTime + ']# ' + msg
        /* logMsg += (this.functionName && this.functionName != null) ? this.functionName : "";
         logMsg += msg; */

        if (type === 'log') { console.log(logMsg) }
        if (type === 'info') { console.info(logMsg) } else if (type === 'warn') { console.warn(logMsg) } else if (type === 'error') {
          console.error(logMsg)
          // Global error handler-2, for thrown exceptions and caught in catch() blocks
          if (window.location.href.includes('?jserror')) {
            // loading(logMsg)
          }
        }
        // COLOR Types: console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
      } catch (e) {
        console.log(msg)
      }
    }
  }

  logger.prototype.log = function (msg, obj) {
    return print.call(this, msg, 'log')
  }
  logger.prototype.info = function (msg) {
    return print.call(this, msg, 'info')
  }
  logger.prototype.warn = function (msg) {
    return print.call(this, msg, 'warn')
  }
  logger.prototype.error = function (msg) {
    return print.call(this, msg, 'error')
  }
  return logger
})()



;// CONCATENATED MODULE: ./src/data-store.js




const data_store_logger = new logger('datstore')

let extensionData
function getItem (key, defaultValue) {
  return new Promise((resolve, reject) => {
    if (chrome.runtime.lastError) {
      reject(chrome.runtime.lastError)
      return
    }
    if (!extensionData) {
      chrome.storage.local.get([constants_constants.APP_STORE_KEY], (data) => {
        data_store_logger.log('data retrieved from local ', data)
        extensionData = data[constants_constants.APP_STORE_KEY] ? parseJson(data[constants_constants.APP_STORE_KEY], {}) : {}
        resolve(extensionData[key] || defaultValue)
      })
    } else {
      resolve(extensionData[key] || defaultValue)
    }
  })
}

function setItemData (key, value) {
  extensionData[key] = value
  data_store_logger.log('Save extension data', extensionData)

  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ [constants_constants.APP_STORE_KEY]: JSON.stringify(extensionData) }, () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError)
      } else {
        resolve()
      }
    })
  })
}

async function setItem (key, value) {
  if (!extensionData) {
    await getItem()
    return setItemData(key, value)
  }

  return setItemData(key, value)
}



;// CONCATENATED MODULE: ./src/gaTracking.js



const gaAppType = constants_constants.EXTENSION_REFERENCE

const ANALYTICS_PATH = 'https://www.google-analytics.com/collect'

let cid = '000'

if (true) {
  getItem('installationId').then((installationId) => {
    cid = installationId
  })
}

async function postData (url = '', data = {}) {
  try {
  // Default options are marked with *
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: data
    })
  } catch {

  }
}

function postEvent (ea, el, ev) {
  const gaParams = new URLSearchParams()
  gaParams.append('v', 1)
  gaParams.append('tid', constants_constants.GOOGLE_ANALYTICS.trackingID)
  gaParams.append('t', 'event')
  gaParams.append('cid', cid)
  gaParams.append('ec', gaAppType + '_' + constants_constants.EVENTS_SOURCE)
  gaParams.append('ea', ea)

  if (el && ev !== undefined) {
    el += ',v=' + ev
  }
  gaParams.append('el', el)

  postData(ANALYTICS_PATH, gaParams)
}

const gaVals = {
  label: {
    Security: 'Security',
    SecurityGoogle: 'SecurityGoogle',
    QRCreate: 'QRCreate',
    Popup: 'Popup',
    PopupActions: 'Popup-Actions',
    Background: 'Background'
  },
  vals: {
    Success: 'Success',
    Show: 'Show',
    Close: 'Close',
    Fail: 'Fail',
    Retry: 'Retry',
    Warning: 'Warning',
    NoRec: 'No record# ',
    BadRec: 'Invalid record',
    BadHash: 'Invalid hash-id',
    BadIP: 'Bad IP',
    BadSite: 'Bad Site',
    Exception: 'Exception# ',
    PrivateRec: 'Private record',
    Aff_Amazon: 'Amazon',
    Rate: 'Rate',
    Update: 'Update',
    Found: 'Found',
    Enabled: 'Enabled',
    Disabled: 'Disabled',
    Checked: 'Checked',
    Anonymous: 'Anonymous',
    Invalid: 'Invalid'
  }
}
const gaTracking_gaAutil = {
  label: gaVals.label,
  vals: gaVals.vals,
  gaEventAL (action, label) {
    if (__webpack_require__.g && __webpack_require__.g.CONFIGS && __webpack_require__.g.CONFIGS.AnalyticsTracking === 'false') { return }
    action += ''; label += ''
    postEvent(action, label)
  },
  gaEventALV (action, label, labelValue) {
    if (__webpack_require__.g && __webpack_require__.g.CONFIGS && __webpack_require__.g.CONFIGS.AnalyticsTracking === 'false') { return }

    if (typeof labelValue !== 'string' && labelValue !== undefined) {
      labelValue = labelValue.toString()
    }
    action += ''; label += ''; labelValue += ''

    if (constants_constants.EVENTS_SOURCE === constants_constants.EVENT_SOURCE_POPUP) {
      setTimeout(() => {
        postEvent(action, label, labelValue)
      })
    } else {
      postEvent(action, label, labelValue)
    }

    // global._gaq.push(['_trackEvent', gaAppType + action, label, labelValue])
  }
}



;// CONCATENATED MODULE: ./src/qr-cache-history.js





const qr_cache_history_logger = new logger('qr-cache-history')

async function getCachedQr (qrData) {
  try {
    const historyItems = await getItem(constants_constants.EXTENSION_DATA_KEYS.HISTORY, [])
    const dataString = JSON.stringify(qrData.data)
    for (const cachedQr of historyItems) {
      if (cachedQr.type === qrData.type && cachedQr.name === qrData.name &&
        dataString === JSON.stringify(cachedQr.data)) {
        return cachedQr
      }
    }
  } catch (err) {
    gaTracking_gaAutil.gaEventALV('GET_CACHED_QR', gaTracking_gaAutil.vals.Fail, err)
  }

  return undefined
}

async function addQrToHistory (qrData) {
  try {
    qrData.timestamp = Date.now()
    qrData.id = qrData.timestamp
    const qrs = await getItem('history', [])
    qrs.push(qrData)
    await setItem(constants_constants.EXTENSION_DATA_KEYS.HISTORY, qrs)
  } catch (err) {
    qr_cache_history_logger.error('failed to save qr of type ' + qrData.type + err)
    gaTracking_gaAutil.gaEventALV('ADD_TO_HISTORY_' + qrData.type, gaTracking_gaAutil.vals.Fail, err)
  }
}

async function getQrHistory () {
  const qrs = await getItem(constants_constants.EXTENSION_DATA_KEYS.HISTORY, [])
  qrs.sort((a, b) => a.timestamp < b.timestamp ? 1 : -1)
  return qrs
}

async function deleteHistoryItem (historyItemId) {
  try {
    const qrs = await getItem(constants_constants.EXTENSION_DATA_KEYS.HISTORY, [])
    const qrToDeleteIx = qrs.findIndex(qr => qr.timestamp === historyItemId)
    if (qrToDeleteIx !== -1) {
      qrs.splice(qrToDeleteIx, 1)
      await setItem(constants_constants.EXTENSION_DATA_KEYS.HISTORY, qrs)
    }
  } catch (err) {
    gaTracking_gaAutil.gaEventALV('DELETE_HISTORY_ITEM', gaTracking_gaAutil.vals.Fail, err)

    return Promise.reject(err)
  }
}

async function purgeOldQrHistory () {
  try {
    const cahcedItems = await dataStore.getItem(constants.EXTENSION_DATA_KEYS.HISTORY, [])
    if (cahcedItems.length > constants.MAX_SHORT_URLS_CACHE) {
      const sortedItems = cahcedItems.sort((a, b) => a.timestamp < b.timestamp ? -1 : 1)
      sortedItems.splice(0, sortedItems.length - constants.MAX_SHORT_URLS_CACHE)
      await dataStore.setItem(constants.EXTENSION_DATA_KEYS.QR_CACHE, sortedItems)
    }
  } catch (err) {
    qr_cache_history_logger.error('failed to purge cache', err)
    gaAutil.gaEventALV('PURGE_CACHE', gaAutil.vals.Fail, err)
    return Promise.reject(err)
  }
}



;// CONCATENATED MODULE: ./src/qr-sevice.js






const qr_sevice_logger = new logger('qr-service')

const QRCODE_TYPES = {
  LINK: 'link',
  TEXT: 'text',
  SMS: 'sms',
  CALL: 'phone',
  EMAIL: 'email',
  CONTACT: 'contact',
  EVENT: 'event',
  WIFI: 'wifi'
}

const QRCODE_MODE = {
  STATIC: 'static',
  DYNAMIC: 'dynamic'
}

const qrTypesHandlers = {
  [QRCODE_TYPES.LINK]: {
    staticQrText: (qrCode) => qrCode.data.link
  },
  [QRCODE_TYPES.SMS]: {
    staticQrText: (qrCode) => `smsto:${qrCode.data.no}:${qrCode.data.msg}`
  },
  [QRCODE_TYPES.CALL]: {
    staticQrText: (qrCode) => `tel:${qrCode.data.no}`
  },
  [QRCODE_TYPES.TEXT]: {
    staticQrText: (qrCode) => qrCode.data.text
  }
}

async function invokeUrl (url, method, payload) {
  const response = await fetch(url, {
    method: method || 'GET',
    body: payload ? JSON.stringify(payload) : undefined
  })
  return await response.json()
}

async function invokeQrService (payload) {
  let qrResponse
  for (const qrApiUrl of constants_constants.QR_SERVICES) {
    try {
      const url = new URL(qrApiUrl)
      url.searchParams.append('src', constants_constants.EXTENSION_REFERENCE)
      url.searchParams.append('type', 'QR')
      url.searchParams.append('qrData', payload)

      url.searchParams.append('svcEnv', 'QRCdOrg')
      // if (process.env.mode === 'development') {
      // url.searchParams.append('svcEnv', 'MinURL')
      // }

      qrResponse = await invokeUrl(url, 'POST', payload)
    } catch (err) {
      gaTracking_gaAutil.gaEventALV('QR_SERVICE_FAILED', qrApiUrl, err)
      continue
    }

    if (!qrResponse) {
      gaTracking_gaAutil.gaEventALV('QR_SERVICE_FAILED', qrApiUrl, 'NO_RESPONSE')
      continue
    }

    if (qrResponse.bitlydata && qrResponse.bitlydata.status_code === 200) {
      return { shortUrl: qrResponse.bitlydata.data.url }
    }

    gaTracking_gaAutil.gaEventALV('QR_SERVICE_FAILED', qrApiUrl, JSON.stringify(qrResponse))
  }

  gaTracking_gaAutil.gaEventAL('QR_SERVICE_FAILED', 'ALL_SERVICES_FAILED')
  return Promise.reject(new Error('ALL_SERVICES_FAILED'))
}

function isLink (text) {
  // eslint-disable-next-line prefer-regex-literals
  const linkRegEx = new RegExp('(https|ftp|http|sftp)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]')

  return linkRegEx.test(text)
}

function getTimeoutRejectPromise () {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('TIMEOUT')), constants_constants.QRSERVICES_COMBINED_TIMEOUT)
  })
}

function getStaticQrText (qrCode) {
  return qrTypesHandlers[qrCode.type].staticQrText(qrCode)
}

async function createQr (textOrQrData, title) {
  let qrPayload
  if (typeof textOrQrData === 'string') {
    const isUrl = isLink(textOrQrData)
    if (isUrl) {
      qrPayload = {
        type: QRCODE_TYPES.LINK,
        mode: QRCODE_MODE.DYNAMIC,
        name: title,
        data: {
          link: textOrQrData
        }
      }
    } else {
      qrPayload = {
        type: QRCODE_TYPES.TEXT,
        mode: QRCODE_MODE.DYNAMIC,
        name: title,
        data: {
          text: textOrQrData
        }
      }
    }
  } else {
    qrPayload = textOrQrData
  }

  const id = Date.now()
  const returnQr = {
    ...qrPayload,
    id,
    timestamp: id
  }

  try {
    const cachedQr = await getCachedQr(qrPayload)
    if (cachedQr) {
      gaTracking_gaAutil.gaEventAL('QR_SERVICE', qrPayload.type + '_CACHE_SUCCESS')
      qr_sevice_logger.log('found in cache for ' + qrPayload.type, cachedQr)
      return cachedQr
    }

    const payload = btoa(JSON.stringify(qrPayload))
    const response = await Promise.race([invokeQrService(payload), getTimeoutRejectPromise()])
    returnQr.shortUrl = response.shortUrl
    gaTracking_gaAutil.gaEventAL('QR_SERVICE', qrPayload.type + '_SUCCESS')
  } catch (err) {
    qr_sevice_logger.error('Error while invoking qr service' + err, err)
    gaTracking_gaAutil.gaEventALV('QR_SERVICE', qrPayload.type + '_FAILED', err)
  }

  addQrToHistory(returnQr)

  return returnQr
}

function getSavedQrs () {
  return getQrHistory()
}

function deletedSavedQr (id) {
  return deleteHistoryItem(id)
}



;// CONCATENATED MODULE: ./src/locale.js

function translate (element) {
  $('[data-i18n-msg-id]', element).each((i, element) => {
    const message = chrome.i18n.getMessage(element.getAttribute('data-i18n-msg-id'))
    const targetAttr = element.getAttribute('data-i18n-msg-target-attr')
    if (targetAttr) {
      $(element).attr(targetAttr, message)
    } else {
      $(element).replaceWith(message)
    }
  })
}



;// CONCATENATED MODULE: ./src/utils.js

function copyToClipboard () {
  let single = true
  return function (text) {
    if (!single) return
    single = false
    setTimeout(() => {
      const copyDiv = document.createElement('div')
      copyDiv.style.position = 'absolute'
      copyDiv.style.top = '-999px'
      copyDiv.style.left = '-999px'
      copyDiv.contentEditable = 'true'
      document.body.appendChild(copyDiv)
      copyDiv.innerHTML = text
      copyDiv.focus()
      document.execCommand('SelectAll')
      document.execCommand('copy', false)
      document.body.removeChild(copyDiv)
      single = true
    }, 0)
  }
}

function copyImgToClipboard () {
  let single = true
  return function (base64OrCanvasElement) {
    if (!single) return
    single = false
    let canvas
    let base64
    let remove
    if (base64OrCanvasElement instanceof HTMLCanvasElement) {
      canvas = base64OrCanvasElement
      base64 = canvas.toDataURL('image/png', 1.0)
    } else {
      base64 = base64OrCanvasElement
      remove = true
    }
    setTimeout(() => {
      if (!canvas) {
        canvas = document.createElement('canvas')
        const image = new Image()
        image.src = base64
        canvas.width = 244
        canvas.height = 244
        canvas.style.position = 'absolute'
        canvas.style.top = '0'
        canvas.style.left = '-999px'
        document.body.appendChild(canvas)
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#0000ff'
        ctx.drawImage(image, 2, 2, 240, 240)
      }

      // tested on chrome 76
      canvas.toBlob(function (blob) {
        // eslint-disable-next-line no-undef
        const item = new ClipboardItem({ 'image/png': blob })

        navigator.clipboard.write([item])
        if (remove) {
          document.body.removeChild(canvas)
        }
        single = true
      })
    }, 0)
  }
}

function saveImage (uri, suffix = 'png') {
  const a = document.createElement('a')
  const event = new MouseEvent('click')
  a.download = `qrcode_${+new Date()}.${suffix}`
  a.href = uri
  a.dispatchEvent(event)
}

function toast (msg, duration = 1000) {
  duration = isNaN(duration) ? 1000 : duration
  const m = document.createElement('div')
  m.innerHTML = msg
  m.style.cssText = 'max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;'
  document.body.appendChild(m)
  setTimeout(function () {
    const d = 0.5
    m.style.transition = 'transform ' + d + 's ease-in, opacity ' + d + 's ease-in'
    m.style.opacity = '0'
    setTimeout(function () { document.body.removeChild(m) }, d * 1000)
  }, duration)
}



;// CONCATENATED MODULE: ./src/components/tab-qr-card.js









const tab_qr_card_logger = new logger('qrCard')

class TabQrCard {
  constructor ({ element, tabId }) {
    this.element = element
    this.tabId = tabId
    this.state = {
      qrData: null,
      error: null
    }

    translate(element)
  }

  resetContent () {
    $('.qr-place-holder', this.element).empty().html('<i class="gg-qr"></i><span class="loader"></span>')
    $('.qr-actions', this.element).hide()
    $('.share-list-wrapper', this.element).hide()
    this.state.qrData = null
  }

  createQr (urlOrData, title) {
    this.resetContent()
    $('.loader', this.element).show()
    return createQr(urlOrData, title)
      .then(qrCode => {
        this.showQrCode(qrCode)
        return qrCode
      })
      .catch(err => {
        tab_qr_card_logger.log('Error while creating qr', err)
        gaTracking_gaAutil.gaEventALV('Create_QR' + this.tabId, 'FAILED', err)
        return new Error('Failed to create QR')
      })
      .finally(() => {
        $('.loader', this.element).hide()
      })
  }

  downloadQr = () => {
    gaTracking_gaAutil.gaEventAL('CreateQR_' + this.tabId, 'actions', 'download')
    saveImage($('.qr-place-holder canvas', this.element)[0].toDataURL('image/png', 1.0))
  }

  copyQr = () => {
    gaTracking_gaAutil.gaEventAL('CreateQR_' + this.tabId, 'actions', 'copy')
    copyImgToClipboard()($('.qr-place-holder canvas', this.element)[0])
    toast(chrome.i18n.getMessage('textCopied'))
  }

  showStats = () => {
    gaTracking_gaAutil.gaEventAL('CreateQR_' + this.tabId, 'action', 'stats')
    toast(chrome.i18n.getMessage('textComingSoon') + '<br />' + chrome.i18n.getMessage('textAnalytics'))
  }

  copyShortUrl = () => {
    gaTracking_gaAutil.gaEventAL('CreateQR_' + this.tabId, 'action', 'copy-short-url')
    copyToClipboard()(this.state.qrData.shortUrl)
    toast(chrome.i18n.getMessage('textCopied'))
  }

  initQrActions () {
    $('.qr-actions', this.element).css('display', 'flex')

    if (this.state.qrData.shortUrl) {
      const shortUrl = this.state.qrData.shortUrl
      const shortUrlElement = $('.qr-short-url', this.element).css('display', 'flex')
      $('a', shortUrlElement).attr('href', this.state.qrData.shortUrl).text(shortUrl)
      $('span', shortUrlElement).unbind().click(() => this.copyShortUrl())

      $('.share-list-wrapper', this.element).show()
        .find('a').each((index, anchorElement) => {
          $(anchorElement).attr('href', `${$(anchorElement).attr('href')}${encodeURIComponent(shortUrl + '+')}`)
            .unbind().click(e => gaTracking_gaAutil.gaEventAL('SHARE_' + this.state.qrData.type, $(e.currentTarget).attr('id')))
        })
    } else {
      $('.qr-short-url').hide()
      $('.share-list-wrapper', this.element).hide()
    }

    $('.qr-actions .icon-download', this.element)
      .unbind().click(() => this.downloadQr())

    $('.qr-actions .icon-copy', this.element)
      .unbind().click(() => this.copyQr())

    $('.qr-actions .icon-stats', this.element)
      .unbind().click(() => this.showStats())
  }

  getQrCode () {
    return this.state.qrData
  }

  showQrCode (qrCode) {
    this.state.qrData = qrCode

    try {
      $('.qr-place-holder', this.element).empty()
        .qrcode({
          width: 156,
          height: 156,
          text: qrCode.shortUrl || getStaticQrText(qrCode)
        })

      this.initQrActions()
      gaTracking_gaAutil.gaEventAL('CreateQR_' + this.tabId, 'SHOW_QR_SUCCESS')
    } catch (err) {
      gaTracking_gaAutil.gaEventALV('CreateQR_' + this.tabId, 'SHOW_QR_FAILED', err)
      throw new Error(chrome.i18n.getMessage('textQRFailed'))
    }
  }
}



;// CONCATENATED MODULE: ./src/components/history-tab.js







const history_tab_logger = new logger('historyTab')

const QR_ICONS = {
  [QRCODE_TYPES.LINK]: '<i class="gg-link"></i>',
  [QRCODE_TYPES.CALL]: '<i>☏</i>',
  [QRCODE_TYPES.TEXT]: '<i class="gg-notes"></i>',
  [QRCODE_TYPES.SMS]: '<i>💬</i>'
}

class HistoryTab {
  constructor ({
    onError
  }) {
    this.onError = onError
    this.selectedQr = null
  }

  init () {
    const $historyTab = $('.history-tab-content')
    $historyTab.append($('#qrcode-card-template')[0].content.firstElementChild.cloneNode(true))

    const qrCodeCard = new TabQrCard({
      element: $('.tab-qr-card', $historyTab),
      tabId: 'HISTORY',
      onError: this.onError
    })

    this.qrCard = qrCodeCard
    this.$historyTab = $historyTab

    $('#history-qr.tab-switch').click(() => {
      this.refreshQrHistory()
    })

    this.resetQrCard()
  }

  async refreshQrHistory () {
    this.selectedQr = null

    const $historyTab = $('.history-tab-content')

    const $historyTable = $('table tbody', $historyTab)
    try {
      const qrsList = await getSavedQrs()

      $historyTable.empty()

      if (!qrsList || !qrsList.length) {
        $('<tr>').html('<td colspan="3">/td>').text(chrome.i18n.getMessage('textNoQrsFound')).appendTo($historyTable)
        this.resetQrCard()
        $('.tab-qr-card', $historyTab).hide()
        return
      }

      $('.tab-qr-card', $historyTab).show()

      const qrRowTemplate = $('#qr-history-row-template')[0].content.firstElementChild

      qrsList.forEach((qr) => {
        const $qrRowNode = $(qrRowTemplate.cloneNode(true))
        $qrRowNode.find('td').eq(0).text(new Date(qr.timestamp).toLocaleDateString())
        $qrRowNode.find('td').eq(1).find('span').eq(0).html(QR_ICONS[qr.type] || '<span>Unknown</span>')
        $qrRowNode.find('td').eq(1).find('span').eq(1).text(qr.name)

        $qrRowNode.appendTo($historyTable)

        $qrRowNode.click(() => {
          $('tr.selected', $historyTable).removeClass('selected')
          $qrRowNode.addClass('selected')
          this.selectedQr = qr

          this.onSelectQr(qr)
        })

        $qrRowNode.find('td:last-child').find('span').attr('title', chrome.i18n.getMessage('labelDelete')).click((e) => {
          e.preventDefault()
          e.stopPropagation()
          this.deleteQr($qrRowNode, qr)
        })
      })
    } catch (err) {
      gaTracking_gaAutil.gaEventALV('HISTORY', gaTracking_gaAutil.vals.Fail, err)
      history_tab_logger.error('Failed to load history' + err)
      this.handleError(chrome.i18n.getMessage('textLoadFailed'), $historyTab)
    }
  }

  async deleteQr ($row, qr) {
    try {
      if (this.selectedQr && qr.id === this.selectedQr.id) {
        history_tab_logger.log('Reset selected qr card as it is deleted' + this.selectedQr.id)
        this.onSelectQr(null)
      }

      await deletedSavedQr(qr.id)
      gaTracking_gaAutil.gaEventAL('DELETE_QR_', qr.type, gaTracking_gaAutil.vals.Success)
      this.refreshQrHistory()
    } catch (err) {
      history_tab_logger.error('An error occured whle deleting the qr' + err)
      gaTracking_gaAutil.gaEventALV('DELETE', gaTracking_gaAutil.vals.Fail, err)
      this.onError(err)
    }
  }

  onSelectQr (qr) {
    try {
      if (!qr) {
        this.resetQrCard()
        return
      }

      this.qrCard.showQrCode(qr)
    } catch (err) {
      history_tab_logger.error('An error occured while viewing qr ' + err)
      gaTracking_gaAutil.gaEventALV('HISTORY_VIEW_QR', gaTracking_gaAutil.vals.Fail, err)
      this.onError(chrome.i18n.getMessage('textQRFailed'))
    }
  }

  resetQrCard () {
    this.qrCard.resetContent()
    $('.tab-qr-card .qr-place-holder', this.$historyTab)
      .append($('<span class="qr-place-holder-text"></span>').text(chrome.i18n.getMessage('textSelectRowForQr')))
  }
}



;// CONCATENATED MODULE: ./src/components/qr-tabs-manager.js





const qr_tabs_manager_qrTypesHandlers = {
  url: {
    getData: (formData) => ({ type: QRCODE_TYPES.LINK, data: { link: formData.url } })
  },
  sms: {
    getData: (formData) => ({ type: QRCODE_TYPES.SMS, data: { no: formData.ccode + formData.tel, msg: formData.text } })
  },
  call: {
    getData: (formData) => ({ type: QRCODE_TYPES.CALL, data: { no: formData.ccode + formData.tel } })
  },
  text: {
    getData: (formData) => ({ type: QRCODE_TYPES.TEXT, data: { text: formData.text } })
  },
  custom: {
    getData: (formData) => isLink(formData.text) ? ({ type: QRCODE_TYPES.LINK, data: { link: formData.text } }) : undefined
  }
}

function getActiveTabUrl () {
  return new Promise(resolve => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      resolve({ url: tabs[0].url || tabs[0].pendingUrl, title: tabs[0].title })
    })
  })
}

class QrTabsManager {
  init () {
    const qrTabKeys = Object.getOwnPropertyNames(qr_tabs_manager_qrTypesHandlers)

    this.initActiveTab()

    qrTabKeys.forEach(qrTypeName => {
      this.initForm(qrTypeName)
    })

    this.historyTable = new HistoryTab({
      onError: (err) => this.handleError(err)
    })

    this.historyTable.init()
  }

  initForm (qrTypeName) {
    const qrCodeCardTemplate = $('#qrcode-card-template')[0]

    const $formTab = $(`#qr-${qrTypeName}-form`).parents('.tab-content')
    if (!$formTab.length) {
      return
    }

    const qrCodeCardNode = qrCodeCardTemplate.content.cloneNode(true)
    $formTab.append(qrCodeCardNode)
    const qrCodeCard = new TabQrCard({
      element: $('.tab-qr-card', $formTab),
      tabId: qrTypeName.toUpperCase()
    })

    $('form footer .btn-secondary', $formTab).click(() => {
      const $form = $('form', $formTab)

      $form.find('input,textarea').val('').removeAttr('readonly')
        .removeAttr('disabled')
      $form.removeClass('was-submitted')
      $form.find('.btn-primary').removeAttr('disabled')

      qrCodeCard.resetContent()
    })

    $('form footer .btn-primary', $formTab).click(async (e) => {
      const qr = qrCodeCard.getQrCode()
      if (!qr) {
        return
      }
      e.preventDefault()
    })

    $('form', $formTab).submit(async (e) => {
      e.preventDefault()
      try {
        const qrCode = await this.submitQrForm(qrTypeName, e.target, qrCodeCard)

        if (!qrCode) {
          return
        }

        const $form = $('form', $formTab)
        $form.find('input,textarea').attr('readonly', 'readonly').attr('disabled', 'disabled')
        $form.find('.btn-primary').attr('disabled', true)
      } catch (err) {
        this.handleError(err, $formTab)
      }
    })
  }

  handleError = (err, tabElement) => {
    const errNode = $('#error-template')[0].content.cloneNode(true)
    $(tabElement).prepend(errNode)
    $('.alert-danger', tabElement).text(err)
  }

  async initActiveTab () {
    const $activeTab = $('[data-qrextn-qrtab="active-tab"]')
    $('.tab-content', $activeTab).append($('#qrcode-card-template')[0].content.cloneNode(true))
    const qrCodeCard = new TabQrCard({
      element: $('.tab-qr-card', $activeTab),
      tabId: 'ACTIVE'
    })

    try {
      const activeTabUrl = await getActiveTabUrl()

      await qrCodeCard.createQr(activeTabUrl.url, activeTabUrl.title)

      const $alert = $('<div>').addClass('alert alert-success')
        .html('<span>' + chrome.i18n.getMessage('textQRCreatedFor') + '</span><br />')
        .prependTo('article', $activeTab)

      $('<a>').attr('href', activeTabUrl.url).text(activeTabUrl.url).appendTo($alert)

      $('footer', $activeTab).show()
    } catch (err) {
      this.handleError(err, $('.tab-content', $activeTab))
    }

    $('.loader-container', $activeTab).remove()
  }

  submitQrForm = async (qrType, form, qrCodeCard) => {
    const $form = $(form)

    $form.addClass('was-submitted')

    if (!form.checkValidity()) {
      $('input:invalid', form).parents('.form-field').find('.form-feedback.error-message').show()
      return false
    }

    $('input', form).parents('.form-field').find('form-feedback error-message').hide()

    const formData = new FormData(form)

    const formJson = {}
    for (const [key, value] of formData) {
      formJson[key] = value
    }

    const qrtTypeData = qr_tabs_manager_qrTypesHandlers[qrType].getData(formJson)

    const qrData = {
      name: formJson.name || 'Custom QR',
      type: qrtTypeData.type,
      data: qrtTypeData.data,
      mode: 'dynamic'
    }

    await qrCodeCard.createQr(qrData)

    return qrData
  }
}



;// CONCATENATED MODULE: ./src/notification.js





const gaEvent = (action, label, value) => gaTracking_gaAutil.gaEventALV(action, label, value)
const notification_logger = new logger('notifcation')
let TEST = true

/* notif(cross-X)apps.js
* Cross-site notification API, like in Chrome Apps.  To notify events to all shortlisting services in oneshot instead of deploying
* */
const logNotifyX = notification_logger
const recurRulesMsgURLs = ['https://dsnetx.web.app/apps/firelinks/msg.json', 'https://dsnet.bitbucket.io/apps/ext/msg/msg.json']
let anyMsgSent = false
const msgTimeStart = 7; const msgTimeEnd = 22

let recurRulesMsgRetry = 0
let gappId, gappRef

function checkAppMessages () {
  TEST = globalThis.CONFIGS && globalThis.CONFIGS.TEST
  gappId = TEST ? 'DrX999' : constants_constants.EXTENSION_REFERENCE
  gappRef = TEST
    ? gappId
    : constants_constants.EXTENSION_REFERENCE

  let msgs
  logNotifyX.log('Loading messages...')
  const myurl = recurRulesMsgURLs[recurRulesMsgRetry] + '?ref=' + gappRef + '&r=' + Math.random()
  $.ajax({
    url: myurl,
    async: true,
    cache: false,
    dataType: 'json',
    success: function (res) {
      gaEvent(gappRef, 'Notif', 'Loaded')
      msgs = res
      if (common_isEmpty(msgs)) {
        recurRulesMsgRetry++
        logNotifyX.log('Failed, retrying - ' + recurRulesMsgRetry)
        if (recurRulesMsgRetry < recurRulesMsgURLs.length) { setTimeout(checkAppMessages, 100) }
      } else {
        recurRulesMsgRetry = 0
        processMessages(msgs)
      }
    },
    error: function () {
      recurRulesMsgRetry++
      logNotifyX.log('Failed, retrying - ' + recurRulesMsgRetry)
      if (recurRulesMsgRetry < recurRulesMsgURLs.length) { setTimeout(checkAppMessages, 100) } else { recurRulesMsgRetry = 0 }
    }
  })
}

function processMessages (msgs) {
  const allAppMsges = []; let thisAppMsg; let globalAppMsg
  const myAppId = getAppExtID()
  let isThisExcluded = false
  thisAppMsg = globalAppMsg = null
  try {
    const excludeIds = msgs.global.exclude
    for (var i = 0; i < excludeIds.length; i++) {
      try {
        if (excludeIds[i] === myAppId) {
          isThisExcluded = true
          break
        }
      } catch (err) {
        logNotifyX.log(err.message)
      }
    }
    if (!isThisExcluded) {
      try {
        globalAppMsg = msgs.global
      } catch (err) {
        logNotifyX.log(err.message)
      }
    }
    const appMsgs = msgs.private

    for (var i = 0; i < appMsgs.length; i++) {
      try {
        const appIds = appMsgs[i].ids
        for (let j = 0; j < appIds.length; j++) {
          try {
            if (isValidExtVersion(appIds[j])) {
              if (appMsgs[i] && appMsgs[i].hasOwnProperty('begin') && Number(appMsgs[i].begin) > Number(dateInYyMmDd())) {
                continue // IF the begin date hasn't started
              }
              if (appMsgs[i] && appMsgs[i].hasOwnProperty('expire') && Number(appMsgs[i].expire) < Number(dateInYyMmDd())) {
                continue // IF already expired
              }
              thisAppMsg = appMsgs[i]
              allAppMsges.push(thisAppMsg)
            } else {
              logNotifyX.log('Not valid ext verion')
            }
          } catch (e) {
            logNotifyX.error(e)
          }
        }
      } catch (err) {
        logNotifyX.log(err.message)
      }
    }
  } catch (err) {
    gaEvent(gappRef, 'Notif', 'ProcessMessageError')
    logNotifyX.log(err.message)
  }
  for (var i = 0; i < allAppMsges.length; i++) {
    postMessages(allAppMsges[i])
  }
  if (globalAppMsg) {
    if (globalAppMsg.show) {
      setTimeout(function () {
        postMessages(globalAppMsg)
        anyMsgSent = false
      }, anyMsgSent ? 2000 : 10)
    }
  }
}

function postMessages (appMsg) {
  if (appMsg && (appMsg.show === true || appMsg.show === 'true')) {
    const currentHour = (new Date()).getHours()
    if ((currentHour >= msgTimeStart && currentHour <= msgTimeEnd) || TEST) {
      const notifySelector = '#msgBox' // ".msgBox" > span.slStarIcon

      if (appMsg.repeat === true) {
        if (appMsg.hasOwnProperty('repeatXHours')) {
          if (isValidRepeatFrequency(appMsg)) {
            finalNotification(appMsg, notifySelector)
          }
          return
        } else {
          finalNotification(appMsg, notifySelector)
          return
        }
      }
      const lastmsgid = db.get('lastmsgid')
      if (lastmsgid === null || lastmsgid.indexOf(appMsg.msgid) < 0) {
        finalNotification(appMsg, notifySelector)
        db.append('lastmsgid', appMsg.msgid)
        if (lastmsgid && lastmsgid.length > 300) {
          db.put('lastmsgid', appMsg.msgid)
        }
      } else {
        logNotifyX.log('** Either invalid message or already notified')
      }
    }
  }
}

function isValidRepeatFrequency (appMsg) {
  try {
    if (TEST) { return true }
    const msgId = Number(appMsg.msgid)
    const repeatXHrs = Number(appMsg.repeatXHours)
    if (repeatXHrs === 0) // Means, no repeat
    { return false }
    let repeatStore = db.get('repeatStore')
    const curTime = new Date().getTime()

    if (!common_isEmpty(repeatStore)) {
      // If object already exist with some repeat notifications
      repeatStore = JSON.parse(repeatStore)
    } else {
      // If new object, then add this notification itself as first one, and return
      repeatStore = {}
      repeatStore[msgId] = {
        last: curTime
      }
      db.put('repeatStore', JSON.stringify(repeatStore))
      return true
    }
    const msgRepeatObj = repeatStore[msgId]
    if (msgRepeatObj) {
      // If notification repeat obj already exist, then validate
      const msgLastTime = Number(msgRepeatObj.last)

      const minDiff = getTimeDiffInMinutes(msgLastTime)
      if (minDiff < (repeatXHrs * 60)) {
        return false
      }
      repeatStore[msgId].last = curTime
      db.put('repeatStore', JSON.stringify(repeatStore))
      return true
    } else {
      // If new notification record
      if (Object.keys(repeatStore).length > 50) {
        repeatStore = {}
      }
      repeatStore[msgId] = {
        last: curTime
      }
      db.put('repeatStore', JSON.stringify(repeatStore))
      return true
    }
  } catch (e) {
    logNotifyX.error(e)
  }
  return status
}

function getAppExtID () {
  const appid = (TEST) ? 'DrNNAAA' : gappId

  notification_logger.log('getAppExtID => ' + appid)
  return appid
}

function finalNotification (appMsg, elementSelector) {
  // nativeNotify(appMsg);
  const typeNotif = (!common_isEmpty(appMsg) && appMsg.hasOwnProperty('typeNotif')) ? appMsg.typeNotif : 'WEBUI'
  if (typeNotif === 'NATIVE') {
    if (typeof finalNotificationNative === 'function') {
      finalNotificationNative()
    }
  } else if (typeNotif === 'WEBALERT') {
    alert(appMsg.title + ': ' + appMsg.msg)
    anyMsgSent = true
  } else {
    vnotify(appMsg, elementSelector)
  }
}

function postTestMessage (msg, type, selector, position) {
  const testMsg = {
    ids: [
      'DrNNAAA'
    ],
    show: true,
    type: (type) || 'success',
    typeNotif: 'WEBUI',
    title: 'Service Update',
    msgid: 'pm1411071',
    msg: (msg) || 'Thanks for trying <b>SmartList</b>. Keep us posted your feedback.',
    autoclose: '0',
    pos: (position) || 'top',
    repeat: true
  }
  // finalNotification(testMsg, (selector) ? selector : ".msgBox");
  finalNotification(testMsg, '#msgBox') // selector = ".msgBox"
}

/**
 * Written by self, to replace previous library, and use this simple one
 * @param msg
 * msg = {
	  "show": "false",
      "type": "error",
      "title": "Service Update",
      "msgid": "pm1411071",
      "msg": "We are facing some technical issue and you may find this app broken! We are working on fixing it!",
      "autoclose": "0",
      "pos": "top",
      "repeat": "true"
};
 */
function vnotify (msg, selector) {
  try {
    if (msg.autoclose) {
      const options = { autoHide: true, autoHideDelay: msg.autoclose, className: msg.type }
      $.notify(msg.msg, options)
    } else {
      const options = { autoHide: false, className: msg.type }
      $.notify(msg.msg, options)
      $('span[data-notify-text]').css({ 'font-size': 'medium', 'font-weight': '400' }) // Backup, it's CSS not working for bityl.co
    }
    gaEvent(gappRef, 'Notif', 'FinalMessageSent')
  } catch (e) {
    gaEvent(gappRef, 'Notif', 'Failed-vnotify')
  }
}

function vnotifyOriginal (msg, selector) {
  const notifId = Math.floor(Math.random() * 1000)
  try {
    let exNotifStyles = ''
    if (msg.type === 'error') { exNotifStyles += 'vnotifError' } else if (msg.type === 'warn') { exNotifStyles += 'vnotifWarn' } else if (msg.type === 'success') { exNotifStyles += 'vnotifSuccess' } else // "info"
    { exNotifStyles += 'vnotifInfo' }

    // exNotifStyles += "font-family: Arial,Helvetica,sans-serif !important; font-size: 13px !important; padding: 5px; border-radius: 5px; margin-bottom: 2px;";

    let html = ''
    html += "<div id='vnotif" + notifId + "' class='vnotif " + exNotifStyles + "'>"
    html += "<div class='vnotifClose'>&#215;</div>"
    if (msg.title) { html += "<div class='vnotifTitleBox'><span style='font-size: 12px;'>&#9432; </span><span class='vnotifTitle'>" + msg.title + ': <span></div>' }
    html += "<span class='vnotifMsg'>" + msg.msg + '</span>'
    html += '<div>'

    if ($('#msgBox').length === 0) {
      // $("body").prepend("<div id=\"msgBox\" style='z-index: 9999; float: right; position: sticky; top: 100px; width: 350px;'></div>");
      $('body').prepend("<div id=\"msgBox\" style=''></div>")
    }

    if (isEmpty(selector)) {
      // $("body").prepend("<div id=\"msgBox\"></div>");
      selector = '#msgBox'
    }

    $(selector).append(html)
    gaEvent(gappRef, 'Notif', 'FinalMessageSent')

    // Close button handler
    $(document).on('click', '.vnotifClose', function (e) {
      $('.vnotif').remove() // .hide() won't work due to its fixed(!important) display attribute to prevent overriding by website's exNotifStyles
    })

    // Auto-close handler
    if (msg.autoclose) {
      const time = Number(msg.autoclose)
      if (time > 0) {
        setTimeout(function () {
          $('#vnotif' + notifId).fadeOut(1000)
        }, time)
      }
    }
    anyMsgSent = true
  } catch (e) {
    gaEvent(gappRef, 'Notif', 'Failed-vnotify')
  }
}

function dateInYyMmDd () {
  const d = new Date()
  const yymmdd = d.getFullYear().toString().substr(2, 2) + '' + ('0' + (d.getMonth() + 1)).slice(-2) + '' + ('0' + d.getDate()).slice(-2)
  return yymmdd
}

/**
 * Mainly to validate repeat timelines
 * @param longTime as number
 * @returns {number}
 * Example: getTimeDiffMinute(1571941275000)
 */
function getTimeDiffInMinutes (longTime) {
  let diff = (new Date().getTime() - new Date(longTime).getTime()) / 1000
  diff /= 60
  return Math.abs(Math.round(diff))
}

/**
 * To send notification specific range of extensions based on its versions
 * Case1: Check appId is matching or not
 * Case2: Check if appId and msg is for specific Browser Type (chrome/ff/edge)
 * Case3: Check if appId contains and is specific to any version
 * [Below are cases` applications]
 * Case4: Send notif to all previous versions
 * Case5: Send notif to all next version from current versions
 * Case6: Send notif to exact version
 * Case7: Send notif to default ID version, means to all
 * @param appId "BK101"|"BK#<101"|"BK#>101"|"BK#=101"
 * @returns {boolean}
 */
function isValidExtVersion (appId) {
  try {
    if (!common_isEmpty(appId)) {
      const myAppId = getAppExtID() // "DrNNAAA";
      logNotifyX.log(`checking app id ${appId} with ${myAppId}`)
      // Case1
      if (!appId.includes(myAppId)) {
        return false
      }

      logNotifyX.log(`app id found ${myAppId}`)

      // Case2
      if (appId.includes('@')) { // Bk101#<249@chrome
        logNotifyX.log('app id has @')
        try {
          var appIdParts = appId.split('@')
          appId = appId.split('@')[0] // To return rest of the parts for next Case3 processing, >> "Bk101#<249"
          const appIdBrowser = appIdParts[1] // "Bk101#<249@chrome" >> "chrome"
          const browser = getCurBrowser()

          if (appIdBrowser && browser) {
            // Case1: appIdBrowser should be for all browsers, is should be either "all" or without "@xx"
            if (appIdBrowser !== 'all') {
              // Case2: If not all, then it should be specific to browser, else return false
              if (appIdBrowser !== browser) {
                return false
              }
              // Else, means appIdBrowser is matching to current 'browser'
            }
            // Else, means it is global/all
          }
        } catch (e) { logNotifyX.error(e) }
      }
      const curExtVer = constants_constants.APP_VERSION // Number(replaceAll(chrome.runtime.getManifest().version, ".", ""));// >>234
      // Case3
      if (appId.includes('#')) {
        logNotifyX.log('app id has #')
        var appIdParts = appId.split('#') // "Bk101#<249 > [BK101,<249]"
        let msgExtId
        if (appIdParts && appIdParts[1].includes('<')) {
          // Send notif to all previous versions of the app
          msgExtId = Number(appIdParts[1].replace('<', ''))
          if (curExtVer < msgExtId) { return true }
        } else if (appIdParts && appIdParts[1].includes('>')) {
          // Send notif to all next versions of the app from given mid version
          msgExtId = Number(appIdParts[1].replace('>', ''))
          if (curExtVer > msgExtId) { return true }
        } else if (appIdParts && appIdParts[1].includes('=')) {
          // Send notif to specific version, in spite of current/latest version
          msgExtId = Number(appIdParts[1].replace('=', ''))
          if (msgExtId === curExtVer) { return true }
        }
        return false
      } else {
        logNotifyX.log('no version found')
        return true // Regular ID: "BK101"
      }
    }
    return false
  } catch (e) {
    return false
  }
}



;// CONCATENATED MODULE: ./src/popup.js





constants_constants.EVENTS_SOURCE = constants_constants.EVENT_SOURCE_POPUP

translate(document.body)

checkAppMessages()

const qrTypeManager = new QrTabsManager({
  showQr: true
})

qrTypeManager.init()

/******/ })()
;