import Badge from './components/Badge.vue'
import ProgressBar from './components/ProgressBar.vue'

const components = {
  Badge,
  ProgressBar
}

const install = (Vue, opts = {}) => {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Badge,
  ProgressBar
}