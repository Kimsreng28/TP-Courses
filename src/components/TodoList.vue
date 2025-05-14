<template>
  <div v-if="loading">Loading todos...</div>
  <ul v-else class="todoLists">
    <template v-if="status == 'completed'">
      <TodoItem
        v-for="todo of completedTasks"
        :key="todo.id"
        icon="uil-adobe-alt"
        :todo="todo"
      />
    </template>
    <template v-else>
      <TodoItem
        v-for="todo of pendingTasks"
        :key="todo.id"
        icon="uil-adobe-alt"
        :todo="todo"
      />
    </template>
  </ul>
</template>

<script>
import { mapState } from "pinia";
import TodoItem from "./TodoItem.vue";
import { useTodoStore } from "../stores/todo";

export default {
  setup() {
    const todoStore = useTodoStore();
    return { todoStore };
  },
  props: ["status"],
  components: { TodoItem },
  data() {
    return {
      loading: true,
    };
  },
  async mounted() {
    await this.todoStore.fetchTodos();
    this.loading = false;
  },
  computed: {
    ...mapState(useTodoStore, ["todos"]),
    completedTasks() {
      return this.todos.filter((todo) => todo.completedAt != null);
    },
    pendingTasks() {
      return this.todos.filter((todo) => todo.completedAt == null);
    },
  },
};
</script>
