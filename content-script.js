import checkPage from './components/checkPage'
import insertEditor from './components/insertEditor'
import insertToolBar from './components/insertToolBar'

checkPage().then(content => {
  if (content) {
    chrome.runtime.sendMessage({ type: 'RUN_IT' })
    const code = insertEditor(content)
    insertToolBar(code, content)
  }
})
