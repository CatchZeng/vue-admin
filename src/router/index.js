import Vue from "vue";
import Router from "vue-router";
import admin from "../views/admin/index.vue";
import login from "../views/login/index.vue";

Vue.use(Router);

const routes = [
  {
    path: "/admin",
    component: admin,
    hidden: true
  },
  {
    path: "/login",
    component: login,
    hidden: true
  },
  {
    path: "/",
    redirect: "/login",
    hidden: true
  }
];

const router = new Router({
  routes: routes
});

export default router;
