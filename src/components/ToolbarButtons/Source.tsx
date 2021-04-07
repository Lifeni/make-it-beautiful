import { h } from 'preact'
import { EyeIcon } from '@primer/octicons-react'
import { ToolbarButton } from './Base'
import { useContext } from 'preact/hooks'
import { Context } from '../App'
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
    <ToolbarButton onClick={handleSource}>
      <EyeIcon size={24} />
      <span>{chrome.i18n.getMessage('viewSource')}</span>
    </ToolbarButton>
  )
}

export default SourceButton
