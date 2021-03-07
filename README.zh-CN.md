<p align="center">
  <img width="150px" alt="Logo" src="assets/images/logo.svg" />
</p>

<h1 align="center">Make It Beautiful</h1>
<p align="center">把文本页面变得好看和易于阅读</p>
<p align="center"><a href="README.md">English</a> | 中文</p>

- [获取](#获取)
- [介绍](#介绍)
- [截图](#截图)
- [常见问题](#常见问题)
  - [为何不支持 Firefox 浏览器？](#为何不支持-firefox-浏览器)
  - [支持哪些语言的代码高亮？](#支持哪些语言的代码高亮)
  - [为何有些页面不会出现保存按钮？](#为何有些页面不会出现保存按钮)
  - [为何没有搜索功能？](#为何没有搜索功能)
  - [为何不上架 Chrome Web Store？](#为何不上架-chrome-web-store)
- [开发](#开发)
- [License](#license)

## 获取

可以在 [Microsoft Edge 外接程序](https://microsoftedge.microsoft.com/addons/detail/make-it-beautiful/jjgkadobhgomjcppaojffnlooknkkodd) 上获取插件。

对于 Chrome 以及 Opera，可以下载 [Release](https://github.com/Lifeni/make-it-beautiful/releases) 中的 zip 压缩包进行手动安装。

## 介绍

这是一个浏览器扩展，目前仅支持 Microsoft Edge。


- 📦 **支持多种格式**

  支持 JSON、Markdown 等格式，自动根据 URL 后缀推测文件格式。

- 💻 **简洁的界面**

  支持自动切换亮色和暗色模式，没有多余的元素。

- 💾 **实用的功能**

  代码高亮、代码块折叠、全文复制、文件下载（部分网站由于安全策略，需要手动另存为）。

- 🎨 **自定义选项**

  可以自定义字体和主题。

安装插件以后可以打开 [https://api.github.com/users/Lifeni/repos](https://api.github.com/users/Lifeni/repos) 试一试。

插件也支持很多其他格式的文件，例如 [README.md](https://raw.githubusercontent.com/Lifeni/make-it-beautiful/master/README.md) 和 [webpack.config.ts](https://raw.githubusercontent.com/Lifeni/make-it-beautiful/master/webpack.config.ts) 。

## 截图

<details>
  <summary>代码高亮</summary>

![代码高亮](docs/light.webp)

</details>

<details>
  <summary>暗色模式</summary>

![暗色模式](docs/dark.webp)

</details>

<details>
  <summary>复制全文</summary>

![复制全文](docs/copy.webp)

</details>

<details>
  <summary>代码块折叠</summary>

![代码块折叠](docs/fold.webp)

</details>

<details>
  <summary>选项页面</summary>

![选项页面](docs/options.webp)

</details>

## 常见问题

### 为何不支持 Firefox 浏览器？

因为 Firefox 浏览器自带了这个插件提供的功能。

### 支持哪些语言的代码高亮？

参见：[src/utils/queryFileType.ts](src/utils/queryFileType.ts) 。

### 为何有些页面不会出现保存按钮？

由于 Content Security Policy（CSP）的影响，某些网站无法触发保存的对话框，需要手动保存（<kbd>Ctrl</kbd> + <kbd>S</kbd> 或者右键菜单保存）。

不会出现保存按钮的网站参见：[src/utils/queryCSPDomain.ts](src/utils/queryCSPDomain.ts) 。

### 为何没有搜索功能？

因为浏览器自带的搜索（<kbd>Ctrl</kbd> + <kbd>F</kbd>）已经可以满足大部分需求。

### 为何不上架 Chrome Web Store？

没钱注册开发者账号。

## 开发

本项目同时包含 manifest v3 与 v2 两个版本，两个版本的功能相同，开发时你可以根据环境变量 `MANIFEST` 来切换不同版本的编译，用法可以查看 [package.json](./package.json) 。

进行开发前需要先安装依赖，推荐使用 Yarn 安装。

```shell
cd make-it-beautiful
yarn
```

使用 `npm run dev` 运行 v3 版本的开发构建，建议使用 Chrome Canary 进行调试。

## License

MIT License
