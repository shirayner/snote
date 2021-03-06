const nav = require("./config/nav/");
const blogConfig = require("./config/blog/");
const plugins = require("./config/plugins/");
const markdown = require("./config/markdown/");

module.exports = {
  base: "/snote/",
  title: "snote",
  description: "study note",
  dest: "./dist",
  port: "8080",
  head: [["link", { rel: "icon", href: "/img/logo.png" }]],
  markdown,
  theme: "reco",
  themeConfig: {
    type: "blog",
    blogConfig,
    nav,
    subSidebar: "auto",
    lastUpdated: true,
    lastUpdated: "上次更新",
    search: true,
    searchMaxSuggestions: 10,
  },
  plugins,
};
