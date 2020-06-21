// const path = require('path')
module.exports = {
    base: '/fish-wheels/',
    title: 'FishWheels',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/fish.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    description: '一个好用的UI框架',
    themeConfig: {
        logo: '/fish.png', // 左上角logo
        nav: [
            { text: '主页', link: '/' },
            // { text: '文档', link: '/guide/' },
            { text: 'Github', link: 'https://google.com' },
        ],
        sidebar: [{
                title: '入门',
                collapsable: false,
                children: [
                    '/introduce/',
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/icon',
                    '/components/input',
                    '/components/grid',
                    '/components/tabs',
                    '/components/pager',
                    '/components/popover',
                    '/components/slides',
                    '/components/collapse',
                    '/components/cascader',
                    '/components/calendar',
                    '/components/tree',
                ]
            },
            {
                title: '总结',
                collapsable: false,
                children: ['/组件需求分析/', '/API设计原则/', '/单元测试总结/', '/vue-cli/', '/vue-summary/', '/开发流程/', '/开发规范/']
            }

        ]
    },
    // scss: {
    //     includePaths: [path.join(__dirname, '../../src/assets/styles')]
    // }
}