<template>
  <div class="container">
    <p>Welcome to {{ pageName }}</p>
    <hr />
    <RouterView />
  </div>
</template>

<script>
import MenuComponent from "../components/MenuComponent.vue";
export default {
  components: {
    MenuComponent,
  },
  props: {
    pageName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  width: 1440px;
  display: flex;
}

p {
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
}
</style>
