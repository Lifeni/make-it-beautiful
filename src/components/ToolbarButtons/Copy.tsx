import { DuplicateIcon } from '@primer/octicons-react'
import { h } from 'preact'
import { useContext, useState } from 'preact/hooks'
import { Context } from '../App'
import { ToolbarButton } from './Base'

const CopyButton = () => {
  const context = useContext(Context)
  const [text, setText] = useState(chrome.i18n.getMessage('copy'))

  const handleCopy = () => {
    navigator.clipboard
      .writeText(context.editor.getValue())
      .then(() => {
        const newText = chrome.i18n.getMessage('copied')
        if (text !== newText) {
          setText(newText)
          setTimeout(() => {
            setText(chrome.i18n.getMessage('copy'))
          }, 2000)
        }
      })
      .catch(err => {
        const newText = chrome.i18n.getMessage('copyFailed')
        if (text !== newText) {
          setText(newText)
          setTimeout(() => {
            setText(chrome.i18n.getMessage('copy'))
          }, 2000)
        }
        console.error(err)
      })
  }

  return (
    <ToolbarButton onClick={handleCopy}>
      <DuplicateIcon size={24} />
      <span>{text}</span>
    </ToolbarButton>
  )
}

export default CopyButton
