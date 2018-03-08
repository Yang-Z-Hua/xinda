import Vue from 'vue'
import Router from 'vue-router'
import Outter from '@/components/Outter'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Inner from '@/components/Inner'
import Index from '@/views/Index'
import Forget from '@/views/Forget'
import Huiyuanzhongxin from '@/views/Huiyuanzhongxin'
import HuiyuanzhongxinIndex from '@/huiyuanzhongxin/HuiyuanzhongxinIndex'
import HuiyuanzhongxinForget from '@/huiyuanzhongxin/HuiyuanzhongxinForget'
import HuiyuanzhongxinAccount from '@/huiyuanzhongxin/HuiyuanzhongxinAccount'
import HuiyuanzhongxinUser from '@/huiyuanzhongxin/HuiyuanzhongxinUser'
import HuiyuanzhongxinAlready from '@/huiyuanzhongxin/HuiyuanzhongxinAlready'
import HuiyuanzhongxinEvaluate from '@/huiyuanzhongxin/HuiyuanzhongxinEvaluate'
import Dianpu from '@/views/Dianpu'
import Dianpushouye from '@/views/Dianpushouye'
import Dingdanxiangqing from '@/views/Dingdanxiangqing'
import Gouwuche from '@/views/Gouwuche'
import Jiamengwomen from '@/views/Jiamengwomen'
import Liebiaoye from '@/views/Liebiaoye'
import Shangpinxiangqing from '@/views/Shangpinxiangqing'
import Zhifuchenggong from '@/zhifu/Zhifuchenggong'
import Zhifushibai from '@/zhifu/Zhifushibai'
import Zhifu from '@/views/Zhifu'

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
