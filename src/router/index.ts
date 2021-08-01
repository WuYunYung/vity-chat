import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});