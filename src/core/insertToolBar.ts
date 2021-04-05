import collapseButton from '../components/collapseButton'
import copyButton from '../components/copyButton'
import editorButton from '../components/editButton'
import headerLabel from '../components/headerLabel'
import optionsButton from '../components/optionsButton'
import rawButton from '../components/rawView'
import saveButton from '../components/saveButton'
import tipButton from '../components/tipButton'
import checkDomain from '../utils/queryCSPDomain'

const insertToolBar = (
  code: CodeMirror.Editor,
  content: IContent,
  clickableURL: IClickableURL
) => {
  const result = checkDomain()

  const container = document.querySelector('#make-it-beautiful-container')
  const bar = document.createElement('div')
  bar.className = 'make-it-beautiful-toolbar'

  headerLabel(content.type, bar)
  rawButton(content.node, bar)
  copyButton(code, bar)

  if (!result) {
    saveButton(code, content.type, bar)
  }

  collapseButton(code, bar)

  editorButton(code, bar, clickableURL)

  if (result) {
    tipButton(bar)
  }

  optionsButton(bar)

  container?.appendChild(bar)
}

export default insertToolBar
