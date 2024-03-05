/***************************************

[rewrite_local]

^https?:\/\/(h5|api)\.xiuxiu\.meitu\.com\/v\d\/(h\d\/vip|vip|user)\/ url script-response-body https://raw.githubusercontent.com/bail-mingsy/QX/main/mtxx.js

[mitm]

hostname = api.xiuxiu.meitu.com, h5.xiuxiu.meitu.com

***************************************/


var responseBody = $response.body;
var requestUrl = $request.url;
var responseData = JSON.parse(responseBody);
if (requestUrl.indexOf('/v1/h5/vip/sub_detail.json') != -1) {
  responseBody = $response.body.replace(/\"old_vip_type\"\:\d+/g, '"old_vip_type":4').replace(/\"is_expire\"\:\d+/g, '"is_expire":0').replace(/\"sub_type\"\:\d+/g, '"sub_type":8').replace(/\"expire_days\"\:.*?/g, '"expire_days":-999').replace(/\"screen_name\"\:\".*?\"/g, '"screen_name":"香不菜"').replace(/\"invalid_time\"\:\d+/g, '"invalid_time":1893430861');
  responseData.data.valid_time = 1657248630;
  responseData.data.is_expire = 0;
  responseData.data.old_vip_type = 4;
  responseData.data.expire_days = -999;
  responseData.data.renew = 1;
  responseData.data.exchange_vip = 0;
  responseData.data.screen_name = '香不菜';
  responseData.data.invalid_time = 1893430861;
  responseBody = JSON.stringify(responseData);
} else if (requestUrl.indexOf('/v1/h5/vip/user_detail.json') != -1) {
  responseBody = $response.body.replace(/\"old_vip_type\"\:\d+/g, '"old_vip_type":4').replace(/\"is_expire\"\:\d+/g, '"is_expire":0').replace(/\"sub_type\"\:\d+/g, '"sub_type":8').replace(/\"expire_days\"\:.*?/g, '"expire_days":-999').replace(/\"screen_name\"\:\".*?\"/g, '"screen_name":"香不菜"').replace(/\"invalid_time\"\:\d+/g, '"invalid_time":1893430861');
  responseData.data.valid_time = 1657248630;
  responseData.data.is_expire = 0;
  responseData.data.old_vip_type = 4;
  responseData.data.sub_type = 8;
  responseData.data.show_auto_renew = 0;
  responseData.data.expire_days = -999;
  responseData.data.renew = 1;
  responseData.data.exchange_vip = 0;
  responseData.data.screen_name = '香不菜';
  responseData.data.invalid_time = 1893430861;
  responseBody = JSON.stringify(responseData);
} else if (requestUrl.indexOf('/v1/vip/vip_show.json') != -1) {
  responseBody = $response.body.replace(/\"old_vip_type\"\:\d+/g, '"old_vip_type":4').replace(/\"is_expire\"\:\d+/g, '"is_expire":0').replace(/\"sub_type\"\:\d+/g, '"sub_type":8').replace(/\"expire_days\"\:.*?/g, '"expire_days":-999').replace(/\"screen_name\"\:\".*?\"/g, '"screen_name":"香不菜"').replace(/\"invalid_time\"\:\d+/g, '"invalid_time":1893430861');
  responseData.data.id = "1156554201580041216";
  responseData.data.id_str = '6888888888888888888';
  responseData.data.valid_time = 1657248104;
  responseData.data.sub_type = 3;
  responseData.data.sub_biz_type = 1;
  responseData.data.avatar_url = 'http://maavatar1.meitudata.com/a14872cb2e0273a0aa04c0d7674fa457.png';
  responseData.data.is_expire = 0;
  responseData.data.expire_days = -999;
  responseData.data.gid = 24893440;
  responseData.data.vip_type = 101;
  responseData.data.platform = 2;
  responseData.data.sub_name = '包年';
  responseData.data.renew = 2;
  responseData.data.s = 1;
  responseData.data.is_valid_user = 1;
  responseData.data.create_time = 1657248104;
  responseData.data.screen_name = '香不菜';
  responseData.data.in_valid_time = 1893430861;
  responseBody = JSON.stringify(responseData);
} else if (requestUrl.indexOf('/v1/user/show.json') != -1) {
  responseBody = $response.body.replace(/\"free_trial\"\:\d+/g, '"free_trial":1').replace(/\"vip_type\"\:\d+/g, '"vip_type":1').replace(/\"screen_name\"\:\".*?\"/g, '"screen_name":"香不菜"');
} else if (requestUrl.indexOf('/v1/vip/prompt/query.json') != -1) {
  responseBody = $response.body.replace(/\"home_prompt\"\:\".*?\"/g, '"home_prompt":"您的会员将于2030/01/01过期。"').replace(/\"home_btn_prompt\"\:\".*?\"/g, '"home_btn_prompt":"立即查看"').replace(/\"beautify_btn_prompt\"\:\".*?\"/g, '"beautify_btn_prompt":""').replace(/\"beautify_prompt\"\:\".*?\"/g, '"beautify_prompt":""');
} else if (requestUrl.indexOf('/v1/account/verify_credentials.json') != -1) {
  responseData.data.vip_type = 1;
  responseData.data.screen_name = '香不菜';
  responseData.data.free_trial = 1;
  responseBody = JSON.stringify(responseData);
}
$done({
  'body': responseBody
});
