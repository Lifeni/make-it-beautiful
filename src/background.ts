chrome.runtime.onMessage.addListener(function (request) {
  console.log(request)

  switch (request.type) {
    case 'OPEN_OPTIONS_PAGE': {
      chrome.runtime.openOptionsPage()
      break
    }
    default: {
      break
    }
  }
})
