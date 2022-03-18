<template>
  <form enctype="multipart/form-data" name="addNewUser">
    <h2>New Employee</h2>
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input type="text" class="form-control" v-model="name" />
      <div class="form-text text-danger">{{ errors.name }}</div>
    </div>
    <div class="mb-3">
      <label class="form-label">Surname</label>
      <input type="text" class="form-control" v-model="surname" />
      <div class="form-text text-danger">{{ errors.surname }}</div>
    </div>
    <div class="mb-3">
      <label class="form-label">Patronymic</label>
      <input type="text" class="form-control" v-model="patronymic" />
      <div class="form-text text-danger">{{ errors.patronymic }}</div>
    </div>
    <div class="mb-3">
      <label class="form-label">Login</label>
      <input type="text" class="form-control" v-model="login" />
      <div class="form-text text-danger">{{ errors.login }}</div>
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="password" class="form-control" v-model="password" />
      <div class="form-text text-danger">{{ errors.password }}</div>
    </div>
    <div class="mb-3">
      <label class="form-label">Role</label>
      <select class="form-select" aria-label="Role select" v-model="role_id">
        <option value="1">Admin</option>
        <option value="2">Waiter</option>
        <option value="3">Cook</option>
      </select>
      <div class="form-text text-danger">{{ errors.role_id }}</div>
      <div class="form-text text-success">{{ success }}</div>
    </div>
    <button type="submit" class="btn btn-primary" @click="addUser">
      Add new user
    </button>
  </form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("admin/addNewUser");
export default {
  name: "new-user",
  data() {
    return {
      surname: "",
      patronymic: "",
      name: "",
      login: "",
      password: "",
      photo_file: 0,
      role_id: "2",
      errors: [],
      success: "",
    };
  },
  methods: {
    ...mapActions(["addNewUser"]),
    handleImageUpload() {
      const files = event.target.files;
      let form = new FormData();
      form.append("user", "ysers");
      console.log(form);
    },
    async addUser() {
      const body = {
        name: this.name,
        surname: this.surname,
        patronymic: this.patronymic,
        password: this.password,
        login: this.login,
        role_id: this.role_id,
      };
      const res = await this.addNewUser(body);
      res.error
      // errors
        ? (this.errors = res.error.errors)
        : (this.success = res.data.status);
    },
  },
};
</script>

<style></style>
