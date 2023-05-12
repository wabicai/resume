(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{374:function(_,v,t){"use strict";t.r(v);var a=t(14),s=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"udp-和-tcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#udp-和-tcp"}},[_._v("#")]),_._v(" UDP 和 TCP")]),_._v(" "),v("ol",[v("li",[v("p",[v("strong",[_._v("传输控制协议 TCP")]),_._v("（Transmisson Control Protocol）–提供"),v("strong",[_._v("面向连接")]),_._v("的，"),v("strong",[_._v("可靠的")]),_._v("数据传输服务。")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("用户数据协议 UDP")]),_._v("（User Datagram Protocol）–提供"),v("strong",[_._v("无连接")]),_._v("的，尽最大努力的数据传输服务（"),v("strong",[_._v("不保证数据传输的可靠性")]),_._v("）。")])])]),_._v(" "),v("h2",{attrs:{id:"tcp-的主要特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的主要特点"}},[_._v("#")]),_._v(" TCP 的主要特点")]),_._v(" "),v("ol",[v("li",[_._v("TCP 是面向连接的。（就好像打电话一样，通话前需要先拨号建立连接，通话结束后要挂机释放连接）；")]),_._v(" "),v("li",[_._v("每一条 TCP 连接只能有两个端点，每一条 TCP 连接只能是点对点的（一对一）；")]),_._v(" "),v("li",[_._v("TCP 提供可靠交付的服务。通过 TCP 连接传送的数据，无差错、不丢失、不重复、并且按序到达；")]),_._v(" "),v("li",[_._v("TCP 提供全双工通信。TCP 允许通信双方的应用进程在任何时候都能发送数据。"),v("strong",[_._v("TCP 连接的两端都设有发送缓存和接收缓存，用来临时存放双方通信的数据；")])]),_._v(" "),v("li",[_._v("面向字节流。TCP 中的“流”（Stream）指的是流入进程或从进程流出的字节序列。“面向字节流”的含义是：虽然应用程序和 TCP 的交互是一次一个数据块（大小不等），但 TCP 把应用程序交下来的数据仅仅看成是一连串的无结构的字节流。")])]),_._v(" "),v("h2",{attrs:{id:"udp-的主要特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#udp-的主要特点"}},[_._v("#")]),_._v(" UDP 的主要特点")]),_._v(" "),v("ol",[v("li",[_._v("UDP 是无连接的；")]),_._v(" "),v("li",[_._v("UDP 使用尽最大努力交付，即不保证可靠交付，因此主机不需要维持复杂的链接状态（这里面有许多参数）；")]),_._v(" "),v("li",[_._v("UDP 是面向报文的；")]),_._v(" "),v("li",[_._v("UDP 没有拥塞控制，因此网络出现拥塞不会使源主机的发送速率降低（对实时应用很有用，如 直播，实时视频会议等）；")]),_._v(" "),v("li",[_._v("UDP 支持一对一、一对多、多对一和多对多的交互通信；")]),_._v(" "),v("li",[_._v("UDP 的首部开销小，只有 8 个字节，比 TCP 的 20 个字节的首部要短")])]),_._v(" "),v("h2",{attrs:{id:"差别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#差别"}},[_._v("#")]),_._v(" 差别")]),_._v(" "),v("p",[_._v("TCP：面向链接、可靠、占用空间大、传输速率慢")]),_._v(" "),v("p",[_._v("​ 用在：文件传输、邮箱发送")]),_._v(" "),v("p",[_._v("​ 应用层协议：HTTP、HTTPS、DNS")]),_._v(" "),v("p",[_._v("UDP：面向报文、不可靠、占用空间小、传输速率快")]),_._v(" "),v("p",[_._v("​ 用在：直播、音视频通话")]),_._v(" "),v("p",[_._v("​ 应用层协议：DNS")]),_._v(" "),v("h1",{attrs:{id:"tcp-ip-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-协议"}},[_._v("#")]),_._v(" TCP/IP 协议")]),_._v(" "),v("ul",[v("li",[_._v("由网络层的（IP）与传输层的（TCP）组成")])]),_._v(" "),v("h2",{attrs:{id:"_1-三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-三次握手"}},[_._v("#")]),_._v(" 1. 三次握手")]),_._v(" "),v("blockquote",[v("p",[_._v("客户端–发送带有 SYN 标志的数据包–一次握手–服务端")])]),_._v(" "),v("blockquote",[v("p",[_._v("服务端–发送带有 SYN/ACK 标志的数据包–二次握手–客户端")])]),_._v(" "),v("blockquote",[v("p",[_._v("客户端–发送带有带有 ACK 标志的数据包–三次握手–服务端")])]),_._v(" "),v("ul",[v("li",[v("p",[_._v("以客户端作为连接发起端，第一次握手时，客户端发送 SYN 连接报文与 seq 序列号到服务端；第二次握手时，服务端回复 ACK 确认与 SYN 连接报文，同时将收到的客户端的 seq+1 并返回给客户端，并随机生成一个新的序列号 seq 发送给客户端。第三次握手时，此时已经建立连接，所以没有 SYN 的交换。第三次握手还可以携带数据，具体是客户端回复 ACK 确认报文，seq+1 并生成新的 seq 发送到服务端，并至此三次握手结束。")])]),_._v(" "),v("li",[v("p",[_._v("A （SYN 和 ISN（即初始的 seq100））=>B")])]),_._v(" "),v("li",[v("p",[_._v("B（标志位 ACK 和 SYN，和 ack101,、B 的 seq300）=>A")])]),_._v(" "),v("li",[v("p",[_._v("A(标志位 ACK 和 SYN，和 ack301、之前的 seq101)=>B")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdn.net/20180717202520531?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4OTUwMzE2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"img"}})]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdn.net/20180717204202563?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4OTUwMzE2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"img"}})]),_._v(" "),v("h3",{attrs:{id:"为什么要传回-syn"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要传回-syn"}},[_._v("#")]),_._v(" 为什么要传回 SYN")]),_._v(" "),v("p",[_._v("接收端传回发送端所发送的 SYN 是为了告诉发送端，我接收到的信息确实就是你所发送的信号了。")]),_._v(" "),v("h3",{attrs:{id:"传了-syn-为啥还要传-ack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#传了-syn-为啥还要传-ack"}},[_._v("#")]),_._v(" 传了 SYN,为啥还要传 ACK")]),_._v(" "),v("p",[_._v("双方通信无误必须是两者互相发送信息都无误。传了 SYN，证明发送方到接收方的通道没有问题，但是接收方到发送方的通道还需要 ACK 信号来进行验证。")])])]),_._v(" "),v("h2",{attrs:{id:"_2-为什么要三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么要三次握手"}},[_._v("#")]),_._v(" 2. 为什么要三次握手")]),_._v(" "),v("ol",[v("li",[_._v("A 对 B：听得到我说话吗=>B 对 A：听得到=>A 对 B：好的我知道了")]),_._v(" "),v("li",[_._v("至于为什么不能两次，分两种情况讨论: 1、是为了确认收发双方的接收、发送能力都正常，如果只有两次，服务端无法确认客户端的接收能力是否正常(因为服务端没收到客户端第三次握手回复)。2、如果两次握手就结束，那么万一第三次握手的报文被阻塞，直到后来到达的时候，会被服务端误认为是建立连接，然而这个报文早已失效，让服务端白白等待，浪费资源")])]),_._v(" "),v("h2",{attrs:{id:"_3-可靠传输-连续-arq-协议-滑动窗口协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-可靠传输-连续-arq-协议-滑动窗口协议"}},[_._v("#")]),_._v(" 3. 可靠传输——连续 ARQ 协议+滑动窗口协议")]),_._v(" "),v("h3",{attrs:{id:"校检和、流量控制、拥塞控制、停止等待协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#校检和、流量控制、拥塞控制、停止等待协议"}},[_._v("#")]),_._v(" 校检和、流量控制、拥塞控制、停止等待协议")]),_._v(" "),v("ol",[v("li",[_._v("应用数据被分割成 TCP 认为最适合发送的数据块。")]),_._v(" "),v("li",[_._v("TCP 给发送的每一个包进行编号，接收方对数据包进行排序，把有序数据传送给应用层。")]),_._v(" "),v("li",[v("strong",[_._v("校验和：")]),_._v(" TCP 将保持它首部和数据的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到段的检验和有差错，TCP 将丢弃这个报文段和不确认收到此报文段。")]),_._v(" "),v("li",[_._v("TCP 的接收端会丢弃重复的数据。")]),_._v(" "),v("li",[v("strong",[_._v("流量控制：")]),_._v(" TCP 连接的每一方都有固定大小的缓冲空间，TCP 的接收端只允许发送端发送接收端缓冲区能接纳的数据。当接收方来不及处理发送方的数据，能提示发送方降低发送的速率，防止包丢失。TCP 使用的流量控制协议是可变大小的滑动窗口协议。 （TCP 利用滑动窗口实现流量控制）")]),_._v(" "),v("li",[v("strong",[_._v("拥塞控制：")]),_._v(" 当网络拥塞时，减少数据的发送。")]),_._v(" "),v("li",[v("strong",[_._v("停止等待协议")]),_._v(" 也是为了实现可靠传输的，它的基本原理就是每发完一个分组就停止发送，等待对方确认。在收到确认后再发下一个分组。 "),v("strong",[_._v("超时重传：")]),_._v(" 当 TCP 发出一个段后，它启动一个定时器，等待目的端确认收到这个报文段。如果不能及时收到一个确认，将重发这个报文段。")]),_._v(" "),v("li",[v("strong",[_._v("连续 ARQ 协议")]),_._v("：连续发送多组数据，接收方再一次性返回答复信息。（"),v("strong",[_._v("SACK 选择性确认")]),_._v("，可以识别缺失的，重新发送）")])]),_._v(" "),v("h3",{attrs:{id:"_3-1-为什么-tcp-可靠"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-为什么-tcp-可靠"}},[_._v("#")]),_._v(" 3.1 为什么 TCP 可靠")]),_._v(" "),v("ol",[v("li",[_._v("靠 seq(sequence numbers 序列号)达成")]),_._v(" "),v("li",[_._v("TCP 发送的每个包都有 seq。")]),_._v(" "),v("li",[_._v("机制是累积的，所以 X 序列号之前的包都是确认接受到的")])]),_._v(" "),v("h3",{attrs:{id:"_3-2-停止等待协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-停止等待协议"}},[_._v("#")]),_._v(" 3.2 停止等待协议")]),_._v(" "),v("ul",[v("li",[_._v("停止等待协议是为了实现可靠传输的，它的基本原理就是每发完一个分组就停止发送，等待对方确认。在收到确认后再发下一个分组；")]),_._v(" "),v("li",[_._v("在停止等待协议中，若接收方收到重复分组，就丢弃该分组，但同时还要发送确认；")]),_._v(" "),v("li",[_._v("发送方发送分组,接收方在规定时间内收到,并且回复确认.发送方再次发送。")])]),_._v(" "),v("h2",{attrs:{id:"_4-流量控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-流量控制"}},[_._v("#")]),_._v(" 4. 流量控制")]),_._v(" "),v("ul",[v("li",[_._v("点对点")])]),_._v(" "),v("h4",{attrs:{id:"滑动窗口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[_._v("#")]),_._v(" 滑动窗口")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("TCP 利用滑动窗口实现流量控制的机制")]),_._v("。")]),_._v(" "),v("li",[_._v("滑动窗口（Sliding window）是一种流量控制技术。早期的网络通信中，通信双方不会考虑网络的拥挤情况直接发送数据。由于大家不知道网络拥塞状况，同时发送数据，导致中间节点阻塞掉包，谁也发不了数据，所以就有了滑动窗口机制来解决此问题。")]),_._v(" "),v("li",[_._v("TCP 中采用滑动窗口来进行传输控制，"),v("strong",[_._v("滑动窗口的大小意味着接收方还有多大的缓冲区可以用于接收数据。发送方可以通过滑动窗口的大小来确定应该发送多少字节的数据")]),_._v("。\n"),v("ul",[v("li",[_._v("当滑动窗口为 0 时，发送方一般不能再发送数据报，但有两种情况除外，一种情况是可以发送紧急数据，例如，允许用户终止在远端机上的运行进程。另一种情况是发送方可以发送一个 1 字节的数据报来通知接收方重新声明它希望接收的下一字节及发送方的滑动窗口大小。")])])])]),_._v(" "),v("h4",{attrs:{id:"流量控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流量控制"}},[_._v("#")]),_._v(" 流量控制")]),_._v(" "),v("ul",[v("li",[_._v("TCP 利用滑动窗口实现流量控制。")]),_._v(" "),v("li",[_._v("流量控制是为了控制发送方发送速率，保证接收方来得及接收。")]),_._v(" "),v("li",[_._v("接收方发送的确认报文中的窗口字段可以用来控制发送方窗口大小，从而影响发送方的发送速率。将窗口字段设置为 0，则发送方不能发送数据。")])]),_._v(" "),v("h2",{attrs:{id:"_5-拥塞堵塞"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-拥塞堵塞"}},[_._v("#")]),_._v(" 5. 拥塞堵塞")]),_._v(" "),v("p",[_._v("什么是拥塞堵塞？")]),_._v(" "),v("ul",[v("li",[_._v("链路的吞吐量 < 输入的负载 （就是很多电脑，发送的数据太多了）")])]),_._v(" "),v("h4",{attrs:{id:"拥塞控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制"}},[_._v("#")]),_._v(" 拥塞控制")]),_._v(" "),v("p",[_._v("为了进行拥塞控制，TCP 发送方要维持一个 "),v("strong",[_._v("拥塞窗口(cwnd)")]),_._v(" 的状态变量。拥塞控制窗口的大小取决于网络的拥塞程度，并且动态变化。发送方让自己的发送窗口取为拥塞窗口和接收方的接受窗口中较小的一个。")]),_._v(" "),v("p",[_._v("TCP 的拥塞控制采用了四种算法，即 "),v("strong",[_._v("慢开始")]),_._v(" 、 "),v("strong",[_._v("拥塞避免")]),_._v(" 、"),v("strong",[_._v("快重传")]),_._v(" 和 "),v("strong",[_._v("快恢复")]),_._v("。在网络层也可以使路由器采用适当的分组丢弃策略（如主动队列管理 AQM），以减少网络拥塞的发生。")]),_._v(" "),v("h3",{attrs:{id:"_5-1-慢开始-即由小到大逐渐增大发送窗。cwnd-初始值为-1-每经过一个传播轮次-cwnd-加倍。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-慢开始-即由小到大逐渐增大发送窗。cwnd-初始值为-1-每经过一个传播轮次-cwnd-加倍。"}},[_._v("#")]),_._v(" 5.1 慢开始：即由小到大逐渐增大发送窗。cwnd 初始值为 1，每经过一个传播轮次，cwnd 加倍。")]),_._v(" "),v("h3",{attrs:{id:"_5-2-拥塞避免-让拥塞窗口-cwnd-缓慢增大-即每经过一个往返时间-rtt-就把发送放的-cwnd-加-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-拥塞避免-让拥塞窗口-cwnd-缓慢增大-即每经过一个往返时间-rtt-就把发送放的-cwnd-加-1"}},[_._v("#")]),_._v(" 5.2 拥塞避免 ：让拥塞窗口 cwnd 缓慢增大，即每经过一个往返时间 RTT 就把发送放的 cwnd 加 1.")]),_._v(" "),v("h3",{attrs:{id:"_5-3-快恢复与快重传-frr"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-快恢复与快重传-frr"}},[_._v("#")]),_._v(" 5.3 快恢复与快重传（FRR）：")]),_._v(" "),v("p",[_._v("没有 FRR，如果数据包丢失了，TCP 将会使用定时器来要求传输暂停。在暂停的这段时间内，没有新的或复制的数据包被发送。有了 FRR，如果接收机接收到一个不按顺序的数据段，它会立即给发送机发送一个重复确认。如果发送机接收到三个重复确认，它会假定确认件指出的数据段丢失了，并立即重传这些丢失的数据段。有了 FRR，就不会因为重传时要求的暂停被耽误。")]),_._v(" "),v("p",[_._v("当有单独的数据包丢失时，快速重传和恢复（FRR）能最有效地工作。当有多个数据信息包在某一段很短的时间内丢失时，它则不能很有效地工作。")]),_._v(" "),v("h2",{attrs:{id:"_6-tcp-保活机制-应用层实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-tcp-保活机制-应用层实现"}},[_._v("#")]),_._v(" 6. TCP 保活机制（应用层实现）")]),_._v(" "),v("p",[_._v("作用：检测对方是否在线或者维持网络连接的需要")]),_._v(" "),v("p",[_._v("保活机制的开启：保活功能在默认情况下是关闭的，TCP 连接的任何一端都可以请求打开这一功能。保活功能可以被设置在连接的一端、两端,或者两端都没有。")]),_._v(" "),v("p",[_._v("机制：开启保活机制的一端，在一段时间内链接处于非活动状态( 通常这段时间设定为 2 小时)，那么就会发送一个保活探测报文（空报文或 1 个字节），如果没有收到响应报文，就会经过一个提前设定好的时间间隔再发送一次探测报文。直到探测次数达到设定的保活探测数时，就会认为断开链接，链接中断。")]),_._v(" "),v("p",[_._v("弊端：")]),_._v(" "),v("ol",[v("li",[_._v("保活机制会占用不必要的带宽；")]),_._v(" "),v("li",[_._v("在出现短暂的网络错误的时候，保活机制会使一个好的连接断开；")])]),_._v(" "),v("h2",{attrs:{id:"_7-为什么要四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-为什么要四次挥手"}},[_._v("#")]),_._v(" 7. 为什么要四次挥手")]),_._v(" "),v("ol",[v("li",[_._v("A 对 B：我要关闭了=>B 对 A：好的，我知道你要关闭了=>B 对 A：我也要关闭了=>A 对 B：好的你关闭吧。（等待 2MSL，默认 2 分钟）")])]),_._v(" "),v("h2",{attrs:{id:"_8-网络报文-粘包、分包、半包-如何解决"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-网络报文-粘包、分包、半包-如何解决"}},[_._v("#")]),_._v(" 8. 网络报文 粘包、分包、半包，如何解决")]),_._v(" "),v("p",[_._v("TCP：粘包（因为 Nagle 算法合并的关系）")]),_._v(" "),v("p",[_._v("UDP：分包（小数据，多次的关系）")]),_._v(" "),v("ol",[v("li",[_._v("粘包：\n"),v("ol",[v("li",[_._v("用固定的符号作为结尾符。（推荐，常用）\n"),v("ol",[v("li",[_._v("其不足之处就是如果协议数据包内容部分需要使用包结束标志字符，就需要对这些字符做转码或者转义操作，以免被接收方错误地当成包结束标志而误解析。")])])]),_._v(" "),v("li",[_._v("固定包长的数据包（不建议，灵活性差）")]),_._v(" "),v("li",[v("strong",[_._v("包头 + 包体格式")]),_._v("（推荐）\n"),v("ol",[v("li",[_._v("这种格式的包一般分为两部分，即包头和包体，包头是固定大小的，且包头中必须含有一个字段来说明接下来的包体有多大。")])])])])])])])}),[],!1,null,null,null);v.default=s.exports}}]);