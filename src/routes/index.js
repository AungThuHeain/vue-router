import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Movies = () => import("../views/Movies.vue");
const Detail = () => import("../views/MovieDetail.vue");

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/movies", name: "movies", component: Movies },
  { path: "/movies/:id", name: "detail", component: Detail, props: true },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
