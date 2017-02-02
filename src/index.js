import Badge from './components/Badge.vue'
import ProgressBar from './components/ProgressBar.vue'

const R6StatsUI = {
  Badge,
  ProgressBar,

  install (Vue) {
    Vue.component(Badge.name. Badge)
    Vue.component(ProgressBar.name. ProgressBar)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(R6StatsUI)
}

export default R6StatsUI
export { Badge }
export { ProgressBar }