<template>
  <form>
    <h2>Authorization</h2>
    <div class="mb-3">
      <label class="form-label">Login</label>
      <input type="text" class="form-control" v-model="login" />
      <div class="form-text">
        We'll never share your login with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="password" class="form-control" v-model="password" />
      <div class="form-text text-danger">{{ error }}</div>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="loginUser">
      Submit
    </button>
  </form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("auth");
export default {
  name: "LoginView",
  data() {
    return {
      login: "",
      password: "",
      error: "",
    };
  },
  watch: {
    error: function (newValue) {
      setTimeout(() => {
        this.error = "";
      }, 3000);
    },
  },
  methods: {
    ...mapActions({
      fetchLogin: "login/fetchLogin",
      checkRole: "checkRole/checkRole",
      }),
    async loginUser() {
      const body = {
        login: this.login,
        password: this.password,
      };
      const res = await this.fetchLogin(body);
      res.error ? this.error = res.error.message : this.checkRole();
      this.login = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
