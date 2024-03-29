import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/Home/Home.vue"),
    },
    {
      path: "/workouts",
      component: () => import("../components/WorkOut/WorkOutPage.vue"),
    },
  ],
});

export default router;
