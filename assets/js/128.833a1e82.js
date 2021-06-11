(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1214:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#推荐阅读"}},[t._v("推荐阅读")])]),n("li",[n("a",{attrs:{href:"#一、快速入门"}},[t._v("一、快速入门")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1-安装-gitboot"}},[t._v("1. 安装 gitboot")])]),n("li",[n("a",{attrs:{href:"#_2-初始化书籍目录"}},[t._v("2.初始化书籍目录")])]),n("li",[n("a",{attrs:{href:"#_3-编译和预览书籍"}},[t._v("3.编译和预览书籍")])]),n("li",[n("a",{attrs:{href:"#_3-gitbook-editor"}},[t._v("3. gitbook editor")])])])])])]),n("p"),t._v(" "),n("p",[t._v("[toc]")]),t._v(" "),n("h2",{attrs:{id:"推荐阅读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读"}},[t._v("#")]),t._v(" 推荐阅读")]),t._v(" "),n("blockquote",[n("ul",[n("li",[n("a",{attrs:{href:"https://www.chengweiyang.cn/gitbook/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitBook 简明教程"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://docs.github.com/cn/pages/getting-started-with-github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Pages 使用入门"),n("OutboundLink")],1)])])]),t._v(" "),n("h2",{attrs:{id:"一、快速入门"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、快速入门"}},[t._v("#")]),t._v(" 一、快速入门")]),t._v(" "),n("h3",{attrs:{id:"_1-安装-gitboot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-gitboot"}},[t._v("#")]),t._v(" 1. 安装 gitboot")]),t._v(" "),n("p",[t._v("安装好 nodeJs 后，直接使用如下命令安装 gitbook")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g gitbook-cli\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"_2-初始化书籍目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-初始化书籍目录"}},[t._v("#")]),t._v(" 2.初始化书籍目录")]),t._v(" "),n("p",[t._v("（1）创建目录结构")]),t._v(" "),n("p",[t._v("首先创建如下目录结构：")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ tree book/\nbook/\n├── README.md\n└── SUMMARY.md\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("README.md 和 SUMMARY.md 是两个必须文件，README.md 是对书籍的简单介绍：")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" book/README.md\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# README")]),t._v("\n\nThis is a book powered by "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GitBook"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://github.com/GitbookIO/gitbook"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("SUMMARY.md 是书籍的目录结构。内容如下：")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" book/SUMMARY.md\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SUMMARY")]),t._v("\n\n* "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Chapter1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chapter1/README.md"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  * "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Section1.1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chapter1/section1.1.md"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  * "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Section1.2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chapter1/section1.2.md"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n* "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Chapter2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chapter2/README.md"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("（2）使用 "),n("code",[t._v("gitbook init")]),t._v("，它会为我们创建 SUMMARY.md 中的目录结构。")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" book\n$ gitbook init\n$ tree\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── README.md\n├── SUMMARY.md\n├── chapter1\n│   ├── README.md\n│   ├── section1.1.md\n│   └── section1.2.md\n└── chapter2\n    └── README.md\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" directories, "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" files\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("h3",{attrs:{id:"_3-编译和预览书籍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-编译和预览书籍"}},[t._v("#")]),t._v(" 3.编译和预览书籍")]),t._v(" "),n("p",[t._v("书籍目录结构创建完成以后，就可以使用 "),n("code",[t._v("gitbook serve")]),t._v(" 来编译和预览书籍了：")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ gitbook serve\nPress CTRL+C to quit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nLive reload server started on port: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("35729")]),t._v("\nStarting build "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nSuccessfully built"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\nStarting server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nServing book on http://localhost:4000\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("p",[n("code",[t._v("gitbook serve")]),t._v(" 命令实际上会首先调用 "),n("code",[t._v("gitbook build")]),t._v(" 编译书籍，完成以后会打开一个 web 服务器，监听在本地的 4000 端口。")]),t._v(" "),n("p",[t._v("现在，可以用浏览器打开 "),n("a",{attrs:{href:"http://127.0.0.1:4000/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:4000"),n("OutboundLink")],1),t._v(" 查看书籍的效果，如下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(639),alt:"gitbook"}})]),t._v(" "),n("h3",{attrs:{id:"_3-gitbook-editor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-gitbook-editor"}},[t._v("#")]),t._v(" 3. gitbook editor")]),t._v(" "),n("p",[t._v("从 gitbook editor 下载本地编辑器")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://github.com/GitbookIO/editor-legacy",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/GitbookIO/editor-legacy"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports},639:function(t,s,a){t.exports=a.p+"assets/img/gitbook-sample.903ecdeb.png"}}]);