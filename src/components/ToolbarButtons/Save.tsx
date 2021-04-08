import { DownloadIcon } from '@primer/octicons-react'
import { saveAs } from 'file-saver'
import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '../App'
import { ToolbarBaseButton } from './Base'

const SaveButton = () => {
  const context = useContext(Context)

  const handleSave = () => {
    chrome.runtime.sendMessage(
      {
        type: 'DOWNLOAD_FILE',
        url: window.location.href,
      },
      res => {
        if (res.error) {
          const pathname = window.location.pathname.split('/')
          saveAs(
            new Blob([context.content.content], { type: context.content.type }),
            pathname[pathname.length - 1] ||
              pathname[pathname.length - 2] ||
              'file'
          )
        }
      }
    )
  }
  return (
    <ToolbarBaseButton onClick={handleSave}>
      <DownloadIcon size={24} />
      <span>{chrome.i18n.getMessage('saveSource')}</span>
    </ToolbarBaseButton>
  )
}

export default SaveButton
