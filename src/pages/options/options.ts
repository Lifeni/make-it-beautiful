import 'lu2/theme/pure/css/common/ui/Button.css'
import 'lu2/theme/pure/css/common/ui/Input.css'
import 'lu2/theme/pure/css/common/ui/Select.css'
import 'lu2/theme/pure/css/common/ui/Textarea.css'
import 'lu2/theme/pure/js/common/comp/Form.js'
import 'lu2/theme/pure/js/common/ui/Select.js'
import './options.css'

const el = (str: string): HTMLElement =>
  <HTMLElement>document.querySelector(str)

const eli = (
  str: string
): HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement =>
  <HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
    document.querySelector(str)
  )

const defaultOptions = {
  fontSize: 16,
  fontFamily: "Consolas, 'Courier New', Courier, monospace",
  lineHeight: 1.5,
  theme: 'auto',
  headerText: 'Make It Beautiful',
}

const restore = () => {
  // el('#tip-1').textContent = chrome.i18n.getMessage('optionsTip1')
  // el('#tip-2').textContent = chrome.i18n.getMessage('optionsTip2')

  el('#font-size-label').textContent = chrome.i18n.getMessage('fontSize')
  el('#font-family-label').textContent = chrome.i18n.getMessage('fontFamily')
  el('#line-height-label').textContent = chrome.i18n.getMessage('lineHeight')
  el('#theme-label').textContent = chrome.i18n.getMessage('theme')
  el('#header-text-label').textContent = chrome.i18n.getMessage('headerText')

  el('#theme-option-auto').textContent = chrome.i18n.getMessage('themeAuto')
  el('#theme-option-light').textContent = chrome.i18n.getMessage('themeLight')
  el('#theme-option-dark').textContent = chrome.i18n.getMessage('themeDark')

  el('#reset-all').textContent = chrome.i18n.getMessage('reset')

  setTimeout(() => {
    chrome.storage.sync.get(defaultOptions, items => {
      eli('#font-size').value = items.fontSize
      eli('#font-family').value = items.fontFamily
      eli('#line-height').value = items.lineHeight
      eli('#theme').value = items.theme
      eli('#header-text').value = items.headerText
    })
  }, 0)
}

const save = (e: Event) => {
  e.preventDefault()

  chrome.storage.sync.set(
    {
      fontSize: eli('#font-size').value,
      fontFamily: eli('#font-family').value,
      lineHeight: eli('#line-height').value,
      theme: eli('#theme').value,
      headerText: eli('#header-text').value,
    },
    () => {
      console.log('Saved')
    }
  )
}

const reset = (e: Event) => {
  e.preventDefault()

  eli('#font-size').value = defaultOptions.fontSize.toString()
  eli('#font-family').value = defaultOptions.fontFamily
  eli('#line-height').value = defaultOptions.lineHeight.toString()
  eli('#theme').value = defaultOptions.theme
  eli('#header-text').value = defaultOptions.headerText

  chrome.storage.sync.set(defaultOptions, () => {
    console.log('Saved')
    const saveAll = el('#save-all')
    if (saveAll) {
      saveAll.textContent = chrome.i18n.getMessage('saved')
      saveAll.dataset.type = 'success'
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  restore()
  eli('#font-size').addEventListener('change', save)
  eli('#font-family').addEventListener('change', save)
  eli('#line-height').addEventListener('change', save)
  eli('#theme').addEventListener('change', save)
  eli('#header-text').addEventListener('change', save)
  el('#reset-all').addEventListener('click', reset)
})
