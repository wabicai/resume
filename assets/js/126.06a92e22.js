(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{401:function(t,v,_){"use strict";_.r(v);var i=_(14),a=Object(i.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"mac地址-ip地址-子网掩码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mac地址-ip地址-子网掩码"}},[t._v("#")]),t._v(" MAC地址，iP地址，子网掩码")]),t._v(" "),v("h2",{attrs:{id:"一-路由器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一-路由器"}},[t._v("#")]),t._v(" 一. 路由器")]),t._v(" "),v("ol",[v("li",[t._v("可以再不同网段之间转发数据")]),t._v(" "),v("li",[t._v("隔绝广播域")]),t._v(" "),v("li",[t._v("主机发数据前，先判断我和目标主机的IP地址是否在同一网段\n"),v("ol",[v("li",[t._v("在同一网段：ARP广播")]),t._v(" "),v("li",[t._v("不在同一网段：发送ARP到路由器的网关，网关把自己的MAC地址返回给主机，然后再回来到路由器。路由器继续发送ARP广播")]),t._v(" "),v("li",[t._v("每个网口有6个字节（48bit）的MAC地址，全球唯一。固话在网卡ROM中")]),t._v(" "),v("li",[t._v("当48位时，为广播地址")]),t._v(" "),v("li",[t._v("改MAC地址可以蹭网")]),t._v(" "),v("li",[t._v("如果MAC地址修改，之前交换机发送失败，会重新发送一次ARP（ARP缓存两分钟过期）")])])])]),t._v(" "),v("h2",{attrs:{id:"二-ip地址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二-ip地址"}},[t._v("#")]),t._v(" 二.ip地址")]),t._v(" "),v("ol",[v("li",[t._v("ip地址两部分：主机id，网络id，")]),t._v(" "),v("li",[t._v("同一网段的计算机，网络id相同")]),t._v(" "),v("li",[t._v("通过子网掩码可以计算出网络id（网段）")]),t._v(" "),v("li",[t._v("计算机和其他计算机通信前，会判断是否在同一网段")])]),t._v(" "),v("h2",{attrs:{id:"三-网络层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三-网络层"}},[t._v("#")]),t._v(" 三. 网络层")]),t._v(" "),v("p",[t._v("ARP、IP、ICMP")]),t._v(" "),v("p",[t._v("TTL")])])}),[],!1,null,null,null);v.default=a.exports}}]);