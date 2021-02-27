(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{394:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"虚拟-dns-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dns-服务器"}},[t._v("#")]),t._v(" 虚拟 DNS 服务器")]),t._v(" "),a("h2",{attrs:{id:"fakednsobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fakednsobject"}},[t._v("#")]),t._v(" FakeDnsObject")]),t._v(" "),a("p",[a("code",[t._v("FakeDnsObject")]),t._v(" 对应配置文件的 "),a("code",[t._v("fakedns")]),t._v(" 项。 (4.35.0+)")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ipPool"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"240.0.0.0/8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poolSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65535")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("ipPool")]),t._v(": string: CIDR")])]),t._v(" "),a("p",[t._v("虚拟 DNS 服务器分配 IP 的地址空间。由虚拟 DNS 服务器分配的地址会符合这个 CIDR 表达式。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("poolSize")]),t._v(": number")])]),t._v(" "),a("p",[t._v("虚拟 DNS 服务器所记忆的 IP - 域名映射 数量。")]),t._v(" "),a("h2",{attrs:{id:"虚拟-dns-服务器机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dns-服务器机制"}},[t._v("#")]),t._v(" 虚拟 DNS 服务器机制")]),t._v(" "),a("p",[t._v("虚拟 DNS 服务器会返回一个位于自己 "),a("code",[t._v("ipPool")]),t._v(" 内的 IP 地址为域名的虚构解析结果并记忆该域名与虚构解析结果之间的关系。")]),t._v(" "),a("p",[t._v("当客户端程序基于此解析结果请求连接这个 IP 所指向的主机时，对应 "),a("RouterLink",{attrs:{to:"/config/inbounds.html"}},[t._v("入站连接")]),t._v(" 的 "),a("code",[t._v("fakedns")]),t._v(" 流量侦测模块会将目标地址还原为对应的域名。")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);