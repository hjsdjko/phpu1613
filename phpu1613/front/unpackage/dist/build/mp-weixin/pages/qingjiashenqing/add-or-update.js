(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qingjiashenqing/add-or-update"],{1329:function(e,n,i){"use strict";(function(e){i("bb8f");a(i("66fd"));var n=a(i("69f3"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},"236c":function(e,n,i){"use strict";i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return t})),i.d(n,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"b2ee"))}},r=function(){var e=this,n=e.$createElement;e._self._c},t=[]},"602a":function(e,n,i){"use strict";var a=i("852c"),r=i.n(a);r.a},"69f3":function(e,n,i){"use strict";i.r(n);var a=i("236c"),r=i("b662");for(var t in r)"default"!==t&&function(e){i.d(n,e,(function(){return r[e]}))}(t);i("602a");var o,u=i("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"6e5c623e",null,!1,a["a"],o);n["default"]=s.exports},"852c":function(e,n,i){},a0a5:function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function t(e,n,i,a,r,t,o){try{var u=e[t](o),s=u.value}catch(c){return void i(c)}u.done?n(s):Promise.resolve(s).then(a,r)}function o(e){return function(){var n=this,i=arguments;return new Promise((function(a,r){var o=e.apply(n,i);function u(e){t(o,a,r,u,s,"next",e)}function s(e){t(o,a,r,u,s,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("b2ee"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{cross:"",ruleForm:{zhanghao:"",xingming:"",banji:"",shouji:"",qingjiashijian:"",huilaishijian:"",qingjiashiyou:"",qingjiatupian:"",jiaoshibianhao:"",sfsh:"",shhf:"",userid:""},jiaoshibianhaoOptions:[],jiaoshibianhaoIndex:0,user:{},ro:{zhanghao:!1,xingming:!1,banji:!1,shouji:!1,qingjiashijian:!1,huilaishijian:!1,qingjiashiyou:!1,qingjiatupian:!1,jiaoshibianhao:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var i=this;return o(a.default.mark((function r(){var t,o,u,s;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=e.getStorageSync("nowTable"),r.next=3,i.$api.session(t);case 3:return o=r.sent,i.user=o.data,i.ruleForm.zhanghao=i.user.zhanghao,i.ro.zhanghao=!0,i.ruleForm.xingming=i.user.xingming,i.ro.xingming=!0,i.ruleForm.banji=i.user.banji,i.ro.banji=!0,i.ruleForm.shouji=i.user.shouji,i.ro.shouji=!0,r.next=15,i.$api.option("jiaoshi","jiaoshibianhao",{});case 15:if(o=r.sent,i.jiaoshibianhaoOptions=o.data,i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=25;break}return i.ruleForm.id=n.id,r.next=23,i.$api.info("qingjiashenqing",i.ruleForm.id);case 23:o=r.sent,i.ruleForm=o.data;case 25:if(i.cross=n.cross,!n.cross){r.next=73;break}u=e.getStorageSync("crossObj"),r.t0=a.default.keys(u);case 29:if((r.t1=r.t0()).done){r.next=73;break}if(s=r.t1.value,"zhanghao"!=s){r.next=35;break}return i.ruleForm.zhanghao=u[s],i.ro.zhanghao=!0,r.abrupt("continue",29);case 35:if("xingming"!=s){r.next=39;break}return i.ruleForm.xingming=u[s],i.ro.xingming=!0,r.abrupt("continue",29);case 39:if("banji"!=s){r.next=43;break}return i.ruleForm.banji=u[s],i.ro.banji=!0,r.abrupt("continue",29);case 43:if("shouji"!=s){r.next=47;break}return i.ruleForm.shouji=u[s],i.ro.shouji=!0,r.abrupt("continue",29);case 47:if("qingjiashijian"!=s){r.next=51;break}return i.ruleForm.qingjiashijian=u[s],i.ro.qingjiashijian=!0,r.abrupt("continue",29);case 51:if("huilaishijian"!=s){r.next=55;break}return i.ruleForm.huilaishijian=u[s],i.ro.huilaishijian=!0,r.abrupt("continue",29);case 55:if("qingjiashiyou"!=s){r.next=59;break}return i.ruleForm.qingjiashiyou=u[s],i.ro.qingjiashiyou=!0,r.abrupt("continue",29);case 59:if("qingjiatupian"!=s){r.next=63;break}return i.ruleForm.qingjiatupian=u[s],i.ro.qingjiatupian=!0,r.abrupt("continue",29);case 63:if("jiaoshibianhao"!=s){r.next=67;break}return i.ruleForm.jiaoshibianhao=u[s],i.ro.jiaoshibianhao=!0,r.abrupt("continue",29);case 67:if("userid"!=s){r.next=71;break}return i.ruleForm.userid=u[s],i.ro.userid=!0,r.abrupt("continue",29);case 71:r.next=29;break;case 73:i.styleChange();case 74:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},jiaoshibianhaoChange:function(e){var n=this;return o(a.default.mark((function i(){return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n.jiaoshibianhaoIndex=e.target.value,n.ruleForm.jiaoshibianhao=n.jiaoshibianhaoOptions[n.jiaoshibianhaoIndex],i.next=4,n.$api.follow("jiaoshi","jiaoshibianhao",{columnValue:n.ruleForm.jiaoshibianhao});case 4:i.sent;case 5:case"end":return i.stop()}}),i)})))()},qingjiashijianConfirm:function(e){console.log(e),this.ruleForm.qingjiashijian=e.result,this.$forceUpdate()},huilaishijianConfirm:function(e){console.log(e),this.ruleForm.huilaishijian=e.result,this.$forceUpdate()},qingjiatupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.qingjiatupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(a.default.mark((function i(){var r,t,o,u,s,c,h,l,f,g;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.ruleForm.shouji||n.$validate.isMobile(n.ruleForm.shouji)){i.next=3;break}return n.$utils.msg("手机应输入手机格式"),i.abrupt("return");case 3:if(!n.cross){i.next=19;break}if(u=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==u){i.next=19;break}if(c=e.getStorageSync("crossObj"),u.startsWith("[")){i.next=15;break}for(h in c)h==u&&(c[h]=s);return l=e.getStorageSync("crossTable"),i.next=13,n.$api.update("".concat(l),c);case 13:i.next=19;break;case 15:r=Number(e.getStorageSync("userid")),t=c["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 19:if(!t||!r){i.next=41;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=t,f={page:1,limit:10,crossuserid:r,crossrefid:t},i.next=25,n.$api.list("qingjiashenqing",f);case 25:if(g=i.sent,!(g.data.total>=o)){i.next=31;break}return n.$utils.msg(e.getStorageSync("tips")),i.abrupt("return",!1);case 31:if(!n.ruleForm.id){i.next=36;break}return i.next=34,n.$api.update("qingjiashenqing",n.ruleForm);case 34:i.next=38;break;case 36:return i.next=38,n.$api.add("qingjiashenqing",n.ruleForm);case 38:n.$utils.msgBack("提交成功");case 39:i.next=49;break;case 41:if(!n.ruleForm.id){i.next=46;break}return i.next=44,n.$api.update("qingjiashenqing",n.ruleForm);case 44:i.next=48;break;case 46:return i.next=48,n.$api.add("qingjiashenqing",n.ruleForm);case 48:n.$utils.msgBack("提交成功");case 49:case"end":return i.stop()}}),i)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(i,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,i("543d")["default"])},b662:function(e,n,i){"use strict";i.r(n);var a=i("a0a5"),r=i.n(a);for(var t in a)"default"!==t&&function(e){i.d(n,e,(function(){return a[e]}))}(t);n["default"]=r.a}},[["1329","common/runtime","common/vendor"]]]);