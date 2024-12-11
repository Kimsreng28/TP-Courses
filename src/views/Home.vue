<template>
  <div class="container">
    <HeaderComponent :title="'Header'" />
    <div class="body">
      <div class="menu">
        <MenuComponent />
      </div>
      <div class="welcome">
        <RouterView />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import MenuComponent from "../components/MenuComponent.vue";

export default {
  name: "Home",
  components: {
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 1440px;
  height: 100vh;
  overflow: hidden;
}

.body {
  width: 100%;
  display: flex;
  flex: 1;
  background-color: #f9f9f9;
}

.menu {
  width: 500px;
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
  padding: 15px;
}

.welcome {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
}
</style>
