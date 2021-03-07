<p align="center">
  <img width="150px" alt="Logo" src="src/assets/images/logo.svg" />
</p>

<h1 align="center">Make It Beautiful</h1>
<p align="center">Make text pages beautiful and easy to read</p>
<p align="center">English | <a href="README.zh-CN.md">中文</a></p>

- [Get Extension](#get-extension)
- [Introduction](#introduction)
- [Extension Screenshot](#extension-screenshot)
- [FAQ](#faq)
  - [Why not support the Firefox browser?](#why-not-support-the-firefox-browser)
  - [Which languages are supported for code highlighting?](#which-languages-are-supported-for-code-highlighting)
  - [Why does the save button not appear on some pages?](#why-does-the-save-button-not-appear-on-some-pages)
  - [Why is there no search function?](#why-is-there-no-search-function)
  - [Why isn't it on the Chrome Web Store?](#why-isnt-it-on-the-chrome-web-store)
- [Development](#development)
- [License](#license)

## Get Extension

You can get the extension at [Microsoft Edge Addon](https://microsoftedge.microsoft.com/addons/detail/make-it-beautiful/jjgkadobhgomjcppaojffnlooknkkodd).

For Chrome and Opera, you can download the zip archive in [Release](https://github.com/Lifeni/make-it-beautiful/releases) and install it manually.

## Introduction

This is a browser extension that currently only supports Microsoft Edge.


- 📦 **Support for multiple formats**

  Supports JSON, Markdown, and other formats, and automatically presumes file formats based on URL suffixes.


- 💻 **Simple interface**

  Supports automatic switching between light and dark modes.


- 💾 **Useful features**

  Code highlighting, code block folding, full text copying, file downloading (some sites need to save as manually due to security policies).

- 🎨 **Customization options**

  You can customize fonts and themes.

After installing the extension you can open [https://api.github.com/users/Lifeni/repos](https://api.github.com/users/Lifeni/repos) and try it out.

The extension also supports many other formats, such as [README.md](https://raw.githubusercontent.com/Lifeni/make-it-beautiful/master/README.md) and [webpack.config.ts]( https://raw.githubusercontent.com/Lifeni/make-it-beautiful/master/webpack.config.ts).

## Extension Screenshot

<details>
   <summary>Code highlighting</summary>

![Code Highlight](docs/light.webp)

</details>

<details>
   <summary>Dark mode</summary>

![Dark Mode](docs/dark.webp)

</details>

<details>
   <summary>Copy full text</summary>

![Copy the full text](docs/copy.webp)

</details>

<details>
   <summary>Code block folding</summary>

![Code block folding](docs/fold.webp)

</details>

<details>
   <summary>Options page</summary>

![Options page](docs/options.webp)

</details>

## FAQ

### Why not support the Firefox browser?

Because the core function provided by this extension is included in the Firefox.

### Which languages are supported for code highlighting?

See: [src/utils/queryFileType.ts](src/utils/queryFileType.ts).

### Why does the save button not appear on some pages?

Due to the Content Security Policy (CSP), some sites do not trigger the save dialog and need to be saved manually (<kbd>Ctrl</kbd> + <kbd>S</kbd> or right-click menu save).

For sites where the save button does not appear see: [src/utils/queryCSPDomain.ts](src/utils/queryCSPDomain.ts).

### Why is there no search function?

Because the search that comes with the browser (<kbd>Ctrl</kbd> + <kbd>F</kbd>) is good enough for most needs.

### Why isn't it on the Chrome Web Store?

The author can't afford to sign up for a developer account.

## Development

This project contains two versions of manifest v3 and v2 at the same time. The functions of the two versions are the same. During development, you can switch between different builds based on the 'MANIFEST' environment variable, see [package.json](./package.json).

Dependencies need to be installed before development. Yarn is recommended.

```shell
cd make-it-beautiful
yarn
```

Use `npm run dev` to run the v3 version of the development and build. It is recommended to use Chrome Canary for debugging.

## License

MIT License
