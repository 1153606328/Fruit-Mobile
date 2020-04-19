import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import { 
  Button,
  NavBar ,
  Swipe, SwipeItem,
  Tabbar,TabbarItem,
  Lazyload,
  List,
  Cell, CellGroup,
  Col, Row,
  Empty 
 } from 'vant';
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Lazyload);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Col);
Vue.use(Row);
Vue.use(Empty);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
