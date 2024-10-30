<template>
  <div class="promotion" :style="{ backgroundColor: backgroundColor }">
    <div class="promotion-text">
      <div class="text">
        <h2>{{ title }}</h2>
      </div>

      <div class="promotion-button">
        <CustomButton :backgroundColor="buttonBackgroundColor">{{
          buttonText
        }}</CustomButton>
      </div>
    </div>

    <div class="promotion-image">
      <img :src="imageSrc" alt="" />
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
    title: {
      type: String,
      default: "Everyday Fresh & Clean with Our Products",
    },
    buttonText: {
      type: String,
      default: "Shop Now",
    },
    imageSrc: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: "#f8f4eb",
    },
    buttonBackgroundColor: {
      type: String,
      default: "#2dd06e",
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
