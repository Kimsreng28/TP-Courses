<template>
  <div class="category-card" :style="{ backgroundColor: backgroundColor }">
    <div class="category-image">
      <img :src="imageSrc" alt="" />
    </div>

    <div class="category-info">
      <h3>{{ title }}</h3>
      <p>{{ itemCount }} items</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    title: {
      type: String,
      default: "Cake & Milk",
    },
    itemCount: {
      type: Number,
      default: 14,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: "#f8f4eb",
    },
  },
};
</script>

<style scoped>
.category-card {
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 110px; /* 137px */
  height: 150px; /* 177px */
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  margin: 1%;
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
}

.category-card:hover {
  filter: brightness(90%);
}

.category-image img {
  width: 70px; /* 100px */
  height: 70px; /* 100px */
  object-fit: cover;
  margin-top: 3%;
}

.category-info h3 {
  font-family: "Quicksand", serif;
  font-weight: 700;
  font-size: 13px;
  color: #253d4e;
  margin-top: 5%;
}

.category-info p {
  font-family: "Lato", sans-serif;
  font-size: 12px;
  color: #b6b6b6;
  margin-top: 2%;
}
</style>
