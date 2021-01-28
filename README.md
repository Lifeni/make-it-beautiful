<p align="center">
  <img width="150px" alt="Logo" src="assets/images/logo.svg" />
</p>

<h1 align="center">Make It Beautiful</h1>
<p align="center">Make text pages beautiful and easy to read</p>
<p align="center">English | <a href="README.zh-CN.md">中文</a></p>

- [Introduction](#introduction)
- [Get Extension](#get-extension)
- [Screenshot](#screenshot)
- [FAQ](#faq)
  - [Which languages are supported for code highlighting?](#which-languages-are-supported-for-code-highlighting)
  - [Why do not save buttons appear on some pages?](#why-do-not-save-buttons-appear-on-some-pages)
- [Development](#development)
- [To-do](#to-do)
- [License](#license)

## Introduction

This is a browser extension that supports Microsoft Edge and Google Chrome.

- Automatically detect whether it is a plain text page
- Automatically guess the file format based on the URL suffix
- Code highlighting
- Code block folding
- Full text copy
- File download (some websites need to be saved manually due to security policies)
- Custom font

You can try it with the link below:

- [https://api.github.com/users/Lifeni/repos](https://api.github.com/users/Lifeni/repos)
- [https://raw.githubusercontent.com/Lifeni/make-it-beautiful/master/README.md](https://raw.githubusercontent.com/Lifeni/make-it-beautiful/master/README.md)

## Get Extension

- [Microsoft Edge Addons](https://microsoftedge.microsoft.com/addons/detail/make-it-beautiful/jjgkadobhgomjcppaojffnlooknkkodd)

## Screenshot

<details>
   <summary>Code highlighting</summary>

![Code Highlight](https://file.lifeni.life/dashboard/make-it-beautiful/light.webp)

</details>

<details>
   <summary>Dark mode</summary>

![Dark Mode](https://file.lifeni.life/dashboard/make-it-beautiful/dark.webp)

</details>

<details>
   <summary>Copy full text</summary>

![Copy the full text](https://file.lifeni.life/dashboard/make-it-beautiful/copy.webp)

</details>

<details>
   <summary>Code block folding</summary>

![Code block folding](https://file.lifeni.life/dashboard/make-it-beautiful/fold.webp)

</details>

<details>
   <summary>Options page</summary>

![Options page](https://file.lifeni.life/dashboard/make-it-beautiful/options.webp)

</details>

## FAQ

### Which languages are supported for code highlighting?

See: [components/queryFileType.js](components/queryFileType.js).

### Why do not save buttons appear on some pages?

Due to the influence of Content Security Policy (CSP), some websites cannot trigger the save dialog box and need to be saved manually (<kbd>Ctrl</kbd> + <kbd>S</kbd> or right-click menu to save).

For websites where the save button does not appear, see: [components/queryCSPDomainList.js](components/queryCSPDomainList.js).

## Development

This project contains two versions of manifest v3 and v2 at the same time. The functions of the two versions are the same. During development, you can package v3 and v2 respectively according to `webpack.config.js` and `webpack.config.v2.js`.

Dependencies need to be installed before development. Yarn is recommended.

```shell
yarn
```

Use `npm run dev` to run the v3 version of the development and build. It is recommended to use Chrome Canary for debugging.

## To-do

- [ ] Internationalization
- [ ] Custom theme
- [ ] Clickable link

## License

MIT License
