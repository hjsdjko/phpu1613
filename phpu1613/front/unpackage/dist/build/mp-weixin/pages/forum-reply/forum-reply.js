(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-reply/forum-reply"],{"0450":function(n,e,t){"use strict";t.r(e);var r=t("d186"),u=t("2cca");for(var a in u)"default"!==a&&function(n){t.d(e,n,(function(){return u[n]}))}(a);t("fbe8");var o,c=t("f0c5"),i=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=i.exports},2810:function(n,e,t){"use strict";(function(n){t("bb8f");r(t("66fd"));var e=r(t("0450"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"2cca":function(n,e,t){"use strict";t.r(e);var r=t("8024"),u=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);e["default"]=u.a},"48f4":function(n,e,t){},8024:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(t("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,r,u,a,o){try{var c=n[a](o),i=c.value}catch(f){return void t(f)}c.done?e(i):Promise.resolve(i).then(r,u)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(r,u){var o=n.apply(e,t);function c(n){a(o,r,u,c,i,"next",n)}function i(n){a(o,r,u,c,i,"throw",n)}c(void 0)}))}}var c={data:function(){return{pid:"",content:"",username:"",user:{}}},onLoad:function(e){var t=this;return o(r.default.mark((function u(){var a,o;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.pid=e.pid,a=n.getStorageSync("nowTable"),r.next=4,t.$api.session(a);case 4:o=r.sent,t.user=o.data,"yonghu"==a&&(t.username=t.user.zhanghao),"jiaoshi"==a&&(t.username=t.user.jiaoshibianhao);case 8:case"end":return r.stop()}}),u)})))()},methods:{onReplyTap:function(){var n=this;return o(r.default.mark((function e(){var t,u,a,o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(t="",u=[],t&&(u=t.split(",")),a=0;a<u.length;a++)o=new RegExp(u[a],"g"),n.content.indexOf(u[a])>-1&&(n.content=n.content.replace(o,"**"));return e.next=6,n.$api.save("forum",{parentid:n.pid,content:n.content,username:n.username});case 6:n.$utils.msgBack("回复成功");case 7:case"end":return e.stop()}}),e)})))()}}};e.default=c}).call(this,t("543d")["default"])},d186:function(n,e,t){"use strict";var r;t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return r}));var u=function(){var n=this,e=n.$createElement;n._self._c},a=[]},fbe8:function(n,e,t){"use strict";var r=t("48f4"),u=t.n(r);u.a}},[["2810","common/runtime","common/vendor"]]]);