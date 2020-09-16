import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AddBlog from "../views/AddBlog.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Add New Blog",
    component: AddBlog
  },
  {
    path: "/blog-list",
    name: "Blog List",

    component: () => import("../views/BlogList.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
