const collapseButton = (
  editor: CodeMirror.Editor,
  container: HTMLDivElement
) => {
  const button = document.createElement('button')
  button.className = 'make-it-beautiful-button'
  button.id = 'make-it-beautiful-button-collapse'
  button.innerHTML = `
  <div class="true">
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>expand-categories</title><rect x="20" y="26" width="6" height="2"/><rect x="20" y="18" width="8" height="2"/><rect x="20" y="10" width="10" height="2"/><rect x="15" y="4" width="2" height="24"/><polygon points="10.586 3.959 7 7.249 3.412 3.958 2 5.373 7 10 12 5.373 10.586 3.959"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
    <span>${chrome.i18n.getMessage('toolBarCollapse')}</span>
  </div>
  <div class="false">
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>collapse-categories</title><rect x="14" y="25" width="14" height="2"/><polygon points="7.17 26 4.59 28.58 6 30 10 26 6 22 4.58 23.41 7.17 26"/><rect x="14" y="15" width="14" height="2"/><polygon points="7.17 16 4.59 18.58 6 20 10 16 6 12 4.58 13.41 7.17 16"/><rect x="14" y="5" width="14" height="2"/><polygon points="7.17 6 4.59 8.58 6 10 10 6 6 2 4.58 3.41 7.17 6"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
    <span>${chrome.i18n.getMessage('toolBarExpand')}</span>
  </div>
  `
  button.onclick = () => {
    if (button.classList.contains('toggled')) {
      button.classList.remove('toggled')
      editor.execCommand('unfoldAll')
    } else {
      button.classList.add('toggled')
      editor.execCommand('foldAll')
    }
  }
  container.appendChild(button)
}

export default collapseButton
