<template>
  <div class="section">
    <p>This is {{ sectionName }} of {{ pageName }}</p>

    <div class="message">
      <label for="message"> Message:</label>
      <input v-model="message" type="text" />
    </div>

    <p v-if="message">Message from Select 1: {{ message }}</p>
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
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style scoped>
.section {
  display: flex;
  justify-content: start;
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: 20px;
}
.section p {
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  padding: 20px;
}
.message {
  padding: 20px;
}

label {
  font-size: 16px;
}
input {
  width: 200px;
  font-size: 16px;
  margin-top: 10px;
}
</style>
