import extToMIME from './queryFileType'

const checkPage = async () => {
  const body = document.querySelector('body')
  if (
    body &&
    body.children[0] &&
    body.children[0].tagName === 'PRE' &&
    body.children[0].childNodes.length !== 0 &&
    body.children[0].children.length === 0
  ) {
    body.children[0].setAttribute('hidden', 'true')
    const content = body.children[0].textContent
    const result = isJSON(<string>content)
    const type = result ? 'application/json' : checkUrl()
    return {
      text: content || '',
      type: type,
      node: body.children[0],
      object: result,
    }
  }
  return false
}

const isJSON = (content: string) => {
  try {
    return JSON.parse(content)
  } catch {
    return false
  }
}

const checkUrl = () => {
  const paths = window.location.pathname.split('/')
  let ext = 'unknown'
  if (paths[paths.length - 1] !== '') {
    const names = paths[paths.length - 1].split('.')
    ext = names[names.length - 1]
  } else {
    const names = paths[paths.length - 2].split('.')
    ext = names[names.length - 1]
  }
  const type = extToMIME.filter(
    (file: { ext: string | string[] }) =>
      file.ext && file.ext.includes(ext.toLocaleLowerCase())
  )[0]

  return type?.mime || (type?.mimes && type?.mimes[0]) || 'text/plain'
}

export default checkPage
