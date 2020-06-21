---
title: 快速上手
---

# 快速上手

本章节待完善

<!-- ## 安装

请参考 [安装](../install/) 章节 -->


<!-- ## Hello World -->

> 以Button引用为例:

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
