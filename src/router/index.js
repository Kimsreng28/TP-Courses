import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/categories/:categoryId",
      name: "category",
      component: () => import("../views/CategoryPage.vue"),
    },
    {
      path: "/products/:productId",
      name: "product",
      component: () => import("../views/ProductDetailPage.vue"),
    },
  ],
});

export default router;
