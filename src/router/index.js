import { createRouter, createWebHistory  } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
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
