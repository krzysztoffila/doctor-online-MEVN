import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'LandingPage',
  component: LandingPage,
  meta: {
    title: 'Welcome to Doctor Online!'
  }
}]

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
