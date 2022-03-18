<template>
  <p class="text-danger">{{ error_message }}</p>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("auth/logout");
export default {
  name: "logout-block",
  data() {
    return {
      error_message: "",
    };
  },
  mounted() {
    this.logoutUser();
  },
  methods: {
    ...mapActions(["logout"]),
    async logoutUser() {
      const res = await this.logout();
      res.error
        ? (this.error_message = res.error.message)
        : this.$router.push("/");
    },
  },
};
</script>

<style></style>
