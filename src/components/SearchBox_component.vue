<template>
  <div class="search-component">
    <div class="one">
      <select
        v-model="selectedCategory"
        style="
          font-family: Quicksand, sans-serif;
          font-size: 14px;
          font-weight: bold;
          display: inline;
        "
        value="all"
      >
        <option>All Categories</option>
        <option>Food</option>
      </select>
      <h4 style="color: #cacaca">|</h4>
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search for items"
        style="
          font-family: Quicksand, sans-serif;
          font-size: 12px;
          font-weight: bold;
          outline: none;
        "
      />
    </div>
    <div class="two">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" @click="search" />
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
export default {
  name: "SearchBox",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      searchTerm: "",
      selectedCategory: "All Categories",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchTerm, this.selectedCategory);
    },
  },
};
</script>

<style scoped>
.search-component {
  width: 700px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #bce3c9;
  border-radius: 5px;
}

.one {
  display: flex;
  flex-direction: row;
  align-items: center;
}

select {
  padding: 10px;
  margin-right: 20px;
  border: none;
}

input {
  width: 400px;
  height: 30px;
  margin-right: 5px;
  border: none;
  color: #b6b6b6;
}

.two {
  width: 25px;
  height: 25px;
  margin-right: 20px;
  border: none;
  cursor: pointer;
  color: #7e7e7e;
}
</style>
