<template>
  <div class="container">
    <SupportCenter
      style="margin-left: -2%"
      :imageSrc="'https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-melons-logo-vector-template-png-image_5517513.png'"
      :title="'Melon'"
      :support-text="'Mart & Grocery'"
      :margin-right="'-30px'"
      :image-width="'110px'"
      :image-height="'80px'"
      :title-font-size="'30px'"
      :title-font-weight="'bold'"
      :support-font-size="'12px'"
      :support-font-weight="'bold'"
      :support-color="'black'"
    />
    <SearchBox style="margin-top: 1%" />
    <MenuItemComponent
      :group-items="[
        {
          name: 'Account',
          icon: ['fas', 'user'],
        },
        {
          name: 'Compare',
          icon: ['fas', 'arrows-spin'],
        },
        {
          name: 'Wishlist',
          icon: ['fas', 'heart'],
        },
        {
          name: 'Cart',
          icon: ['fas', 'cart-plus'],
        },
      ]"
    />
  </div>
</template>

<script>
import SupportCenter from "../components/Logo_component.vue";
import MenuItemComponent from "../components/MenuItem_component.vue";
import SearchBox from "../components/SearchBox_component.vue";
export default {
  name: "NavBarView",
  components: {
    SupportCenter,
    MenuItemComponent,
    SearchBox,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1%;
  width: 1480px;
}
</style>
