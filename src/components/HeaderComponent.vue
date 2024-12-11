<template>
  <div class="containerHeader">
    <div class="title">
      <p>{{ title }}</p>
    </div>
    <div class="pages">
      <p>
        <router-link to="/page1" class="link" active-class="active-link"
          >Page 1</router-link
        >
      </p>
      <p>
        <router-link to="/page2" class="link" active-class="active-link"
          >Page 2</router-link
        >
      </p>
      <p>
        <router-link to="/page3" class="link" active-class="active-link"
          >Page 3</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    title: {
      type: String,
      default: "Header",
    },
  },
};
</script>

<style scoped>
.containerHeader {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #aea8a8;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title p {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin: 0;
}

.pages {
  display: flex;
  gap: 15px;
}

.link {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 4px;
}

.link:hover {
  background-color: #4c4040;
}

.active-link {
  background-color: #d2cbcb;
  color: #fb0000;
}
</style>
