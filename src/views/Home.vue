<template>
  <div class="container">
    <HeaderComponent title="Header" />
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
  padding: 20px;
}
.body {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.menu {
  width: 80%;
}
.welcome {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
</style>
