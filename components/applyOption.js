const applyOption = code => {
  chrome.storage.sync.get(
    {
      fontSize: 14,
      fontFamily: "Consolas, 'Courier New', Courier, monospace",
      theme: 'auto',
    },
    items => {
      const editor = document.querySelector('.CodeMirror')
      editor.style.fontSize = items.fontSize + 'px'
      editor.style.fontFamily = items.fontFamily

      const container = document.querySelector('.make-it-beautiful-container')
      switch (items.theme) {
        case 'auto': {
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            container.classList.add('dark')
            code.setOption('theme', 'material')
          } else {
            container.classList.remove('dark')
            code.setOption('theme', 'github')
          }
          break
        }
        case 'light': {
          container.classList.remove('dark')
          code.setOption('theme', 'github')
          break
        }
        case 'dark': {
          container.classList.add('dark')
          code.setOption('theme', 'material')
          break
        }
      }
    }
  )
}

export default applyOption
