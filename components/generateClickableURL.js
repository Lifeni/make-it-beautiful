import checkDomain from './queryCSPDomainList'

const generateClickableURL = async () => {
  const tags = document.querySelectorAll('span[class^="cm-"]')
  const regex = /(https?):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
  const csp = checkDomain()

  tags.forEach(tag => {
    const found = tag.textContent.match(regex)
    const a = tag.querySelectorAll('a')
    if (found?.length > 0 && a.length === 0) {
      tag.innerHTML = tag.innerHTML.replace(
        regex,
        `<a href="${found[0]}" class="make-it-beautiful-url" ${
          csp ? '' : 'target="_blank"'
        } rel="noopener noreferrer">${found[0]}</a>`
      )
    }
  })
}

export default generateClickableURL
