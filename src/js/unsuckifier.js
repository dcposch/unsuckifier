// This is the popup / dropdown panel that appears when you click the
// Unsuckifier logo. Lets the user:
// * See the status (# of requests blocked on this page, etc)
// * Change the block setting for the current domain
//   (Don't Block Ads On This Domain vs Block Ads, select or deselect Improvements)
(function() {

// State
var tabId = null
var tabDomain = null

// Fetch state, add click handlers, initialize the UI
getPopupData()
initBlockSettings()

// Creates the Block Settings list:
// Disable For This Domain, Block Ads, and all applicable Improvements
function initBlockSettings () {
  var messaging = vAPI.messaging
  document.querySelectorAll('.block-setting-option').forEach(function (elem) {
    elem.addEventListener('click', function () {
      document.querySelector('.block-setting-option.selected').classList.remove('selected')
      elem.classList.add('selected')
      // TODO: turn on or off
    })
  })

  document.querySelectorAll('.block-setting-toggle').forEach(function (elem) {
    elem.addEventListener('click', function () {
      elem.classList.toggle('selected')
      var enabled = elem.classList.contains('selected')
      var msg = {
        what: 'setDomainBlock',
        tabId: tabId,
        domain: tabDomain,
        blockId: elem.dataset.id,
        enable: enabled
      }
      console.log('SENDING' + JSON.stringify(msg))
      messaging.send('popupPanel', msg)
    })
  })
}

// Sends a getPopupData request, updates the UI on response
function getPopupData () {
  var messaging = vAPI.messaging
  messaging.send(
    'popupPanel',
    { what: 'getPopupData', tabId: null },
    onPopupData
  )
}

/* Receives the getPopupData response. Example:
  {
    "advancedUserEnabled": true,
    "appName": "Unsuckifier",
    "appVersion": "0.0.1",
    "colorBlindFriendly": false,
    "cosmeticFilteringSwitch": false,
    "dfEnabled": false,
    "firewallPaneMinimized": true,
    "globalAllowedRequestCount": 33406,
    "globalBlockedRequestCount": 2525,
    "netFilteringSwitch": true,
    "rawURL": "chrome://extensions/",
    "pageURL": "http://extensions.chrome-scheme/",
    "pageHostname": "extensions.chrome-scheme",
    "pageDomain": "extensions.chrome-scheme",
    "pageAllowedRequestCount": 0,
    "pageBlockedRequestCount": 0,
    "popupBlockedCount": 0,
    "tabId": 151,
    "tabTitle": "Extensions",
    "tooltipsDisabled": false,
    "hostnameDict": {},
    "contentLastModified": 0,
    "firewallRules": {
      "/ * *": "",
      "/ * image": "",
      "/ * 3p": "",
      "/ * inline-script": "",
      "/ * 1p-script": "",
      "/ * 3p-script": "",
      "/ * 3p-frame": "",
      ". * *": "",
      ". * image": "",
      ". * 3p": "",
      ". * inline-script": "",
      ". * 1p-script": "",
      ". * 3p-script": "",
      ". * 3p-frame": ""
    },
    "canElementPicker": true,
    "noPopups": false,
    "noCosmeticFiltering": false,
    "noLargeMedia": false,
    "largeMediaCount": 0,
    "noRemoteFonts": false,
    "remoteFontCount": 0,
    "matrixIsDirty": false
  }
 */
function onPopupData (data) {
  console.log('onPopupData', data)
  tabId = data.tabId
  tabDomain = data.pageDomain
}

})()
