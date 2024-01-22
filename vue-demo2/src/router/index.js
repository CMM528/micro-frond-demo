import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/home.vue")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../pages/about.vue")
    },
  ]
})

export default router;