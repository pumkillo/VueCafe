<template>
  <tr>
    <td>{{ user.name }}</td>
    <td>{{ user.login }}</td>
    <td>{{ user.status }}</td>
    <td>{{ user.group }}</td>
    <td>
      <button type="button" class="btn btn-danger" @click="fireUser">
        Fire
      </button>
    </td>
  </tr>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("admin/fireEmployee");
export default {
  name: "user-line",
  props: ["user"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fireEmployee"]),
    // ERRORS!!!!!!!
    async fireUser() {
      console.log("fireEmployee");
      const res = await this.fireEmployee(this.user.id);
    },
  },
};
</script>

<style scoped>
td:not(:last-child) {
  padding: 3px 7px;
  border: 1px solid #000;
}
</style>
