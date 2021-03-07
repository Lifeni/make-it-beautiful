const rawButton = (node: Element, container: HTMLDivElement) => {
  const button = document.createElement('button')
  button.className = 'make-it-beautiful-button'
  button.id = 'make-it-beautiful-button-view'
  button.innerHTML = `
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>view</title><path d="M30.94,15.66A16.69,16.69,0,0,0,16,5,16.69,16.69,0,0,0,1.06,15.66a1,1,0,0,0,0,.68A16.69,16.69,0,0,0,16,27,16.69,16.69,0,0,0,30.94,16.34,1,1,0,0,0,30.94,15.66ZM16,25c-5.3,0-10.9-3.93-12.93-9C5.1,10.93,10.7,7,16,7s10.9,3.93,12.93,9C26.9,21.07,21.3,25,16,25Z" transform="translate(0 0)"/><path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z" transform="translate(0 0)"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
    <span>${chrome.i18n.getMessage('toolBarRaw')}</span>
  `
  button.onclick = () => {
    const body = document.querySelector('body')
    if (body) {
      body.innerHTML = ''
      body.classList.remove('make-it-beautiful-body')
      node.removeAttribute('hidden')
      body.appendChild(node)
    }
  }
  container.appendChild(button)
}

export default rawButton
