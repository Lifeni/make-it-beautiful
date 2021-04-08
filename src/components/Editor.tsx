import { h } from 'preact'
import { useContext, useState } from 'preact/hooks'
import { Controlled as CodeMirror } from 'react-codemirror2'
import styled from 'styled-components'
import '../imports/addons'
import '../imports/languages'
import addClickableLink from '../libs/addClickableLink'
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

    .cm-clickable-link {
      text-decoration: underline;
      cursor: pointer;
      font-style: italic;
    }

    .cm-link {
      text-decoration: none;
    }
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

  .CodeMirror-dialog {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    width: 100%;
    height: 36px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: solid 1px var(--border-color);
    background-color: var(--background-color);
    font-family: var(--font-sans);
    font-size: 0.75rem;
    box-sizing: border-box;
    overflow-x: auto;

    input {
      width: 100%;
      margin: 0 16px;
      flex: 1;
      font-family: var(--font-sans);
      font-size: 0.75rem;
    }
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
    autoRefresh: true,
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
          addClickableLink(editor)
          editor.scrollTo(0, 0)
          window.scrollTo(0, 0)
          context.methods.setEditor(editor)
          editor.setOption('readOnly', true)
          editor.setOption('cursorBlinkRate', -1)
        }}
        onBeforeChange={(_editor, _data, value) => {
          setValue(value)
        }}
      />
    </EditorContainer>
  )
}

export default Editor
