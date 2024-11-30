<template>
  <hr />
  <div class="container">
    <MenuItemComponent
      :groupItems="[
        {
          id: 1,
          name: 'Browse All Categories',
          icon: ['fas', 'border-all'],
          icon1: ['fas', 'caret-down'],
          iconColor: '#000000',
          fontWeight: 'bold',
          subItems: [
            { id: 10, name: 'All' },
            { id: 11, name: 'Grocery' },
          ],
        },
        {
          id: 2,
          name: 'Hot Deals',
          icon: ['fas', 'fire'],
          iconColor: '#000000',
          fontWeight: 'bold',
        },
        { id: 3, name: 'Home', fontWeight: 'bold' },
        {
          id: 4,
          name: 'Food',
          icon1: ['fas', 'caret-down'],
          iconColor: '#7E7E7E',
          fontWeight: 'bold',
          subItems: [
            { id: 12, name: 'Fruits' },
            { id: 13, name: 'Dairy' },
          ],
        },
        {
          id: 5,
          name: 'Vegetables',
          icon1: ['fas', 'caret-down'],
          iconColor: '#7E7E7E',
          fontWeight: 'bold',
          subItems: [
            { id: 14, name: 'Leafy Greens' },
            { id: 15, name: 'Root Vegetables' },
          ],
        },
        { id: 6, name: 'Drink', fontWeight: 'bold' },
        { id: 7, name: 'Cookies', fontWeight: 'bold' },
        {
          id: 8,
          name: 'Meat & Seafood',
          icon1: ['fas', 'caret-down'],
          iconColor: '#7E7E7E',
          fontWeight: 'bold',
          subItems: [
            { id: 16, name: 'Chicken' },
            { id: 17, name: 'Fish' },
          ],
        },
        { id: 9, name: 'Bakery', fontWeight: 'bold' },
      ]"
      @category-clicked="goToCategory"
    />
    <SupportCenter
      :imageSrc="'https://static.vecteezy.com/system/resources/previews/017/785/096/non_2x/headphone-icon-on-transparent-background-free-png.png'"
      :title="'099 777 888'"
      :support-text="'24/7 Support Center'"
      :image-width="'40px'"
      :image-height="'30px'"
      :margin-right="'-1px'"
      :support-font-size="'11px'"
    />
  </div>
  <hr />
</template>

<script>
import SupportCenter from "../components/Logo_component.vue";
import MenuItemComponent from "../components/MenuItem_component.vue";
export default {
  name: "MenuItemView",
  components: {
    SupportCenter,
    MenuItemComponent,
  },
  methods: {
    goToCategory(categoryId) {
      this.$router.push(`/categories/${categoryId}`);
    },
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
hr {
  margin: 0.5%;
  color: #e5e5e5;
  width: 1500px;
}
</style>
