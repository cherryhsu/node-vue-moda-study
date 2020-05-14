import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'
import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'
import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [{
      path: '/categories/create',
      name: 'categoryCreate',
      component: CategoryEdit
    }, {
      path: '/categories/edit/:id',
      name: 'categoryEdit',
      component: CategoryEdit,
      props: true
    }, {
      path: '/categories/list',
      name: 'categoryList',
      component: CategoryList
    }, {
      path: '/items/create',
      name: 'itemCreate',
      component: ItemEdit
    }, {
      path: '/items/edit/:id',
      name: 'itemEdit',
      component: ItemEdit,
      props: true
    }, {
      path: '/items/list',
      name: 'itemList',
      component: ItemList
    }, {
      path: '/heros/create',
      name: 'heroCreate',
      component: HeroEdit
    }, {
      path: '/heros/edit/:id',
      name: 'heroEdit',
      component: HeroEdit,
      props: true
    }, {
      path: '/heros/list',
      name: 'heroList',
      component: HeroList
    },
    {
      path: '/articles/create',
      name: 'articleCreate',
      component: ArticleEdit
    }, {
      path: '/articles/edit/:id',
      name: 'articleEdit',
      component: ArticleEdit,
      props: true
    }, {
      path: '/articles/list',
      name: 'articleList',
      component: ArticleList
    },
    {
      path: '/ads/create',
      name: 'adCreate',
      component: AdEdit
    }, {
      path: '/ads/edit/:id',
      name: 'adEdit',
      component: AdEdit,
      props: true
    }, {
      path: '/ads/list',
      name: 'adList',
      component: AdList
    },
    {
      path: '/admin_users/create',
      name: 'adminUserCreate',
      component: AdminUserEdit
    }, {
      path: '/admin_users/edit/:id',
      name: 'adminUserEdit',
      component: AdminUserEdit,
      props: true
    }, {
      path: '/admin_users/list',
      name: 'adminUserList',
      component: AdminUserList
    },

    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
