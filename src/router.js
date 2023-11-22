import Vue from "vue";
import VueRouter from "vue-router";
// import App from "./App.vue";
import MainPage from "./components/MainPage.vue";
import WorkPage from "./components/WorkPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  // { path: "/works/:card", name: "works", component: WorkPage },
  // Add other routes as needed
  {
    path: "/:tab/:card",
    name: "card",
    component: WorkPage,
    // props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
