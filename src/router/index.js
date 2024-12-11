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
          name: "page1",
          component: () => import("../views/PageOne.vue"),
          props: (route) => ({
            pageName: "page1",
            message: route.query.message,
          }),
          children: [
            {
              path: "section1",
              component: () => import("../views/Section.vue"),
              props: (route) => ({
                sectionName: "Section 1",
                pageName: "page1",
                message: route.query.message,
              }), // Dynamic props
            },
            {
              path: "section2",
              component: () => import("../views/Section.vue"),
              props: (route) => ({
                sectionName: "Section 2",
                pageName: "page1",
                message: route.query.message,
              }),
            },
            {
              path: "section3",
              component: () => import("../views/Section.vue"),
              props: (route) => ({
                sectionName: "Section 3",
                pageName: "page1",
                message: route.query.message,
              }),
            },
            {
              path: "section4",
              component: () => import("../views/Section.vue"),
              props: (route) => ({
                sectionName: "Section 4",
                pageName: "page1",
                message: route.query.message,
              }),
            },
          ],
        },
        {
          path: "page2",
          name: "page2",
          component: () => import("../views/PageTwo.vue"),
          props: (route) => ({
            pageName: "page2",
            message: route.query.message,
          }),
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
          props: (route) => ({
            pageName: "page3",
            message: route.query.message,
          }),
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
