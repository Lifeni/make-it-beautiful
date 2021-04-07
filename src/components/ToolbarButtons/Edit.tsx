import { PencilIcon, ReplyIcon } from '@primer/octicons-react'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { ToolbarButton } from './Base'

const EditButton = () => {
  const [edit, setEdit] = useState(false)

  const handleEdit = () => {
    setEdit(true)
  }

  const handleQuitEdit = () => {
    setEdit(false)
  }

  return (
    <>
      {edit ? (
        <ToolbarButton onClick={handleQuitEdit}>
          <ReplyIcon size={24} />
          <span>{chrome.i18n.getMessage('toolBarCancelEdit')}</span>
        </ToolbarButton>
      ) : (
        <ToolbarButton onClick={handleEdit}>
          <PencilIcon size={24} />
          <span>{chrome.i18n.getMessage('toolBarEdit')}</span>
        </ToolbarButton>
      )}
    </>
  )
}

export default EditButton
