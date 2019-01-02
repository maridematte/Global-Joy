import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './views/Homepage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: "/newProfessional",
      name: "professional",
      component: function () {
        return import('./views/NewProfileProfessional.vue')
      }
    },
    {
      path: "/newClient",
      name: "client",
      component: function () {
        return import('./views/NewProfileClient.vue')
      }
    },
    {
      path: "/wholeness",
      name: "wholeness",
      component: function() {
        return import('./views/Wholeness.vue')
      }
    },
    {
      path: "/performance",
      name: "performance",
      component: function() {
        return import('./views/Performance.vue')
      }
    },
    {
      path: "/body",
      name: "body",
      component: function() {
        return import('./views/Body.vue')
      }
    },
    {
      path: "/mind",
      name: "mind",
      component: function() {
        return import('./views/Mind.vue')
      }
    },
    {
      path: "/serenity",
      name: "serenity",
      component: function() {
        return import('./views/Serenity.vue')
      }
    },
    {
      path: "/strength",
      name: "strength",
      component: function() {
        return import('./views/Strength.vue')
      }
    },
  ]
})
