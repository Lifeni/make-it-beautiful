const defaultOptions = {
  fontSize: 16,
  fontFamily: "Consolas, 'Courier New', Courier, monospace",
  lineHeight: 1.5,
  theme: 'auto',
  headerText: 'Make It Beautiful',
}

function restore() {
  const tips = document.querySelector('#tips')
  if (tips) {
    tips.querySelector('#tip-1').textContent = chrome.i18n.getMessage(
      'optionsTip1'
    )
    tips.querySelector('#tip-2').textContent = chrome.i18n.getMessage(
      'optionsTip2'
    )
  }

  const saveAll = document.querySelector('#save-all')
  if (saveAll) {
    saveAll.textContent = chrome.i18n.getMessage('save')
  }

  const resetAll = document.querySelector('#reset-all')
  if (resetAll) {
    resetAll.textContent = chrome.i18n.getMessage('reset')
  }

  setTimeout(() => {
    const fontSize = document.querySelector('#font-size')
    const fontFamily = document.querySelector('#font-family')
    const lineHeight = document.querySelector('#line-height')
    const theme = document.querySelector('#theme')
    const headerText = document.querySelector('#header-text')

    chrome.storage.sync.get(defaultOptions, items => {
      fontSize.value = items.fontSize
      fontFamily.value = items.fontFamily
      lineHeight.value = items.lineHeight
      theme.value = items.theme
      headerText.value = items.headerText
    })

    fontSize.addEventListener('change', save)
    fontFamily.addEventListener('change', save)
    lineHeight.addEventListener('change', save)
    theme.addEventListener('change', save)
    headerText.addEventListener('change', save)
  }, 0)
}

function save() {
  const fontSize = document.querySelector('#font-size')
  const fontFamily = document.querySelector('#font-family')
  const lineHeight = document.querySelector('#line-height')
  const theme = document.querySelector('#theme')
  const headerText = document.querySelector('#header-text')

  chrome.storage.sync.set(
    {
      fontSize: fontSize.value,
      fontFamily: fontFamily.value,
      lineHeight: lineHeight.value,
      theme: theme.value,
      headerText: headerText.value,
    },
    () => {
      console.log('Saved')
      const saveAll = document.querySelector('#save-all')
      if (saveAll) {
        saveAll.textContent = chrome.i18n.getMessage('saved')
        saveAll.dataset.type = 'success'
      }
    }
  )
}

document.addEventListener('DOMContentLoaded', () => {
  restore()
  document.querySelector('#reset-all').addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('#font-size').value = defaultOptions.fontSize
    document.querySelector('#font-family').value = defaultOptions.fontFamily
    document.querySelector('#line-height').value = defaultOptions.lineHeight
    document.querySelector('#theme').value = defaultOptions.theme
    document.querySelector('#header-text').value = defaultOptions.headerText

    chrome.storage.sync.set(defaultOptions, () => {
      console.log('Saved')
      const saveAll = document.querySelector('#save-all')
      if (saveAll) {
        saveAll.textContent = chrome.i18n.getMessage('saved')
        saveAll.dataset.type = 'success'
      }
    })
  })

  document.querySelector('#save-all').addEventListener('click', e => {
    e.preventDefault()
    save()
  })
})
