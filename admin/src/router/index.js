import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'
import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

Vue.use(VueRouter)

const routes = [
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
    } , {
      path: '/heros/edit/:id',
      name: 'heroEdit',
      component: HeroEdit,
      props: true
    }, {
      path: '/heros/list',
      name: 'heroList',
      component: HeroList
    },



    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
