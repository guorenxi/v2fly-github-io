(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{444:function(t,v,_){"use strict";_.r(v);var a=_(9),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"命令行参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令行参数"}},[t._v("#")]),t._v(" 命令行参数")]),t._v(" "),_("h2",{attrs:{id:"v2ray"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v2ray"}},[t._v("#")]),t._v(" V2Ray")]),t._v(" "),_("p",[t._v("V2Ray 的程序文件的命令行参数如下：")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("v2ray "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-version"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-test"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-config"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("config.json"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-format"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("json"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),_("blockquote",[_("p",[_("code",[t._v("-version")])])]),t._v(" "),_("p",[t._v("只输出当前版本然后退出，不运行 V2Ray 主程序。")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("-test")])])]),t._v(" "),_("p",[t._v("测试配置文件有效性，如果有问题则输出错误信息，不运行 V2Ray 主程序。")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("-config")])])]),t._v(" "),_("p",[t._v("配置文件路径，可选的形式如下:")]),t._v(" "),_("ul",[_("li",[t._v("本地路径，可以是一个绝对路径，或者相对路径。")]),t._v(" "),_("li",[_("code",[t._v('"stdin:"')]),t._v(": 表示将从标准输入读取配置文件内容，调用者必须在输入完毕后关闭标准输入流。")]),t._v(" "),_("li",[t._v("以"),_("code",[t._v("http://")]),t._v("或"),_("code",[t._v("https://")]),t._v("(均为小写)开头: V2Ray 将尝试从这个远程地址加载配置文件。")])]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("-format")])])]),t._v(" "),_("p",[t._v("配置文件格式，可选的值有：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("json")]),t._v(": JSON 格式；")]),t._v(" "),_("li",[_("code",[t._v("pb")]),t._v(" 或 "),_("code",[t._v("protobuf")]),t._v(": Protobuf 格式；")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("当"),_("code",[t._v("-config")]),t._v("没有指定时，V2Ray 将先后尝试从以下路径加载"),_("code",[t._v("config.json")]),t._v(":")]),t._v(" "),_("ul",[_("li",[t._v("工作目录（Working Directory）")]),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/config/env.html"}},[t._v("环境变量")]),t._v("中"),_("code",[t._v("v2ray.location.asset")]),t._v("所指定的路径")],1)])]),t._v(" "),_("h2",{attrs:{id:"v2ctl"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v2ctl"}},[t._v("#")]),t._v(" V2Ctl")]),t._v(" "),_("p",[t._v("V2Ctl 是一个集合，它有若干个子命令组成。全局的命令行形式如下：")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("v2ctl "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("command"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("options"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),_("blockquote",[_("p",[_("code",[t._v("command")])])]),t._v(" "),_("p",[t._v("子命令，有以下选项:")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("api")]),t._v(": 调用 V2Ray 进程的远程控制指令。")]),t._v(" "),_("li",[_("code",[t._v("config")]),t._v(": 从标准输入读取 JSON 格式的配置，然后从标准输出打印 Protobuf 格式的配置。")]),t._v(" "),_("li",[_("code",[t._v("cert")]),t._v(": 生成 TLS 证书。")]),t._v(" "),_("li",[_("code",[t._v("fetch")]),t._v(": 抓取远程文件。")]),t._v(" "),_("li",[_("code",[t._v("tlsping")]),t._v(": (V2Ray 4.17+) 尝试进行 TLS 握手。")]),t._v(" "),_("li",[_("code",[t._v("verify")]),t._v(": 验证文件是否由 Project V 官方签名。")]),t._v(" "),_("li",[_("code",[t._v("uuid")]),t._v(": 输出一个随机的 UUID。")])]),t._v(" "),_("h3",{attrs:{id:"v2ctl-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v2ctl-api"}},[t._v("#")]),t._v(" V2Ctl Api")]),t._v(" "),_("p",[_("code",[t._v("v2ctl api [--server=127.0.0.1:8080] <Service.Method> <Request>")])]),t._v(" "),_("p",[t._v("调用 V2Ray 进程的远程控制指令。示例：")]),t._v(" "),_("p",[_("code",[t._v("v2ctl api --server=127.0.0.1:8080 LoggerService.RestartLogger ''")])]),t._v(" "),_("h3",{attrs:{id:"v2ctl-config"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v2ctl-config"}},[t._v("#")]),t._v(" V2Ctl Config")]),t._v(" "),_("p",[_("code",[t._v("v2ctl config")])]),t._v(" "),_("p",[t._v("此命令没有参数。它从标准输入读取 JSON 格式的配置，然后从标准输出打印 Protobuf 格式的配置。")]),t._v(" "),_("h3",{attrs:{id:"v2ctl-cert"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v2ctl-cert"}},[t._v("#")]),t._v(" V2Ctl Cert")]),t._v(" "),_("p",[_("code",[t._v('v2ctl cert [--ca] [--domain=v2ray.com] [--expire=240h] [--name="V2Ray Inc"] [--org="V2Ray Inc] [--json] [--file=v2ray]')])]),t._v(" "),_("p",[t._v("生成一个 TLS 证书。")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("--ca")])])]),t._v(" "),_("p",[t._v("如果指定此选项，将会生成一个 CA 证书。")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("--domain")])])]),t._v(" "),_("p",[t._v("证书的 Subject Alternative Name(SAN) 项。该参数可以多次使用，来指定多个域名。比如"),_("code",[t._v("--domain=v2ray.com --domain=v2ray.cool")]),t._v("。")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("--expire")])])]),t._v(" "),_("p",[t._v("证书有效期。格式为 Golang 的"),_("a",{attrs:{href:"https://golang.org/pkg/time/#ParseDuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("时间长度"),_("OutboundLink")],1),t._v("。")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("--name")])])]),t._v(" "),_("p",[t._v("证书的 Common Name(CN) 项。")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("--org")])])]),t._v(" "),_("p",[t._v("证书的 Orgnization 项。")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("--json")])])]),t._v(" "),_("p",[t._v("将生成的证书以 V2Ray 支持的 JSON 格式输出到标准输出。默认开启。")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("--file")])])]),t._v(" "),_("p",[t._v("将证书以 PEM 格式输出到文件。当指定时，将会生成证书与密钥两个文件。示例：当键入 "),_("code",[t._v("--file=a")]),t._v(" 时，将生成 "),_("code",[t._v("a_cert.pem")]),t._v(" 和 "),_("code",[t._v("a_key.pem")]),t._v(" 两个文件。")]),t._v(" "),_("h3",{attrs:{id:"v2ctl-fetch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v2ctl-fetch"}},[t._v("#")]),t._v(" V2Ctl Fetch")]),t._v(" "),_("p",[_("code",[t._v("v2ctl fetch <url>")])]),t._v(" "),_("p",[t._v("抓取指定的 URL 的内容并输出，只支持 HTTP 和 HTTPS。")]),t._v(" "),_("h3",{attrs:{id:"v2ctl-tlsping"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v2ctl-tlsping"}},[t._v("#")]),t._v(" V2Ctl TlsPing")]),t._v(" "),_("p",[_("code",[t._v("v2ctl tlsping <domain> --ip=[ip]")])]),t._v(" "),_("p",[t._v("向指定的域名发起 TLS 握手。")]),t._v(" "),_("blockquote",[_("p",[t._v("domain")])]),t._v(" "),_("p",[t._v("目标域名")]),t._v(" "),_("blockquote",[_("p",[t._v("--ip")])]),t._v(" "),_("p",[t._v("此域名的 IP 地址。如果未指定此参数，V2Ctl 将使用系统的 DNS 进行域名解析。")]),t._v(" "),_("h3",{attrs:{id:"v2ctl-verify"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v2ctl-verify"}},[t._v("#")]),t._v(" V2Ctl Verify")]),t._v(" "),_("p",[_("code",[t._v("v2ctl verify [--sig=/path/to/sigfile] <filepath>")])]),t._v(" "),_("p",[t._v("此命令用于验证文件是否由 Project V 官方签名。")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("--sig")])])]),t._v(" "),_("p",[t._v("签名文件路径，默认值为待验证文件加入'.sig'后缀。")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("filepath")])])]),t._v(" "),_("p",[t._v("待验证文件路径。")]),t._v(" "),_("h3",{attrs:{id:"v2ctl-uuid"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v2ctl-uuid"}},[t._v("#")]),t._v(" V2Ctl UUID")]),t._v(" "),_("p",[_("code",[t._v("v2ctl uuid")])]),t._v(" "),_("p",[t._v("此命令没有参数。每次运行都会输出一个新的 UUID。")])])}),[],!1,null,null,null);v.default=e.exports}}]);