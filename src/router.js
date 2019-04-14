import Vue from "vue";
import Router from "vue-router";
import ActionPage from "./pages/ActionPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import StartPage from "./pages/StartPage.vue";
import SuccessfulActionPage from "./pages/SuccessfulActionPage.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "FrontPage",
      component: StartPage
    },
    {
      path: "/action",
      component: ActionPage
    },
    {
      path: "/success",
      component: SuccessfulActionPage
    },
    {
      path: "/error",
      name: "ErrorPage",
      component: ErrorPage
    }
  ]
});
