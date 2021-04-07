import typeList from '../imports/mimes'

const checkPage = async (): Promise<IResult> => {
  const body = document.body
  const pre = body.children[0]
  if (
    body &&
    pre &&
    pre.tagName === 'PRE' &&
    pre.childNodes.length !== 0 &&
    pre.children.length === 0
  ) {
    const content = pre.textContent
    const object = content && checkJSON(content)
    const type = checkURL() || (object ? 'application/json' : 'text/plain')

    return {
      ok: true,
      data: {
        content: content || '',
        type: type,
        object: object,
        pre: pre as HTMLPreElement,
      },
    }
  }

  return {
    ok: false,
  }
}

const checkJSON = (content: string) => {
  try {
    return JSON.parse(content)
  } catch (error) {
    return false
  }
}

const checkURL = (): string | false => {
  const paths = window.location.pathname.split('/')
  let ext = 'unknown'
  if (paths[paths.length - 1] !== '') {
    const names = paths[paths.length - 1].split('.')
    ext = names[names.length - 1]
  } else {
    const names = paths[paths.length - 2].split('.')
    ext = names[names.length - 1]
  }
  const type = typeList.filter(
    (file: { ext: string | string[] }) =>
      file.ext && file.ext.includes(ext.toLocaleLowerCase())
  )[0]

  return type?.mime || (type?.mimes && type?.mimes[0]) || false
}

export default checkPage
