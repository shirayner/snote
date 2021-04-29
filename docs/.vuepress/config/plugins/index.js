//plugins
const moment = require("moment");

module.exports = [
  [
    "@vuepress/last-updated",
    {
      transformer: (timestamp) => {
        moment.locale("zh-CN");
        return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
      },
    },
  ],
];
