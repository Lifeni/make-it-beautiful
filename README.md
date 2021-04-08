<p align="center">
  <img width="150px" alt="Logo" src="src/assets/images/logo.svg" />
</p>

<h1 align="center">Make It Beautiful</h1>
<p align="center">Make text pages beautiful and easy to read</p>
<p align="center">English | <a href="README.zh-CN.md">中文</a></p>

## Introduction

This is a browser extension that makes text pages look good and easy to read.

- 💻 **Simple User Interface**

  Reasonable color scheme and icons, supporting both light and dark themes.

- 📦 **Support Multiple Formats**

  Support JSON, Markdown and other common file formats.

- 💾 **Useful Features**

  Support code highlighting, code block folding, full text copying, file downloading (some websites need to save as manually due to security policy), temporary editing and other features.

- 🎨 **Customizable Options**

  Customizable fonts, themes and title bar text.

After installing the extension you can open [https://api.github.com/users/Lifeni](https://api.github.com/users/Lifeni) and try it out.

## Get Extension

You can get the extension at [Microsoft Edge Addon](https://microsoftedge.microsoft.com/addons/detail/make-it-beautiful/jjgkadobhgomjcppaojffnlooknkkodd).

For Chrome and Opera, you can download the zip archive in [releases](https://github.com/Lifeni/make-it-beautiful/releases) and install it manually.

## FAQ

#### What is the difference between Manifest V2 and V3?

V3 is the next version of the Chromium extension platform, but there are still some issues.

For example, Microsoft Edge Addons currently only supports V2 version, and the `chrome.downloads` API in background.js is not available in V3 version (probably a bug).

There is no difference in functionality between the V2 and V3 versions of this project, so if you don't know which version to download, then download the V2 version :).

#### What languages are supported (type inference and code highlighting)?

The supported languages and extensions can be found in the [mimes.ts](https://github.com/Lifeni/make-it-beautiful/blob/master/src/imports/mimes.ts) file.

If you want to add another language supported by CodeMirror, you can let me know via Issue or PR.

#### Why is there no search function?

Because the browser's own search can already meet most of the needs.

And the current editor (CodeMirror 5) can't make the search function both useful and good-looking, so I may consider adding a search function after upgrading the editor in the future.

#### Why doesn't support Firefox?

Firefox already includes a good JSON viewer, so I don't plan to adapt Firefox for now.

## Screenshot

![Preview](docs/preview.webp)

## Development

Dependencies need to be installed before development. Yarn is recommended.

```shell
cd make-it-beautiful && yarn
```

This project contains both manifest v3 and v2 versions, both of which have the same functionality. You can switch between the two versions during development based on the environment variable `MANIFEST`.

```shell
webpack --progress --env MANIFEST=v3
# webpack --progress --env MANIFEST=v2
```

Use `npm run dev` to run the v3 development build.

## License

MIT License
