(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{441:function(e,s,t){"use strict";t.r(s);var a=t(11),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fake-dns-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fake-dns-server"}},[e._v("#")]),e._v(' "Fake" DNS server')]),e._v(" "),t("h2",{attrs:{id:"fakednsobject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fakednsobject"}},[e._v("#")]),e._v(" FakeDnsObject")]),e._v(" "),t("p",[t("code",[e._v("FakeDnsObject")]),e._v(" corresponds to the "),t("code",[e._v("fakedns")]),e._v(" item of the configuration file. (4.35.0+)")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ipPool"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"240.0.0.0/8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"poolSize"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("65535")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("blockquote",[t("p",[t("code",[e._v("ipPool")]),e._v(": string: CIDR")])]),e._v(" "),t("p",[e._v('The "Fake" DNS server\'s allocated IP address space. The address assigned by the virtual DNS server will conform to this CIDR expression.')]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("poolSize")]),e._v(": number")])]),e._v(" "),t("p",[e._v('The number of IP-domain mappings memorized by the "fake" DNS server.')]),e._v(" "),t("h2",{attrs:{id:"fake-dns-server-mechanism"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fake-dns-server-mechanism"}},[e._v("#")]),e._v(' "Fake" DNS server mechanism')]),e._v(" "),t("p",[e._v('The "Fake" DNS server will return a fictitious resolution result whose IP address in its own '),t("code",[e._v("ipPool")]),e._v(" is the domain name and remember the relationship between the domain name and the fictitious resolution result.")]),e._v(" "),t("p",[e._v("When the client program requests to connect to the host pointed to by this IP based on this analysis result, the "),t("code",[e._v("fakedns")]),e._v(" traffic detection module corresponding to [inbounds] (inbounds.md) will restore the target address to the corresponding domain name.")])])}),[],!1,null,null,null);s.default=r.exports}}]);