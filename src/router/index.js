import { createRouter, createWebHistory  } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlankView from "../views/BlankView.vue";

const routes = [
  {
    path: "/",
    name: "",
    component: HomeView,
  },
  {
    path: "/home",
    name: "",
    component: BlankView,
  }
];

const router = createRouter({
  history: createWebHistory (),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const pageTitle = to.name || 'Dennis Vulders'; // Use the route name as the page title
//   document.title = pageTitle;
//   next();
// });

export default router;
