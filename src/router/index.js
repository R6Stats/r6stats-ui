import Vue from 'vue'
import Router from 'vue-router'

import Badge from '../views/Badge'
import ProgressBar from '../views/ProgressBar'
import Widget from '../views/Widget'

Vue.use(Router)

const router = new Router({
  mode: 'history',

  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: 'Badge', name: 'components.badge', component: Badge },
    { path: 'Badge', name: 'components.progress-bar', component: ProgressBar },
    { path: 'Badge', name: 'components.widget', component: Widget },
  ]
})

export default router
