(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{441:function(t,e,s){"use strict";s.r(e);var r=s(11),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"remote-control-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remote-control-api"}},[t._v("#")]),t._v(" Remote control API")]),t._v(" "),s("p",[t._v("Some V2Ray APIs can be opened for remote control. These APIs are based on "),s("a",{attrs:{href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC"),s("OutboundLink")],1),t._v(". This API is mostly for advanced users.")]),t._v(" "),s("p",[t._v("When remote control is turned on, V2Ray will build an outbound proxy by itself, which is identified by the value of the "),s("code",[t._v("tag")]),t._v(" configuration. The user must manually point all inbound gRPC connections to this outbound proxy through "),s("RouterLink",{attrs:{to:"/en_US/config/routing.html"}},[t._v("routing")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"apiobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apiobject"}},[t._v("#")]),t._v(" ApiObject")]),t._v(" "),s("p",[s("code",[t._v("ApiObject")]),t._v(" corresponds to the "),s("code",[t._v("api")]),t._v(" item of the configuration file.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"services"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HandlerService"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LoggerService"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StatsService"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),s("p",[t._v("Outbound proxy ID.")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("services")]),t._v(": [string]")])]),t._v(" "),s("p",[t._v("The list of available APIs, see "),s("a",{attrs:{href:"#Supported-api-list"}},[t._v("API list")]),t._v(" for details.")]),t._v(" "),s("h2",{attrs:{id:"list-of-supported-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-of-supported-apis"}},[t._v("#")]),t._v(" List of supported APIs")]),t._v(" "),s("h3",{attrs:{id:"handlerservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handlerservice"}},[t._v("#")]),t._v(" HandlerService")]),t._v(" "),s("p",[t._v("Some of the APIs that modify the inbound and outbound proxy:")]),t._v(" "),s("ul",[s("li",[t._v("Add a new inbound proxy;")]),t._v(" "),s("li",[t._v("Add a new outbound proxy;")]),t._v(" "),s("li",[t._v("Delete an existing inbound proxy;")]),t._v(" "),s("li",[t._v("Delete an existing outbound proxy;")]),t._v(" "),s("li",[t._v("Add a user to an inbound proxy (only support VMess, VLESS, Trojan);")]),t._v(" "),s("li",[t._v("Delete a user in an inbound proxy (only support VMess, VLESS, Trojan);")])]),t._v(" "),s("h3",{attrs:{id:"loggerservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loggerservice"}},[t._v("#")]),t._v(" LoggerService")]),t._v(" "),s("p",[t._v("Supports the restart of the built-in Logger, and can cooperate with logrotate to perform some operations on the log file.")]),t._v(" "),s("h3",{attrs:{id:"statsservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statsservice"}},[t._v("#")]),t._v(" StatsService")]),t._v(" "),s("p",[t._v("The built-in data statistics service, please refer to "),s("RouterLink",{attrs:{to:"/en_US/config/stats.html"}},[t._v("Statistics")]),t._v(" for details.")],1),t._v(" "),s("h3",{attrs:{id:"observatoryservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#observatoryservice"}},[t._v("#")]),t._v(" ObservatoryService")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/en_US/config/observatory.html"}},[t._v("Connection Observatory")]),t._v(" API (v4.38.0+).")],1)])}),[],!1,null,null,null);e.default=a.exports}}]);