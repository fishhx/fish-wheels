(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{391:function(a,t,e){"use strict";e.r(t);var s=e(41),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"api设计原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api设计原则"}},[a._v("#")]),a._v(" API设计原则")]),a._v(" "),e("h2",{attrs:{id:"易懂"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#易懂"}},[a._v("#")]),a._v(" 易懂")]),a._v(" "),e("blockquote",[e("p",[a._v("比如 multiple 就易懂,simple 就不知所云.")])]),a._v(" "),e("h2",{attrs:{id:"反向默认"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反向默认"}},[a._v("#")]),a._v(" 反向默认")]),a._v(" "),e("blockquote",[e("p",[a._v("比如 nav 默认水平排布,那么就设计 vertical的default 值为false .")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 水平排布\n<g-nav></g-nav>\n\n// 垂直排布\n<g-nav vertical></g-nav>\n")])])]),e("h2",{attrs:{id:"合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并"}},[a._v("#")]),a._v(" 合并")]),a._v(" "),e("blockquote",[e("p",[a._v("比如 toast 的自动关闭与自动关闭时间可以设计成一个API.")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("autoClose: {\n    type: [Boolean,Number],\n    default: 5,\n    validator: function (value) {\n        return (value===false|| typeof value === 'number')\n    }\n}\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// 不自动关闭\n<toast :autoClose="false"></toast>\n// 自动关闭且希望设置关闭时间为10秒后\n<toast :autoClose="10"></toast>\n')])])]),e("h2",{attrs:{id:"按更新频率分离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按更新频率分离"}},[a._v("#")]),a._v(" 按更新频率分离")]),a._v(" "),e("blockquote",[e("p",[a._v("比如 table 的 columns 一般不改变,而 sort 可能经常改变（由于交互）,所以二者不可以混合在一起.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);