import collapseButton from '../components/collapseButton'
import copyButton from '../components/copyButton'
import editorButton from '../components/editButton'
import headerLabel from '../components/headerLabel'
import optionsButton from '../components/optionsButton'
import rawButton from '../components/rawView'
import saveButton from '../components/saveButton'
import checkDomain from '../utils/queryCSPDomain'

const insertToolBar = (code: CodeMirror.Editor, content: IContent) => {
  const container = document.querySelector('#make-it-beautiful-container')
  const bar = document.createElement('div')
  bar.className = 'make-it-beautiful-toolbar'

  headerLabel(content.type, bar)
  rawButton(content.node, bar)
  copyButton(code, bar)

  if (!checkDomain()) {
    saveButton(code, content.type, bar)
  }

  collapseButton(code, bar)
  editorButton(code, bar)
  optionsButton(bar)

  container?.appendChild(bar)
}

export default insertToolBar
