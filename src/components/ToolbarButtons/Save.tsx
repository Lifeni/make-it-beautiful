import { DownloadIcon } from '@primer/octicons-react'
import { saveAs } from 'file-saver'
import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '../App'
import { ToolbarButton } from './Base'

let downloadAPI = false

chrome.runtime.onMessage.addListener(message => {
  let arr: Array<string> = message.API
  if (arr.includes('chrome.downloads')) {
    downloadAPI = true
  }
})

const SaveButton = () => {
  const context = useContext(Context)

  const handleSave = () => {
    if (downloadAPI) {
      chrome.runtime.sendMessage({
        type: 'DOWNLOAD_FILE',
        url: window.location.href,
      })
    } else {
      const pathname = window.location.pathname.split('/')
      saveAs(
        new Blob([context.content.content], { type: context.content.type }),
        pathname[pathname.length - 1] || pathname[pathname.length - 2] || 'file'
      )
    }
  }
  return (
    <ToolbarButton onClick={handleSave}>
      <DownloadIcon size={24} />
      <span>{chrome.i18n.getMessage('saveSource')}</span>
    </ToolbarButton>
  )
}

export default SaveButton
