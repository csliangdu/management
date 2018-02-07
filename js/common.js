mui.init();
var baseUrl = "http://61.178.231.106:9725/"; //后台接口地址
var thisUrl = "http://127.0.0.1:8020/management/"; //前端页面跳转地址

function getCode() {
	var __base = new Base64();
	var slinkcode = Math.random().toString(36).substr(2); //随机数字字母组合
	var r = parseInt(Math.random() * 101);
	slinkcode = __base.encode(slinkcode);
	return [slinkcode, r];
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return r[2];
	return '';
}