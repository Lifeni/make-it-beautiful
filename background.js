chrome.runtime.onMessage.addListener(function (request) {
  if (request.type === 'OPEN_OPTIONS_PAGE') {
    chrome.runtime.openOptionsPage()
  }
})
