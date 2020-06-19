import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from './components/button/button.vue'
import ButtonGroup from './components/button/button-group.vue'
// import './assets/styles/_var.scss'
import Icon from './components/icon.vue'
import Input from './components/input.vue'
import Col from './components/grid/col.vue'
import Row from './components/grid/row.vue'
import Tabs from './components/tabs/tabs.vue'
import TabsItem from './components/tabs/tabs-item.vue'
import TabsHead from './components/tabs/tabs-head.vue'
import TabsPane from './components/tabs/tabs-pane.vue'
import TabsBody from './components/tabs/tabs-body.vue'

// import './assets/styles/_global.scss'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)
Vue.component('g-col', Col)
Vue.component('g-row', Row)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-tabs-body', TabsBody)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')