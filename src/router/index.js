import Vue from "vue";
import VueRouter from "vue-router";

import Blank from "@/views/Blank.vue";
import List from "@/views/List.vue";
Vue.use(VueRouter);

// TODO Web Template Studio: Add routes for your new pages here.
export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/List", component: List },
    { path: "/Blank", component: Blank },

    { path:"/", redirect: "/Blank" }
  ]
});
