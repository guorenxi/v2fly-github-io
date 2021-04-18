(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{423:function(t,a,e){"use strict";e.r(a);var s=e(11),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"routing-路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#routing-路由"}},[t._v("#")]),t._v(" Routing 路由")]),t._v(" "),e("p",[t._v("V2Ray 内建了一个路由模块，可以将入站数据按需求由不同的出站连接发出，以达到按需代理的目的。这一功能的常见用法是分流国内外流量。V2Ray 可以通过内部机制判断不同国家或地区的流量，然后将它们发送到不同的出站代理。")]),t._v(" "),e("h2",{attrs:{id:"routingobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#routingobject"}},[t._v("#")]),t._v(" RoutingObject")]),t._v(" "),e("p",[e("code",[t._v("RoutingObject")]),t._v(" 对应配置文件的 "),e("code",[t._v("routing")]),t._v(" 项。")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domainStrategy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AsIs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domainMatcher"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mph"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"balancers"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("domainStrategy")]),t._v(': "AsIs" | "IPIfNonMatch" | "IPOnDemand"')])]),t._v(" "),e("p",[t._v("域名解析策略。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("AsIs")]),t._v("：只使用域名进行路由选择，默认值；")]),t._v(" "),e("li",[e("code",[t._v("IPIfNonMatch")]),t._v("：当域名没有匹配任何基于域名的规则时，将域名解析成 IP（A 记录或 AAAA 记录），进行基于 IP 规则的匹配；\n"),e("ul",[e("li",[t._v("当一个域名有多个 IP 地址时，会尝试匹配所有的 IP 地址，直到其中一个与某个 IP 规则匹配为止；")]),t._v(" "),e("li",[t._v("解析后的 IP 仅在路由选择时起作用，转发的数据包中依然使用原始域名。")])])]),t._v(" "),e("li",[e("code",[t._v("IPOnDemand")]),t._v("：当匹配时碰到任何基于 IP 的规则，立即将域名解析为 IP 进行匹配。")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("domainMatcher")]),t._v(': "linear" | "mph"')])]),t._v(" "),e("p",[t._v("选择要使用的域名匹配算法。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("linear")]),t._v("：使用线性匹配算法，默认值；")]),t._v(" "),e("li",[e("code",[t._v("mph")]),t._v("：使用最小完美散列（minimal perfect hash）算法（v4.36.1+）。\n"),e("ul",[e("li",[t._v("测试数据约 17 万条，匹配速度提升约 30%，内存占用减少约 15%")])])])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("rules")]),t._v(": ["),e("a",{attrs:{href:"#ruleobject"}},[t._v("RuleObject")]),t._v("]")])]),t._v(" "),e("p",[t._v("对应一个数组，数组中每一项是一个规则。对于每一个连接，路由将根据这些规则依次进行判断，当一个规则生效时，即将这个连接转发至它所指定的 "),e("code",[t._v("outboundTag")]),t._v("（或 "),e("code",[t._v("balancerTag")]),t._v("，V2Ray 4.4+）。当没有匹配到任何规则时，流量默认被转发至第一个 "),e("code",[t._v("outbound")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("balancers")]),t._v(": [ "),e("a",{attrs:{href:"#balancerobject"}},[t._v("BalancerObject")]),t._v(" ]")])]),t._v(" "),e("p",[t._v("（V2Ray 4.4+）一个数组，数组中每一项是一个负载均衡器的配置。当一个规则指向一个负载均衡器时，V2Ray 会通过此负载均衡器选出一个 "),e("code",[t._v("outbound")]),t._v("，然后由它转发流量。")]),t._v(" "),e("h2",{attrs:{id:"ruleobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ruleobject"}},[t._v("#")]),t._v(" RuleObject")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domainMatcher"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mph"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baidu.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qq.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:cn"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:/path/to/third-party/geositefile.dat:cn"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ip"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0/8"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.0.0.0/8"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fc00::/7"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fe80::/10"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:cn"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:!cn"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:/path/to/third-party/geoipfile.dat:cn"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:/path/to/third-party/geoipfile.dat:!cn"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext-ip:/path/to/third-party/geoipfile.dat:cn"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext-ip:/path/to/third-party/geoipfile.dat:!cn"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"53,443,1000-2000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sourcePort"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"53,443,1000-2000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"source"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.0.0.1"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2ray.com"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag-vmess"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bittorrent"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attrs"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"attrs[':method'] == 'GET'\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"direct"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"balancerTag"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balancer"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("当多个属性同时指定时，这些属性需要同时满足，才可以使当前规则生效。即 "),e("code",[t._v("domains")]),t._v(" 和 "),e("code",[t._v("ip")]),t._v(" 规则需要分开使用。")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("domainMatcher")]),t._v(': "linear" | "mph"')])]),t._v(" "),e("p",[t._v("选择要使用的域名匹配算法。此处 "),e("code",[t._v("domainMatcher")]),t._v(" 的优先级高于 "),e("code",[t._v("RoutingObject")]),t._v(" 配置的 "),e("code",[t._v("domainMatcher")]),t._v("。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("linear")]),t._v("：使用线性匹配算法，默认值；")]),t._v(" "),e("li",[e("code",[t._v("mph")]),t._v("：使用最小完美散列（minimal perfect hash）算法（v4.36.1+）。\n"),e("ul",[e("li",[t._v("测试数据约 17 万条，匹配速度提升约 30%，内存占用减少约 15%")])])])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("type")]),t._v(': "field"')])]),t._v(" "),e("p",[t._v("目前只支持 "),e("code",[t._v("field")]),t._v(" 这一个选项。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("domain")]),t._v(": [string]")])]),t._v(" "),e("p",[t._v("一个数组，数组每一项是一个域名的匹配。有以下几种形式：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("纯字符串")]),t._v("：当此字符串匹配目标域名中任意部分，该规则生效。比如 "),e("code",[t._v("sina.com")]),t._v(" 可以匹配 "),e("code",[t._v("sina.com")]),t._v("、"),e("code",[t._v("sina.com.cn")]),t._v("、"),e("code",[t._v("sina.company")]),t._v(" 和 "),e("code",[t._v("www.sina.com")]),t._v("，但不匹配 "),e("code",[t._v("sina.cn")]),t._v("。")]),t._v(" "),e("li",[e("strong",[t._v("正则表达式")]),t._v("：由 "),e("code",[t._v("regexp:")]),t._v(" 开始，余下部分是一个正则表达式。当此正则表达式匹配目标域名时，该规则生效。例如 "),e("code",[t._v("regexp:\\.goo.*\\.com$")]),t._v(" 匹配 "),e("code",[t._v("www.google.com")]),t._v("、"),e("code",[t._v("fonts.googleapis.com")]),t._v("，但不匹配 "),e("code",[t._v("google.com")]),t._v("。")]),t._v(" "),e("li",[e("strong",[t._v("子域名（推荐）")]),t._v("：由 "),e("code",[t._v("domain:")]),t._v(" 开始，余下部分是一个域名。当此域名是目标域名或其子域名时，该规则生效。例如 "),e("code",[t._v("domain:v2ray.com")]),t._v(" 匹配 "),e("code",[t._v("www.v2ray.com")]),t._v("、"),e("code",[t._v("v2ray.com")]),t._v("，但不匹配 "),e("code",[t._v("xv2ray.com")]),t._v("。")]),t._v(" "),e("li",[e("strong",[t._v("完整匹配")]),t._v("：由 "),e("code",[t._v("full:")]),t._v(" 开始，余下部分是一个域名。当此域名完整匹配目标域名时，该规则生效。例如 "),e("code",[t._v("full:v2ray.com")]),t._v(" 匹配 "),e("code",[t._v("v2ray.com")]),t._v(" 但不匹配 "),e("code",[t._v("www.v2ray.com")]),t._v("。")]),t._v(" "),e("li",[e("strong",[t._v("预定义域名列表")]),t._v("：由 "),e("code",[t._v("geosite:")]),t._v(" 开头，余下部分是一个类别名称（域名列表），如 "),e("code",[t._v("geosite:google")]),t._v(" 或者 "),e("code",[t._v("geosite:cn")]),t._v("。名称及域名列表参考"),e("a",{attrs:{href:"#%E9%A2%84%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E5%88%97%E8%A1%A8"}},[t._v("预定义域名列表")]),t._v("。")]),t._v(" "),e("li",[e("strong",[t._v("从文件中加载域名")]),t._v("：形如 "),e("code",[t._v("ext:file:tag")]),t._v("，必须以 "),e("code",[t._v("ext:")]),t._v(" 开头，后面跟文件名和标签，文件存放在"),e("RouterLink",{attrs:{to:"/config/env.html#资源文件路径"}},[t._v("资源目录")]),t._v("中，文件格式与 "),e("code",[t._v("geosite.dat")]),t._v(" 相同，标签必须在文件中存在。")],1)]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("ip")]),t._v(": [string]")])]),t._v(" "),e("p",[t._v("一个数组，数组内每一项代表一个 IP 范围。当某一项匹配目标 IP 时，此规则生效。有以下几种形式：")]),t._v(" "),e("ul",[e("li",[t._v("IP：形如 "),e("code",[t._v("127.0.0.1")]),t._v("。")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",target:"_blank",rel:"noopener noreferrer"}},[t._v("CIDR"),e("OutboundLink")],1),t._v("：形如 "),e("code",[t._v("10.0.0.0/8")]),t._v("。")]),t._v(" "),e("li",[t._v("GeoIP：\n"),e("ul",[e("li",[t._v("形如 "),e("code",[t._v("geoip:cn")]),t._v(" 为"),e("code",[t._v("正向匹配")]),t._v("，即为匹配「中国大陆 IP 地址」。后面跟双字符"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%9C%8B%E5%AE%B6%E5%9C%B0%E5%8D%80%E4%BB%A3%E7%A2%BC",target:"_blank",rel:"noopener noreferrer"}},[t._v("国家或地区代码"),e("OutboundLink")],1),t._v("，支持所有可以上网的国家和地区。")]),t._v(" "),e("li",[t._v("形如 "),e("code",[t._v("geoip:!cn")]),t._v(" 为"),e("code",[t._v("反向匹配")]),t._v("，即为匹配「非中国大陆 IP 地址」。后面跟双字符"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%9C%8B%E5%AE%B6%E5%9C%B0%E5%8D%80%E4%BB%A3%E7%A2%BC",target:"_blank",rel:"noopener noreferrer"}},[t._v("国家或地区代码"),e("OutboundLink")],1),t._v("，支持所有可以上网的国家和地区。")]),t._v(" "),e("li",[t._v("特殊值："),e("code",[t._v("geoip:private")]),t._v("（V2Ray 3.5+），包含所有私有地址，如 "),e("code",[t._v("127.0.0.1")]),t._v("。")])])]),t._v(" "),e("li",[t._v("从文件中加载 IP：\n"),e("ul",[e("li",[t._v("形如 "),e("code",[t._v("ext:file:tag")]),t._v(" 和 "),e("code",[t._v("ext-ip:file:tag")]),t._v(" 为"),e("code",[t._v("正向匹配")]),t._v("，即为匹配 「tag 内的 IP 地址」。")]),t._v(" "),e("li",[t._v("形如 "),e("code",[t._v("ext:file:!tag")]),t._v(" 和 "),e("code",[t._v("ext-ip:file:!tag")]),t._v(" 为"),e("code",[t._v("反向匹配")]),t._v("，即为匹配「非 tag 内的 IP 地址」。")]),t._v(" "),e("li",[t._v("必须以 "),e("code",[t._v("ext:")]),t._v(" 或 "),e("code",[t._v("ext-ip:")]),t._v(" 开头，后面跟文件名、"),e("code",[t._v("标签")]),t._v("或 "),e("code",[t._v("!标签")]),t._v("，文件存放在"),e("RouterLink",{attrs:{to:"/config/env.html#资源文件路径"}},[t._v("资源目录")]),t._v("中，文件格式与 "),e("code",[t._v("geoip.dat")]),t._v(" 相同，标签必须在文件中存在。")],1)])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("code",[t._v("ext:geoip.dat:cn")]),t._v(" 和 "),e("code",[t._v("ext-ip:geoip.dat:cn")]),t._v(" 等价于 "),e("code",[t._v("geoip:cn")]),t._v("；")]),t._v(" "),e("p",[e("code",[t._v("ext:geoip.dat:!cn")]),t._v(" 和 "),e("code",[t._v("ext-ip:geoip.dat:!cn")]),t._v(" 等价于 "),e("code",[t._v("geoip:!cn")]),t._v("。")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("port")]),t._v("：number | string")])]),t._v(" "),e("p",[t._v("目标端口范围，有三种形式：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("a-b")]),t._v("：a 和 b 均为正整数，且小于 65536。这个范围是一个前后闭合区间，当目标端口落在此范围内时，此规则生效。")]),t._v(" "),e("li",[e("code",[t._v("a")]),t._v("：a 为正整数，且小于 65536。当目标端口为 a 时，此规则生效。")]),t._v(" "),e("li",[t._v('（V2Ray 4.18+）以上两种形式的混合，以逗号 "," 分隔。形如：'),e("code",[t._v("53,443,1000-2000")]),t._v("。")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("sourcePort")]),t._v("：number | string")])]),t._v(" "),e("p",[t._v("来源端口，有三种形式：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("a-b")]),t._v("：a 和 b 均为正整数，且小于 65536。这个范围是一个前后闭合区间，当目标端口落在此范围内时，此规则生效。")]),t._v(" "),e("li",[e("code",[t._v("a")]),t._v("：a 为正整数，且小于 65536。当目标端口为 a 时，此规则生效。")]),t._v(" "),e("li",[t._v('（V2Ray 4.18+）以上两种形式的混合，以逗号 "," 分隔。形如：'),e("code",[t._v("53,443,1000-2000")]),t._v("。")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("network")]),t._v(': "tcp" | "udp" | "tcp,udp"')])]),t._v(" "),e("p",[t._v('可选的值有 "tcp"、"udp" 或 "tcp,udp"，当连接方式是指定的方式时，此规则生效。')]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("source")]),t._v(": [string]")])]),t._v(" "),e("p",[t._v("一个数组，数组内每一项代表一个 IP 范围，形式有 IP、CIDR、GeoIP 和从文件中加载 IP。当某一项匹配来源 IP 时，此规则生效。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("user")]),t._v(": [string]")])]),t._v(" "),e("p",[t._v("一个数组，数组内每一项是一个邮箱地址。当某一项匹配来源用户时，此规则生效。当前 Shadowsocks 和 VMess 支持此规则。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("inboundTag")]),t._v(": [string]")])]),t._v(" "),e("p",[t._v("一个数组，数组内每一项是一个标识。当某一项匹配入站协议的标识时，此规则生效。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("protocol")]),t._v(': [ "http" | "tls" | "bittorrent" ]')])]),t._v(" "),e("p",[t._v("一个数组，数组内每一项表示一种协议。当某一个协议匹配当前连接的流量时，此规则生效。必须开启入站代理中的 "),e("code",[t._v("sniffing")]),t._v(" 选项。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("attrs")]),t._v(": string")])]),t._v(" "),e("p",[t._v("（V2Ray 4.18+）一段脚本，用于检测流量的属性值。当此脚本返回真值时，此规则生效。")]),t._v(" "),e("p",[t._v("脚本语言为 "),e("a",{attrs:{href:"https://github.com/bazelbuild/starlark",target:"_blank",rel:"noopener noreferrer"}},[t._v("Starlark"),e("OutboundLink")],1),t._v("，它的语法是 Python 的子集。脚本接受一个全局变量 "),e("code",[t._v("attrs")]),t._v("，其中包含了流量相关的属性。")]),t._v(" "),e("p",[t._v("目前只有 HTTP 入站代理会设置这一属性。")]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("ul",[e("li",[t._v("检测 HTTP GET："),e("code",[t._v("attrs[':method'] == 'GET'")])]),t._v(" "),e("li",[t._v("检测 HTTP Path："),e("code",[t._v("attrs[':path'].startswith('/test')")])]),t._v(" "),e("li",[t._v("检测 Content Type："),e("code",[t._v("attrs['accept'].index('text/html') >= 0")])])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("outboundTag")]),t._v(": string")])]),t._v(" "),e("p",[t._v("对应一个额外 "),e("RouterLink",{attrs:{to:"/config/outbounds.html#outboundobject"}},[t._v("出站连接配置")]),t._v(" 的标识。")],1),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("balancerTag")]),t._v(": string")])]),t._v(" "),e("p",[t._v("对应一个负载均衡器的标识。"),e("code",[t._v("balancerTag")]),t._v(" 和 "),e("code",[t._v("outboundTag")]),t._v(" 须二选一。当同时指定时，"),e("code",[t._v("outboundTag")]),t._v(" 生效。")]),t._v(" "),e("h2",{attrs:{id:"balancerobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#balancerobject"}},[t._v("#")]),t._v(" BalancerObject")]),t._v(" "),e("p",[t._v("负载均衡器配置。当一个负载均衡器生效时，它会从指定的出站协议中，按配置选出一个最合适的出站协议，进行流量转发。")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balancer"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"selector"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strategy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"random"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),e("p",[t._v("此负载均衡器的标识，用于匹配 "),e("code",[t._v("RuleObject")]),t._v(" 中的 "),e("code",[t._v("balancerTag")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("selector")]),t._v(": [ string ]")])]),t._v(" "),e("p",[t._v("一个字符串数组，其中每一个字符串将用于和出站协议标识的前缀匹配。在以下几个出站协议标识中："),e("code",[t._v('[ "a", "ab", "c", "ba" ]')]),t._v("，"),e("code",[t._v('"selector": ["a"]')]),t._v(" 将匹配到 "),e("code",[t._v('[ "a", "ab" ]')]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("strategy")]),t._v(": StrategyObject")])]),t._v(" "),e("p",[t._v("进行负载均衡的策略对象。")]),t._v(" "),e("h2",{attrs:{id:"strategyobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#strategyobject"}},[t._v("#")]),t._v(" StrategyObject")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"random"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("type")]),t._v(":  string")])]),t._v(" "),e("p",[t._v("进行负载均衡的策略类型。")]),t._v(" "),e("p",[t._v("可以填入的类型包括 "),e("code",[t._v("random")]),t._v(" 以及 "),e("code",[t._v("leastPing")]),t._v(" (v4.38.0+).")]),t._v(" "),e("p",[e("code",[t._v("random")]),t._v(" 会从出站中随机选出一个作为最终的出站连接。")]),t._v(" "),e("p",[e("code",[t._v("leastPing")]),t._v(" 会根据观测记录选择 HTTPS GET 请求完成时间最快的一个出站连接。")]),t._v(" "),e("p",[t._v("负载均衡策略依赖于出站 "),e("RouterLink",{attrs:{to:"/config/observatory.html"}},[t._v("连接观测")]),t._v(" 组件的观测记录。")],1),t._v(" "),e("h2",{attrs:{id:"预定义域名列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预定义域名列表"}},[t._v("#")]),t._v(" 预定义域名列表")]),t._v(" "),e("p",[t._v("此列表由 "),e("a",{attrs:{href:"https://github.com/v2fly/domain-list-community",target:"_blank",rel:"noopener noreferrer"}},[t._v("domain-list-community"),e("OutboundLink")],1),t._v(" 项目维护，预置于每一个 V2Ray 的安装包中，文件名为 "),e("code",[t._v("geosite.dat")]),t._v("。这个文件包含了一些常见的域名，使用方式："),e("code",[t._v("geosite:listname")]),t._v("，如 "),e("code",[t._v("geosite:google")]),t._v(" 表示对 "),e("code",[t._v("domain-list-community")]),t._v(" 项目 "),e("code",[t._v("data")]),t._v(" 目录里的 "),e("code",[t._v("google")]),t._v(" 文件内包含的域名，进行路由筛选或 DNS 筛选。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("如在使用 "),e("code",[t._v("geosite.dat")]),t._v(" 过程中，遇到问题或发现缺少某些域名，欢迎到 "),e("a",{attrs:{href:"https://github.com/v2fly/domain-list-community",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2fly/domain-list-community"),e("OutboundLink")],1),t._v(" 提 "),e("a",{attrs:{href:"https://github.com/v2fly/domain-list-community/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),e("OutboundLink")],1),t._v(" 或 "),e("a",{attrs:{href:"https://github.com/v2fly/domain-list-community/pulls",target:"_blank",rel:"noopener noreferrer"}},[t._v("pull request"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("p",[t._v("常见的域名有：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("category-ads")]),t._v("：包含了常见的广告域名。")]),t._v(" "),e("li",[e("code",[t._v("category-ads-all")]),t._v("：包含了常见的广告域名，以及广告提供商的域名。")]),t._v(" "),e("li",[e("code",[t._v("tld-cn")]),t._v("：包含了 CNNIC 管理的用于中国大陆的顶级域名，如以 "),e("code",[t._v(".cn")]),t._v("、"),e("code",[t._v(".中国")]),t._v(" 结尾的域名。")]),t._v(" "),e("li",[e("code",[t._v("tld-!cn")]),t._v("：包含了非中国大陆使用的顶级域名，如以 "),e("code",[t._v(".hk")]),t._v("（香港）、"),e("code",[t._v(".tw")]),t._v("（台湾）、"),e("code",[t._v(".jp")]),t._v("（日本）、"),e("code",[t._v(".sg")]),t._v("（新加坡）、"),e("code",[t._v(".us")]),t._v("（美国）"),e("code",[t._v(".ca")]),t._v("（加拿大）等结尾的域名。")]),t._v(" "),e("li",[e("code",[t._v("geolocation-cn")]),t._v("：包含了常见的大陆站点域名。")]),t._v(" "),e("li",[e("code",[t._v("geolocation-!cn")]),t._v("：包含了常见的非大陆站点域名，同时包含了 "),e("code",[t._v("tld-!cn")]),t._v("。")]),t._v(" "),e("li",[e("code",[t._v("cn")]),t._v("：相当于 "),e("code",[t._v("geolocation-cn")]),t._v(" 和 "),e("code",[t._v("tld-cn")]),t._v(" 的合集。")]),t._v(" "),e("li",[e("code",[t._v("apple")]),t._v("：包含了 Apple 旗下绝大部分域名。")]),t._v(" "),e("li",[e("code",[t._v("google")]),t._v("：包含了 Google 旗下绝大部分域名。")]),t._v(" "),e("li",[e("code",[t._v("microsoft")]),t._v("：包含了 Microsoft 旗下绝大部分域名。")]),t._v(" "),e("li",[e("code",[t._v("facebook")]),t._v("：包含了 Facebook 旗下绝大部分域名。")]),t._v(" "),e("li",[e("code",[t._v("twitter")]),t._v("：包含了 Twitter 旗下绝大部分域名。")]),t._v(" "),e("li",[e("code",[t._v("telegram")]),t._v("：包含了 Telegram 旗下绝大部分域名。")]),t._v(" "),e("li",[t._v("更多类别，请查看 "),e("a",{attrs:{href:"https://github.com/v2fly/domain-list-community/tree/master/data",target:"_blank",rel:"noopener noreferrer"}},[t._v("data 目录"),e("OutboundLink")],1),t._v("。")])])])}),[],!1,null,null,null);a.default=v.exports}}]);