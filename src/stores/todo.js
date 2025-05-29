import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
  }),
  getters: {
    countTodos: (state) =>
      state.todos.filter((todo) => todo.completedAt === null).length,
  },
  actions: {
    async fetchTodos() {
      try {
        const res = await fetch("http://localhost:3100/tasks");
        const data = await res.json();
        this.todos = data;
        console.log("All Data", data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    },

    async toggleStatus(id) {
      if (typeof id !== "number" || isNaN(id)) {
        console.error("Invalid task ID for toggleStatus:", id);
        return;
      }

      const todo = this.todos.find((t) => t.id === id);
      if (!todo) return;

      const updatedStatus = {
        completedAt: todo.completedAt ? null : new Date().toISOString(),
      };

      try {
        await fetch(`http://localhost:3100/tasks/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedStatus),
        });

        todo.completedAt = updatedStatus.completedAt;
      } catch (error) {
        console.error("Failed to update task status:", error);
      }
    },

    async addTodo(name) {
      const newTodo = {
        name,
        description: "description",
        userId: 6,
      };

      try {
        console.log("Sending:", newTodo);
        const res = await fetch("http://localhost:3100/tasks/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTodo),
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(`API Error: ${errorData.message || res.status}`);
        }

        const createdTodo = await res.json();
        this.todos.push(createdTodo);
      } catch (error) {
        console.error("Failed to add todo:", error.message);
      }
    },

    async clearAll() {
      try {
        await Promise.all(
          this.todos.map((todo) =>
            fetch(`http://localhost:3100/tasks`, {
              method: "DELETE",
            })
          )
        );
        this.todos = [];
      } catch (error) {
        console.error("Failed to clear todos:", error);
      }
    },
  },
});
