import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import tongxunlu from '@/views/modules/tongxunlu/list'
    import qingjiashenqing from '@/views/modules/qingjiashenqing/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import jiankangdaka from '@/views/modules/jiankangdaka/list'
    import forum from '@/views/modules/forum/list'
    import kechengbiao from '@/views/modules/kechengbiao/list'
    import banjixiangce from '@/views/modules/banjixiangce/list'
    import jiaofeixinxi from '@/views/modules/jiaofeixinxi/list'
    import chengjixinxi from '@/views/modules/chengjixinxi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import messages from '@/views/modules/messages/list'
    import banjixinxi from '@/views/modules/banjixinxi/list'
    import zuoyefankui from '@/views/modules/zuoyefankui/list'
    import config from '@/views/modules/config/list'
    import zuoyefabu from '@/views/modules/zuoyefabu/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '校园资讯',
        component: news
      }
      ,{
	path: '/tongxunlu',
        name: '通讯录',
        component: tongxunlu
      }
      ,{
	path: '/qingjiashenqing',
        name: '请假申请',
        component: qingjiashenqing
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/jiankangdaka',
        name: '健康打卡',
        component: jiankangdaka
      }
      ,{
	path: '/forum',
        name: '交流论坛',
        component: forum
      }
      ,{
	path: '/kechengbiao',
        name: '课程表',
        component: kechengbiao
      }
      ,{
	path: '/banjixiangce',
        name: '班级相册',
        component: banjixiangce
      }
      ,{
	path: '/jiaofeixinxi',
        name: '缴费信息',
        component: jiaofeixinxi
      }
      ,{
	path: '/chengjixinxi',
        name: '成绩信息',
        component: chengjixinxi
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/messages',
        name: '留言板',
        component: messages
      }
      ,{
	path: '/banjixinxi',
        name: '班级信息',
        component: banjixinxi
      }
      ,{
	path: '/zuoyefankui',
        name: '作业反馈',
        component: zuoyefankui
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/zuoyefabu',
        name: '作业发布',
        component: zuoyefabu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
