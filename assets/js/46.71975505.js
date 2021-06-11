(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1251:function(t,a,r){"use strict";r.r(a);var s=r(4),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#前言"}},[t._v("前言")])]),s("li",[s("a",{attrs:{href:"#一、相关异常"}},[t._v("一、相关异常")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-部署-tomcat-时报-no-artifacts-confiuered"}},[t._v("1.部署 tomcat 时报 No Artifacts Confiuered")])]),s("li",[s("a",{attrs:{href:"#_2-java-outofmemoryerror-insufficient-memory"}},[t._v("2.java: OutOfMemoryError: insufficient memory")])]),s("li",[s("a",{attrs:{href:"#_3-address-already-in-use-net-bind"}},[t._v("3.Address already in use: NET_Bind")])])])])])]),s("p"),t._v(" "),s("p",[t._v("[toc]")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("h2",{attrs:{id:"一、相关异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、相关异常"}},[t._v("#")]),t._v(" 一、相关异常")]),t._v(" "),s("h3",{attrs:{id:"_1-部署-tomcat-时报-no-artifacts-confiuered"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-部署-tomcat-时报-no-artifacts-confiuered"}},[t._v("#")]),t._v(" 1.部署 tomcat 时报 No Artifacts Confiuered")]),t._v(" "),s("h4",{attrs:{id:"_1-1-异常现象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-异常现象"}},[t._v("#")]),t._v(" 1.1 异常现象")]),t._v(" "),s("h4",{attrs:{id:"_1-2-异常结局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-异常结局"}},[t._v("#")]),t._v(" 1.2 异常结局")]),t._v(" "),s("p",[t._v("（1）配置 Maven 自动导入 Maven 项目")]),t._v(" "),s("p",[t._v("如下图，勾选 “Import Maven projects automatically”即可")]),t._v(" "),s("p",[s("img",{attrs:{src:r(732),alt:"1560760029383"}})]),t._v(" "),s("p",[t._v("（2）完成上一步后，发现异常还是没有解决，这可能是 Maven 版本导致的，我原本使用的是最新的 3.6 版本，换成 Idea 默认的 Maven 即可")]),t._v(" "),s("p",[s("img",{attrs:{src:r(733),alt:"1560760361545"}})]),t._v(" "),s("h3",{attrs:{id:"_2-java-outofmemoryerror-insufficient-memory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-java-outofmemoryerror-insufficient-memory"}},[t._v("#")]),t._v(" 2.java: OutOfMemoryError: insufficient memory")]),t._v(" "),s("h4",{attrs:{id:"_2-1-异常信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-异常信息"}},[t._v("#")]),t._v(" 2.1 异常信息")]),t._v(" "),s("p",[t._v("Idea 运行项目前的 build 阶段，抛出如下错误：")]),t._v(" "),s("p",[s("img",{attrs:{src:r(734),alt:"å¨è¿éæå¥å¾çæè¿°"}})]),t._v(" "),s("h4",{attrs:{id:"_2-2-异常解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-异常解决"}},[t._v("#")]),t._v(" 2.2 异常解决")]),t._v(" "),s("blockquote",[s("p",[t._v("参见 "),s("a",{attrs:{href:"https://blog.csdn.net/qq_36147916/article/details/84248572",target:"_blank",rel:"noopener noreferrer"}},[t._v("IDEA:Error: java: OutOfMemoryError: insufficient memory"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("方式一：File -> Invalidate Caches/ Restart...")]),t._v(" "),s("p",[t._v("方式二：配置 Compiler Process heap size 参数，默认为 700M，调大一点")]),t._v(" "),s("p",[s("img",{attrs:{src:r(735),alt:"1565606026305"}})]),t._v(" "),s("h3",{attrs:{id:"_3-address-already-in-use-net-bind"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-address-already-in-use-net-bind"}},[t._v("#")]),t._v(" 3.Address already in use: NET_Bind")]),t._v(" "),s("h4",{attrs:{id:"_3-1-异常信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-异常信息"}},[t._v("#")]),t._v(" 3.1 异常信息")]),t._v(" "),s("p",[t._v("项目启动时，抛出如下错误信息：")]),t._v(" "),s("p",[s("img",{attrs:{src:r(736),alt:"1565605841437"}})]),t._v(" "),s("h4",{attrs:{id:"_3-2-异常原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-异常原因"}},[t._v("#")]),t._v(" 3.2 异常原因")]),t._v(" "),s("p",[t._v("端口占用")]),t._v(" "),s("h4",{attrs:{id:"_3-2-异常解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-异常解决"}},[t._v("#")]),t._v(" 3.2 异常解决")]),t._v(" "),s("p",[t._v("关闭占用的端口即可")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -ano "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" findstr "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("61185")]),t._v(" //列出进程极其占用的端口，且包含 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("61185")]),t._v("\ntasklist "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" findstr "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14592")]),t._v(" // 查看是什么程序占用的\ntaskkill -PID "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14592")]),t._v(" -F //强制关闭某个进程\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports},732:function(t,a,r){t.exports=r.p+"assets/img/1560760029383.4f332295.png"},733:function(t,a,r){t.exports=r.p+"assets/img/1560760361545.68b6288e.png"},734:function(t,a){t.exports="data:image/png;base64,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"},735:function(t,a,r){t.exports=r.p+"assets/img/1565606026305.7fa54069.png"},736:function(t,a,r){t.exports=r.p+"assets/img/1565605841437.6d04cdc3.png"}}]);