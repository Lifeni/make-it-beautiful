const headerLabel = (type: string, container: HTMLDivElement) => {
  chrome.storage.sync.get(
    {
      headerText: 'Make It Beautiful',
    },
    items => {
      const text = items.headerText
      if (text !== '') {
        const div = document.createElement('div')
        div.className = 'make-it-beautiful-logo'
        div.textContent = text
        div.id = 'make-it-beautiful-header-text'
        div.setAttribute('title', type)
        container.insertBefore(div, container.firstChild)
      }
    }
  )
}

export default headerLabel
