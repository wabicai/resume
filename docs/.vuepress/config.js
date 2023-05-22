// docs/.vuepress/config.js
const nav = require("./nav.js");
module.exports = {
  title: "wabicai的个人空间",
  description: "前端、后端、互联网前沿学习等等",
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require("markdown-it-disable-url-encode"));
    },
  },

  configureWebpack: {
    plugins: [],
    resolve: {
      alias: {
        "@alias": "../img",
      },
    },
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
    scopedCss: true,
  },
  css: {
    requireModuleExtension: false,
  },
  plugins: [
    "vuepress-plugin-mermaidjs",
    "@vuepress/last-updated",
    [
      "@vuepress/search",
      {
        search: true, //默认false
        searchMaxSuggestions: 10, // 默认是5
      },
    ],
    [
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor",
      },
    ],
    [
      "vuepress-plugin-auto-sidebar",
      {
        // options,
        sort: {
          mode: "custom",
          readmeFirst: true,
          readmeFirstForce: false,
          fn: (a, b) => {
            var aNum = parseInt(a.filename.match(/^\d+/)); // 提取a中的数字
            var bNum = parseInt(b.filename.match(/^\d+/)); // 提取b中的数字
            return aNum - bNum; // 比较数字大小
          },
        },
        title: {
          mode: "camelcase",
        },
        sidebarDepth: 1,
        collapse: {
          open: false,
          collapseList: [],
          uncollapseList: [],
        },
        ignore: [],
        removeEmptyGroup: false,
        git: {
          trackStatus: "all",
        },
      },
    ],
  ],
  themeConfig: {
    nav,
  },
};
