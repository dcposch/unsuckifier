(function() {

document.write('testing')

document.querySelectorAll('.block-setting-option').forEach(function (elem) {
  elem.addEventListener('click', function () {
    document.querySelector('.block-setting-option.selected').classList.remove('selected')
    elem.classList.add('selected')
  })
})

document.write('1')

var messaging = vAPI.messaging
messaging.send(
  'popupPanel',
  { what: 'getPopupData', tabId: tabId },
  onDataReceived
)

document.write('2')

function onDataReceived (data) {
  document.write('<tt>' + JSON.stringify(data, null, 2))
}

document.write('3')

})()
