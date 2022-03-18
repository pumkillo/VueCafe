<template>
  <div class="users-table">
    <div class="text-danger">{{ error }}</div>
    <router-link :to="{ name: 'newUser' }" class="btn btn-primary"
      >Add new employee</router-link
    >
    <h2 class="text-center m-4">All Employees</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">Nmae</th>
          <th scope="col">Login</th>
          <th scope="col">Status</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
        <user-line
          v-for="user in users"
          :key="user.id"
          :user="user"
        ></user-line>
      </tbody>
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
  beforeUpdate(){
    this.getUsers();
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
