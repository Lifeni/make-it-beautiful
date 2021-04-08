if (chrome.downloads) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0].id) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { API: ['chrome.downloads'] },
        () => {}
      )
    }
  })
}

chrome.runtime.onMessage.addListener(function (request) {
  switch (request.type) {
    case 'OPEN_OPTIONS_PAGE': {
      chrome.runtime.openOptionsPage()
      break
    }
    case 'OPEN_LINK': {
      chrome.tabs.create({ url: request.url })
      break
    }
    case 'DOWNLOAD_FILE': {
      // It doesn't work in Manifest V3,
      // it may be because background.js
      // is a Service Worker, similar problem:
      // https://stackoverflow.com/questions/66800584/chrome-crash-when-i-try-to-download-a-file-from-a-url-in-chrome-extension
      chrome.downloads.download({
        url: request.url,
      })
      break
    }
    default: {
      break
    }
  }
})
