<template>
  <div class="container">
    <HeaderComponent title="Header" />
    <div class="menu">
      <MenuComponent />
    </div>
    <div class="content">
      <p>Welcome to {{ pageName }}</p>
      <hr />
      <RouterView />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import MenuComponent from "../components/MenuComponent.vue";
export default {
  components: {
    MenuComponent,
    HeaderComponent,
    FooterComponent,
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
  display: flex;
  flex-direction: column;
  width: 1440px;
  padding: 20px;
}
.menu {
  width: 50%;
  background-color: #f0f0f0;
  padding: 15px;
  border-right: 1px solid #ccc;
}
.content {
  width: 75%;
  padding: 15px;
}
</style>
