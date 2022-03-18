<template>
  <div class="users-table">
    <p class="text-danger">{{ error }}</p>
    <table>
      <user-line v-for="user in users" :key="user.id" :user="user"></user-line>
    </table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import userLine from "@/components/Admin/User.vue";
const { mapActions } = createNamespacedHelpers("admin/getUsers");
export default {
  name: "UsersView",
  components: {
    userLine,
  },
  data() {
    return {
      error: "",
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    ...mapActions(["fetchUsers"]),
    async getUsers() {
      const res = await this.fetchUsers("");
      res.error ? (this.error = res.error.message) : (this.users = res.data);
    },
  },
};
</script>

<style>
table {
  width: 600px;
  border-collapse: collapse;
}
</style>
