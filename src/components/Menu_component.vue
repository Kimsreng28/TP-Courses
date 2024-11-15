<template>
  <div class="menu">
    <h2 v-text="title"></h2>
    <ul class="menu-list">
      <li
        v-for="(group, index) in groups"
        :key="index"
        v-text="group"
        :class="{ bold: group === 'All' }"
        @click="selectGroup(group)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  props: {
    title: {
      type: Array,
      required: true,
    },
    groups: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectGroup(group) {
      this.$emit("group-selected", group);
    },
  },
};
</script>

<style scoped>
.menu {
  width: 1480px;
  font-family: Quicksand, serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5%;
}
.menu-list {
  display: flex;
  list-style-type: none;
  gap: 10px;
}
.menu-list li {
  font-size: 14px;
  font-weight: 500;
  color: #253d4e;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
}
.menu-list li:hover {
  background: linear-gradient(
    90deg,
    rgba(23, 88, 65, 1) 0%,
    rgba(34, 153, 84, 1) 100%
  );
  color: white;
  transition: background 0.3s ease;
}
.bold {
  font-weight: bold;
}
h2 {
  font-size: 32px;
  font-weight: bold;
  color: #253d4e;
}
</style>
