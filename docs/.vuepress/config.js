// docs/.vuepress/config.js
const nav = require("./nav.js");
module.exports = {
    title: "wabicai的个人空间",
    description: "前端、后端、互联网前沿学习等等",
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.use(require("markdown-it-disable-url-encode"));
        },
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@alias': '../img'
            }
        }
    },
    plugins: [
        ["vuepress-plugin-auto-sidebar", {
            // options
            // sort: {
            //     mode: "asc",
            //     readmeFirst: true,
            //     readmeFirstForce: false
            // },
            // title: {
            //     mode: "titlecase",
            //     map: {}
            // },
            // sidebarDepth: 1,
            // collapse: {
            //     open: false,
            //     collapseList: [],
            //     uncollapseList: []
            // },
            // ignore: [],
            // removeEmptyGroup: false,
            // git: {
            //     trackStatus: 'all'
            // }
        }]
    ],
    themeConfig: {
        nav
    },
};