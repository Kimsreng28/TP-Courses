<template>
  <div class="containerHeader">
    <div class="title">
      <p>{{ title }}</p>
    </div>
    <div class="pages">
      <p><router-link to="page1"> Page 1</router-link></p>
      <p><router-link to="page2"> Page 2</router-link></p>
      <p><router-link to="page3"> Page 3</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.containerHeader {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #aea8a8;
  padding: 2%;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.pages {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  width: 20%;
  cursor: pointer;
}
.title p {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}
.pages p {
  font-size: 18px;
  color: #fff;
}
.pages p:hover {
  color: #000;
  cursor: pointer;
}
</style>
