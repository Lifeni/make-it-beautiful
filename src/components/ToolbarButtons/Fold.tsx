import { FoldIcon, UnfoldIcon } from '@primer/octicons-react'
import { h } from 'preact'
import { useContext, useState } from 'preact/hooks'
import { Context } from '../App'
import { ToolbarBaseButton } from './Base'

const FoldButton = () => {
  const context = useContext(Context)
  const [folded, setFolded] = useState(false)

  const handleFold = () => {
    context.editor?.execCommand('foldAll')
    setFolded(true)
  }

  const handleUnfold = () => {
    context.editor?.execCommand('unfoldAll')
    setFolded(false)
  }

  return (
    <>
      {folded ? (
        <ToolbarBaseButton onClick={handleUnfold}>
          <UnfoldIcon size={24} />
          <span>{chrome.i18n.getMessage('unfoldCode')}</span>
        </ToolbarBaseButton>
      ) : (
        <ToolbarBaseButton onClick={handleFold}>
          <FoldIcon size={24} />
          <span>{chrome.i18n.getMessage('foldCode')}</span>
        </ToolbarBaseButton>
      )}
    </>
  )
}

export default FoldButton
