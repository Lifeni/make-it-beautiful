import { saveAs } from 'file-saver'
import checkDomain from './queryCSPDomainList'

const logoLabel = (type, container) => {
  const div = document.createElement('div')
  div.className = 'make-it-beautiful-logo'
  div.textContent = 'Make It Beautiful'
  div.setAttribute('title', type)
  container.appendChild(div)
}

const copyButton = (editor, container) => {
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
    <span>Copy All</span>
  `
  button.onclick = () => {
    navigator.clipboard
      .writeText(editor.getValue())
      .then(() => {
        button.querySelector('span').textContent = 'Copied'
      })
      .catch(err => {
        button.querySelector('span').textContent = 'Copy Failed'
        console.error(err)
      })
  }
  container.appendChild(button)
}

const downloadButton = (editor, type, container) => {
  const button = document.createElement('button')
  button.className = 'make-it-beautiful-button'
  button.id = 'make-it-beautiful-button-download'
  button.innerHTML = `
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>save</title><path d="M27.71,9.29l-5-5A1,1,0,0,0,22,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V10A1,1,0,0,0,27.71,9.29ZM12,6h8v4H12Zm8,20H12V18h8Zm2,0V18a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v8H6V6h4v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V6.41l4,4V26Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
    <span>Save As File</span>
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

const viewButton = (node, container) => {
  const button = document.createElement('button')
  button.className = 'make-it-beautiful-button'
  button.id = 'make-it-beautiful-button-view'
  button.innerHTML = `
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>view</title><path d="M30.94,15.66A16.69,16.69,0,0,0,16,5,16.69,16.69,0,0,0,1.06,15.66a1,1,0,0,0,0,.68A16.69,16.69,0,0,0,16,27,16.69,16.69,0,0,0,30.94,16.34,1,1,0,0,0,30.94,15.66ZM16,25c-5.3,0-10.9-3.93-12.93-9C5.1,10.93,10.7,7,16,7s10.9,3.93,12.93,9C26.9,21.07,21.3,25,16,25Z" transform="translate(0 0)"/><path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z" transform="translate(0 0)"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
    <span>View Raw</span>
  `
  button.onclick = () => {
    const body = document.querySelector('body')
    body.innerHTML = ''
    body.classList.remove('make-it-beautiful-body')
    node.removeAttribute('hidden')
    body.appendChild(node)
  }
  container.appendChild(button)
}

const collapseButton = (editor, container) => {
  const button = document.createElement('button')
  button.className = 'make-it-beautiful-button'
  button.id = 'make-it-beautiful-button-collapse'
  button.innerHTML = `
  <div class="true">
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>expand-categories</title><rect x="20" y="26" width="6" height="2"/><rect x="20" y="18" width="8" height="2"/><rect x="20" y="10" width="10" height="2"/><rect x="15" y="4" width="2" height="24"/><polygon points="10.586 3.959 7 7.249 3.412 3.958 2 5.373 7 10 12 5.373 10.586 3.959"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
    <span>Collapse Code</span>
  </div>
  <div class="false">
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>collapse-categories</title><rect x="14" y="25" width="14" height="2"/><polygon points="7.17 26 4.59 28.58 6 30 10 26 6 22 4.58 23.41 7.17 26"/><rect x="14" y="15" width="14" height="2"/><polygon points="7.17 16 4.59 18.58 6 20 10 16 6 12 4.58 13.41 7.17 16"/><rect x="14" y="5" width="14" height="2"/><polygon points="7.17 6 4.59 8.58 6 10 10 6 6 2 4.58 3.41 7.17 6"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
    <span>Expand Code</span>
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

const settingsButton = container => {
  const button = document.createElement('button')
  button.className = 'make-it-beautiful-button'
  button.id = 'make-it-beautiful-button-settings'
  button.innerHTML = `
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>settings</title><path d="M27,16.76c0-.25,0-.5,0-.76s0-.51,0-.77l1.92-1.68A2,2,0,0,0,29.3,11L26.94,7a2,2,0,0,0-1.73-1,2,2,0,0,0-.64.1l-2.43.82a11.35,11.35,0,0,0-1.31-.75l-.51-2.52a2,2,0,0,0-2-1.61H13.64a2,2,0,0,0-2,1.61l-.51,2.52a11.48,11.48,0,0,0-1.32.75L7.43,6.06A2,2,0,0,0,6.79,6,2,2,0,0,0,5.06,7L2.7,11a2,2,0,0,0,.41,2.51L5,15.24c0,.25,0,.5,0,.76s0,.51,0,.77L3.11,18.45A2,2,0,0,0,2.7,21L5.06,25a2,2,0,0,0,1.73,1,2,2,0,0,0,.64-.1l2.43-.82a11.35,11.35,0,0,0,1.31.75l.51,2.52a2,2,0,0,0,2,1.61h4.72a2,2,0,0,0,2-1.61l.51-2.52a11.48,11.48,0,0,0,1.32-.75l2.42.82a2,2,0,0,0,.64.1,2,2,0,0,0,1.73-1L29.3,21a2,2,0,0,0-.41-2.51ZM25.21,24l-3.43-1.16a8.86,8.86,0,0,1-2.71,1.57L18.36,28H13.64l-.71-3.55a9.36,9.36,0,0,1-2.7-1.57L6.79,24,4.43,20l2.72-2.4a8.9,8.9,0,0,1,0-3.13L4.43,12,6.79,8l3.43,1.16a8.86,8.86,0,0,1,2.71-1.57L13.64,4h4.72l.71,3.55a9.36,9.36,0,0,1,2.7,1.57L25.21,8,27.57,12l-2.72,2.4a8.9,8.9,0,0,1,0,3.13L27.57,20Z" transform="translate(0 0)"/><path d="M16,22a6,6,0,1,1,6-6A5.94,5.94,0,0,1,16,22Zm0-10a3.91,3.91,0,0,0-4,4,3.91,3.91,0,0,0,4,4,3.91,3.91,0,0,0,4-4A3.91,3.91,0,0,0,16,12Z" transform="translate(0 0)"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
    <span>Settings</span>
  `
  button.onclick = () => {
    chrome.runtime.sendMessage({ type: 'OPEN_OPTIONS_PAGE' })
  }
  container.appendChild(button)
}

const insertToolBar = (code, content) => {
  const container = document.querySelector('#make-it-beautiful-container')
  const bar = document.createElement('div')
  bar.className = 'make-it-beautiful-toolbar'

  logoLabel(content.type, bar)
  viewButton(content.node, bar)
  copyButton(code, bar)

  if (!checkDomain()) {
    downloadButton(code, content.type, bar)
  }

  collapseButton(code, bar)
  settingsButton(bar)

  container.appendChild(bar)
}

export default insertToolBar
