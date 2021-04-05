/// <reference types="chrome"/>

interface IContent {
  text: string
  type: string
  node: Element
  object: any
}

interface IClickableURL {
  generate: Function
  restore: Function
}
