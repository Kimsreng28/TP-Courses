import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      children: [
        {
          path: "page1",
          component: () => import("../views/PageOne.vue"),
          props: { pageName: "page1" },
          children: [
            {
              path: "section1",
              component: () => import("../views/Section.vue"),
              props: () => ({ sectionName: "Section 1", pageName: "page1" }), // Dynamic props
            },
            {
              path: "section2",
              component: () => import("../views/Section.vue"),
              props: () => ({ sectionName: "Section 2", pageName: "page1" }),
            },
            {
              path: "section3",
              component: () => import("../views/Section.vue"),
              props: () => ({ sectionName: "Section 3", pageName: "page1" }),
            },
            {
              path: "section4",
              component: () => import("../views/Section.vue"),
              props: () => ({ sectionName: "Section 4", pageName: "page1" }),
            },
          ],
        },
        {
          path: "page2",
          component: () => import("../views/PageOne.vue"),
          props: { pageName: "page2" },
          children: [
            {
              path: "section1",
              component: () => import("../views/Section.vue"),
              props: () => ({ sectionName: "Section 1", pageName: "page2" }), // Dynamic props
            },
            {
              path: "section2",
              component: () => import("../views/Section.vue"),
              props: () => ({ sectionName: "Section 2", pageName: "page2" }),
            },
            {
              path: "section3",
              component: () => import("../views/Section.vue"),
              props: () => ({ sectionName: "Section 3", pageName: "page2" }),
            },
            {
              path: "section4",
              component: () => import("../views/Section.vue"),
              props: () => ({ sectionName: "Section 4", pageName: "page2" }),
            },
          ],
        },
        {
          path: "page3",
          component: () => import("../views/PageOne.vue"),
          props: { pageName: "page3" },
          children: [
            {
              path: "section1",

              component: () => import("../views/Section.vue"),
              props: () => ({ sectionName: "Section 1", pageName: "page3" }), // Dynamic props
            },
            {
              path: "section2",
              component: () => import("../views/Section.vue"),
              props: () => ({ sectionName: "Section 2", pageName: "page3" }),
            },
            {
              path: "section3",
              component: () => import("../views/Section.vue"),
              props: () => ({ sectionName: "Section 3", pageName: "page3" }),
            },
            {
              path: "section4",
              component: () => import("../views/Section.vue"),
              props: () => ({ sectionName: "Section 4", pageName: "page3" }),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
