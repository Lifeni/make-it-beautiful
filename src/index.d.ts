/// <reference types="chrome"/>

type Editor = import('codemirror').Editor

interface IResult {
  ok: boolean
  data?: IContent
}

interface IContent {
  content: string
  type: string
  object: object | null
  pre: HTMLPreElement | null
}

interface IOptions {
  fontSize: number
  fontFamily: string
  lineHeight: number
  theme: string
  headerText: string
}

interface IMethods {
  setEditor?: any
}

interface IContext {
  content: IContent
  options: IOptions
  methods: IMethods
  editor?: Editor | null
}

interface IClickableURL {
  generate: Function
  restore: Function
}
