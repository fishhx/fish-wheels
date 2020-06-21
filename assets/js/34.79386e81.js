(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{412:function(e,t,s){"use strict";s.r(t);var a=s(41),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"开发规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[e._v("#")]),e._v(" 开发规范")]),e._v(" "),s("h2",{attrs:{id:"及时销毁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#及时销毁"}},[e._v("#")]),e._v(" 及时销毁")]),e._v(" "),s("blockquote",[s("p",[e._v("在 beforeDestroy 中销毁注册的事件,创建的元素（防止内存泄漏）")])]),e._v(" "),s("ul",[s("li",[e._v("在 mounted 中注册事件,创造元素")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("table2 = this.$refs.table.cloneNode(true)\nthis.table2=table2 // 便于销毁table2\n\nthis.onWindowResize = () => {\n    this.updateWidth()\n}\nwindow.addEventListener('resize', this.onWindowResize)\n")])])]),s("ul",[s("li",[e._v("在 beforeDestroy 中销毁注册的事件,创建的元素（防止内存泄漏）")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("beforeDestroy() {\n    window.removeEventListener('resize', this.onWindowResize)\n}\nthis.table2.remove()\n")])])]),s("h2",{attrs:{id:"传递对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传递对象"}},[e._v("#")]),e._v(" 传递对象")]),e._v(" "),s("ul",[s("li",[e._v("不安全的写法：直接传递字符串")])]),e._v(" "),s("blockquote",[s("p",[e._v("隐患：浏览器对拼写错误的字符串是不会报错的")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("res.send(`{id:${req.file.filename}}`)\n")])])]),s("ul",[s("li",[e._v("安全的写法：先构造对象,再转为字符串类型")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let fileName=req.file.filename\nlet object={id:fileName}\nres.send(JSON.stringify(object))\n")])])]),s("h2",{attrs:{id:"重构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重构"}},[e._v("#")]),e._v(" 重构")]),e._v(" "),s("ul",[s("li",[e._v("示范:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let xhr = new XMLHttpRequest()\nxhr.open(this.method, this.action)\nxhr.send(formData)\nxhr.onload = () => {\n    let img = document.querySelector('img')\n    this.url =this.parseResponse(xhr.response)\n}\n")])])]),s("blockquote",[s("p",[e._v("应该重构为:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// success 是个回调函数\nfunction xxx(formData,success){\n    let xhr = new XMLHttpRequest()\n    xhr.open(this.method, this.action)\n    xhr.send(formData)\n    // 因为 success 必须接受参数,所以这里需要用一层函数包裹\n    xhr.onload =()=>{\n        success(xhr.response)\n    }\n}\n\nxxx(formData,(response)=>{\n    let img = document.querySelector('img')\n    this.url =this.parseResponse(response)\n})\n")])])]),s("ul",[s("li",[e._v("重构要点:")])]),e._v(" "),s("blockquote",[s("ul",[s("li",[e._v("加注释,明确每部分代码的功能")]),e._v(" "),s("li",[e._v("重复出现的变量/操作,抽取到一个函数里面")]),e._v(" "),s("li",[e._v("最终每个函数不应超过5行")]),e._v(" "),s("li",[e._v("重构是每天都要进行的")])])]),e._v(" "),s("h2",{attrs:{id:"单向数据流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单向数据流"}},[e._v("#")]),e._v(" 单向数据流")]),e._v(" "),s("blockquote",[s("p",[e._v("比如我们要修改组件的 selected 属性")])]),e._v(" "),s("ul",[s("li",[e._v("错误做法:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// defaultSelected 从未被修改\n<pager :defaultSelected="defaultSelected"></pager>\n\nprops:{\n    defaultSelected: {\n        type: Number,\n        required: true\n    }\n}\ndata(){\n    return {\n        currentSelected:this.defaultSelected\n    }\n}\n\n// 之后更新 currentSelected\n')])])]),s("ul",[s("li",[e._v("正确做法：让父组件更新 props")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// selcted 会在 updateSelcted 被触发后被修改\n<pager :selcted.sync=\"selcted\"></pager>\n\nprops: {\n    selcted: {\n        type: Number,\n        required: true\n    }\n}\n\nupdateSelcted(newItem){\n    this.$emit('update:selcted',newItem)\n}\n")])])]),s("ul",[s("li",[e._v("注意: 有时 selected 是数组,那么我们要先进行深拷贝")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("updateSelected(newItem){\n    let copy=JSON.parse(JSON.stringIfy(this.selected)) \n    copy.push(newItem) // 对 copy 进行一些操作\n    this.emit('update:selected',copy) // 单向数据流,让父组件来修改传入的 selected\n}\n")])])]),s("h2",{attrs:{id:"命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命名"}},[e._v("#")]),e._v(" 命名")]),e._v(" "),s("ul",[s("li",[e._v("命名一律不使用缩写")]),e._v(" "),s("li",[e._v("对于一时不知道叫什么的函数,应该暂时起名为 xxx,yyy,zzz...")])]),e._v(" "),s("h3",{attrs:{id:"function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[e._v("#")]),e._v(" function")]),e._v(" "),s("ul",[s("li",[e._v("inselectedItemsIds")])]),e._v(" "),s("blockquote",[s("p",[e._v("根据 Id 查找 item 是否在 selectedItems 中,返回值为 boolean 类型")])]),e._v(" "),s("ul",[s("li",[e._v("onRemove")])]),e._v(" "),s("blockquote",[s("p",[e._v("在 remove 前要执行的操作")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<g-button @click=\"onRemove\">删除</g-button>\n\nonRemove(){\n    alert('确定删除吗')\n}\n")])])]),s("ul",[s("li",[e._v("afterUploadFiles")])]),e._v(" "),s("blockquote",[s("p",[e._v("在 uploadFiles 后执行的操作")])]),e._v(" "),s("h3",{attrs:{id:"variable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variable"}},[e._v("#")]),e._v(" variable")]),e._v(" "),s("ul",[s("li",[e._v("fileList")])]),e._v(" "),s("blockquote",[s("p",[e._v("不是 filesList")])]),e._v(" "),s("ul",[s("li",[e._v("visible")])]),e._v(" "),s("blockquote",[s("p",[e._v("是否为可见状态,注意不能命名为 ifShow,因为 show 为动词。也不能命名为 ifVisible")])])])}),[],!1,null,null,null);t.default=l.exports}}]);