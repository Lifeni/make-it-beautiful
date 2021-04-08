<p align="center">
  <img width="150px" alt="Logo" src="src/assets/images/logo.svg" />
</p>

<h1 align="center">Make It Beautiful</h1>
<p align="center">把文本页面变得好看和易于阅读</p>
<p align="center"><a href="README.md">English</a> | 中文</p>

## 介绍

这是一个可以把文本页面变得好看和易于阅读的浏览器扩展。

- 💻 **简洁的界面**

  合理的配色和图标，支持亮色和暗色两种主题。

- 📦 **支持多种格式**

  支持 JSON、Markdown 等常见的文件格式。

- 💾 **实用的功能**

  支持代码高亮、代码块折叠、全文复制、文件下载（部分网站由于安全策略，需要手动另存为）、临时编辑等功能。

- 🎨 **自定义选项**

  可以自定义字体、主题和标题栏文本。

安装插件以后可以打开 [https://api.github.com/users/Lifeni](https://api.github.com/users/Lifeni) 试一试。

## 获取

可以在 [Microsoft Edge 外接程序](https://microsoftedge.microsoft.com/addons/detail/make-it-beautiful/jjgkadobhgomjcppaojffnlooknkkodd) 上获取插件。

对于 Chrome 以及 Opera，可以下载 [releases](https://github.com/Lifeni/make-it-beautiful/releases) 中的 zip 压缩包进行手动安装。

## 常见问题

#### Manifest V2 和 V3 有什么区别？

V3 是 Chromium 扩展平台的下一个版本，但目前来说还存在一些问题，比如 Microsoft Edge Addons 目前只支持 V2 版本，以及 V3 版本下 background.js 中 `chrome.downloads` API 不可用等问题。

这个项目的 V2 和 V3 版本在功能上没有区别，如果你不知道要下载哪个版本，那就下载 V2 版本吧 :)。

#### 支持哪些语言？

支持的语言及拓展名可以在 [mimes.ts](https://github.com/Lifeni/make-it-beautiful/blob/master/src/imports/mimes.ts) 文件中查询。

#### 为何不支持 Firefox？

Firefox 已经自带了一个很好用的 JSON 查看器，所以目前不打算适配 Firefox。

## 截图

![预览截图](docs/preview.webp)

## 开发

进行开发前需要先安装依赖，推荐使用 Yarn 安装。

```shell
cd make-it-beautiful && yarn
```

本项目同时包含 manifest v3 与 v2 两个版本，两个版本的功能相同。开发时你可以根据环境变量 `MANIFEST` 来切换不同版本的编译。

```shell
webpack --progress --env MANIFEST=v3
# webpack --progress --env MANIFEST=v2
```

使用 `npm run dev` 运行 v3 版本的开发构建。

## 开源协议

MIT License
