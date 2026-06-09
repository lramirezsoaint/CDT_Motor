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

const constants = {
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

globalThis.CONFIGS = constants.CONFIGS



;// CONCATENATED MODULE: ./src/common.js
function isEmpty (valueOfObj) {
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
    if (constants.CONFIGS.TEST) {
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
      chrome.storage.local.get([constants.APP_STORE_KEY], (data) => {
        data_store_logger.log('data retrieved from local ', data)
        extensionData = data[constants.APP_STORE_KEY] ? parseJson(data[constants.APP_STORE_KEY], {}) : {}
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
    chrome.storage.local.set({ [constants.APP_STORE_KEY]: JSON.stringify(extensionData) }, () => {
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



const gaAppType = constants.EXTENSION_REFERENCE

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
  gaParams.append('tid', constants.GOOGLE_ANALYTICS.trackingID)
  gaParams.append('t', 'event')
  gaParams.append('cid', cid)
  gaParams.append('ec', gaAppType + '_' + constants.EVENTS_SOURCE)
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
const gaAutil = {
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

    if (constants.EVENTS_SOURCE === constants.EVENT_SOURCE_POPUP) {
      setTimeout(() => {
        postEvent(action, label, labelValue)
      })
    } else {
      postEvent(action, label, labelValue)
    }

    // global._gaq.push(['_trackEvent', gaAppType + action, label, labelValue])
  }
}



;// CONCATENATED MODULE: ./src/background.js





const background_logger = new logger('background')
constants.EVENTS_SOURCE = 'BACKGROUND'

chrome.runtime.onInstalled.addListener((details) => {
  const { reason, previousVersion } = details
  const manifest = chrome.runtime.getManifest()
  if (reason === 'update') {
    gaAutil.gaEventAL('Update', 'c=' + manifest.version + ',p=' + previousVersion)
    chrome.tabs.create({
      url: constants.UPDATE_URL + '?v=' + encodeURIComponent(constants.EXTENSION_REFERENCE)
    })
  }

  if (reason === 'install') {
    gaAutil.gaEventAL('Installed', manifest.version)
    chrome.tabs.create({
      url: constants.UPDATE_URL + '?v=' + encodeURIComponent(constants.EXTENSION_REFERENCE)
    })
  }

  getItem('installationId').then(installationId => {
    if (!installationId) {
      return setItem('installationId', 'ins_id_' + Date.now() + '_na')
    }
  })
    .catch(err => {
      gaAutil.gaEventALV('SET_CLINT_ID', gaAutil.vals.Fail, err)
      background_logger.error('Failed to set installation id')
    })
})

chrome.runtime.setUninstallURL(constants.UNINSTALL_URL + '?v=' + encodeURIComponent(constants.EXTENSION_REFERENCE))

/******/ })()
;