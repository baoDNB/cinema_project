import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import MoviesPage from "@/views/MoviesPage.vue";
import TheaterPage from "@/views/TheaterPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/movies", component: MoviesPage },
  { path: "/cinemas", component: TheaterPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
