(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1047:function(s,a,t){s.exports=t.p+"assets/img/1568084132585.4b507f29.png"},1464:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("[TOC]")]),s._v(" "),e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("我的Deepin版本为15.11，待安装软件")]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("typora")]),s._v(" "),e("li",[s._v("微信")]),s._v(" "),e("li",[s._v("mpv")]),s._v(" "),e("li",[s._v("百度网盘")]),s._v(" "),e("li",[s._v("福昕阅读器(官网下载)")])])]),s._v(" "),e("h1",{attrs:{id:"一、deepin下常用软件的常规安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、deepin下常用软件的常规安装"}},[s._v("#")]),s._v(" 一、Deepin下常用软件的常规安装")]),s._v(" "),e("p",[s._v("常规安装：")]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("有Linux版，则直接安装")]),s._v(" "),e("li",[s._v("没有Linux版，则通过深度应用商店安装")])])]),s._v(" "),e("h2",{attrs:{id:"_1-typora"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-typora"}},[s._v("#")]),s._v(" 1.Typora")]),s._v(" "),e("blockquote",[e("p",[s._v("参考：")]),s._v(" "),e("ul",[e("li",[s._v("[Typora官方文档]")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/52255115ad63",target:"_blank",rel:"noopener noreferrer"}},[s._v("最好用的 Markdown 编辑器 Typora【Window 、Linux 下的安装教程】"),e("OutboundLink")],1)])])]),s._v(" "),e("p",[s._v("（1）添加key")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("wget -qO - https://typora.io/linux/public-key.asc | sudo apt-key add -\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（2）添加Typora的软件源")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo add-apt-repository 'deb https://typora.io/linux ./'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果会报 add-apt-repository 命令找不到,执行如下命令来安装命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo apt-get install python-software-properties\nsudo apt-get install software-properties-common\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("然后再添加软件源，发现报如下错误")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("aptsources.distro.NoDistroTemplateException: Error: could not find a distribution template for Deepin/stable\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("那么就只能通过如下编写配置文件的方式添加软件源了：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 创建 typora 软件源文件\nsudo vim /etc/apt/sources.list.d/typora.list\n# 文件内键入以下内容，保存退出即可\ndeb https://typora.io/linux ./\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("(3)添加完软件源之后，就可以更新缓存再去安装 typora")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo apt-get update\nsudo apt install typora\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_2-微信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-微信"}},[s._v("#")]),s._v(" 2.微信")]),s._v(" "),e("blockquote",[e("p",[s._v("参考：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://bbs.deepin.org/forum.php?mod=viewthread&tid=181711&extra=page%3D1%26filter%3Dlastpost%26orderby%3Dlastpost",target:"_blank",rel:"noopener noreferrer"}},[s._v("已搜索，就我碰到微信版本过低不让登录的情况吗？"),e("OutboundLink")],1)])])]),s._v(" "),e("p",[s._v("一开始会提示微信版本过低不让登录，不过更新系统后，再更新微信就没这个问题了。")]),s._v(" "),e("p",[s._v("若还是有这个问题，可以使用如下命令更新下微信版本")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /tmp/wechat\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /tmp/wechat\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dldir1.qq.com/weixin/Windows/WeChatSetup.exe\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WINEPREFIX")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/.deepinwine/Deepin-WeChat deepin-wine WeChatSetup.exe\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"_3-mpv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-mpv"}},[s._v("#")]),s._v(" 3.mpv")]),s._v(" "),e("p",[s._v("推荐安装mpv，支持倍速播放")]),s._v(" "),e("p",[s._v("相关快捷键：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[ ]  减少倍速，增加倍速\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_4-sublime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-sublime"}},[s._v("#")]),s._v(" 4.sublime")]),s._v(" "),e("h3",{attrs:{id:"_4-1-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-安装"}},[s._v("#")]),s._v(" 4.1 安装")]),s._v(" "),e("blockquote",[e("p",[s._v("参见： "),e("a",{attrs:{href:"http://www.sublimetext.com/docs/3/linux_repositories.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),e("OutboundLink")],1)])]),s._v(" "),e("p",[s._v("（1）安装 GPG key")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -qO - https://download.sublimetext.com/sublimehq-pub.gpg "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("确保apt设置为使用https源")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" apt-transport-https\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（2）添加软件源")]),s._v(" "),e("p",[s._v("方式一：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 创建 typora 软件源文件\nsudo vim /etc/apt/sources.list.d/sublime-text.list\n# 文件内键入以下内容，保存退出即可\ndeb https://download.sublimetext.com/ apt/stable/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("方式二：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb https://download.sublimetext.com/ apt/stable/"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/sublime-text.list\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("(3)添加完软件源之后，就可以更新缓存再去安装 sublime-text")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo apt-get update\nsudo apt-get install sublime-text\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"_4-2-激活"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-激活"}},[s._v("#")]),s._v(" 4.2 激活")]),s._v(" "),e("p",[s._v("参见："),e("a",{attrs:{href:"https://blog.csdn.net/x550392236/article/details/89712736",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sublime text3 Version 3.2.1 3207 激活码许可证(2019-05-11亲测有效)"),e("OutboundLink")],1)]),s._v(" "),e("h1",{attrs:{id:"二、通过-wine-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、通过-wine-安装"}},[s._v("#")]),s._v(" 二、通过 wine 安装")]),s._v(" "),e("h2",{attrs:{id:"_1-更新-wine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-更新-wine"}},[s._v("#")]),s._v(" 1.更新 wine")]),s._v(" "),e("blockquote",[e("p",[s._v("参考：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://ywnz.com/linuxjc/4152.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("在Deepin 15.9/Debian 9 Stretch下安装Wine 4.0"),e("OutboundLink")],1)])])]),s._v(" "),e("p",[s._v("Deepin 15.11 版已经默认安装了 wine，不过版本很低")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("ray@ray:~$ wine --version\nwine-1.8.7 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Debian "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".7-2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("我们需要更新一下 wine")]),s._v(" "),e("p",[s._v("（1）下载并安装存储库密钥")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("wget -nc https://dl.winehq.org/wine-builds/winehq.key\nsudo apt-key add winehq.key\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("（2）添加wine的软件源")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 创建 wine 软件源文件\nsudo vim /etc/apt/sources.list.d/winehq.list\n# 文件内键入以下内容，保存退出即可\ndeb https://dl.winehq.org/wine-builds/debian/ stretch main\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("（3）添加完软件源之后，就可以更新缓存再去安装 wine")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo apt update\nsudo apt install --install-recommends winehq-stable\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("（4）查看wine 版本")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("ray@ray:~$ wine --version\nwine-4.0.2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_2-使用wine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用wine"}},[s._v("#")]),s._v(" 2.使用wine")]),s._v(" "),e("p",[s._v("直接通过wine运行下载好的exe程序，即可安装相关软件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("wine  xxx.exe\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("不过第一次执行时，会下载"),e("code",[s._v("wine Mono")]),s._v("和"),e("code",[s._v("wine_")])]),s._v(" "),e("h1",{attrs:{id:"三、通过playonlinux安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、通过playonlinux安装"}},[s._v("#")]),s._v(" 三、通过PlayOnLinux安装")]),s._v(" "),e("h2",{attrs:{id:"_1-更新playonlinux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-更新playonlinux"}},[s._v("#")]),s._v(" 1.更新PlayOnLinux")]),s._v(" "),e("blockquote",[e("p",[s._v("参考：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.kbase101.com/question/7372.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何更新PlayOnLinux？"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("http://www.playonlinux.com/en/download.html")])])]),s._v(" "),e("p",[s._v("方式一：下载deb包安装")]),s._v(" "),e("p",[e("img",{attrs:{src:t(1047),alt:"1568084132585"}})]),s._v(" "),e("p",[s._v("方式二：通过软件源安装")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -q "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://deb.playonlinux.com/public.gpg"')]),s._v(" -O- "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" apt-key "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://deb.playonlinux.com/playonlinux_stretch.list -O /etc/apt/sources.list.d/playonlinux.list\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" playonlinux\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);