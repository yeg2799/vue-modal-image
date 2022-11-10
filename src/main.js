import Vue from 'vue'
import App from '../demo/src/App.vue'
import {InlineSvgPlugin} from 'vue-inline-svg';

Vue.use(InlineSvgPlugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
