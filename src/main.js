import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from './components/button/button.vue'
import ButtonGroup from './components/button/button-group.vue'
// import './assets/styles/_var.scss'
import Icon from './components/icon.vue'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')