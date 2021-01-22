import checkPage from './components/checkPage'
import insertEditor from './components/insertEditor'

checkPage().then(content => {
  if (content) {
    insertEditor(content)
  }
})
