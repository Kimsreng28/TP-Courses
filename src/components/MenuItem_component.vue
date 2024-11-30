<template>
  <div class="menuItem">
    <ul class="menu-list">
      <li
        v-for="group in groupItems"
        :key="group.name"
        :class="{ selected: selectedItem === group.name }"
      >
        <!-- Main menu item -->
        <div
          @click="
            group.subItems ? toggleDropdown(group.name) : handleClick(group.id)
          "
          class="menu-item-header"
        >
          <font-awesome-icon
            v-if="group.icon"
            :icon="group.icon"
            class="menu-icon"
            :style="{ color: group.iconColor || '#000' }"
          />
          <span :style="{ fontWeight: group.fontWeight }">{{
            group.name
          }}</span>
          <font-awesome-icon
            v-if="group.icon1"
            :icon="group.icon1"
            class="menu-icon"
            :style="{ color: group.iconColor || '#000' }"
          />
        </div>

        <!-- Sub-items -->
        <ul v-if="group.subItems && dropdown[group.name]" class="sub-menu">
          <li
            v-for="subItem in group.subItems"
            :key="subItem.name"
            class="sub-menu-item"
            @click.stop="handleClick(subItem.id)"
          >
            <span>{{ subItem.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "MenuItemComponent",
  props: {
    id: Number,
    groupItems: {
      type: Array,
      required: true,
    },
  },
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      selectedItem: "Browse All Categories",
      dropdown: {},
    };
  },

  methods: {
    handleClick(id) {
      this.$emit("category-clicked", id);
    },
    toggleDropdown(name) {
      this.dropdown = {
        ...this.dropdown,
        [name]: !this.dropdown[name],
      };
    },
  },
};
</script>

<style scoped>
.menuItem {
  font-family: Quicksand, serif;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.menu-list {
  display: flex;
  list-style-type: none;
  gap: 15px;
  padding: 0;
  margin: 0;
}

.menu-list li {
  display: flex;
  align-items: center;
  color: #253d4e;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  position: relative;
}

.menu-list li:hover {
  background-color: #f1f1f1;
  color: black;
}

.menu-list li.selected {
  background-color: #3bb77e;
  color: black;
}

.bold {
  font-weight: bold;
  color: #ff5722;
}

.menu-icon {
  margin-right: 8px;
  margin-left: 8px;
  transition: color 0.3s ease;
}
.sub-menu {
  display: block;
  position: absolute;
  top: 100%; /* Position below the parent item */
  left: 0;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  z-index: 10;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  min-width: 200px;
  transition: all 0.3s ease;
}

.sub-menu-item {
  padding: 8px 16px;
  font-size: 14px;
  color: #253d4e;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.sub-menu-item:hover {
  background-color: #f1f1f1;
  color: #3bb77e;
}
</style>
