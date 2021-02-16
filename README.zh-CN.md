<p align="center">
  <img width="150px" alt="Logo" src="assets/images/logo.svg" />
</p>

<h1 align="center">Make It Beautiful</h1>
<p align="center">把文本页面变得好看和易于阅读</p>
<p align="center"><a href="README.md">English</a> | 中文</p>

- [介绍](#介绍)
- [获取](#获取)
- [截图](#截图)
- [常见问题](#常见问题)
  - [为何不支持 Firefox 浏览器？](#为何不支持-firefox-浏览器)
  - [支持哪些语言的代码高亮？](#支持哪些语言的代码高亮)
  - [为何有些页面不会出现保存按钮？](#为何有些页面不会出现保存按钮)
- [开发](#开发)
- [License](#license)

## 介绍

这是一个浏览器扩展，支持 Microsoft Edge 和 Google Chrome。

- 自动检测是否为纯文本页面
- 自动根据 URL 后缀推测文件格式
- 代码高亮
- 代码块折叠
- 全文复制
- 文件下载（部分网站由于安全策略，需要手动另存为）
- 自定义字体和主题

可以用下面的链接试一试：

- [https://api.github.com/users/Lifeni/repos](https://api.github.com/users/Lifeni/repos)
- [https://raw.githubusercontent.com/Lifeni/make-it-beautiful/master/README.md](https://raw.githubusercontent.com/Lifeni/make-it-beautiful/master/README.md)
- [https://raw.githubusercontent.com/Lifeni/make-it-beautiful/master/webpack.config.ts](https://raw.githubusercontent.com/Lifeni/make-it-beautiful/master/webpack.config.ts)

## 获取

[Microsoft Edge 外接程序](https://microsoftedge.microsoft.com/addons/detail/make-it-beautiful/jjgkadobhgomjcppaojffnlooknkkodd)

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

参见：[components/queryFileType.js](components/queryFileType.js) 。

### 为何有些页面不会出现保存按钮？

由于 Content Security Policy（CSP）的影响，某些网站无法触发保存的对话框，需要手动保存（<kbd>Ctrl</kbd> + <kbd>S</kbd> 或者右键菜单保存）。

不会出现保存按钮的网站参见：[components/queryCSPDomainList.js](components/queryCSPDomainList.js) 。

## 开发

本项目同时包含 manifest v3 与 v2 两个版本，两个版本的功能相同，开发时可以根据 `webpack.config.js` 和 `webpack.config.v2.js` 分别打包 v3 与 v2 两个版本。

进行开发前需要先安装依赖，推荐使用 Yarn 安装。

```shell
yarn
```

使用 `npm run dev` 运行 v3 版本的开发构建，建议使用 Chrome Canary 进行调试。

## License

MIT License
