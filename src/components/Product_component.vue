<template>
  <div class="product-list">
    <div
      class="product"
      v-for="product in products"
      :key="product.id"
      @click="goToProductDetail(product.id)"
    >
      <!-- Product Tag -->
      <div class="product-tag"></div>

      <!-- Product Image -->
      <div class="img">
        <img :src="getFirstImage(product.image)" alt="" class="product-image" />
      </div>

      <!-- Product Info -->
      <div class="product-info">
        <p
          class="product-description"
          v-text="product.group"
          style="font-family: Lato, sans-serif"
        ></p>
        <h3
          class="product-name"
          v-text="product.name"
          style="font-family: Quicksand, sans-serif"
        ></h3>
        <p
          class="product-description"
          v-text="product.description"
          style="font-family: Lato, sans-serif"
        ></p>
        <div class="product-rating" style="font-family: Lato, sans-serif">
          <span v-for="n in 4" :key="'gold-star-' + n" class="gold-star"
            >★</span
          >
          <span class="grey-star">★</span> ({{ product.rating }})
        </div>
        <p
          class="product-description"
          v-text="product.size"
          style="font-family: Lato, sans-serif"
        ></p>
      </div>

      <!-- Price Section -->
      <div class="price-section">
        <div class="price">
          <span class="discount-price" v-if="product.price">
            ${{ product.price }}
          </span>
          <span class="sell-price" v-text="'$' + product.sellPrice"></span>
        </div>

        <!-- Quantity selector -->
        <div class="quantity-section">
          <MyButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useProductStore } from "../stores/ProductStore.js";
import MyButton from "./MyButton.vue";
export default {
  name: "ProductComponent",
  components: {
    MyButton,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const router = useRouter(); // Correct usage in Composition API

    const goToProductDetail = (productId) => {
      router.push(`/products/${productId}`); // Correct usage of router.push
    };

    const getFirstImage = (image) => {
      // Split the image string by comma and return the first one
      return image ? image.split(",")[0].trim() : "";
    };

    return {
      goToProductDetail,
      getFirstImage,
    };
  },
  created() {
    const productStore = useProductStore();
    productStore.fetchProducts();
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 2%;
  width: 1480px;
}

.product {
  width: 270px;
  height: 400px;
  border: 1px solid #0bba39;
  border-radius: 10px;
  padding: 15px;
  position: relative;
  box-shadow: 0 6px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-tag {
  font-family: Lato, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  width: 50px;
  height: 30px;
  top: 20px;
  left: -0.3%;
  color: white;
  font-size: 12px;
  padding: 10px, 15px, 10px, 15px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

.img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
}

.product-image {
  width: 65%;
  height: 90%;
  margin-bottom: 5%;
  margin-left: 10%;
}

.product-image:hover {
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

/* Product info (name, description, rating) */
.product-info {
  flex-grow: 1;
  margin-bottom: 10px;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 5px 0;
}

.product-description {
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;
}

.gold-star {
  color: #fdc040;
  font-size: 18px;
}

.grey-star {
  color: #cdcdcd;
  font-size: 18px;
}
/* Price section */
.price-section {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.price {
  display: flex;
  align-items: baseline;
  gap: 10%;
}

.discount-price {
  font-family: Quicksand, sans-serif;
  font-size: 20px;
  color: #3bb77e;
  font-weight: bold;
}

.sell-price {
  font-family: Quicksand, sans-serif;
  text-decoration: line-through;
  color: #888;
}

/* Quantity and add button */
.quantity-section {
  font-family: Quicksand, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
