<template>
  <div class="add">
    <div class="bar">
      <NavBarView />
    </div>

    <div class="menuItem">
      <MenuItemView />
    </div>

    <div class="detail"><ProductDetail /></div>
  </div>
</template>

<script>
import ProductDetail from "../components/ProductDetail.vue";
import MenuItemView from "../views/MenuItemView.vue";
import NavBarView from "../views/NavBarView.vue";

export default {
  name: "ProductDetailPage",
  components: {
    MenuItemView,
    NavBarView,
    ProductDetail,
  },
};
</script>

<style scoped>
.add {
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  margin-left: -10%;
  justify-content: center;
}
</style>
