const copyButton = (editor: CodeMirror.Editor, container: HTMLDivElement) => {
  const button = document.createElement('button')
  button.className = 'make-it-beautiful-button'
  button.id = 'make-it-beautiful-button-copy'
  button.innerHTML = `
    <?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 24.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="32px" height="32px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
    <style type="text/css">
      .st0{fill:none;}
    </style>
    <title>copy--file</title>
    <path d="M27.4,14.7l-6.1-6.1C21,8.2,20.5,8,20,8h-8c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V16.1
      C28,15.6,27.8,15.1,27.4,14.7z M20,10l5.9,6H20V10z M12,28V10h6v6c0,1.1,0.9,2,2,2h6l0,10H12z"/>
    <path d="M6,18H4V4c0-1.1,0.9-2,2-2h14v2H6V18z"/>
    <rect id="_Transparent_Rectangle_" class="st0" width="32" height="32"/>
    </svg>
    <span>${chrome.i18n.getMessage('toolBarCopy')}</span>
  `
  button.onclick = () => {
    const span = button.querySelector('span')
    if (span) {
      navigator.clipboard
        .writeText(editor.getValue())
        .then(() => {
          span.textContent = chrome.i18n.getMessage('toolBarCopied')
        })
        .catch(err => {
          span.textContent = chrome.i18n.getMessage('toolBarCopyFailed')
          console.error(err)
        })
    }
  }
  container.appendChild(button)
}

export default copyButton
