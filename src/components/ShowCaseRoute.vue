<template>
  <div class="showcase">
    <div class="titleCase">
      <h1 style="font-weight: bold; margin-top: 5%; line-height: 1.2">
        {{ categoryName }}
      </h1>
    </div>
    <div class="description">
      <p style="margin-top: 10%">Home > Categories > {{ categoryName }}</p>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "@/stores/ProductStore";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "ShowCaseRoute",
  setup() {
    const route = useRoute(); // Get the current route object
    const productStore = useProductStore(); // Access your product store

    // Get the categoryId from route params
    const categoryId = route.params.categoryId;

    // Ref to hold category name
    const categoryName = ref("Loading...");

    // Fetch category when component mounts
    onMounted(async () => {
      // Ensure categories are fetched if not already loaded
      if (productStore.categories.length === 0) {
        await productStore.fetchCategories();
      }

      // Find the category by id
      const category = productStore.categories.find(
        (cat) => cat.id.toString() === categoryId.toString()
      );

      // Set the category name or fallback if not found
      categoryName.value = category ? category.name : "Category Not Found";
    });

    return {
      categoryName,
    };
  },
};
</script>

<style scoped>
.showcase {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 1%;
  width: 1480px;
  height: 235px;
  border: none;
  border-radius: 15px;
  background-color: rgb(241, 219, 185);
  position: relative;
}

.showcase::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  background: url("../assets/images/bg3.png") center/cover no-repeat;
  opacity: 0.2;
  z-index: 1;
}

.titleCase {
  font-size: 20px;
  font-family: Quicksand, sans-serif;
  color: #253d4e;
  margin-left: 5%;
}
.description {
  font-size: 20px;
  font-family: Lato, sans-serif;
  color: #7e7e7e;
  margin-left: 5%;
}
</style>
