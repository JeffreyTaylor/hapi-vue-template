const Vue = require('vue');
const VueRouter = require('vue-router');
const Home = require('./home/home.vue');
const Details = require('./details/details.vue');

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router: new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/details', component: Details }
    ]
  })
});
