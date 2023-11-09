import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '../views/LandingPage.vue'
import RegisterUser from '../views/register/RegisterUser.vue'
import AboutUs from '../views/AboutUs.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: {
      title: 'Witamy na Doctor Online!'
    }
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      title: 'O nas - dr Online!'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterUser,
    meta: {
      title: 'Rejestracja - dr Online'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
const DEFAULT_TITLE = 'Doctor Online';
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});
export default router
