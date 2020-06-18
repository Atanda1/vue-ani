import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Animation from "../views/Animation.vue";
import tranGroup from "../views/tran-group.vue"
import multipleElement from "../views/multipleElement.vue"
import aniAndtransi from "../views/aniAndtransi.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/animation",
    name: "Animation",
    component: Animation
  },
  {
    path: "/tranGroup",
    name: "tranGroup",
    component: tranGroup
  },
  {
    path: "/aniAndtransi",
    name: "aniAndtransi",
    component: aniAndtransi
  },
  {
    path: "/multipleElement",
    name: "multipleElement",
    component: multipleElement
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
