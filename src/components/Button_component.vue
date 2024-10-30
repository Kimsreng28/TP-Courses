<template>
  <button
    class="custom-button"
    :style="{ backgroundColor: backgroundColor }"
    @click="shopNow(promotion)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    backgroundColor: {
      type: String,
      default: "#2dd06e",
    },
  },
  methods: {
    shopNow(promotion) {
      this.$emit("shopNow", promotion);
    },
  },
};
</script>

<style scoped>
.custom-button {
  font-family: "Quicksand", serif;
  font-weight: 700;
  font-size: 14px;
  transition: background-color 0.3s ease;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.custom-button:hover {
  filter: brightness(80%);
}

.custom-button::after {
  content: "→";
  margin-left: 10px;
  font-size: 20px;
}
</style>
