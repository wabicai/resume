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
        plugins: [],
        output: {
            libraryTarget: 'commonjs2'
        },
        resolve: {
            alias: {
                '@alias': '../img'
            }
        }
    },
    // chainWebpack: config => {
    //     config.module.rules.delete('eslint');
    //     config.optimization.delete('splitChunks');

    //     config.plugin('define').tap(args => {
    //         args[0].__VUE_OPTIONS_API__ = true;
    //         args[0].__VUE_PROD_DEVTOOLS__ = false;
    //         return args;
    //     });

    //     config.plugin('ssr').use(ServerRenderPlugin, [{
    //         filename: 'server-bundle.json'
    //     }]);

    //     config.plugin('spa').use(HtmlWebpackPlugin, [{
    //         title: 'Hello World',
    //         template: path.resolve(__dirname, '.vuepress/public/index.html')
    //     }]);

    //     config.plugin('dynamic-import-node').use(DynamicImportServer, [{
    //         filename: 'server-bundle.js'
    //     }]);
    // },
    // ssrTemplate: path.resolve(__dirname, './src/ssr.html'),
    // chainMarkdown(config) {
    //     config
    //         .plugin('markdown-it')
    //         .tap((options) => {
    //             options.push(mdContainer, anchorPlugin, [mdKatexPlugin, { delimiters: 'dollars' }]);
    //             return options;
    //         });
    // },
    vueDemoOptions: {
        scopedCss: true
    },
    css: {
        requireModuleExtension: false
    },
    head: [
        ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }]
    ],
    plugins: [
        ["vuepress-plugin-auto-sidebar", {
            // options,
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
        nav
    },
};