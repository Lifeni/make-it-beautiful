import { EyeIcon } from '@primer/octicons-react'
import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '../App'
import { ToolbarBaseButton } from './Base'
const SourceButton = () => {
  const context = useContext(Context)

  const handleSource = () => {
    const body = document.body
    if (body && context.content.pre) {
      body.innerHTML = ''
      context.content.pre.removeAttribute('hidden')
      body.appendChild(context.content.pre)
    }
  }
  return (
    <ToolbarBaseButton onClick={handleSource}>
      <EyeIcon size={24} />
      <span>{chrome.i18n.getMessage('viewSource')}</span>
    </ToolbarBaseButton>
  )
}

export default SourceButton
