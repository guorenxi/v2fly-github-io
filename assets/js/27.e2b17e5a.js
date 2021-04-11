(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{414:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),a("ul",[a("li",[t._v("名称："),a("code",[t._v("http")])]),t._v(" "),a("li",[t._v("类型：入站／出站")])]),t._v(" "),a("p",[t._v("HTTP 的配置分为两部分，"),a("code",[t._v("InboundConfigurationObject")]),t._v(" 和 "),a("code",[t._v("OutboundConfigurationObject")]),t._v("，分别对应入站和出站协议配置中的 "),a("code",[t._v("settings")]),t._v(" 项。")]),t._v(" "),a("h2",{attrs:{id:"inboundconfigurationobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inboundconfigurationobject"}},[t._v("#")]),t._v(" InboundConfigurationObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accounts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-username"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pass"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-password"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowTransparent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userLevel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("应该注意，虽然 "),a("code",[t._v("http inbound")]),t._v(" 可以提供公共服务，但 http 协议没有对传输加密，不适宜经公网中传输，更容易成为被人用作攻击的肉鸡。"),a("code",[t._v("http inbound")]),t._v(" 更有意义的用法是在局域网或本机环境下监听，为其他程序提供本地服务。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("timeout")]),t._v(": number")])]),t._v(" "),a("p",[t._v("从客户端读取数据的超时设置（秒），0 表示不限时。默认值为 300。 V2Ray 3.1 后等价于对应用户等级的 "),a("code",[t._v("connIdle")]),t._v(" 策略。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("accounts")]),t._v(": ["),a("a",{attrs:{href:"#accountobject"}},[t._v("AccountObject")]),t._v("]")])]),t._v(" "),a("p",[t._v("一个数组，数组中每个元素为一个用户帐号。默认值为空。")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("accounts")]),t._v(" 非空时，HTTP 代理将对入站连接进行 Basic Authentication 验证。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("allowTransparent")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("当为 "),a("code",[t._v("true")]),t._v(" 时，会转发所有 HTTP 请求，而非只是代理请求。若配置不当，开启此选项会导致死循环。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("userLevel")]),t._v(": number")])]),t._v(" "),a("p",[t._v("用户等级，所有连接使用这一等级。")]),t._v(" "),a("h3",{attrs:{id:"accountobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accountobject"}},[t._v("#")]),t._v(" AccountObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-username"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pass"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-password"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("user")]),t._v(": string")])]),t._v(" "),a("p",[t._v("用户名，字符串类型。必填。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("pass")]),t._v(": string")])]),t._v(" "),a("p",[t._v("密码，字符串类型。必填。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("在 Linux 中使用以下环境变量即可在当前 session 使用全局 HTTP 代理（很多软件都支持这一设置，也有不支持的）。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("export http_proxy=http://127.0.0.1:8080/")]),t._v(" (地址须改成你配置的 HTTP 入站代理地址)")]),t._v(" "),a("li",[a("code",[t._v("export https_proxy=$http_proxy")])])])]),t._v(" "),a("h2",{attrs:{id:"outboundconfigurationobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outboundconfigurationobject"}},[t._v("#")]),t._v(" OutboundConfigurationObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.108.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-username"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pass"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-password"')]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("(V2Ray 4.21.0+)")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("应该注意，虽然 "),a("code",[t._v("http outbound")]),t._v(" 可以作为对外访问的配置，但 "),a("code",[t._v("http proxy")]),t._v(" 协议没有对传输加密，不适宜经公网中传输，且因不支持 udp 传输将会导致 core 功能受限（Routing 过程的的 DNS 查询不可用）。"),a("code",[t._v("http outbound")]),t._v(" 更有意义的用法是在特殊情况下，只能使用 "),a("code",[t._v("http proxy")]),t._v(" 对外访问内部网络中，作为为其他协议连接代理服务器的前置代理使用（见 "),a("code",[t._v("OutboundObject")]),t._v(" 的 "),a("code",[t._v("ProxySettingsObject")]),t._v("）。另因 "),a("code",[t._v("http proxy")]),t._v(" 只能代理 tcp 协议，udp 系的协议均不能通过。")])]),t._v(" "),a("p",[t._v("(V2Ray 4.21.1+)")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("4.20.0 版本中引入了 http outbound 作为其他协议的前置代理用法中，缺乏了对 TLS 配置的支持。4.21.1 的补丁版本中对 "),a("code",[t._v("streamSettings")]),t._v(" 中的 "),a("code",[t._v("security")]),t._v(" 和 "),a("code",[t._v("tlsSettings")]),t._v(" 保留生效。目前前置代理的用法中，vmess/tcp、vmess/tcp-tls 和 shadowsocks 等三种协议方式可使用，其他传输协议的前置代理用法需后续版本开发支持。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("servers")]),t._v(": 数组")])]),t._v(" "),a("p",[t._v("HTTP 代理服务器配置，若配置多个，循环使用 (RoundRobin)。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("address")]),t._v(": string")])]),t._v(" "),a("p",[t._v("HTTP 代理服务器地址，必填。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("port")]),t._v(": int")])]),t._v(" "),a("p",[t._v("HTTP 代理服务器端口，必填。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("user")]),t._v(": ["),a("a",{attrs:{href:"#accountobject"}},[t._v("AccountObject")]),t._v("]")])]),t._v(" "),a("p",[t._v("一个数组，数组中每个元素为一个用户帐号。默认值为空。")])])}),[],!1,null,null,null);s.default=e.exports}}]);