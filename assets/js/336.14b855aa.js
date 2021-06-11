(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1431:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("[TOC]")]),s._v(" "),t("h1",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("h1",{attrs:{id:"一、网络设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、网络设置"}},[s._v("#")]),s._v(" 一、网络设置")]),s._v(" "),t("h2",{attrs:{id:"_1-默认网卡设备文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-默认网卡设备文件"}},[s._v("#")]),s._v(" 1.默认网卡设备文件")]),s._v(" "),t("p",[s._v("文件路径：/etc/sysconfig/network-scripts/ifcfg-网卡名")]),s._v(" "),t("p",[s._v("前面设置静态ip的时候，修改了如下属性：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOOTPROTO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"static"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置网卡引导协议为 静态")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes"')]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置网卡启动方式为 开机启动 并且可以通过系统服务管理器 systemctl 控制网卡")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.1.11"')]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# IP地址     ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"255.255.255.0"')]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 子网掩码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.1.2"')]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网关,网关地址注意与前面查出来的保持一致，网关不对的话，后面是无法联网的")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"114.114.114.114"')]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8.8.8.8"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"_2-dns客户端配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-dns客户端配置"}},[s._v("#")]),s._v(" 2.DNS客户端配置")]),s._v(" "),t("h3",{attrs:{id:"_2-1-etc-hosts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-etc-hosts"}},[s._v("#")]),s._v(" 2.1 "),t("code",[s._v("/etc/hosts")])]),s._v(" "),t("p",[s._v("人们使用hosts文件来记录主机名和IP的对应关系，这样访问对方的主机时，就不需要使用IP了，只需要使用主机名。")]),s._v(" "),t("p",[s._v("这个文件在Linux下就是/etc/hosts，这种方式确实“可以工作”，但是"),t("strong",[s._v("当主机数量增长到一定数量级的时候仍然无法适用")]),s._v("。为了彻底解决这个问题，人们发明了DNS系统。经过几十年的发展，虽然系统、网络技术都发生了翻天覆地的变化，但是这个文件还是被当作传统保留了下来。")]),s._v(" "),t("p",[s._v("具体来说，hosts文件的作用主要如下：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("加快域名解析")]),s._v("。当访问网站时，系统会首先查看hosts文件中是否有记录，如果记录存在则直接解析出对应的IP，这时则不需要请求DNS服务器。")]),s._v(" "),t("li",[t("strong",[s._v("方便小型局域网用户使用的内部设备")]),s._v("。很多单位的局域网中都存在着不少内部应用系统（比如办公自动化OA、公司论坛等），平时在工作中也都需要访问，但是由于这些局域网太小而不必为此专门设置DNS服务器，那么此时使用hosts文件则能简单地解决这个问题。")])]),s._v(" "),t("p",[s._v("假设公司里有A、B两台主机，B主机的IP为"),t("code",[s._v("10.1.1.145")]),s._v("，为了方便访问B主机，可以在A主机的 "),t("code",[s._v("/etc/hosts")]),s._v("文件中添加一条记录：")]),s._v(" "),t("blockquote",[t("p",[s._v("10.1.1.145      hostB")])]),s._v(" "),t("h3",{attrs:{id:"_2-2-etc-resolv-conf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-etc-resolv-conf"}},[s._v("#")]),s._v(" 2.2 "),t("code",[s._v("/etc/resolv.conf")])]),s._v(" "),t("p",[s._v("使用hosts文件毕竟只能做有限的主机记录，无法将所有已知的主机名记录到hosts文件中。")]),s._v(" "),t("p",[s._v("因此，当今几乎所有的主机都在使用DNS来解析地址，从技术上来说，"),t("strong",[s._v("DNS就是全互联网上主机名及其IP地址对应关系的数据库")]),s._v("。设置主机为DNS客户端的配置文件就是 "),t("code",[s._v("/etc/resolv.conf")]),s._v("，其中包含 "),t("code",[s._v("nameserver")]),s._v("、"),t("code",[s._v("search")]),s._v("、"),t("code",[s._v("domain")]),s._v("这3个关键字。")]),s._v(" "),t("p",[s._v("以下是当前笔者测试机上的/etc/resolv.conf文件：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /etc/resolv.conf ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# generated by /sbin/dhclient-script ")]),s._v("\nsearch localdomain \nnameserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".159.2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("nameserver关键字后面紧跟着一个DNS主机的IP地址，可以设置2~3个nameserver，")]),s._v(" "),t("p",[s._v("但是主机在查询域名时会首先查询第一个DNS，当该DNS不可用时才会查询第二个DNS，以此类推。")]),s._v(" "),t("h1",{attrs:{id:"二、网络测试工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、网络测试工具"}},[s._v("#")]),s._v(" 二、网络测试工具")]),s._v(" "),t("h2",{attrs:{id:"_1-ping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-ping"}},[s._v("#")]),s._v(" 1.ping")]),s._v(" "),t("p",[s._v("ping程序的目的在于测试另一台主机是否可达:")]),s._v(" "),t("blockquote",[t("p",[s._v("一般来说，如果ping不到某台主机，就说明对方主机已经出现了问题，但是不排除由于链路中防火墙的因素、ping包被丢弃等原因而造成ping不通的情况。")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("  IP/HOST\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("example:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.212")]),s._v(".121.12\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("  www.baidu.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_2-host"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-host"}},[s._v("#")]),s._v(" 2.host")]),s._v(" "),t("p",[s._v("host命令是用来查询DNS记录的，如果使用域名作为host的参数，命令返回该域名的IP，如下所示：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ray@localhost dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" www.baidu.com\nwww.baidu.com is an "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" www.a.shifen.com.\nwww.a.shifen.com has address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.215")]),s._v(".177.39\nwww.a.shifen.com has address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.215")]),s._v(".178.60\nwww.a.shifen.com has address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".112.147\nwww.a.shifen.com has address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".111.111\nwww.a.shifen.com has address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.215")]),s._v(".177.38\nwww.a.shifen.com has address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.97")]),s._v(".33.108\nwww.a.shifen.com has address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.97")]),s._v(".33.107\nwww.a.shifen.com has address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".112.244\nwww.a.shifen.com has address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.215")]),s._v(".178.61\nwww.a.shifen.com has address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".111.149\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h1",{attrs:{id:"三、网络故障解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、网络故障解决"}},[s._v("#")]),s._v(" 三、网络故障解决")]),s._v(" "),t("h2",{attrs:{id:"_1-故障排除步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-故障排除步骤"}},[s._v("#")]),s._v(" 1.故障排除步骤")]),s._v(" "),t("p",[s._v("（1）确认网卡本身是否能正常工作")]),s._v(" "),t("blockquote",[t("p",[s._v("利用ping工具可以确认这点。输入ping 127.0.0.1，然后看是否能正常ping通？这里的127.0.0.1被称为主机的回环接口，是TCP/IP协议栈正常工作的前提。如果ping不通，一般可以证实为本机TCP/IP协议栈有问题，自然就无法连接网络了。不过，出现这种现象的概率比较低。")])]),s._v(" "),t("p",[s._v("（2）确认网卡是否出现了物理或驱动故障")]),s._v(" "),t("blockquote",[t("p",[s._v("使用ping本机IP地址的方式，如果能ping通则说明本地设备和驱动都正常。")])]),s._v(" "),t("p",[s._v("（3）确认是否能ping通同网段的其他主机")]),s._v(" "),t("blockquote",[t("p",[s._v("这一步主要是确认二层网络设备（比如交换机或者HUB）工作是否正常。如果ping不通往往说明二层网络上出现了问题，可能涉及交换机的端口工作模式、vlan划分等因素。")])]),s._v(" "),t("p",[s._v("（4）确认是否能ping通网关IP")]),s._v(" "),t("blockquote",[t("p",[s._v("如果数据包能正常到达网关，则说明主机和本地网络都工作正常。")])]),s._v(" "),t("p",[s._v("（5）确认是否能ping通公网上的IP")]),s._v(" "),t("blockquote",[t("p",[s._v("如果可以则说明本地的路由设置正确，否则就要确认路由设备是否做了正确的nat或路由设置。")])]),s._v(" "),t("p",[s._v("（6）确认是否能ping通公网上的某个域名")]),s._v(" "),t("blockquote",[t("p",[s._v("如果能ping通则说明DNS部分设置正确。")])]),s._v(" "),t("p",[s._v("即便实际工作中可能会受到诸如更复杂的网络环境、安全ACL、防火墙等众多因素的影响，而加大了网络排查的困难，但以上步骤是排除网络故障的主要环节，在排除不同的网络之间个性化的设置之后，排查的主要步骤都与此类似。")])])}),[],!1,null,null,null);a.default=n.exports}}]);