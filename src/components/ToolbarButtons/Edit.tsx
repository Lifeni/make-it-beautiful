import { PencilIcon, ReplyIcon } from '@primer/octicons-react'
import { h } from 'preact'
import { useContext, useState } from 'preact/hooks'
import styled from 'styled-components'
import { Context } from '../App'
import { ToolbarButton } from './Base'

const ExitEditingButton = styled(ToolbarButton)`
  background: var(--theme-color);
  border: solid 4px var(--background-color);
  border-radius: 6px;

  span {
    color: white;
  }

  svg {
    fill: white;
  }

  &:hover {
    background: var(--theme-color);
  }

  &:focus {
    background: var(--theme-color);
    border: solid 4px var(--background-color);
  }
`

const EditButton = () => {
  const context = useContext(Context)
  const [edit, setEdit] = useState(false)

  const handleEdit = () => {
    context.editor?.setOption('readOnly', false)
    context.editor?.setOption('cursorBlinkRate', 530)
    setEdit(true)
  }

  const handleQuitEdit = () => {
    context.editor?.setOption('readOnly', true)
    context.editor?.setOption('cursorBlinkRate', -1)
    setEdit(false)
  }

  return (
    <>
      {edit ? (
        <ExitEditingButton onClick={handleQuitEdit}>
          <ReplyIcon size={24} />
          <span>{chrome.i18n.getMessage('exitEditing')}</span>
        </ExitEditingButton>
      ) : (
        <ToolbarButton onClick={handleEdit}>
          <PencilIcon size={24} />
          <span>{chrome.i18n.getMessage('temporaryEdit')}</span>
        </ToolbarButton>
      )}
    </>
  )
}

export default EditButton
