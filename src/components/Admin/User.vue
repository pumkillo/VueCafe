<template>
  <tr>
    <th>{{ user.id }}</th>
    <td>{{ user.name }}</td>
    <td>{{ user.login }}</td>
    <td>{{ user.status }}</td>
    <td>{{ user.group }}</td>
    <td>
      <button
        type="button"
        class="btn btn-danger"
        @click="fireUser"
        v-if="user.status !== 'fired'"
      >
        Fire
      </button>
      <p v-else class="text-danger">Fired</p>
    </td>
    <td v-if="error">{{ error }}</td>
  </tr>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("admin/fireEmployee");
export default {
  name: "user-line",
  props: ["user"],
  data() {
    return {
      error: "",
    };
  },
  methods: {
    ...mapActions(["fireEmployee"]),
    async fireUser() {
      const res = await this.fireEmployee(this.user.id);
      if (res.error) {
        res.error.errors
          ? (this.errors = res.error.errors)
          : (this.error = res.error.message);
      }
    },
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>
