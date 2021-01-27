const applyOption = () => {
  chrome.storage.sync.get(
    {
      fontSize: 14,
      fontFamily: "Consolas, 'Courier New', Courier, monospace",
    },
    items => {
      const editor = document.querySelector('.CodeMirror')
      editor.style.fontSize = items.fontSize + 'px'
      editor.style.fontFamily = items.fontFamily
    }
  )
}

export default applyOption
