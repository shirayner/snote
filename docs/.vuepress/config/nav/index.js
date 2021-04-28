//导航栏
module.exports = [
  { text: "首页", link: "/" },
  {
    text: "计算机",
    items: [
      { text: "操作系统", link: "/cs/computer-basic/os/" },
      { text: "计算机网络", link: "/cs/computer-basic/network/" },
      { text: "数据结构与算法", link: "/cs/computer-basic/da/" },
    ],
  },
  {
    text: "后端",
    items: [
      { text: "java", link: "/cs/backend/java/" },
      { text: "maven", link: "/cs/backend/maven/" },
    ],
  },
  {
    text: "前端",
    link: "/cs/frontend/",
  },
  { text: "时间线", link: "/timeline/", icon: "reco-date" },
];
