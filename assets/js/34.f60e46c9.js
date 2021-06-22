(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{420:function(t,s,a){"use strict";a.r(s);var e=a(11),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vmess"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vmess"}},[t._v("#")]),t._v(" VMess")]),t._v(" "),a("ul",[a("li",[t._v("名称："),a("code",[t._v("vmess")])]),t._v(" "),a("li",[t._v("类型：入站 / 出站")])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/developer/protocols/vmess.html"}},[t._v("VMess")]),t._v(" 是一个加密传输协议，它分为入站和出站两部分，通常作为 V2Ray 客户端和服务器之间的桥梁。")],1),t._v(" "),a("p",[t._v("VMess 依赖于系统时间，请确保使用 V2Ray 的系统 UTC 时间误差在 90 秒之内，时区无关。在 Linux 系统中可以安装"),a("code",[t._v("ntp")]),t._v("服务来自动同步系统时间。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("在 v4.28.1 版本后，客户端 AlterID 设置为 0 代表启用 VMessAEAD ；服务端为自动适配，可同时兼容启用和未开启 VMessAEAD 的客户端。")]),t._v(" "),a("p",[t._v("对于 VMess MD5 认证信息的兼容可以被关闭。(v4.35.0+)")])]),t._v(" "),a("p",[t._v("VMess 的配置分为两部分，"),a("code",[t._v("InboundConfigurationObject")]),t._v("和"),a("code",[t._v("OutboundConfigurationObject")]),t._v("，分别对应入站和出站协议配置中的"),a("code",[t._v("settings")]),t._v("项。")]),t._v(" "),a("h2",{attrs:{id:"outboundconfigurationobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outboundconfigurationobject"}},[t._v("#")]),t._v(" OutboundConfigurationObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vnext"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37192")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27848739-7e62-4138-9fd3-098a63964b6b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("vnext")]),t._v("：[ "),a("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("一个数组，包含一系列的服务器配置")]),t._v(" "),a("h3",{attrs:{id:"serverobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverobject"}},[t._v("#")]),t._v(" ServerObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37192")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("address")]),t._v(": address")])]),t._v(" "),a("p",[t._v("服务器地址，支持 IP 地址或者域名。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("port")]),t._v(": number")])]),t._v(" "),a("p",[t._v("服务器端口号。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("users")]),t._v(": [ "),a("a",{attrs:{href:"#userobject"}},[t._v("UserObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("一组服务器认可的用户")]),t._v(" "),a("h3",{attrs:{id:"userobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#userobject"}},[t._v("#")]),t._v(" UserObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27848739-7e62-4138-9fd3-098a63964b6b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("id")]),t._v("：string")])]),t._v(" "),a("p",[t._v("VMess 用户的主 ID。必须是一个合法的 UUID。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("alterId")]),t._v("：number")])]),t._v(" "),a("p",[t._v("为了进一步防止被探测，一个用户可以在主 ID 的基础上，再额外生成多个 ID。这里只需要指定额外的 ID 的数量，推荐值为 0 代表启用 VMessAEAD。不指定的话，默认值是 "),a("code",[t._v("0")]),t._v("。最大值 "),a("code",[t._v("65535")]),t._v("。这个值不能超过服务器端所指定的值。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("客户端可通过设置环境变量 "),a("code",[t._v("V2RAY_VMESS_AEAD_DISABLED=true")]),t._v(" 强行禁用 VMessAEAD （不推荐，仅用于兼容服务端版本在 v4.28.1 前"),a("strong",[t._v("且")]),t._v("设置了 "),a("code",[t._v("alterId=0")]),t._v(" ）")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("level")]),t._v(": number")])]),t._v(" "),a("p",[t._v("用户等级")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("security")]),t._v(': "aes-128-gcm" | "chacha20-poly1305" | "auto" | "none" | "zero"')])]),t._v(" "),a("p",[t._v("加密方式，客户端将使用配置的加密方式发送数据，服务器端自动识别，无需配置。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"aes-128-gcm"')]),t._v("：推荐在 PC 上使用")]),t._v(" "),a("li",[a("code",[t._v('"chacha20-poly1305"')]),t._v("：推荐在手机端使用")]),t._v(" "),a("li",[a("code",[t._v('"auto"')]),t._v("：默认值，自动选择（运行框架为 AMD64、ARM64 或 s390x 时为 aes-128-gcm 加密方式，其他情况则为 Chacha20-Poly1305 加密方式）")]),t._v(" "),a("li",[a("code",[t._v('"none"')]),t._v("：不加密")]),t._v(" "),a("li",[a("code",[t._v('"zero"')]),t._v("：不加密，也不进行消息认证 (v4.35.0+)")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("推荐使用"),a("code",[t._v('"auto"')]),t._v("加密方式，这样可以永久保证安全性和兼容性。")]),t._v(" "),a("p",[a("code",[t._v('"none"')]),t._v(" 伪加密方式会计算并验证数据包的校验数据，由于认证算法没有硬件支持，在部分平台可能速度比有硬件加速的 "),a("code",[t._v('"aes-128-gcm"')]),t._v(" 还慢。")]),t._v(" "),a("p",[a("code",[t._v('"zero"')]),t._v(" 伪加密方式不会加密消息也不会计算数据的校验数据，因此理论上速度会高于其他任何加密方式。实际速度可能受到其他因素影响。")]),t._v(" "),a("p",[t._v("不推荐在未开启 TLS 加密并强制校验证书的情况下使用 "),a("code",[t._v('"none"')]),t._v(" "),a("code",[t._v('"zero"')]),t._v(" 伪加密方式。\n如果使用 CDN 或其他会解密 TLS 的中转平台或网络环境建立连接，不建议使用 "),a("code",[t._v('"none"')]),t._v(" "),a("code",[t._v('"zero"')]),t._v(" 伪加密方式。")]),t._v(" "),a("p",[t._v("无论使用哪种加密方式， VMess 的包头都会受到加密和认证的保护。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("experiments")]),t._v(": string")])]),t._v(" "),a("p",[t._v("启用的 VMess 协议实验性功能。（此处的功能为不稳定功能， 可能随时被移除）多个启用的实验之间可以用 | 字符分割，如 "),a("code",[t._v('"AuthenticatedLength|NoTerminationSignal"')]),t._v(" 。")]),t._v(" "),a("p",[a("code",[t._v('"AuthenticatedLength"')]),t._v(" 启用认证的数据包长度实验。此实验需要同时在客户端与服务器端同时开启，并运行相同版本的程序。 (v4.41.0+)")]),t._v(" "),a("p",[a("code",[t._v('"NoTerminationSignal"')]),t._v(" 启用不发送断开连接标致实验。此实验可能会影响被代理的连接的稳定性。 (v4.41.0+)")]),t._v(" "),a("h2",{attrs:{id:"inboundconfigurationobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inboundconfigurationobject"}},[t._v("#")]),t._v(" InboundConfigurationObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27848739-7e62-4138-9fd3-098a63964b6b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2ray.com"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"detour"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"to"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag_to_detour"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disableInsecureEncryption"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("clients")]),t._v(": [ "),a("a",{attrs:{href:"#clientobject"}},[t._v("ClientObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("一组服务器认可的用户。clients 可以为空。当此配置用作动态端口时，V2Ray 会自动创建用户。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("detour")]),t._v(": "),a("a",{attrs:{href:"#detourobject"}},[t._v("DetourObject")])])]),t._v(" "),a("p",[t._v("指示对应的出站协议使用另一个服务器。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("default")]),t._v(": "),a("a",{attrs:{href:"#defaultobject"}},[t._v("DefaultObject")])])]),t._v(" "),a("p",[t._v("可选，clients 的默认配置。仅在配合"),a("code",[t._v("detour")]),t._v("时有效。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("disableInsecureEncryption")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("是否禁止客户端使用不安全的加密方式，当客户端指定下列加密方式时，服务器会主动断开连接。默认值为"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"none"')])]),t._v(" "),a("li",[a("code",[t._v('"aes-128-cfb"')])])]),t._v(" "),a("h3",{attrs:{id:"clientobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clientobject"}},[t._v("#")]),t._v(" ClientObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27848739-7e62-4138-9fd3-098a63964b6b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2ray.com"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("id")]),t._v(": string")])]),t._v(" "),a("p",[t._v("VMess 的用户 ID。必须是一个合法的 UUID。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("level")]),t._v(": number")])]),t._v(" "),a("p",[t._v("用户等级，详见"),a("RouterLink",{attrs:{to:"/config/policy.html"}},[t._v("本地策略")])],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("alterId")]),t._v(": number")])]),t._v(" "),a("p",[t._v("与上文出站协议中的含义相同。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("email")]),t._v(": string")])]),t._v(" "),a("p",[t._v("用户邮箱地址，用于区分不同用户的流量。")]),t._v(" "),a("h3",{attrs:{id:"detourobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detourobject"}},[t._v("#")]),t._v(" DetourObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"to"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag_to_detour"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("to")]),t._v(": string")])]),t._v(" "),a("p",[t._v("一个入站协议的"),a("code",[t._v("tag")]),t._v("，详见 "),a("RouterLink",{attrs:{to:"/config/inbounds.html#inboundobject"}},[t._v("InboundObject")]),t._v(" 。指定的入站协议必须是一个 VMess")],1),t._v(" "),a("h3",{attrs:{id:"defaultobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultobject"}},[t._v("#")]),t._v(" DefaultObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("level")]),t._v(": number")])]),t._v(" "),a("p",[t._v("用户等级，意义同上。默认值为"),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("alterId")]),t._v(": number")])]),t._v(" "),a("p",[t._v("动态端口的默认"),a("code",[t._v("alterId")]),t._v("，默认值为"),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"vmess-md5-认证信息-玷污机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vmess-md5-认证信息-玷污机制"}},[t._v("#")]),t._v(" VMess MD5 认证信息 玷污机制")]),t._v(" "),a("p",[t._v("为了进一步对抗可能的探测和封锁，自 v4.24 版本起，每个 VMess 认证数据的服务器端结构都会包含一个一次写入的玷污状态标记，初始状态为无瑕状态，当服务器检测到重放探测时或者因为其他原因入站连接出错以致校验数据不正确时，该连接所对应的请求认证数据会被玷污。")]),t._v(" "),a("p",[t._v('被玷污的认证数据无法被用于建立连接，当攻击者或客户端使用被玷污的认证数据建立连接时，服务器会输出包含 "invalid user" "ErrTainted" 的错误信息，并阻止该连接。')]),t._v(" "),a("p",[t._v("当服务器没有受到重放攻击时，该机制对正常连接的客户端没有影响。如果服务器正在被重放攻击，可能会出现连接不稳定的情况。")]),t._v(" "),a("p",[t._v("拥有服务器 UUID 以及其他连接数据的恶意程序可能根据此机制对服务器发起拒绝服务攻击，受到此类攻击的服务可以通过修改 proxy/vmess/validator.go 文件中 func (v *TimedUserValidator) BurnTaintFuse(userHash []byte) error 函数的 atomic.CompareAndSwapUint32(pair.taintedFuse, 0, 1) 语句为 atomic.CompareAndSwapUint32(pair.taintedFuse, 0, 0) 来解除服务器对此类攻击的安全保护机制。使用 VMessAEAD 认证机制的客户端不受到 VMess MD5 认证信息 玷污机制 的影响。")]),t._v(" "),a("h2",{attrs:{id:"vmess-md5-认证信息-淘汰机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vmess-md5-认证信息-淘汰机制"}},[t._v("#")]),t._v(" VMess MD5 认证信息 淘汰机制")]),t._v(" "),a("p",[t._v("VMessAEAD 协议已经经过同行评议并已经整合了相应的修改。 VMess MD5 认证信息 的淘汰机制已经启动。")]),t._v(" "),a("p",[t._v("自 2022 年 1 月 1 日起，服务器端将默认禁用对于 MD5 认证信息 的兼容。任何使用 MD5 认证信息的客户端将无法连接到禁用 VMess MD5 认证信息的服务器端。")]),t._v(" "),a("p",[t._v("在服务器端可以通过设置环境变量 "),a("code",[t._v("v2ray.vmess.aead.forced")]),t._v(" = "),a("code",[t._v("true")]),t._v(" 以关闭对于 MD5 认证信息的兼容。\n或者 "),a("code",[t._v("v2ray.vmess.aead.forced")]),t._v(" = "),a("code",[t._v("false")]),t._v(" 以强制开启对于 MD5 认证信息 认证机制的兼容 （不受到 2022 年自动禁用机制的影响） 。 (v4.35.0+)")])])}),[],!1,null,null,null);s.default=r.exports}}]);