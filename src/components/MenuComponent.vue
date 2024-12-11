<template>
  <div class="containerMenu">
    <div class="title">
      <p>Menu</p>
    </div>
    <div class="sections">
      <p><router-link to="section1"> Section 1</router-link></p>
      <p><router-link to="section2"> Section 2</router-link></p>
      <p><router-link to="section3"> Section 3</router-link></p>
      <p><router-link to="section4"> Section 4</router-link></p>
    </div>
  </div>
</template>

<style scoped>
.containerMenu {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 20%;
  align-items: start;
  background-color: #aea8a8;
  padding: 2%;
  border-radius: 5px;
  margin: 10px;
  height: auto;
}
</style>
