import { FoldIcon, UnfoldIcon } from '@primer/octicons-react'
import { h } from 'preact'
import { useContext, useState } from 'preact/hooks'
import { Context } from '../App'
import { ToolbarButton } from './Base'

const FoldButton = () => {
  const context = useContext(Context)
  const [folded, setFolded] = useState(false)

  const handleFold = () => {
    context.editor.execCommand('foldAll')
    setFolded(true)
  }

  const handleUnfold = () => {
    context.editor.execCommand('unfoldAll')
    setFolded(false)
  }

  return (
    <>
      {folded ? (
        <ToolbarButton onClick={handleUnfold}>
          <UnfoldIcon size={24} />
          <span>{chrome.i18n.getMessage('toolBarExpand')}</span>
        </ToolbarButton>
      ) : (
        <ToolbarButton onClick={handleFold}>
          <FoldIcon size={24} />
          <span>{chrome.i18n.getMessage('toolBarCollapse')}</span>
        </ToolbarButton>
      )}
    </>
  )
}

export default FoldButton
