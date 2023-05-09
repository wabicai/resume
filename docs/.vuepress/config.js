// docs/.vuepress/config.js
module.exports = {
    title: "科技趣玩",
    description: "分享各类资源、教程、黑科技软件、工具等等",
    base: '/resume.github.io/',
    markdown: {
        lineNumbers: true,
    },
    plugins: [
        ["vuepress-plugin-auto-sidebar", {
            // options
            sort: {
                mode: "asc",
                readmeFirst: true,
                readmeFirstForce: false
            },
            title: {
                mode: "titlecase",
                map: {}
            },
            sidebarDepth: 1,
            collapse: {
                open: false,
                collapseList: [],
                uncollapseList: []
            },
            ignore: [],
            removeEmptyGroup: false,
            git: {
                trackStatus: 'all'
            }
        }]
    ],
    themeConfig: {
        sidebar: [
            {
                title: '前端',
                children: ['/fronent-end/test'],
                initialOpenGroupIndex: 1 // 可选的, 默认值是 0
            }
        ]
    },
};