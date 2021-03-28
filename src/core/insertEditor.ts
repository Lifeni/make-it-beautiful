import Codemirror from 'codemirror'
import '../imports/importEditorAddon'
import '../imports/importEditorLanguage'
import { saveAs } from 'file-saver'
import checkDomain from '../utils/queryCSPDomain'

const insertEditor = ({ text, type, object }: IContent) => {
  const container = document.createElement('div')
  container.className = 'make-it-beautiful-container'
  container.id = 'make-it-beautiful-container'

  const config: CodeMirror.EditorConfiguration = {
    value: type.includes('json') ? JSON.stringify(object, null, 4) : text,
    mode: type,
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'material'
      : 'github',
    lineNumbers: true,
    lineWrapping: true,
    readOnly: true,
    autoRefresh: true,
    cursorBlinkRate: -1,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    extraKeys: {},
  }

  if (!checkDomain()) {
    config.extraKeys = {
      'Ctrl-S': function (instance) {
        const pathname = window.location.pathname.split('/')
        saveAs(
          new Blob([instance.getValue()], { type: type }),
          pathname[pathname.length - 1] ||
            pathname[pathname.length - 2] ||
            'file'
        )
      },
    }
  }

  const code = Codemirror(container, config)

  const body = document.querySelector('body')
  body?.classList.add('make-it-beautiful-body')
  body?.appendChild(container)
  body?.children[0].setAttribute('hidden', 'true')

  return code
}

export default insertEditor
