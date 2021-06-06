import Vue from 'vue'
import App from './App.vue'
import './index.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Calculator from './components/Calculator.vue'
import CustomData from './components/CustomData.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/', component: Calculator , name:'home'},
  { path: '/customdata', component: CustomData, name: 'customData', props: true },

]

const router = new VueRouter({
  routes,
  mode: 'history',
})


new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
