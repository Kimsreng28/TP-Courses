<template>
  <div class="container">
    <p>Welcome to {{ pageName }}</p>
    <div class="message">
      <label for="message">Message:</label>
      <input v-model="message" type="text" />
      <button @click="sendMessage">Send to Page1</button>
    </div>
    <!-- Display the message passed from Page1 -->
    <p v-if="message" class="message-display">
      Message from Page1: <strong>{{ message }}</strong>
    </p>

    <hr />
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "PageTwo",
  data() {
    return {
      message: this.$route.query.message || "", // Get message from query params
    };
  },
  props: {
    pageName: {
      type: String,
      required: true,
    },
  },
  methods: {
    sendMessage() {
      // Navigate to Page1 with the message in the query parameters
      this.$router.push({ name: "page1", query: { message: this.message } });
    },
  },
};
</script>

<style scoped>
.container {
  width: 1440px;
  display: flex;
  flex-direction: column; /* Stack elements vertically */
}

p {
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
}

.message {
  padding: 20px;
}

.message-display {
  font-size: 20px;
  font-weight: normal;
  margin-top: 20px;
}
</style>
