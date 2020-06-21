# FishWheels

## 说明

一套基于Vue 2 开发的UI组件库.本项目的开发目的,主要是个人对于技术的学习、研究、总结,其次是探索使用Vue实现一些复杂组件的方法.

> 由于现在还未完成每个组件的单元测试,无法确保组件的稳定性,所以暂时不推荐在生产环境使用.

——Done is better than perfect

这是我很喜欢的一句话,所以本项目的开发原则也是如此,优先实现各个组件的基础功能,而复杂功能的优先级会比较低.

本项目开发于2020年疫情期间,愿一切早日恢复往昔.

## 知识点

1. 单元测试、覆盖率、持续集成等工程概念
2. 重构、TDD/BDD、设计模式、单向数据流等技术概念
2. Vue 的几乎所有功能,并且是深入理解这些功能,而不是肤浅理解

## 文档

关于各个组件的详细使用方式和效果可以查看本项目的文档：[fish-wheels](https://fishhx.github.io/fish-wheels/)


## 使用

- 安装（推荐）

> - git clone https://github.com/fishhx/fish-wheels.git
> - npm install



- 以Button引用为例:

```javascript
import {Button} from 'fish-wheels'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button':Button
  }
})
```

```html
<template>
  <g-button icon="left">Left</g-button>
  <g-button icon="settings">Setting</g-button>
  <g-button :loading="loading" @click="loading = !loading">Loading</g-button>
  <g-button disabled>Disabled</g-button>
  <g-button>More</g-button>
  <g-button icon="right" icon-position="right">Right</g-button>
</template>      
```

## 开发

此项目为个人项目,非常欢迎大家下载本项目自由开发,如果有优秀的组件提交,我会直接合并进项目中.

### 运行

通过如下步骤可以直接运行项目：

> - git clone https://github.com/fishhx/fish-wheels.git
> - npm install
> - npm run serve
> - open localhost:8080

运行入口为`src/main.js`文件,该文件中是各个组件的使用代码,可以自由修改测试.

### 打包

使用命令：

> npm run build

打包入口为`src/index.js`文件,目前的做法是在各个组件中引入了对应的样式,然后将所有组件导出为一个对象.

### 文档

本项目文档使用`vuepress`进行构建,在`docs`目录下有各个组件的说明及示例.
如果你想添加自己组件的文档,在编辑完成对应的文件后需要重新打包项目,最后将生成的文件重新部署.

具体使用方法可以参考 [官方文档](https://vuepress.vuejs.org/zh/)

#### 启动

> npm run docs:dev

#### 构建

> npm run docs:build

#### 部署

打包后生成的静态文件默认放在本项目的`master`分支,文档页面使用Github Pages部署.

## 进度

- [x] Button-按钮
- [x] ButtonGroup-按钮组
- [x] Icon-图标
- [x] Input-输入框(实现双向绑定)
- [x] Grid-栅格/网格
- [x] Tabs-选项卡
- [x] Pager-分页
- [x] Carousel-走马灯
- [x] Popover-弹出层
- [ ] Collapse-折叠面板
- [ ] Cascader-级联选择器
- [ ] Tree-树形控件
- [ ] Calendar-日历
- [ ] 单元测试
- [ ] TypeScript重构

持续施工中...







## 参考

本组件库参考了一些比较成熟的UI框架,包括但不限于外观、API设计、甚至源码实现,特此感谢这些开源社区的贡献者.

- [Element](https://element.eleme.cn/#/zh-CN)
- [Ant Design](https://ant.design/)
- [iView](https://www.iviewui.com/)
- [Bootstrap](https://www.bootcss.com/)