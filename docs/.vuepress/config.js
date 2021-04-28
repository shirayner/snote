const nav = require("./config/nav/");
const sidebar = require("./config/sidebar/");

module.exports = {
  title: "snote",
  description: "study note",
  dest: "./dist",
  port: "8080",
  head: [["link", { rel: "icon", href: "/img/logo.png" }]],
  markdown: {
    lineNumbers: true,
  },
  theme: "reco",
  themeConfig: {
    //type: "blog",
    // blogConfig: {
    //   category: {
    //     location: 2, // 在导航栏菜单中所占的位置，默认2
    //     text: "分类", // 默认文案 “分类”
    //   },
    //   tag: {
    //     location: 3, // 在导航栏菜单中所占的位置，默认3
    //     text: "标签", // 默认文案 “标签”
    //   },
    // },
    nav,
    sidebar,
    subSidebar: 'auto',
    // sidebarDepth: 1,
    // displayAllHeaders: false,
  },
};
