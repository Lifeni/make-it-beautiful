function restore() {
  const tips = document.querySelector('#tips')
  tips.querySelector('#tip-1').textContent = chrome.i18n.getMessage(
    'optionsTip1'
  )
  tips.querySelector('#tip-2').textContent = chrome.i18n.getMessage(
    'optionsTip2'
  )

  setTimeout(() => {
    chrome.storage.sync.get(
      {
        fontSize: 14,
        fontFamily: "Consolas, 'Courier New', Courier, monospace",
        theme: 'auto',
      },
      items => {
        document.querySelector('#font-size').value = items.fontSize
        document.querySelector('#font-family').value = items.fontFamily
        document.querySelector('#theme').value = items.theme
      }
    )
  }, 0)
}

function save() {
  const fontSize = document.querySelector('#font-size')
  const fontFamily = document.querySelector('#font-family')
  const theme = document.querySelector('#theme')

  chrome.storage.sync.set(
    {
      fontSize: fontSize.value,
      fontFamily: fontFamily.value,
      theme: theme.value,
    },
    () => {
      console.log('Saved')
    }
  )
}

document.addEventListener('DOMContentLoaded', restore)
document.querySelector('#font-size').addEventListener('change', save)
document.querySelector('#font-family').addEventListener('change', save)
document.querySelector('#theme').addEventListener('change', save)
