(self.webpackChunksite=self.webpackChunksite||[]).push([[3534],{73534:function(n,e,o){"use strict";o.r(e),e.default='# Icon 图标\n\n## 基本用法\n\n```jsx\nimport { Icon } from \'zarm\';\n\nconst MyIcon = Icon.createFromIconfont(\'//at.alicdn.com/t/font_1340918_mk657pke2hj.js\'); // generated by iconfont.cn\n\nReactDOM.render(\n  <div className="grid">\n    <div className="grid-column">\n      <MyIcon type="home" theme="primary" />\n      <span>home</span>\n    </div>\n    <div className="grid-column">\n      <MyIcon type="user" theme="primary" />\n      <span>user</span>\n    </div>\n  </div>,\n  mountNode,\n);\n```\n\n## 图标主题\n\n```jsx\nimport { Icon } from \'zarm\';\n\nconst MyIcon = Icon.createFromIconfont(\'//at.alicdn.com/t/font_1340918_mk657pke2hj.js\');\n\nReactDOM.render(\n  <div className="grid">\n    <div className="grid-column">\n      <MyIcon type="home" theme="warning" />\n      <span>warning</span>\n    </div>\n    <div className="grid-column">\n      <MyIcon type="home" theme="danger" />\n      <span>danger</span>\n    </div>\n    <div className="grid-column">\n      <MyIcon type="home" style={{ color: \'#1890ff\' }} />\n      <span>custom color</span>\n    </div>\n  </div>,\n  mountNode,\n);\n```\n\n## 图标尺寸\n\n```jsx\nimport { Icon } from \'zarm\';\n\nconst MyIcon = Icon.createFromIconfont(\'//at.alicdn.com/t/font_1340918_mk657pke2hj.js\');\n\nReactDOM.render(\n  <div className="grid">\n    <div className="grid-column">\n      <MyIcon type="home" theme="primary" size="sm" />\n      <span>sm</span>\n    </div>\n    <div className="grid-column">\n      <MyIcon type="home" theme="primary" />\n      <span>md</span>\n    </div>\n    <div className="grid-column">\n      <MyIcon type="home" theme="primary" size="lg" />\n      <span>lg</span>\n    </div>\n  </div>,\n  mountNode,\n);\n```\n\n## 自定义 Iconfont 图标\n\n我们提供了一个 createFromIconfont 方法，方便开发者调用在 [iconfont.cn](iconfont.cn) 上自行管理的图标。\n\n其本质上是组件在渲染前会自动引入 iconfont.cn 项目中的图标符号集，并且创建了一个 `<use>` 标签来渲染图标的组件。\n\n详见 [iconfont.cn 使用帮助](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code) 查看如何生成 symbol 代码的 js 地址。\n\n```jsx\nimport { Icon } from \'zarm\';\n\nconst MyIcon = Icon.createFromIconfont(\'//at.alicdn.com/t/font_1340918_mk657pke2hj.js\'); // generated by iconfont.cn\n\nReactDOM.render(\n  <div className="grid">\n    <div className="grid-column">\n      <MyIcon type="home" theme="primary" />\n      <span>home</span>\n    </div>\n    <div className="grid-column">\n      <MyIcon type="user" theme="primary" />\n      <span>user</span>\n    </div>\n  </div>,\n  mountNode,\n);\n```\n\n## 自定义 SVG 图标\n\n可以通过配置 [svgr](https://github.com/smooth-code/svgr) 来将 svg 图标作为 React 组件导入。\n\n本示例以 webpack 为参考，使用 [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack) 来实现，其他实现方式请参阅 [svgr 文档](https://www.smooth-code.com/open-source/svgr/docs/getting-started/)。\n\n```js\n// webpack.config.js\n{\n  test: /\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  issuer: {\n    test: /\\.jsx?$/,\n  },\n  use: [\n    {\n      loader: \'babel-loader\',\n    },\n    {\n      loader: \'@svgr/webpack\',\n      options: {\n        babel: false,\n        icon: true,\n      },\n    },\n  ],\n},\n```\n\n```jsx\nimport { Icon } from \'zarm\';\nimport { ReactComponent as YourSvg } from \'path/to/yourSvg.svg\'; // path to your \'*.svg\' file.\n\nReactDOM.render(<Icon component={YourSvg} />, mountNode);\n```\n\n## API\n\n| 属性      | 类型                                                           | 默认值      | 说明                                                              |\n| :-------- | :------------------------------------------------------------- | :---------- | :---------------------------------------------------------------- |\n| theme     | string                                                         | \'default\'   | 主题，可选值 `default`、`primary`、`success`、`warning`、`danger` |\n| size      | string                                                         | \'md\'        | 大小，可选值 `sm`、`md`、`lg`                                     |\n| type      | string                                                         | -           | 图标类型，可选值详见 demo 的基本用法                              |\n| component | React.ComponentType&lt;React.SVGProps&lt;SVGSVGElement&gt;&gt; | -           | 本地 svg 文件，需配合 viewBox 使用                                |\n| viewBox   | string                                                         | \'0 0 32 32\' | 自定义 SVG 图标时，用来设置画布的起始坐标及大小                   |\n'}}]);