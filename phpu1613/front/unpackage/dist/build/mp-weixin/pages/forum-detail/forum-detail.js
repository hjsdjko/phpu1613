(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-detail/forum-detail"],{"034c":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},1937:function(t,n,e){"use strict";e.r(n);var r=e("7ad1"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a},"2cd0":function(t,n,e){"use strict";var r=e("f1be"),u=e.n(r);u.a},"3d06":function(t,n,e){"use strict";e.r(n);var r=e("034c"),u=e("1937");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("2cd0");var o,c=e("f0c5"),i=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"444c0513",null,!1,r["a"],o);n["default"]=i.exports},"7ad1":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,r,u,a,o){try{var c=t[a](o),i=c.value}catch(f){return void e(f)}c.done?n(i):Promise.resolve(i).then(r,u)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var o=t.apply(n,e);function c(t){a(o,r,u,c,i,"next",t)}function i(t){a(o,r,u,c,i,"throw",t)}c(void 0)}))}}var c=function(){e.e("components/forum-reply/forum-reply").then(function(){return resolve(e("c5a9"))}.bind(null,e)).catch(e.oe)},i={components:{userReply:c},data:function(){return{commentData:[],forum:{},id:""}},onLoad:function(t){var n=this;return o(r.default.mark((function e(){var u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.id=t.id,e.next=3,n.$api.forumDetail(t.id);case 3:u=e.sent,n.commentData=u.data.childs,n.forum=u.data,console.log(n.commentData);case 7:case"end":return e.stop()}}),e)})))()},onShow:function(){var t=this;return o(r.default.mark((function n(){var e;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.forumDetail(t.id);case 2:e=n.sent,t.commentData=e.data.childs,t.forum=e.data;case 5:case"end":return n.stop()}}),n)})))()},methods:{onReplyTap:function(t){this.$utils.jump("../forum-reply/forum-reply?pid=".concat(t))}}};n.default=i},d525:function(t,n,e){"use strict";(function(t){e("bb8f");r(e("66fd"));var n=r(e("3d06"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},f1be:function(t,n,e){}},[["d525","common/runtime","common/vendor"]]]);