import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    groups: [],
    products: [],
    categories: [],
    promotions: [],
  }),
  getters: {
    getCategoriesByGroup: (state) => (group) => {
      return state.categories.filter((category) => category.group === group);
    },

    getProductsByGroup: (state) => (group) => {
      return state.products.filter((product) => product.group === group);
    },

    getProductsByCategory: (state) => (category) => {
      return state.products.filter((product) => product.category === category);
    },

    getPopularProducts: (state) => {
      return state.products.sort((a, b) => b.rating - a.rating).slice(0, 5);
    },
  },
  actions: {
    async fetchProducts() {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      this.products = data;
    },
    async fetchCategories() {
      const response = await fetch("http://localhost:3000/api/categories");
      const data = await response.json();
      this.categories = data;
    },
    async fetchPromotions() {
      const response = await fetch("http://localhost:3000/api/promotions");
      const data = await response.json();
      this.promotions = data;
    },
    async fetchGroups() {
      const response = await fetch("http://localhost:3000/api/groups");
      const data = await response.json();
      console.log("Fetched groups:", data);
      this.groups = data;
    },
  },
});
