import { saveAs } from 'file-saver'

const saveButton = (
  editor: CodeMirror.Editor,
  type: string,
  container: HTMLDivElement
) => {
  const button = document.createElement('button')
  button.className = 'make-it-beautiful-button'
  button.id = 'make-it-beautiful-button-download'
  button.innerHTML = `
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>save</title><path d="M27.71,9.29l-5-5A1,1,0,0,0,22,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V10A1,1,0,0,0,27.71,9.29ZM12,6h8v4H12Zm8,20H12V18h8Zm2,0V18a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v8H6V6h4v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V6.41l4,4V26Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
    <span>${chrome.i18n.getMessage('toolBarSave')}</span>
  `
  button.onclick = () => {
    const pathname = window.location.pathname.split('/')
    saveAs(
      new Blob([editor.getValue()], { type: type }),
      pathname[pathname.length - 1] || pathname[pathname.length - 2] || 'file'
    )
  }
  container.appendChild(button)
}

export default saveButton
