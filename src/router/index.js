import Vue from "vue";
import VueRouter from "vue-router";
import DisplayList from "../views/DisplayList.vue";
import DisplayList2 from "../views/DisplayList2.vue";
import CreateList from "../views/CreateList.vue";
import ListContent from "../views/ListContent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "DisplayList",
    component: DisplayList
  },
  {
    path: "/nostore",
    name: "DisplayList2",
    component: DisplayList2
  },
  {
    path: "/lists/create",
    name: "CreateList",
    component: CreateList
  },
  {
    path: "/lists/:id",
    name: "ListContent",
    component: ListContent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
