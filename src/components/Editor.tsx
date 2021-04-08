import { h } from 'preact'
import { useContext, useState } from 'preact/hooks'
import { Controlled as CodeMirror } from 'react-codemirror2'
import styled from 'styled-components'
import '../imports/addons'
import '../imports/languages'
import { Context } from './App'

const EditorContainer = styled.div<{ options: IOptions }>`
  position: relative;
  width: 100%;

  .CodeMirror {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 40px 0 4px 0;
    font-size: ${props => props.options.fontSize}px;
    line-height: ${props => props.options.lineHeight};
    font-family: ${props => props.options.fontFamily};
  }

  .CodeMirror-linenumber.CodeMirror-gutter-elt {
    margin-left: 4px;
  }

  .CodeMirror-scroll {
    min-height: 100vh;
  }

  .CodeMirror pre.CodeMirror-line {
    padding: 0 8px;
  }

  .CodeMirror-gutter-elt {
    margin-left: 8px;
  }

  .CodeMirror-gutter.CodeMirror-foldgutter {
    width: 24px;
  }

  .CodeMirror-foldmarker {
    color: inherit;
    text-shadow: none;
    padding: 0 4px;
  }

  .CodeMirror .cm-property + .cm-string {
    font-style: italic;
  }

  .CodeMirror .cm-link {
    text-decoration: none;
  }
`

const Editor = () => {
  const context = useContext(Context)
  const initValue = context.content.object
    ? JSON.stringify(context.content.object, null, 4)
    : context.content.content
  const [value, setValue] = useState(initValue)

  const options = {
    value:
      context.content.type.includes('json') && context.content.object
        ? JSON.stringify(context.content.object, null, 4)
        : context.content.content,
    mode: context.content.type,
    theme:
      context.options.theme === 'auto'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'material'
          : 'github'
        : context.options.theme === 'dark'
        ? 'material'
        : 'github',
    lineNumbers: true,
    lineWrapping: true,
    // readOnly: true,
    autoRefresh: true,
    // cursorBlinkRate: -1,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    extraKeys: {},
  }

  return (
    <EditorContainer options={context.options}>
      <CodeMirror
        value={value}
        options={options}
        editorDidMount={editor => {
          editor.scrollTo(0, 0)
          window.scrollTo(0, 0)
          context.methods.setEditor(editor)
          editor.setOption('readOnly', true)
          editor.setOption('cursorBlinkRate', -1)
        }}
        onBeforeChange={(editor, data, value) => {
          setValue(value)
        }}
      />
    </EditorContainer>
  )
}

export default Editor
