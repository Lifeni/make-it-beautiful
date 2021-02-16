const applyOption = (code: CodeMirror.Editor) => {
  chrome.storage.sync.get(
    {
      fontSize: 14,
      fontFamily: "Consolas, 'Courier New', Courier, monospace",
      lineHeight: 1.5,
      theme: 'auto',
    },
    items => {
      const editor = <HTMLElement>document.querySelector('.CodeMirror')
      if (editor) {
        editor.style.fontSize = items.fontSize + 'px'
        editor.style.fontFamily = items.fontFamily
        editor.style.lineHeight = items.lineHeight
      }

      const container = document.querySelector('.make-it-beautiful-container')
      if (container) {
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
    }
  )
}

export default applyOption
