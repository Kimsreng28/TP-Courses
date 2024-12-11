<template>
  <div class="section">
    <p>This is {{ sectionName }} of {{ pageName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    sectionName: {
      type: String,
      required: true,
    },
    pageName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.section {
  display: flex;
  justify-content: start;
  border-radius: 5px;
  margin-bottom: 20px;
}
.section p {
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  padding: 20px;
}
</style>
