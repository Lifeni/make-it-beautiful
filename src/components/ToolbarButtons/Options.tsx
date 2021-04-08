import { GearIcon } from '@primer/octicons-react'
import { h } from 'preact'
import { ToolbarBaseButton } from './Base'

const OptionsButton = () => {
  const handleOptions = () => {
    chrome.runtime.sendMessage({ type: 'OPEN_OPTIONS_PAGE' })
  }

  return (
    <ToolbarBaseButton onClick={handleOptions}>
      <GearIcon size={24} />
      <span>{chrome.i18n.getMessage('options')}</span>
    </ToolbarBaseButton>
  )
}

export default OptionsButton
