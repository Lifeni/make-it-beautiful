const editorButton = (editor: CodeMirror.Editor, container: HTMLDivElement) => {
  const button = document.createElement('button')
  button.className = 'make-it-beautiful-button space'
  button.id = 'make-it-beautiful-button-edit'
  button.innerHTML = `
  <div class="true">
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17.263 2.177a1.75 1.75 0 012.474 0l2.586 2.586a1.75 1.75 0 010 2.474L19.53 10.03l-.012.013L8.69 20.378a1.75 1.75 0 01-.699.409l-5.523 1.68a.75.75 0 01-.935-.935l1.673-5.5a1.75 1.75 0 01.466-.756L14.476 4.963l2.787-2.786zm-2.275 4.371l-10.28 9.813a.25.25 0 00-.067.108l-1.264 4.154 4.177-1.271a.25.25 0 00.1-.059l10.273-9.806-2.94-2.939zM19 8.44l2.263-2.262a.25.25 0 000-.354l-2.586-2.586a.25.25 0 00-.354 0L16.061 5.5 19 8.44z"></path></svg>
    <span>${chrome.i18n.getMessage('toolBarEdit')}</span>
  </div>
  <div class="false">
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.53 5.03a.75.75 0 10-1.06-1.06l-6.25 6.25a.75.75 0 000 1.06l6.25 6.25a.75.75 0 101.06-1.06L5.56 11.5H17a3.248 3.248 0 013.25 3.248v4.502a.75.75 0 001.5 0v-4.502A4.748 4.748 0 0017 10H5.56l4.97-4.97z"></path></svg>
    <span>${chrome.i18n.getMessage('toolBarCancelEdit')}</span>
  </div>
  `

  button.onclick = () => {
    if (button.classList.contains('toggled')) {
      button.classList.remove('toggled')
      container.classList.remove('edit-mode')
      editor.setOption('readOnly', true)
      editor.setOption('cursorBlinkRate', -1)
    } else {
      button.classList.add('toggled')
      container.classList.add('edit-mode')
      editor.setOption('readOnly', false)
      editor.setOption('cursorBlinkRate', 530)
    }
  }
  container.appendChild(button)
}

export default editorButton
