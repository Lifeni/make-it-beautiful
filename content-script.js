import applyOption from './components/applyOption'
import checkPage from './components/checkPage'
import insertEditor from './components/insertEditor'
import insertToolBar from './components/insertToolBar'

checkPage().then(content => {
  if (content) {
    const code = insertEditor(content)
    insertToolBar(code, content)
    setTimeout(() => {
      applyOption()
    }, 0)
  }
})
