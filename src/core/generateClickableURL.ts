import checkDomain from '../utils/queryCSPDomain'

let tempStore: null | string = null

const generate = async () => {
  tempStore = document.querySelector('.CodeMirror-code')?.innerHTML || ''

  const tags = document.querySelectorAll('span[class^="cm-"]')
  const regex = /(https?):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
  const csp = checkDomain()

  tags.forEach(tag => {
    const found = tag.textContent?.match(regex)
    const a = tag.querySelectorAll('a')
    if (found && found?.length > 0 && a.length === 0) {
      tag.innerHTML = tag.innerHTML.replace(
        regex,
        `<a href="${found[0]}" class="make-it-beautiful-url" ${
          csp ? '' : 'target="_blank"'
        } rel="noopener noreferrer">${found[0]}</a>`
      )
    }
  })
}

const restore = () => {
  const code = document.querySelector('.CodeMirror-code')
  if (code) {
    code.innerHTML = tempStore || ''
  }
}

export { generate, restore }
