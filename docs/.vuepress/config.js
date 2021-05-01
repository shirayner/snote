const nav = require("./config/nav/");
const sidebar = require("./config/sidebar/");
const blogConfig = require("./config/blog/");
const plugins = require("./config/plugins/");

module.exports = {
  base: "/snote/",
  title: "snote",
  description: "study note",
  dest: "./dist",
  port: "8080",
  head: [["link", { rel: "icon", href: "/img/logo.png" }]],
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-plantuml'))
    },
  },
  theme: "reco",
  themeConfig: {
    type: 'blog',
    blogConfig,
    nav,
    sidebar,
    subSidebar: "auto",
    lastUpdated: true,
    lastUpdated: "上次更新",
    search: true,
    searchMaxSuggestions: 10,
  },
  plugins,
};
