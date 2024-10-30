<template>
  <div class="add">
    <div class="categories">
      <CategoryCard
        v-for="(category, index) in categories"
        :id="category.id"
        :key="index"
        :name="category.name"
        :productCount="category.productCount"
        :image="category.image"
        :color="category.color"
      />
    </div>

    <div class="promotion">
      <Promotion
        v-for="(promo, index) in promotions"
        :id="promo.id"
        :key="index"
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
import axios from "axios";
import CategoryCard from "./components/Category_component.vue";
import Promotion from "./components/Promotion_component.vue";

export default {
  name: "App",
  components: {
    CategoryCard,
    Promotion,
  },
  data() {
    return {
      categories: [],
      promotions: [],
    };
  },
  created() {
    // Fetch categories from API
    axios
      .get("http://localhost:3000/api/categories")
      .then((response) => {
        this.categories = response.data;
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    // Fetch promotions from API
    axios
      .get("http://localhost:3000/api/promotions")
      .then((response) => {
        this.promotions = response.data;
      })
      .catch((error) => {
        console.error("Error fetching promotions:", error);
      });
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
