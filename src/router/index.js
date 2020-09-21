import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/MainLayout"),
    children: [
      //Homepage
      {
        path: "/",
        component: () => import("../views/HomePage"),
      },
      {
        path: "/home",
        component: () => import("../views/HomePage"),
      },
      {
        path: "/about",
        component: () => import("../views/About"),
      },
      {
        path: "/menu",
        component: () => import("../views/Menu"),
      },
      {
        path: "/menu/:slug",
        name: "Menu",
        component: () => import("../views/Menu"),
      },
      {
        path: "/gallary",
        component: () => import("../views/Gallary"),
      },
      {
        path: "/blog",
        component: () => import("../views/Blog"),
      },
      {
        path: "/shop",
        component: () => import("../views/Shop"),
      },
      {
        path: "/product/slug=:slug",
        name: "product",
        component: () => import("../views/Details"),
      },
      {
        path: "/tags/slug=:slug",
        name: "Tag",
        component: () => import("../views/Tag"),
      }
    ],
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
