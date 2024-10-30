<template>
  <button class="custom-button" :style="{ backgroundColor: backgroundColor }">
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
  transition: all 0.3s ease;
  transform: scale(1.03);
}

.custom-button::after {
  content: "→";
  margin-left: 10px;
  font-size: 20px;
}
</style>
