// 脚本功能   套壳影视adblock
// 脚本作者   xiangcaiee    

hostname = *pangolin-sdk-toutiao*, mi.gdt.qq.com, open.e.kuaishou.com

# > Disciplineddriver去开屏和首页广告首次打开可能不成功再次打开即可去除
^https?:\/\/(?:sf3-fe-tos\.pglstatp-toutiao\.com|api-access\.pangolin-sdk-toutiao[0-9]*\.com|log-api\.pangolin-sdk-toutiao-b\.com|v9-be-pack\.pglstatp-toutiao\.com)\/ url reject-dict

# > 小柿子去开屏广告
^https?:\/\/(?:open\.e\.kuaishou\.com\/rest\/e\/v[23]\/open\/|mi\.gdt\.qq\.com\/gdt_mview\.fcg) url reject-dict 

# > 小柿子去首页notice
^http:\/\/162\.209\.174\.253:12346\/xsz\.php\/v6\/top_notice\? url reject-200
