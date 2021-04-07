/// <reference types="chrome"/>

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
  setContent?: any
  setEditor?: any
}

interface IContext {
  content: IContent
  options: IOptions
  methods: IMethods
  editor?: any
}

interface IClickableURL {
  generate: Function
  restore: Function
}
