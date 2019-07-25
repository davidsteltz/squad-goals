import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

//temporary until we have auth set up.
var authenticated = false;

//protected routes function. could get more detailed later.
function guard(to, from, next){
    if(authenticated) {
        next(); 
    } else{
        next('/login');
    }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/Counter',
      name: 'counter',
      beforeEnter: guard,
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Counter.vue')
    },
    {
      path: '/Timer',
      name: 'timer',
      beforeEnter: guard,
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Timer.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/LoginPage.vue')
    }
  ]
});