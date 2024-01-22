import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    //
    // redirect: "/vue-demo2*",
  },
  {
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: "/vue-demo/:page*",
    name: "vue-demo",
    component: HomeView,
  },
  // {
  //   path: "/app-vue2-demo*",
  //   name: "app-vue2-demo",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
