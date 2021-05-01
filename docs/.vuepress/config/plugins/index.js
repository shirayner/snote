//plugins
const moment = require("moment");

module.exports = [
  // 文章最后更新时间转换
  [
    "@vuepress/last-updated",
    {
      transformer: (timestamp) => {
        moment.locale("zh-CN");
        return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
      },
    },
  ],
  // 代码复制功能
  [
    "vuepress-plugin-nuggets-style-copy",
    {
      copyText: "复制",
      tip: {
        content: "复制成功!",
      },
    },
  ],

  // 看板娘
  [
    "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    {
      theme: ["miku"],
      clean: true,
      modelStyle: {
        right: "50px",
        bottom: "10px",
        opacity: "0.9",
      },
    },
  ],

  // 鼠标特效
  [
    "cursor-effects",
    {
      size: 2, // size of the particle, default: 2
      shape: ["star"], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    },
  ],
];
