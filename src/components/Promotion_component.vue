<template>
  <div class="promotion" :style="{ backgroundColor: color }">
    <div class="promotion-text">
      <div class="text">
        <h2>{{ title }}</h2>
      </div>

      <div class="promotion-button">
        <CustomButton @click="show" :backgroundColor="buttonColor">{{
          buttonText
        }}</CustomButton>
      </div>
    </div>

    <div class="promotion-image">
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script>
import CustomButton from "./Button_component.vue";

export default {
  name: "Promotion",
  components: {
    CustomButton,
  },
  props: {
    id: Number,
    title: {
      type: String,
      default: "Everyday Fresh & Clean with Our Products",
    },
    buttonText: {
      type: String,
      default: "Shop Now",
    },
    image: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#f8f4eb",
    },
    buttonColor: {
      type: String,
      default: "#2dd06e",
    },
  },
  methods: {
    show() {
      alert(`Let's shop: ${this.title}`);
    },
  },
};
</script>

<style scoped>
.promotion {
  width: 500px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease;
  padding: 1%;
  border-radius: 10px;
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
}

.promotion-text {
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  max-width: 60%;
}

.promotion-text h2 {
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #253d4e;
  margin-bottom: 10%;
}

.promotion-image img {
  width: 190px;
  height: 170px;
  border-radius: 10px;
  margin-top: 50%;
  margin-left: 5%;
}
</style>
