(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{273:function(_,v,t){_.exports=t.p+"assets/img/2.9c23210e.png"},274:function(_,v,t){_.exports=t.p+"assets/img/3.71f1c185.png"},275:function(_,v,t){_.exports=t.p+"assets/img/4.d5d9e4d7.png"},301:function(_,v,t){"use strict";t.r(v);var s=t(14),r=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_22-移动基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_22-移动基本概念"}},[_._v("#")]),_._v(" 22.移动基本概念")]),_._v(" "),v("h2",{attrs:{id:"移动端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#移动端"}},[_._v("#")]),_._v(" 移动端")]),_._v(" "),v("h3",{attrs:{id:"_1-视口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-视口"}},[_._v("#")]),_._v(" 1. 视口")]),_._v(" "),v("blockquote",[v("p",[_._v("目标：了解布局视口、视觉视口、理想视口")])]),_._v(" "),v("p",[v("strong",[_._v("视口")]),_._v("（viewport）:就是浏览器显示页面内容的屏幕区域, 视口可以分为"),v("strong",[_._v("布局视口")]),_._v("、"),v("strong",[_._v("视觉视口")]),_._v("和"),v("strong",[_._v("理想视口")])]),_._v(" "),v("h4",{attrs:{id:"_1-1-布局视口-layout-viewport"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-布局视口-layout-viewport"}},[_._v("#")]),_._v(" 1.1 布局视口 layout viewport")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("概念")]),_._v(": 为了解决早期 pc 端页面在移动端的显示问题，一般移动端的浏览器设置的默认视口，成为布局视口")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("大白话")]),_._v("：浏览器默认的窗口宽度")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("布局视口大小")]),_._v("：iOS, Android 基本都将这个视口分辨率设置为 "),v("strong",[_._v("980px")]),_._v("，所以 PC 上的网页大多都能在手机上呈现，只不过元素看上去很小，一般默认可以通过手动缩放网页")]),_._v(" "),v("img",{attrs:{src:t(273)}})])]),_._v(" "),v("h4",{attrs:{id:"_1-2-视觉视口-visual-viewport"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-视觉视口-visual-viewport"}},[_._v("#")]),_._v(" 1.2 视觉视口 visual viewport")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("概念")]),_._v("：字面意思，它是"),v("strong",[_._v("用户正在看到的网站的区域")]),_._v("。注意：是网站的区域。")]),_._v(" "),v("p",[_._v("我们可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度")])]),_._v(" "),v("li",[v("img",{attrs:{src:t(274)}})])]),_._v(" "),v("h4",{attrs:{id:"_1-3-理想视口-ideal-viewport"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-理想视口-ideal-viewport"}},[_._v("#")]),_._v(" 1.3 理想视口 ideal viewport")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("概念")]),_._v("：布局视口的一个理想尺寸，只有当"),v("strong",[_._v("布局视口（浏览器）的尺寸等于设备屏幕的尺寸")]),_._v("时，才是理想视口")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("设置理想视口方法")]),_._v("："),v("strong",[_._v("mate 标签")])]),_._v(" "),v("img",{attrs:{src:t(275)}})]),_._v(" "),v("li",[v("p",[v("strong",[_._v("最标准的 viewport 设置")])]),_._v(" "),v("ul",[v("li",[_._v("视口宽度和设备保持一致")]),_._v(" "),v("li",[_._v("视口的默认缩放比例 1.0")]),_._v(" "),v("li",[_._v("不允许用户自行缩放")]),_._v(" "),v("li",[_._v("最大允许的缩放比例 1.0")]),_._v(" "),v("li",[_._v("最小允许的缩放比例 1.0")])])])]),_._v(" "),v("h3",{attrs:{id:"_2-二倍图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-二倍图"}},[_._v("#")]),_._v(" 2. 二倍图")]),_._v(" "),v("blockquote",[v("p",[_._v("目标：了解屏幕分辨率、了解图片分辨率、了解视网膜屏、会使用 background-size 设置背景图的大小、会使用二倍精灵图设置元素背景")])]),_._v(" "),v("h4",{attrs:{id:"_2-1-手机屏幕"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-手机屏幕"}},[_._v("#")]),_._v(" 2.1 手机屏幕")]),_._v(" "),v("ul",[v("li",[_._v("通常我们所指的屏幕"),v("code",[_._v("尺寸")]),_._v("，实际上指的是屏幕对角线的长度（一般用英寸来度量）如下图所示")]),_._v(" "),v("li",[_._v("1 英寸 = 2.54cm "),v("strong",[_._v("绝对单位")]),_._v("；（到哪都不会变的值）")])]),_._v(" "),v("img",{attrs:{src:"images/015.png"}}),_._v(" "),v("h4",{attrs:{id:"_2-2-物理像素-采光点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-物理像素-采光点"}},[_._v("#")]),_._v(" 2.2 物理像素（采光点）")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("概念")]),_._v("：客观存在。指计算机显示设备中的最小单位，即一个像素点的大小。每一个像素点可以理解为就是"),v("strong",[_._v("屏幕上的一个发光点")]),_._v("。每个点可以发一个颜色，就是我们看到的画面")]),_._v(" "),v("li",[v("strong",[_._v("发展")]),_._v("：早期的屏幕，物理像素点（客观的小灯泡）都比较大，比如玩游戏的超级玛丽的画面的颗粒感很强：随着技术的进步，物理像素点会被做的越来越小；会被做小；")])]),_._v(" "),v("img",{attrs:{src:"images/023.png"}}),_._v(" "),v("h4",{attrs:{id:"_2-3-屏幕分辨率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-屏幕分辨率"}},[_._v("#")]),_._v(" 2.3 屏幕分辨率")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("概念")]),_._v("：物理像素点的个数来衡量，表示屏幕水平和垂直方向的物理像素点的个数")]),_._v(" "),v("li",[_._v("iPhone3 和 iPhone4 是同一个屏幕尺寸下，比较分辨率：")])]),_._v(" "),v("img",{attrs:{src:"images/019.png"}}),_._v(" "),v("img",{attrs:{src:"images/021.jpg"}}),_._v(" "),v("ul",[v("li",[v("strong",[_._v("分辨率高的优势")]),_._v("：直观感受，画面细腻；"),v("strong",[_._v("Retina（视网膜屏幕）"),v("strong",[_._v("是一种显示技术，可以将把更多的物理像素点压缩至一块屏幕里；从而达到更高的分辨率，并提高屏幕显示的细腻程度，即")]),_._v("1px 代表更多的物理像素")])]),_._v(" "),v("li",[v("strong",[_._v("CSS 像素 px")]),_._v(" ：1px 代表的长度是固定的，因此屏幕分辨率越高，1px 代表的物理像素就越多")])]),_._v(" "),v("img",{attrs:{src:"images/99.png"}}),_._v(" "),v("h4",{attrs:{id:"_2-4-图片分辨率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-图片分辨率"}},[_._v("#")]),_._v(" 2.4 图片分辨率")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("概念")]),_._v("：指图片横纵方向各有多少个物理像素（光点）")])]),_._v(" "),v("li",[v("p",[_._v("下图：分辨率 640*426 ，提供了多少个色彩发光点（迎合物理像素点）；")])])]),_._v(" "),v("img",{attrs:{src:"images/022.jpg"}}),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("一个萝卜一个坑")]),_._v("：图片在手机上展示时，图片的光点会对应手机的光点（即物理像素点和物理像素点对接）")]),_._v(" "),v("p",[_._v("图片的光点比作萝卜，手机的采光点比作坑，光点是一一对应的，所以称：一个萝卜一个坑")])]),_._v(" "),v("li",[v("p",[_._v("假设："),v("strong",[_._v("有 200*200 分辨率")]),_._v("的图片，在不设置图片宽高的情况下，展示在宽度分别是 320（iphone3）、640(iphone4)分辨率的手机上，展示的效果如下：")]),_._v(" "),v("img",{attrs:{src:"images/020.png"}})])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("问题")]),_._v("：相同的图片不设置宽高，在不同的设备下，展示的大小不一样\n"),v("ul",[v("li",[_._v("宽度：第 2 个是第 1 个的 0.5 倍；")]),_._v(" "),v("li",[_._v("面积：第 2 个是第 1 个的 1/4 倍；")])])]),_._v(" "),v("li",[v("strong",[_._v("原因")]),_._v("：\n"),v("ul",[v("li",[_._v("200*200 分辨率的图片：200 个颜色发光点（萝卜）；")]),_._v(" "),v("li",[_._v("一个物理像素点发一个颜色：一个萝卜一个坑，屏幕都需要 200 个物理像素点；")]),_._v(" "),v("li",[_._v("坑的宽度大小：320（1）；640（0.5）；")]),_._v(" "),v("li",[_._v("所以显示为上图。")])])]),_._v(" "),v("li",[v("strong",[_._v("目标")]),_._v("：显示大小一样；")]),_._v(" "),v("li",[v("strong",[_._v("解决方法")]),_._v(" "),v("ul",[v("li",[_._v("直接设置图片宽高相同（不建议）：图片在分辨率高的设备上会模糊")]),_._v(" "),v("li",[v("strong",[_._v("UI 提供二倍图")])])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);