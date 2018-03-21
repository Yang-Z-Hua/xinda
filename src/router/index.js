import Vue from 'vue'
import Router from 'vue-router'
// import Outter from '@/components/Outter'
// import Inner from '@/components/Inner'
// import Chanpinfenlei from '@/components/Chanpinfenlei'
// import Login from '@/views/Login'
// import Register from '@/views/Register'
// import Index from '@/views/Index'
// import Forget from '@/views/Forget'
// import Huiyuanzhongxin from '@/views/Huiyuanzhongxin'
// import HuiyuanzhongxinIndex from '@/huiyuanzhongxin/HuiyuanzhongxinIndex'
// import HuiyuanzhongxinForget from '@/huiyuanzhongxin/HuiyuanzhongxinForget'
// import HuiyuanzhongxinAccount from '@/huiyuanzhongxin/HuiyuanzhongxinAccount'
// import HuiyuanzhongxinUser from '@/huiyuanzhongxin/HuiyuanzhongxinUser'
// import HuiyuanzhongxinAlready from '@/huiyuanzhongxin/HuiyuanzhongxinAlready'
// import HuiyuanzhongxinEvaluate from '@/huiyuanzhongxin/HuiyuanzhongxinEvaluate'
// import Dianpu from '@/views/Dianpu'
// import Dianpushouye from '@/views/Dianpushouye'
// import Dingdanxiangqing from '@/views/Dingdanxiangqing'
// import Gouwuche from '@/views/Gouwuche'
// import Jiamengwomen from '@/views/Jiamengwomen'
// import Liebiaoye from '@/views/Liebiaoye'
// import Shangpinxiangqing from '@/views/Shangpinxiangqing'
// import Zhifuchenggong from '@/zhifu/Zhifuchenggong'
// import Zhifushibai from '@/zhifu/Zhifushibai'
// import Zhifu from '@/views/Zhifu'
// import Search from '@/views/Search'
// import Shoujihuiyuanzhongxin from '@/views/Shoujihuiyuanzhongxin'

const Inner = ()=>import('@/components/Inner');
const Outter = ()=>import('@/components/Outter');
const Chanpinfenlei = ()=>import('@/components/Chanpinfenlei');
const Zhifuchenggong = ()=>import('@/zhifu/Zhifuchenggong');
const Zhifushibai = ()=>import('@/zhifu/Zhifushibai');
const HuiyuanzhongxinEvaluate = ()=>import('@/huiyuanzhongxin/HuiyuanzhongxinEvaluate');
const HuiyuanzhongxinForget = ()=>import('@/huiyuanzhongxin/HuiyuanzhongxinForget');
const HuiyuanzhongxinAccount = ()=>import('@/huiyuanzhongxin/HuiyuanzhongxinAccount');
const HuiyuanzhongxinUser = ()=>import('@/huiyuanzhongxin/HuiyuanzhongxinUser');
const HuiyuanzhongxinAlready = ()=>import('@/huiyuanzhongxin/HuiyuanzhongxinAlready');
const HuiyuanzhongxinIndex = ()=>import('@/huiyuanzhongxin/HuiyuanzhongxinIndex');
const Jiamengwomen = ()=>import('../views/Jiamengwomen.vue');
const Forget = ()=>import('../views/Forget.vue');
const Huiyuanzhongxin = ()=>import('../views/Huiyuanzhongxin.vue');
const Login = ()=>import('../views/Login.vue');
const Dianpu = ()=>import('../views/Dianpu.vue');
const Register = ()=>import('../views/Register.vue');
const Dianpushouye = ()=>import('../views/Dianpushouye.vue');
const Zhifu = ()=>import('../views/Zhifu.vue');
const Search = ()=>import('../views/Search.vue');
const Shoujihuiyuanzhongxin = ()=>import('../views/Shoujihuiyuanzhongxin.vue');
const Shangpinxiangqing = ()=>import('../views/Shangpinxiangqing.vue');
const Liebiaoye = ()=>import('../views/Liebiaoye.vue');
const Gouwuche = ()=>import('../views/Gouwuche.vue');
const Dingdanxiangqing = ()=>import('../views/Dingdanxiangqing.vue');
const Index = ()=>import('../views/Index.vue');
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/outter',
      name: 'outter',
      component: Outter,
      children: [{
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        },
        {
          path: 'forget',
          name: 'forget',
          component: Forget
        },
      ]
    },
    {
      path: '/chanpinfenlei',
      name: 'chanpinfenlei',
      component: Chanpinfenlei,
    },
    {
      path: '/inner',
      name: 'inner',
      component: Inner,
      alias: '/',
      children: [{
          path: 'index',
          alias: '',
          name: 'index',
          component: Index
        },
        {
          //会员中心
          path: 'huiyuanzhongxin',
          name: 'huiyuanzhongxin',
          component: Huiyuanzhongxin,
          children: [{
              path: 'huiyuanzhongxinIndex',
              name: 'huiyuanzhongxinIndex',
              alias: '',
              component: HuiyuanzhongxinIndex,
            },
            {
              path: 'huiyuanzhongxinForget',
              name: 'huiyuanzhongxinForget',
              component: HuiyuanzhongxinForget,
            },
            {
              path: 'huiyuanzhongxinAccount',
              name: 'huiyuanzhongxinAccount',
              component: HuiyuanzhongxinAccount,
            },
            {
              path: 'huiyuanzhongxinUser',
              name: 'huiyuanzhongxinUser',
              component: HuiyuanzhongxinUser,
            },
            {
              path: 'huiyuanzhongxinAlready',
              name: 'huiyuanzhongxinAlready',
              component: HuiyuanzhongxinAlready,
            },
            {
              path: 'HuiyuanzhongxinEvaluate',
              name: 'HuiyuanzhongxinEvaluate',
              component: HuiyuanzhongxinEvaluate,
            },

          ]
        },
        // 手机会员中心登录页面
        {
          path: 'Shoujihuiyuanzhongxin',
          name: 'Shoujihuiyuanzhongxin',
          component: Shoujihuiyuanzhongxin
        },

        {
          path: 'dianpu',
          name: 'dianpu',
          component: Dianpu
        },
        {
          path: 'dianpushouye',
          name: 'dianpushouye',
          component: Dianpushouye
        },
        {
          path: 'dingdanxiangqing',
          name: 'dingdanxiangqing',
          component: Dingdanxiangqing
        },
        {
          path: 'gouwuche',
          name: 'gouwuche',
          component: Gouwuche
        },
        {
          path: 'jiamengwomen',
          name: 'jiamengwomen',
          component: Jiamengwomen
        },
        {
          path: 'liebiaoye',
          name: 'liebiaoye',
          component: Liebiaoye
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: 'shangpinxiangqing',
          name: 'shangpinxiangqing',
          component: Shangpinxiangqing
        },
        {
          path: 'zhifu',
          name: 'zhifu',
          component: Zhifu,
          children: [{
              path: 'zhifuchenggong',
              name: 'zhifuchenggong',
              component: Zhifuchenggong
            },
            {
              path: 'zhifushibai',
              name: 'zhifushibai',
              component: Zhifushibai
            },
          ]
        },
      ]
    },
  ]
})
