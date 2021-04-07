import { GearIcon } from '@primer/octicons-react'
import { h } from 'preact'
import { ToolbarButton } from './Base'

const OptionsButton = () => {
  const handleOptions = () => {
    chrome.runtime.sendMessage({ type: 'OPEN_OPTIONS_PAGE' })
  }

  return (
    <ToolbarButton onClick={handleOptions}>
      <GearIcon size={24} />
      <span>{chrome.i18n.getMessage('toolBarOptions')}</span>
    </ToolbarButton>
  )
}

export default OptionsButton
