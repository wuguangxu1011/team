import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/team'
  },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "home" */ '../views/team.vue')
  },
  {
    path: '/team2',
    name: 'team2',
    component: () => import(/* webpackChunkName: "home" */ '../views/team2.vue')
  },
  {
    path: '/group',
    name: 'group',
    component: () => import('../views/group.vue')
  },
  {
    path: '/marking',
    name: 'marking',
    component: () => import('../views/markingSystem.vue')
  },
  {
    path: '/person',
    name: 'personal',
    component: () => import('../views/person/personal.vue')
  },
  {
    path: '/zhouchunlei',
    name: 'zhouchunlei',
    component: () => import('../views/person/components/zhouchunlei.vue')
  },
  {
    path: '/sunshuangzhu',
    name: 'sunshuangzhu',
    component: () => import('../views/person/components/sunshuangzhu.vue')
  },
  {
    path: '/wanglin',
    name: 'wanglin',
    component: () => import('../views/person/components/wanglin.vue')
  },
  {
    path: '/lidou',
    name: 'lidou',
    component: () => import('../views/person/components/lidou.vue')
  },
  {
    path: '/gaojin',
    name: 'gaojin',
    component: () => import('../views/person/components/gaojin.vue')
  },
  {
    path: '/yangchenchen',
    name: 'yangchenchen',
    component: () => import('../views/person/components/yangchenchen.vue')
  },
  {
    path: '/lichunyan',
    name: 'lichunyan',
    component: () => import('../views/person/components/lichunyan.vue')
  },
  {
    path: '/wangqixiang',
    name: 'wangqixiang',
    component: () => import('../views/person/components/wangqixiang.vue')
  },
  {
    path: '/zhujiewen',
    name: 'zhujiewen',
    component: () => import('../views/person/components/zhujiewen.vue')
  },
  {
    path: '/caoyuhong',
    name: 'caoyuhong',
    component: () => import('../views/person/components/caoyuhong.vue')
  },
  {
    path: '/liukeyun',
    name: 'liukeyun',
    component: () => import('../views/person/components/liukeyun.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => { 
  // 让页面回到顶部
  document.documentElement.scrollTop = 0;
  next();
});

export default router
