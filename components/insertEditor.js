import 'codemirror/addon/display/autorefresh.js'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import codemirror from 'codemirror/lib/codemirror'
import './importEditorLanguage'

const insertEditor = ({ text, type, object }) => {
  const container = document.createElement('div')
  container.className = 'make-it-beautiful-container'
  container.id = 'make-it-beautiful-container'

  const code = codemirror(container, {
    value: type.includes('json') ? JSON.stringify(object, null, 4) : text,
    mode: type,
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'material'
      : 'default',
    lineNumbers: true,
    lineWrapping: true,
    readOnly: true,
    autoRefresh: true,
    autoFocus: true,
    cursorBlinkRate: -1,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  })

  const body = document.querySelector('body')
  body.classList.add('make-it-beautiful-body')
  body.appendChild(container)

  return code
}

export default insertEditor
