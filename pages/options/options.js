function restore() {
  setTimeout(() => {
    chrome.storage.sync.get(
      {
        fontSize: 14,
        fontFamily: "Consolas, 'Courier New', Courier, monospace",
      },
      items => {
        document.querySelector('#font-size').value = items.fontSize
        document.querySelector('#font-family').value = items.fontFamily
      }
    )
  }, 0)
}

function save() {
  const fontSize = document.querySelector('#font-size')
  const fontFamily = document.querySelector('#font-family')

  chrome.storage.sync.set(
    {
      fontSize: fontSize.value,
      fontFamily: fontFamily.value,
    },
    () => {
      console.log('Saved')
    }
  )
}

document.addEventListener('DOMContentLoaded', restore)
document.querySelector('#font-size').addEventListener('change', save)
document.querySelector('#font-family').addEventListener('change', save)
