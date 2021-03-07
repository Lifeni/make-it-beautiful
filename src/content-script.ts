import checkPage from './core/checkPage'

checkPage().then(async content => {
  if (content) {
    const insertEditor = await import('./core/insertEditor')
    const insertToolBar = await import('./core/insertToolBar')

    const applyOptionDelay = (code: CodeMirror.Editor) => {
      import('./core/applyOption').then(module => {
        setTimeout(() => {
          module.default(code)
        }, 0)
      })
    }

    const generateClickableURLDelay = () => {
      import('./core/generateClickableURL').then(module => {
        setTimeout(() => {
          module.default()
        }, 300)
      })
    }

    const code = insertEditor.default(content)
    insertToolBar.default(code, content)
    applyOptionDelay(code)
    generateClickableURLDelay()
    code.on('unfold', () => {
      generateClickableURLDelay()
    })
  }
})
