// import applyOption from './components/applyOption'
import checkPage from './components/checkPage'
// import generateClickableURL from './components/generateClickableURL'
// import insertEditor from './components/insertEditor'
// import insertToolBar from './components/insertToolBar'

checkPage().then(async content => {
  if (content) {
    const insertEditor = await import('./components/insertEditor')
    const insertToolBar = await import('./components/insertToolBar')

    const applyOptionDelay = (code: CodeMirror.Editor) => {
      import('./components/applyOption').then(module => {
        setTimeout(() => {
          module.default(code)
        }, 0)
      })
    }

    const generateClickableURLDelay = () => {
      import('./components/generateClickableURL').then(module => {
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
