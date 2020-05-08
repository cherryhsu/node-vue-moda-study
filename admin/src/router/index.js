import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

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
    }


    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
