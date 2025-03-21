import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import MoviesPage from "@/views/MoviesPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/movies", component: MoviesPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
