import { createContext, h, render } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import styled from 'styled-components'
import Editor from './Editor'
import Toolbar from './Toolbar'

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
`

const defaultContent: IContent = {
  content: '',
  type: 'text/plain',
  object: null,
  pre: null,
}

const defaultOptions: IOptions = {
  fontSize: 16,
  fontFamily: "Consolas, 'Courier New', Courier, monospace",
  lineHeight: 1.5,
  theme: 'auto',
  headerText: 'Make It Beautiful',
}

const Context = createContext({
  content: defaultContent,
  options: defaultOptions,
  methods: {
    setContent: null,
    setEditor: null,
  },
  editor: null,
} as IContext)

const App = (props: { data: IContent }) => {
  const [content, setContent] = useState({ ...defaultOptions, ...props.data })
  const [options, setOptions] = useState(defaultOptions)
  const [editor, setEditor] = useState(null)

  useEffect(() => {
    content.pre?.setAttribute('hidden', 'true')

    chrome.storage.sync.get(defaultOptions, items => {
      setOptions(items as IOptions)
    })
  }, [])

  return (
    <Container
      className={`make-it-beautiful ${
        options.theme === 'auto'
          ? window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : ''
          : options.theme === 'dark'
          ? 'dark'
          : ''
      }`}
    >
      <Context.Provider
        value={{
          content: content,
          options: options,
          methods: { setContent: setContent, setEditor: setEditor },
          editor: editor,
        }}
      >
        <Toolbar />
        <Editor />
      </Context.Provider>
    </Container>
  )
}

const renderApp = (result: IResult) => {
  render(<App data={result.data || defaultContent} />, document.body)
}

export { renderApp, Context }
