(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{357:function(o,e,s){"use strict";s.r(e);var i=s(14),t=Object(i.a)({},(function(){var o=this,e=o._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("h1",{attrs:{id:"cookie、sessionstorage、localstorage、indexdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie、sessionstorage、localstorage、indexdb"}},[o._v("#")]),o._v(" cookie、sessionStorage、localStorage、indexDB")]),o._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#cookiesessionstoragelocalstorageindexdb"}},[o._v("cookie、sessionStorage、localStorage、indexDB")]),o._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%B8%80%E5%82%A8%E5%AD%98%E5%B0%91%E9%87%8F%E6%95%B0%E6%8D%AE-cookiesessionstorage-%E5%92%8C-localstorage"}},[o._v("一、储存少量数据： cookie，sessionStorage 和 localStorage")]),o._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#11-cookie-%E8%AF%A6%E8%A7%A3"}},[o._v("1.1 cookie 详解")]),o._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E5%B8%B8%E7%94%A8%E5%B1%9E%E6%80%A7"}},[o._v("常用属性：")])])])]),o._v(" "),e("li",[e("a",{attrs:{href:"#cookie-%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F"}},[o._v("Cookie 的生命周期")])])])]),o._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8C%E5%82%A8%E5%AD%98%E5%A4%A7%E9%87%8F%E6%95%B0%E6%8D%AE"}},[o._v("二、储存大量数据")]),o._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#indexdb"}},[o._v("indexDB：")])])])]),o._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%89%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF"}},[o._v("三、应用场景")])]),o._v(" "),e("li",[e("a",{attrs:{href:"#%E5%9B%9B-cookie-%E5%92%8C-session-%E7%9A%84%E9%97%AE%E9%A2%98"}},[o._v("四、 cookie 和 session 的问题")])]),o._v(" "),e("li",[e("a",{attrs:{href:"#cookie-%E7%9A%84%E8%B7%A8%E5%9F%9F%E5%85%B1%E4%BA%AB"}},[o._v("Cookie 的跨域共享")]),o._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E6%B5%8F%E8%A7%88%E5%99%A8-cookie-%E7%9A%84-same-site"}},[o._v("浏览器 cookie 的 same-site")])]),o._v(" "),e("li",[e("a",{attrs:{href:"#cors"}},[o._v("CORS")])]),o._v(" "),e("li",[e("a",{attrs:{href:"#%E5%A6%82%E6%9E%9C%E4%BD%8D%E4%BA%8E%E5%90%8C%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8Dsso-%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95"}},[o._v("如果位于同个二级域名（SSO 单点登录）")])]),o._v(" "),e("li",[e("a",{attrs:{href:"#%E9%99%8D%E5%9F%9F"}},[o._v("降域")])]),o._v(" "),e("li",[e("a",{attrs:{href:"#nginx-%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86"}},[o._v("nginx 反向代理")])])])])])])]),o._v(" "),e("h2",{attrs:{id:"一、储存少量数据-cookie-sessionstorage-和-localstorage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、储存少量数据-cookie-sessionstorage-和-localstorage"}},[o._v("#")]),o._v(" 一、储存少量数据： cookie，sessionStorage 和 localStorage")]),o._v(" "),e("p",[e("strong",[o._v("相同点")]),o._v("：cookie，sessionStorage 和 localStorage 都是"),e("strong",[o._v("存储在浏览器端")]),o._v("的。")]),o._v(" "),e("p",[e("strong",[o._v("不同点")]),o._v("：")]),o._v(" "),e("ol",[e("li",[e("strong",[o._v("cookie")]),o._v("数据始终在浏览器请求中被携带，在"),e("strong",[o._v("浏览器端和服务器端来回传递")]),o._v("的；"),e("strong",[o._v("sessStorage 和 localStorage")]),o._v("同属"),e("strong",[o._v("于 webStorage")]),o._v("，"),e("strong",[o._v("仅在本地保存")]),o._v("，不会传递到服务器端")]),o._v(" "),e("li",[o._v("存活时间："),e("strong",[o._v("cookie 在设置的存活时间之前一直有效")]),o._v("，"),e("strong",[o._v("sessionStorage")]),o._v("在浏览器"),e("strong",[o._v("窗口关闭之前")]),o._v("一直有效，"),e("strong",[o._v("localStorage 始终有效")])]),o._v(" "),e("li",[o._v("存储大小："),e("strong",[o._v("cookie 只有 4KB")]),o._v("，sessionStorage 和 localStorage 存储空间大一些("),e("strong",[o._v("大概 5Mb 左右")]),o._v("）")]),o._v(" "),e("li",[o._v("作用域："),e("strong",[o._v("sessionStorage 不在不同的浏览器窗口中共享，即使同一个页面")]),o._v("，\n而 cookie 和 localStorage 在"),e("strong",[o._v("同源窗口")]),o._v("（协议、域名、端口相同）中均"),e("strong",[o._v("共享")])]),o._v(" "),e("li",[o._v("储存类型：webStorage 只能存字符串，无法直接存对象。cookie 存的是文本文件。")])]),o._v(" "),e("h3",{attrs:{id:"_1-1-cookie-详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-cookie-详解"}},[o._v("#")]),o._v(" 1.1 cookie 详解")]),o._v(" "),e("h4",{attrs:{id:"常用属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用属性"}},[o._v("#")]),o._v(" 常用属性：")]),o._v(" "),e("ul",[e("li",[e("p",[e("strong",[o._v("Secure")]),o._v(" => cookie 只有通过 HTTPS 加密过才能发送给服务端")]),o._v(" "),e("ul",[e("li",[o._v("修改 cookie 时，domain 和 path 都相同才可以进行，有不同则创建一个新的 cookie")]),o._v(" "),e("li",[o._v("cookie 过期就会被浏览器删除")]),o._v(" "),e("li",[o._v("有助于避免 XSS 攻击")])])]),o._v(" "),e("li",[e("p",[e("strong",[o._v("HTTPOnly")]),o._v(" => 只允许通过请求访问 cookie，避免 document.cookie 方式攻击，有助于避免 CSRF 攻击")])]),o._v(" "),e("li",[e("p",[o._v("二级域名能读取设置了 domain 为顶级域名或者自身的 cookie，不能读取其他二级域名 domain 的 cookie。例如：要想 cookie 在多个二级域名中共享，需要设置 domain 为顶级域名，这样就可以在所有二级域名里面或者到这个 cookie 的值了。")])]),o._v(" "),e("li",[e("p",[o._v("顶级域名只能获取到 domain 设置为顶级域名的 cookie，domain 设置为其他子级域名的无法获取。")])])]),o._v(" "),e("h3",{attrs:{id:"cookie-的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的生命周期"}},[o._v("#")]),o._v(" Cookie 的生命周期")]),o._v(" "),e("p",[o._v("服务端一般都会给其设置一个过期时间 maxAge，短则 1 小时、1 天，长则 1 星期、1 个月甚至永久，这就是 Cookie 的生命(周期)。")]),o._v(" "),e("p",[o._v("Cookie 的存储形式，根据其生命周期的不同而不同。这由 maxAge 属性决定，共有这三种情况：")]),o._v(" "),e("ol",[e("li",[o._v("maxAge > 0：cookie 不仅内存里有，还会持久化到硬盘，也叫持久 Cookie。这样的话即使你关机重启(甚至过几天再访问)，这个 cookie 依旧存在，请求时依旧会携带")]),o._v(" "),e("li",[o._v("maxAge < 0：一般值为-1，也就临时 Cookie。该 Cookie 只在内存中有(如 session 级别)，一旦管理浏览器此 Cookie 将不复存在。值得注意的是：若使用无痕模式访问也是不会携带此 Cookie 的哟")]),o._v(" "),e("li",[o._v("maxAge = 0：内存中没有，硬盘中也没有了，也就立即删除 Cookie。此种 case 存在的唯一目的：服务浏览器可能的已存在的 cookie，让其立马失效(消失)\n❝Tips：请注意 maxAge<0(负数)和 maxAge=0 的区别。前者会存在于内存，只有关闭浏览器 or 重启才失效;后者是立即删除 ❞ 当然啦，Cookie 的生命周期除了受到后端设置的 Age 值来决定外，还有两种方式可“改变”它：")])]),o._v(" "),e("h2",{attrs:{id:"二、储存大量数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、储存大量数据"}},[o._v("#")]),o._v(" 二、储存大量数据")]),o._v(" "),e("h3",{attrs:{id:"indexdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#indexdb"}},[o._v("#")]),o._v(" indexDB：")]),o._v(" "),e("p",[o._v("特性：")]),o._v(" "),e("ol",[e("li",[o._v("储存量理论没有上限")]),o._v(" "),e("li",[o._v("操作是异步的。 loaclStorage 是同步的。操作性能高")]),o._v(" "),e("li",[o._v("支持储存 JS 的对象")]),o._v(" "),e("li",[o._v("是正经的数据库，数据库能干的他都可以")])]),o._v(" "),e("p",[o._v("缺点：")]),o._v(" "),e("ol",[e("li",[o._v("操作繁琐")]),o._v(" "),e("li",[o._v("本身有门槛")])]),o._v(" "),e("h2",{attrs:{id:"三、应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、应用场景"}},[o._v("#")]),o._v(" 三、应用场景")]),o._v(" "),e("ol",[e("li",[o._v("cookie：标记用户与跟踪用户行为")]),o._v(" "),e("li",[o._v("localStorage：长期保存在本地的数据（令牌）")]),o._v(" "),e("li",[o._v("sessionStorage：敏感账号一次性登陆")]),o._v(" "),e("li",[o._v("indexDB：储存大量数据、在线文档（富文本编辑器）、保存编辑历史。")])]),o._v(" "),e("h2",{attrs:{id:"四、-cookie-和-session-的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、-cookie-和-session-的问题"}},[o._v("#")]),o._v(" 四、 cookie 和 session 的问题")]),o._v(" "),e("ol",[e("li",[o._v("cookie 不安全，本地可以直接拿到")]),o._v(" "),e("li",[o._v("session 访问多会占用服务器性能")]),o._v(" "),e("li",[o._v("session 不支持分布式，会有负载均衡问题")])]),o._v(" "),e("h2",{attrs:{id:"cookie-的跨域共享"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的跨域共享"}},[o._v("#")]),o._v(" Cookie 的跨域共享")]),o._v(" "),e("p",[o._v("要实现 Cookie 的跨域共享，有 3 个关键点：")]),o._v(" "),e("ol",[e("li",[o._v("服务端负责在响应中将 Set-Cookie 发出来(由 Access-Control-Allow-Credentials 响应头决定 设置 true)(服务端能正确的在响应中有"),e("strong",[o._v("Set-Cookie")]),o._v("响应)")]),o._v(" "),e("li",[o._v("浏览器端只要响应里有 Set-Cookie 头，就将此 Cookie 存储(由异步对象的 XMLHttpRequest 对象的 withCredentials 属性决定 设置 true)")]),o._v(" "),e("li",[o._v("浏览器端发现只要有 Cookie，即使是跨域请求也将其带着(由异步对象的 withCredentials 属性决定)\n(当异步对象设置了"),e("strong",[o._v("withCredentials=true")]),o._v("时，浏览器会保留下响应的 Cookie 等信息，并且下次发送请求时将其携带。因此要指示浏览器存储 Cookie 并且每次跨域请求都携带，仅需加上此参数，此时服务端的"),e("strong",[o._v("Access-Control-Allow-Origin")]),o._v("这个响应头的值不能是通配符*，而只能是具体的值)")])]),o._v(" "),e("h3",{attrs:{id:"浏览器-cookie-的-same-site"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器-cookie-的-same-site"}},[o._v("#")]),o._v(" 浏览器 cookie 的 same-site")]),o._v(" "),e("ol",[e("li",[o._v("Strict（禁止第三方 cookie）")]),o._v(" "),e("li",[o._v("Lax 稍微严格一点")]),o._v(" "),e("li",[o._v("None（Secure 必须为 true）")])]),o._v(" "),e("h3",{attrs:{id:"cors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[o._v("#")]),o._v(" CORS")]),o._v(" "),e("ol",[e("li",[o._v("withCridential")]),o._v(" "),e("li",[o._v("后端配置"),e("code",[o._v("Access-Control-Allow-Credentials")])])]),o._v(" "),e("h3",{attrs:{id:"如果位于同个二级域名-sso-单点登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果位于同个二级域名-sso-单点登录"}},[o._v("#")]),o._v(" 如果位于同个二级域名（SSO 单点登录）")]),o._v(" "),e("ol",[e("li",[o._v("将 cookie 存在二级域名下")])]),o._v(" "),e("h3",{attrs:{id:"降域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#降域"}},[o._v("#")]),o._v(" 降域")]),o._v(" "),e("ol",[e("li",[o._v("将某个二级域名的 path 设置跟另外一个域名相同")])]),o._v(" "),e("h3",{attrs:{id:"nginx-反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-反向代理"}},[o._v("#")]),o._v(" nginx 反向代理")]),o._v(" "),e("ol",[e("li",[o._v("proxy_cookie_domain 做 cookie 域名转换")]),o._v(" "),e("li",[o._v("转换 response 的 set-cookie header 中的 domain 选项，由后端设置的域名 domain 转换成你的域名 replacement")])])])}),[],!1,null,null,null);e.default=t.exports}}]);