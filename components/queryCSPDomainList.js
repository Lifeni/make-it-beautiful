const list = ['raw.githubusercontent.com']

const checkDomain = () => {
  const domain = window.location.host
  if (list.includes(domain)) {
    return true
  }
  return false
}

export default checkDomain
