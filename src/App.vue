<template>
  <div class="add">
    <div class="categories">
      <CategoryCard
        v-for="(category, index) in productStore.categories"
        :id="category.id"
        :key="category.id"
        :name="category.name"
        :productCount="category.productCount"
        :image="category.image"
        :color="category.color"
      />
    </div>

    <div class="promotion">
      <Promotion
        v-for="(promo, index) in productStore.promotions"
        :id="promo.id"
        :key="promo.id"
        :title="promo.title"
        :buttonText="promo.buttonText"
        :image="promo.image"
        :color="promo.color"
        :buttonColor="promo.buttonColor"
      />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";
import CategoryCard from "./components/Category_component.vue";
import Promotion from "./components/Promotion_component.vue";

export default {
  name: "App",
  components: {
    CategoryCard,
    Promotion,
  },
  setup() {
    const productStore = useProductStore();

    onMounted(async () => {
      await productStore.fetchCategories();
      await productStore.fetchPromotions();
      await productStore.fetchProducts();
      await productStore.fetchGroups();

      const nameGroup = "fruits";
      const nameCategory = "vegetables";

      console.log(
        `Categories in group "${nameGroup}":`,
        productStore.getCategoriesByGroup(nameGroup)
      );
      console.log(
        `Products in group "${nameGroup}":`,
        productStore.getProductsByGroup(nameGroup)
      );
      console.log(
        `Products in category "${nameCategory}":`,
        productStore.getProductsByCategory(nameCategory)
      );
      console.log(
        "Popular products sorted by rating:",
        productStore.getPopularProducts
      );
    });

    return {
      productStore,
    };
  },
};
</script>

<style scoped>
.add {
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: -10%;
}

/* Categories Section */
.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.5%;
  margin: 1%;
  width: 1480px;
}

/* Promotions Section */
.promotion {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1%;
  width: 1480px;
}
</style>
