<template>
  <div class="support-center">
    <img
      :src="imageSrc"
      alt="Support Icon"
      class="headphone"
      :style="{
        width: imageWidth,
        height: imageHeight,
        marginRight: marginRight,
      }"
    />
    <!-- Bind the image source and styles dynamically -->
    <div class="contact-info">
      <div
        class="text-Title"
        :style="{ fontSize: titleFontSize, fontWeight: titleFontWeight }"
      >
        {{ title }}
      </div>
      <div
        class="support-text"
        :style="{
          fontSize: supportFontSize,
          fontWeight: supportFontWeight,
          color: supportColor,
        }"
      >
        {{ supportText }}
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "SupportCenter",
  components: {
    FontAwesomeIcon, // Register the FontAwesomeIcon component
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    supportText: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    imageWidth: {
      type: String,
      default: "50px",
    },
    imageHeight: {
      type: String,
      default: "36px",
    },
    marginRight: {
      type: String,
      default: "10px",
    },
    titleFontSize: {
      type: String,
      default: "18px",
    },
    titleFontWeight: {
      type: String,
      default: "bold",
    },
    supportFontSize: {
      type: String,
      default: "12px",
    },
    supportFontWeight: {
      type: String,
      default: "normal",
    },
    supportColor: {
      type: String,
      default: "#7e7e7e",
    },
  },
};
</script>

<style scoped>
.support-center {
  display: flex;
  align-items: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.text-Title {
  font-family: Quicksand, sans-serif;
  color: #3bb77e;
}

.support-text {
  margin-top: -5%;
  font-family: Lato, sans-serif;
}
</style>
