import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/:pageName",
      component: () => import("../views/PageOne.vue"),
      props: true,
      children: [
        {
          path: "section1",
          component: () => import("../views/Section.vue"),
          props: { sectionName: "Section 1" },
        },
        {
          path: "section2",
          component: () => import("../views/Section.vue"),
          props: { sectionName: "Section 2" },
        },
        {
          path: "section3",
          component: () => import("../views/Section.vue"),
          props: { sectionName: "Section 3" },
        },
        {
          path: "section4",
          component: () => import("../views/Section.vue"),
          props: { sectionName: "Section 4" },
        },
      ],
    },
  ],
});

export default router;
