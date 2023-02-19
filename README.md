# 介绍
你好！此项目库要完成的操作是生成github热力图，使用标准[JavaScript](https://www.javascript.com/)和图表用[D3.js](https://d3js.org/)完成。

# 注意！
index.html只是为了显示图表而放置的，所有内容均在另一旁的js文件内。撰写时请不要把js内容写入到html文件内，这样是为了方便页面引用和排版。

# 原理
定义 getJSON 为 URL 访问方法，
在其内部定义 xhr 词组使用 [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 参数`var xhr = new XMLHttpRequest()`，
使其访问一个 URL 地址`xhr.open('get', url, true)`并指定返回内容类型为 JSON。`xhr.responseType = 'json'`
并在后部判断 HTTP 状态码，若为 200 则接收数据；反之则拒绝。
```
if (status == 200) {
    resolve(xhr.response);
} else {
    reject(status);
}
```
最后，在获取到数据之后使用 `xhr.send()` 输出接收的 JSON 数据。

# 目前的进度？
已经完成了 JSON 数据接收部分，至于svg图表...目前还没有什么头绪。
（搬了几段代码放上去看感觉怎么样都不合适，于是就暂时先完成数据接收功能了）
