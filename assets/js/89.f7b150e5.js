(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{367:function(t,a,s){"use strict";s.r(a);var v=s(14),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"名词解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解析"}},[t._v("#")]),t._v(" 名词解析")]),t._v(" "),a("p",[t._v("CDN： content delivery network\nGSLB： Global Server Load Balancing(全局负载均衡)\nSLB: Server Load Balancing(本地负载均衡)")]),t._v(" "),a("ul",[a("li",[t._v("SLB(Server load balancing)是对集群内物理主机的负载均衡，而GSLB是对物理集群的负载均衡。")]),t._v(" "),a("li",[t._v("负载均衡（Cloud Load Balancer，CLB）提供安全快捷的流量分发服务，访问流量经由 CLB 可以自动分配到云中的多台云服务器上，扩展系统的服务能力并消除单点故障。")])]),t._v(" "),a("p",[t._v("CLB：Cloud Load Balancing（应该是腾讯云/阿里云独创的名词，其实就是SLB）")]),t._v(" "),a("ul",[a("li",[t._v("负载均衡服务通过设置虚拟服务地址（VIP），将位于同一地域的多台云服务器资源虚拟成一个高性能、高可用的应用服务池。根据应用指定的方式，将来自客户端的网络请求分发到云服务器池中。\n")])]),t._v(" "),a("blockquote",[a("p",[t._v("什么是CDN，CDN就是，内容分发网络，它是一组分布在多个不同地理位置的 Web 服务器。我们都知道，当服务器离用户越远时，延迟越高。CDN 就是为了解决这一问题，在多个位置部署服务器，让用户离服务器更近，从而缩短请求时间。")])]),t._v(" "),a("h2",{attrs:{id:"cdn原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn原理"}},[t._v("#")]),t._v(" CDN原理：")]),t._v(" "),a("p",[t._v("​\t当用户访问一个网站时，如果没有 CDN，过程是这样的：")]),t._v(" "),a("p",[t._v("​\t1.浏览器要将域名解析为 IP 地址，所以需要向本地 DNS 发出请求。")]),t._v(" "),a("p",[t._v("2.本地 DNS 依次向根服务器、顶级域名服务器、权限服务器发出请求，得到网站服务器的 IP 地址。")]),t._v(" "),a("p",[t._v("3.本地 DNS 将 IP 地址发回给浏览器，浏览器向网站服务器 IP 地址发出请求并得到资源。")]),t._v(" "),a("h4",{attrs:{id:"过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过程"}},[t._v("#")]),t._v(" 过程")]),t._v(" "),a("p",[t._v("如果用户访问的网站部署了 CDN，过程是这样的：\n"),a("img",{attrs:{src:"https://mc.qcloudimg.com/static/img/1bead74703061b71eeaf6bf4db27fcdb/image.png",alt:""}})]),t._v(" "),a("ol",[a("li",[t._v("用户向 www.test.com 下的某图片资源（如：1.jpg）发起请求，会先向 Local DNS 发起域名解析请求。")]),t._v(" "),a("li",[t._v("当 Local DNS 解析 www.test.com 时，会发现已经配置了 CNAME www.test.com.cdn.dnsv1.com，解析请求会发送至 Tencent DNS（GSLB），GSLB 为腾讯云自主研发的调度体系，会为请求分配最佳节点 IP。")]),t._v(" "),a("li",[t._v("Local DNS 获取 Tencent DNS 返回的解析 IP。")]),t._v(" "),a("li",[t._v("用户获取解析 IP。")]),t._v(" "),a("li",[t._v("用户向获取的 IP 发起对资源 1.jpg 的访问请求。")]),t._v(" "),a("li",[t._v("若该 IP 对应的节点缓存有 1.jpg，则会将数据直接返回给用户（10），此时请求结束。若该节点未缓存 1.jpg，则节点会向业务源站发起对 1.jpg 的请求（6、7、8），获取资源后，结合用户自定义配置的缓存策略（可参考产品文档中的 缓存过期配置），将资源缓存至节点（9），并返回给用户（10），此时请求结束。")])]),t._v(" "),a("blockquote",[a("p",[t._v("CNAME域名解析即别名记录，当您需要将域名指向另一个域名，再由另一个域名提供IP地址时，就需要添加CNAME记录。")])]),t._v(" "),a("ul",[a("li",[t._v("A记录：就是把一个域名解析到一个IP下（通过访问这个域名就访问了这个IP 因为IP有不确定性很容易变 可以理解用域名来管理它）访问这个域名就是访问了这个IP")]),t._v(" "),a("li",[t._v("CNAME记录：就是把一个域名解析到另一个域名下（通过访问这个别名（子域名、二级域名以及更多级）然后就访问了另一个域名）例子：我给bbb.com（顶级域名）添加一条别名（CNAME）记录 主机记录为aaa 记录值为ccc.com 然后域名的别名就是 aaa.bbb.com 就是别名了 然后当我访问aaa.bbb.com的时候就相当于访问了ccc.com这个域名\n图片还没有哦\nNS记录：域名服务器记录，如果需要把子域名交给其他DNS服务商解析，就需要添加NS记录。你可以理解为，假如我们买了阿里云的域名或腾讯云的域名我们需要用哪一家的DNS服务器来解析它，这个记录是必须的。\n")])]),t._v(" "),a("h2",{attrs:{id:"什么时候不使用cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么时候不使用cdn"}},[t._v("#")]),t._v(" 什么时候不使用cdn")]),t._v(" "),a("p",[t._v("你到底要不要用CDN呢")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("几种明确不该用CDN的情况")]),t._v(" "),a("ol",[a("li",[t._v("你构建的是内部网络应用，不与外部Internet连接；")]),t._v(" "),a("li",[t._v("像银行系统这样的应用，安全和隐私是最优先考虑的，就要让所有源文件和服务器位置完全处于自己掌控中；")]),t._v(" "),a("li",[t._v("你为公司或者国家开发的应用，而他们恰好对某些CDN的域名或者IP地址限制访问。")]),t._v(" "),a("li",[t._v("动态资源")])])]),t._v(" "),a("li",[a("p",[t._v("CDN对低流量的小网站性能提升并不明显，如果没有需要高带宽的视频、音频文件，把你的文件放在一起可能还更简单。")])]),t._v(" "),a("li",[a("p",[t._v("对流量高的网站，CDN可以大大提升性能，但假如你的用户以移动设备为主，可能自己优化过的小文件比CDN上的大文件要下载和执行的更快。")])]),t._v(" "),a("li",[a("p",[t._v("在实际中通过JavaScript搜集用户分别使用CDN文件和本地服务器文件时加载页面的速度，以决定一段时间内是选择CDN还是本地文件。")])]),t._v(" "),a("li",[a("p",[t._v("对于重要的文件，最好还是提供本地文件的冗余，以应对CDN文件不可用的情况。以jquery为例：")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://ajax.googleapis.com/ajax/libs/jquery1.4.3/jquery.min.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jQuery "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<script src=\\"scripts/jquery-1.4.3.min.js\\">"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<\\/scrript>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("这里通过判断window.jquery全局对象是否存在来判断jQuery是否通过CDN加载成功，不成功就通过document.write方法来加载本地的jQuery文件，注意这里用到了转义字符‘\\’避免浏览器将document.write方法内的“"),t._v("”当成了结束标签。")]),t._v(" "),a("h2",{attrs:{id:"什么时候使用cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么时候使用cdn"}},[t._v("#")]),t._v(" 什么时候使用cdn")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("浏览器从服务器上下载css、js和图片等文件时都要和服务器连接，而大部分浏览器对同一个域名用于下载文件的并发连接数限制在4个，这意味着如果要下载第五个文件就必须等前四个文件中有一个已经加载完成，假如前4个文件都很大，第五个文件就要等很久，整个网页的加载速度就受限于此了。"),a("strong",[t._v("用CDN就可以通过不同的域名来加载文件，从而使下载文件的并发连接数大大增加。")])])]),t._v(" "),a("li",[a("p",[t._v("jQuery一类的库文件现在被广泛使用，如果访问你网站的用户的浏览器之前在访问别的网站时通过和你相同的CDN已经加载了jQuery，由于jQuery文件已经被缓存了，就不用重新下载了。")])]),t._v(" "),a("li",[a("p",[t._v("也许你的网站主机性能很好，但是应该不会比Google、Microsoft和Yahoo等大公司的容量和可扩展性更高，他们提供的CDN具有更好的可用性，更低的网络延迟和丢包率。")])]),t._v(" "),a("li",[a("p",[t._v("CDN能提供本地的数据中心，这样一来，那些远离你网站主服务器的用户也能就近很快地下载文件。")])]),t._v(" "),a("li",[a("p",[t._v("让你能够连接到特定版本的css文件或者js库文件，可以根据需求请求最新的版本。")])]),t._v(" "),a("li",[a("p",[t._v("很多商业付费的CDN能提供使用报告，这可以作为你自己网站分析报告的补充。")])]),t._v(" "),a("li",[a("p",[t._v("CDN能够分配负载，节省带宽，提高你网站的性能，降低你网站托管的成本，通常是免费的。")])]),t._v(" "),a("li",[a("p",[t._v("网页小文件：适用于常用网站中的静态内容（门户网站，电商网站，UGC 社区等），如图片，视频，各类 html 文件等进行缓存加速，可以使用户享受流畅的访问体验。")])]),t._v(" "),a("li",[a("p",[t._v("下载大文件：适用于各类文件下载。通过将文件分发到边缘，既可以缓解下载高峰期的带宽压力，也为用户提供稳定的下载体验。")])]),t._v(" "),a("li",[a("p",[t._v("音视频点播：适用于各类音视频点播网站。结合腾讯多年在线视频运营经验，可以在音视频访问量高并发时期有效保证各区域终端用户流畅收听和观看音视频。")])])]),t._v(" "),a("h2",{attrs:{id:"腾讯云官网对cdn的介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云官网对cdn的介绍"}},[t._v("#")]),t._v(" 腾讯云官网对CDN的介绍：")]),t._v(" "),a("p",[t._v("为了更好的对加速服务进行区分，腾讯云根据加速类型的不同提供了不同的产品：")]),t._v(" "),a("ol",[a("li",[t._v("针对静态资源的 CDN - 内容分发网络：用户多次访问某一资源，返回相同内容。")])]),t._v(" "),a("ul",[a("li",[t._v("例如：html、css 和 js 文件、图片、视频、软件安装包、apk 文件、压缩包文件等。")]),t._v(" "),a("li",[t._v("推荐场景：网站静态资源加速，文件下载加速，音视频加速。")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("针对动态资源的 ECDN - 全站加速网络：用户多次访问某一资源，返回不同内容。")])]),t._v(" "),a("ul",[a("li",[t._v("例如：API 接口、.jsp、.asp、.php、.perl 和 .cgi 文件等。")]),t._v(" "),a("li",[t._v("推荐场景：动态加速，动静加速。")])]),t._v(" "),a("h1",{attrs:{id:"gslb的常用技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gslb的常用技术"}},[t._v("#")]),t._v(" GSLB的常用技术")]),t._v(" "),a("ol",[a("li",[t._v("DNS调度:基于请求端local dns的出口IP归属地及运营商属性的DNS调度；")]),t._v(" "),a("li",[t._v("302调度:基于客户端IP归属地及运营商属性的302跳转调度；")]),t._v(" "),a("li",[t._v("基于IP欺骗的GSLB")])]),t._v(" "),a("h2",{attrs:{id:"dns调度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns调度"}},[t._v("#")]),t._v(" DNS调度")]),t._v(" "),a("p",[t._v("优点：\n1.简单易用、用户无感知\n2.客户端兼容性好\n缺点：\n1.调度策略非实时生效\n原因：DNS是树型分布式系统，所有节点上都会按域名的TTL来做缓存，\n这就导致CDN的调度策略其实并不是实时生效的。\n2. 调度不够精确\n原因：大量的local DNS不支持edns协议，拿不到客户的真实IP，\nCDN绝大多数时候只能通过local DNS ip来做决策，\n而local DNS ip有时候不太靠谱。\n(一种是厂商配置的localDNS 并不是本地的IP地址，例如上海的IP配置了北京的DNS，\n一种是8.8.8.8这种Public DNS，接入IP是Anycast IP没有归属地一说，\n出口IP经常变动，比如中国大陆使用时，出口IP经常是中国台湾的google机房。)")]),t._v(" "),a("p",[t._v("当GSLB设备采用“用户就近访问”的原则作为选择最优服务器的策略时，会存在判断不准的现象。\n原因是在这种策略下，GSLB设备是根据用户IP地址和内容服务器IP地址比较来判断其就近性的，但由于DNS响应是通过本地DNS服务器到达用户的，GSLB设备实际上只能得到用户的本地DNS服务器地址，若用户指定的DNS服务器IP不能正确代表用户的实际位置，就会出现判断不准的现象。")]),t._v(" "),a("h2",{attrs:{id:"http-redirection-302跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-redirection-302跳转"}},[t._v("#")]),t._v(" http redirection 302跳转")]),t._v(" "),a("blockquote",[a("p",[t._v("为了解决基于DNS实现方式判断不准的问题，又出现了基于HTTP重定向的GSLB。\n这种方案中GSLB使用HTTP重定向技术，将用户访问重定向到最合适的服务器上。")])]),t._v(" "),a("p",[t._v("优点：\n1.实时调度、准确性高\n原因：由于可以拿到请求的出口IP，每次拿到的最终IP都是实时计算的结果，\n所以调度策略是实时生效的，也是当前网络中的最真实情况提供的IP。\n缺点：\n1.业务兼容性： 要求用户的客户端必须支持302跳转。\n2.增加了访问的延迟：使用于对延时敏感业务。\n原因：这种模式的调度，每个请求都会多出一次http交互。\n比如web静态小资源就不太合适，适用于客户端兼容性好的大文件下载业务。")]),t._v(" "),a("h2",{attrs:{id:"ip诈骗-三角传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip诈骗-三角传输"}},[t._v("#")]),t._v(" ip诈骗（三角传输）")]),t._v(" "),a("blockquote",[a("p",[t._v("HTTP重定向方案解决了判断不准确的问题，但只能针对HTTP协议应用使用。对于HTTP协议以外的访问，就需要使用基于IP欺骗（又称三角传输）的GSLB。")])]),t._v(" "),a("p",[t._v("基于IP欺骗的方案同样需要首先将GSLB设备的IP地址在DNS中登记为域名的A记录，这样用户对该域名的请求包都会先发送到GSLB设备。")]),t._v(" "),a("p",[t._v("如上图所示，GSLB设备首次收到服务请求包后，会选择一个最合适的服务器，并将服务请求包发送到该服务器。服务器在向用户发送响应包时，将其源IP地址字段改为GSLB设备的IP，发送给用户。")]),t._v(" "),a("p",[t._v("这样，整个过程对用户来说，感觉到的只是GSLB设备在为其提供服务，并不知道其中经历这样一个三角传输的过程。")]),t._v(" "),a("p",[t._v("而且这种方案可以对所有类型的访问如HTTP、FTP等进行重定向，但其速度和效率相对比前两种方案要差一点，因为用户所有的访问请求都通过三个点才能响应，经历了更多的路径和处理，所以其主要作为HTTP重定向方案的补充方案在同一GSLB设备中实现。")])])}),[],!1,null,null,null);a.default=_.exports}}]);