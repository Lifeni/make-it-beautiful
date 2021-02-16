import applyOption from './components/applyOption'
import checkPage from './components/checkPage'
import generateClickableURL from './components/generateClickableURL'
import insertEditor from './components/insertEditor'
import insertToolBar from './components/insertToolBar'

checkPage().then(content => {
  if (content) {
    const code = insertEditor(content)
    insertToolBar(code, content)
    applyOptionDelay(code)
    generateClickableURLDelay()
    code.on('unfold', () => {
      generateClickableURLDelay()
    })
  }
})

const applyOptionDelay = (code: CodeMirror.Editor) => {
  setTimeout(() => {
    applyOption(code)
  }, 0)
}

const generateClickableURLDelay = () => {
  setTimeout(() => {
    generateClickableURL()
  }, 300)
}
