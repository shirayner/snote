(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1388:function(t,e,r){"use strict";r.r(e);var a=r(4),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("[TOC]")]),t._v(" "),a("h1",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[t._v("前面我们简单了解 SpringMVC 架构，这一节我们围绕前端控制器 "),a("code",[t._v("DispatcherServlet")]),t._v(" 来详细分析一下 SpringMVC 的请求处理流程。")]),t._v(" "),a("h1",{attrs:{id:"二、dispatcherservlet-分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、dispatcherservlet-分析"}},[t._v("#")]),t._v(" 二、DispatcherServlet 分析")]),t._v(" "),a("h2",{attrs:{id:"_1-类图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-类图"}},[t._v("#")]),t._v(" 1.类图")]),t._v(" "),a("p",[a("img",{attrs:{src:r(457),alt:"1544771516166"}})]),t._v(" "),a("h1",{attrs:{id:"三、流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、流程图"}},[t._v("#")]),t._v(" 三、流程图")]),t._v(" "),a("h2",{attrs:{id:"_1-请求处理流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-请求处理流程图"}},[t._v("#")]),t._v(" 1.请求处理流程图")]),t._v(" "),a("p",[a("img",{attrs:{src:r(443),alt:"img"}})]),t._v(" "),a("p",[t._v("SpringMVC 核心组件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("组件 Bean 类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("HandlerMapping")]),t._v(" "),a("td",[t._v("映射请求（Request）到处理器（Handler）加上其关联的拦截器 （HandlerInterceptor）列表，其映射关系基于不同的 HandlerMapping 实现的一些 标准细节。其中两种主要 HandlerMapping 实现， RequestMappingHandlerMapping 支持标注 @RequestMapping 的方法， SimpleUrlHandlerMapping 维护精确的 URI 路径与处理器的映射")])]),t._v(" "),a("tr",[a("td",[t._v("HandlerAdapter")]),t._v(" "),a("td",[t._v("帮助 DispatcherServlet 调用请求处理器（Handler），无需关注其中实际的调用 细节。比如，调用注解实现的 Controller 需要解析其关联的注解. HandlerAdapter 的主要目的是为了屏蔽与 DispatcherServlet 之间的诸多细节。")])]),t._v(" "),a("tr",[a("td",[t._v("HandlerExceptionResolver")]),t._v(" "),a("td",[t._v("解析异常，可能策略是将异常处理映射到其他处理器（Handlers） 、或到某个 HTML 错误页面，或者其他。")])]),t._v(" "),a("tr",[a("td",[t._v("ViewResolver")]),t._v(" "),a("td",[t._v("从处理器（Handler）返回字符类型的逻辑视图名称解析出实际的 View 对象，该对 象将渲染后的内容输出到 HTTP 响应中。")])]),t._v(" "),a("tr",[a("td",[t._v("LocaleResolver, LocaleContextResolver")]),t._v(" "),a("td",[t._v("从客户端解析出 Locale ，为其实现国际化视图。")])]),t._v(" "),a("tr",[a("td",[t._v("MultipartResolver")]),t._v(" "),a("td",[t._v("解析多部分请求（如 Web 浏览器文件上传）的抽象实现")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-请求处理时序图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-请求处理时序图"}},[t._v("#")]),t._v(" 2.请求处理时序图")]),t._v(" "),a("h1",{attrs:{id:"四、请求处理流程分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、请求处理流程分析"}},[t._v("#")]),t._v(" 四、请求处理流程分析")])])}),[],!1,null,null,null);e.default=s.exports},443:function(t,e,r){t.exports=r.p+"assets/img/spring-mvc-process.37652c16.png"},457:function(t,e,r){t.exports=r.p+"assets/img/1544771516166.a385a382.png"}}]);