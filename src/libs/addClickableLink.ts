const urlRegex = /(https?):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g

const addClickableLink = (editor: Editor) => {
  editor.eachLine(line => {
    const result = line.text.match(urlRegex)?.[0]
    if (result) {
      const posLine = editor.lineInfo(line).line
      const posStart = line.text.indexOf(result)
      const posEnd = posStart + result.length

      editor.markText(
        { line: posLine, ch: posStart },
        { line: posLine, ch: posEnd },
        {
          className: 'cm-clickable-link',
        }
      )
    }
  })

  editor.on('mousedown', (_cm, event) => {
    if (event.buttons === 1 || event.buttons === 4) {
      const element = event.target as Element
      if (element.classList.contains('cm-clickable-link')) {
        chrome.runtime.sendMessage({
          type: 'OPEN_LINK',
          url: element.textContent,
        })
      }
    }
  })
}

export default addClickableLink
