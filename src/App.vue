<template>
  <div class="add">
    <div class="menuCom">
      <MenuComponent
        :title="categoryTitle"
        :groups="productStore.groups"
        @group-selected="filterCategoriesByGroup"
      />
    </div>

    <div class="categories">
      <CategoryCard
        v-for="(category, index) in filteredCategories"
        :id="category.id"
        :key="category.id"
        :name="category.name"
        :productCount="category.productCount"
        :image="category.image"
        :color="category.color"
        @click="filterProductsByCategory(category.id)"
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

    <div class="menuCom">
      <MenuComponent
        :title="productTitle"
        :groups="productStore.groups"
        @group-selected="filterProductsByGroup"
      />
    </div>

    <div class="productCom">
      <ProductComponent :products="filteredProducts" />
    </div>

    <div class="menuCom">
      <MenuComponent :title="popularProduct" />
    </div>

    <div class="popularProduct">
      <ProductComponent :products="productStore.getPopularProducts" />
    </div>
  </div>
</template>

<script>
import { useProductStore } from "@/stores/ProductStore";
import { computed, onMounted, ref } from "vue";
import CategoryCard from "./components/Category_component.vue";
import MenuComponent from "./components/Menu_component.vue";
import ProductComponent from "./components/Product_component.vue";
import Promotion from "./components/Promotion_component.vue";

export default {
  name: "App",
  components: {
    CategoryCard,
    Promotion,
    MenuComponent,
    ProductComponent,
  },
  setup() {
    const productStore = useProductStore();

    const selectedGroupCategory = ref("All");
    const selectedGroupProduct = ref("All");

    const selectedCategoryId = ref(null);

    const filteredCategories = computed(() => {
      return selectedGroupCategory.value === "All"
        ? productStore.categories
        : productStore.getCategoriesByGroup(selectedGroupCategory.value);
    });

    const filteredProducts = computed(() => {
      let products =
        selectedGroupProduct.value === "All"
          ? productStore.products
          : productStore.getProductsByGroup(selectedGroupProduct.value);

      if (selectedCategoryId.value !== null) {
        products = products.filter(
          (product) => product.categoryId === selectedCategoryId.value
        );
      }

      return products;
    });

    const filterCategoriesByGroup = (group) => {
      selectedGroupCategory.value = group;
      console.log(`Selected Group: ${group}`);
      console.log("Filtered Categories:", filteredCategories.value);
    };

    const filterProductsByGroup = (group) => {
      selectedGroupProduct.value = group;
      console.log(`Selected Group: ${group}`);
      console.log("Filtered Products:", filteredProducts.value);
    };

    const filterProductsByCategory = (categoryId) => {
      selectedCategoryId.value = categoryId;
      console.log(`Selected Category ID: ${categoryId}`);
      console.log("Filtered Products by Category:", filteredProducts.value);
    };

    onMounted(async () => {
      await productStore.fetchCategories();
      await productStore.fetchPromotions();
      await productStore.fetchProducts();
      await productStore.fetchGroups();

      console.log("Products:", productStore.products);

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
      categoryTitle: "Featured Categories",
      productTitle: "Popular Products",
      popularProduct: "Popular List Products",
      filteredCategories,
      filterCategoriesByGroup,
      filteredProducts,
      filterProductsByGroup,
      filterProductsByCategory,
      selectedGroupCategory,
      selectedGroupProduct,
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
  cursor: pointer;
}

/* Promotions Section */
.promotion {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1%;
  width: 1480px;
}

.menuCom {
  margin-left: 0.5%;
}
</style>
