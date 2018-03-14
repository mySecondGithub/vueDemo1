import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import store from './store/'
import axios from 'axios'

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	scrollBehavior: ()=>({ y: 0}),
	routes
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
