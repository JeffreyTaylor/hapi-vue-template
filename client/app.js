const Vue = require('vue');
const VueRouter = require('vue-router');
const Home = require('./home/home.vue').default;
const Details = require('./details/details.vue').default;

Vue.use(VueRouter);

export default new Vue({
  el: '#app',
  router: new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', name: 'Home', component: Home },
      { path: '/details', name: 'Details', component: Details }
    ]
  })
});
