<h1 align="center">Xui</h1>

<p align="center">Full Featured Mobile HTML Framework For Building iOS & Android Apps</p>

## 开始使用

- [使用指南](https://xui.io/docs/introduction.html)

## XUI 开发

首先，安装依赖：

```
$ npm install
```

### 开发环境 build

下面的 npm 脚本用来生产开发环境 builds：

- `build:dev` - build development versions of all packages (Core, Vue)
- `build-core:dev` - build development version of Core (vanilla JS) Xui
- `build-vue:dev` - build development version of Xui Vue package

编译结果在`build/` 文件夹下。

### 生产环境 builds

可以用下面的 npm 脚本进行生产环境的 build：

- `build:prod` - build production versions of all packages (Core, Vue)
- `build-core:prod` - build production version of Core (vanilla JS) Xui
- `build-vue:prod` - build production version of Xui Vue package

编译结果在 `packages/` 文件夹下。

## DEMO

运行开发环境的 demo 脚本（To run Kitchen Sink（厨房水槽，无所不包一应俱全，这里指 demo），运行前需要先 build 一下开发环境）：

- `core` - build development version of Core (vanilla JS) Xui package and run core Kitchen Sink
- `vue` - build development version of Xui Vue package and run Vue Kitchen Sink

## 源码

所有源码都在 `/src/` 文件夹下。

## 提交修改步骤

待完善
**所有修改只需提交到 `src/` 文件里！**
Xui 使用 LESS。

## 组件库使用文档

https://xui.io/docs/

## 各种使用教程

https://xui.io/tutorials/

## 启动步骤

---- vue 版本的 demo ----

- `npm run build:dev`
- `npm run vue`

---- 普通 版本的 demo ----

- `npm run build:dev`
- `npm run core`
