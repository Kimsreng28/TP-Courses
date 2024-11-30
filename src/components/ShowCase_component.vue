<template>
  <div class="showcase">
    <div class="left">
      <div class="titleCase">
        <h1 style="font-weight: bold; margin-top: 5%; line-height: 1.2">
          Don’t miss amazing grocery deals
        </h1>
      </div>
      <div class="description">
        <p style="margin-top: 10%">Sign up for the daily newsletter</p>
      </div>
      <div class="subscribeForm">
        <div class="text">
          <font-awesome-icon :icon="['fas', 'paper-plane']" />
          <input
            type="text"
            placeholder="Your email address"
            style="
              border: none;
              font-family: Lato, sans-serif;
              font-size: 12px;
              margin-left: 10%;
              outline: none;
            "
          />
        </div>
        <div class="button">
          <button
            style="
              font-family: Quicksand, sans-serif;
              font-size: 16px;
              color: white;
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../assets/images/bg1.png" alt="" />
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
export default {
  name: "ShowCase",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
.showcase {
  display: flex;
  flex-direction: row;
  margin: 1%;
  width: 1480px;
  height: 500px;
  border: none;
  border-radius: 15px;
  background-color: rgb(241, 219, 185);
  position: relative;
}

.showcase::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  background: url("../assets/images/bg2.png") center/cover no-repeat;
  opacity: 0.2;
  z-index: 1;
}

.left,
.right {
  position: relative;
  z-index: 2;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 5%;
  width: 700px;
}

.titleCase {
  font-size: 30px;
  font-family: Quicksand, sans-serif;
  color: #253d4e;
  margin-right: 5%;
}
.description {
  font-size: 20px;
  font-family: Lato, sans-serif;
  color: #7e7e7e;
}
.subscribeForm {
  margin-top: 10%;
  background-color: white;
  border-radius: 30px;
  width: 442px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10%;
}
input {
  color: #b6b6b6;
}
.button {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20%;
}
button {
  background-color: #3bb77e;
  border: none;
  border-radius: 30px;
  width: 149px;
  height: 50px;
  cursor: pointer;
}
img {
  width: 100%;
  height: auto;
  max-width: 800px;
  object-fit: contain;
}
</style>
