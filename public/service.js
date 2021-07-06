var BODY_DOM = document.querySelector('body');

// 百度统计wap端 jzsyishu.com
try {
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?fdec30f4f64b20582d02679a90c33fff";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
} catch (e) {
  console.log(e + `百度统计wap端 jzsyishu.com 报错`)
}

// cnzz统计wap端 jzsyishu.com
try {
  var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://"); document.write(unescape("%3Cspan id='cnzz_stat_icon_1271255367'%3E%3C/span%3E%3Cscript async src='" + cnzz_protocol + "s22.cnzz.com/z_stat.php%3Fid%3D1271255367%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));
} catch (e) {
  console.log(e + `cnzz统计wap端 jzsyishu.com 报错`)
}

// 小能脚本
try {
  (function (a, h, c, b, f, g) { a["UdeskApiObject"] = f; a[f] = a[f] || function () { (a[f].d = a[f].d || []).push(arguments) }; g = h.createElement(c); g.async = 1; g.charset = "utf-8"; g.src = b; c = h.getElementsByTagName(c)[0]; c.parentNode.insertBefore(g, c) })(window, document, "script", "https://assets-cli.s2.udesk.cn/im_client/js/udeskApi.js", "ud");
  ud({
    "code": "j74g253",
    "link": "https://1508489.s2.udesk.cn/im_client/?web_plugin_id=28837&group_id=22903",
    "selector": ".btnsh_udesk_im"
  });
} catch (e) {
  console.log(e + `小能脚本 报错`);
}
