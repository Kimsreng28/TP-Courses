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
