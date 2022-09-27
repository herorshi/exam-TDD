import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import choieOne from "@/components/choieOne";
import choieTwo from "@/components/choieTwo";
import choieThree from "@/components/choieThree";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/examOne",
    name: "one",
    component: choieOne
  },
  {
    path: "/examTwo",
    name: "one",
    component: choieTwo
  },
  {
    path: "/examThree",
    name: "one",
    component: choieThree
  },

  {
    path: "/about",
    name: "about",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
