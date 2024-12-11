<template>
  <div class="containerMenu">
    <div class="title">
      <p>Menu</p>
    </div>
    <div class="sections">
      <p v-for="section in sections" :key="section.name">
        <router-link
          :to="{
            path: `/${currentPage}/${section.path}`,
          }"
          class="link"
          active-class="active-link"
        >
          {{ section.name }}
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "MenuComponent",
  setup() {
    const route = useRoute();

    // Extract currentPage from the route path
    const currentPage = computed(() => route.path.split("/")[1] || "page1");

    // Define the sections dynamically
    const sections = [
      { name: "Section 1", path: "section1" },
      { name: "Section 2", path: "section2" },
      { name: "Section 3", path: "section3" },
      { name: "Section 4", path: "section4" },
    ];

    return {
      currentPage,
      sections,
    };
  },
};
</script>

<style scoped>
.containerMenu {
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.sections {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link {
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
}

.link:hover {
  background-color: #ddd;
}

.active-link {
  background-color: #d7cccc;
  color: #ff0000;
}
</style>
