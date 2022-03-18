<template>
  <form>
    <p class="text-danger">{{ errorFetching }}</p>
    <h2>Edit employee to shifts</h2>
    <div class="mb-3">
      <label class="form-label">Choose an employee</label>
      <select class="form-select" v-model="userId">
        <option
          :value="user.id"
          v-for="user in users"
          :key="user.id"
          v-if="user.group !== 'Администратор'"
        >
          {{ user.name }}
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">Choose a shift</label>
      <select class="form-select" v-model="shiftId">
        <option :value="shift.id" v-for="shift in shifts" :key="shift.id">
          {{ shift.id }}
        </option>
      </select>
      <p class="text-danger">{{ errorAdding }}</p>
    </div>
    <div class="mb-3">
      <button type="button" class="btn btn-primary me-3" @click="add">Add</button>
      <button type="button" class="btn btn-danger" @click="deleteUserFromShift">Delete</button>
    </div>
    <p class="text-success">{{ successAdding }}</p>
  </form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("admin");
export default {
  name: "SetEmployeeToShift",
  data() {
    return {
      shiftId: 1,
      userId: 5,
      users: [],
      shifts: [],
      errorFetching: "",
      errorAdding: "",
      successAdding: "",
    };
  },
  watch: {
    errorAdding: function (newValue) {
      setTimeout(() => {
        this.errorAdding = "";
      }, 3000);
    },
    successAdding: function (newValue) {
      setTimeout(() => {
        this.successAdding = "";
      }, 3000);
    },
  },
  mounted() {
    this.getUsers();
    this.getAllShifts();
  },
  methods: {
    ...mapActions({
      fetchUsers: "getUsers/fetchUsers",
      addEmployeeToShift: "addEmployeeToShift/addEmployeeToShift",
      fetchShifts: "getShifts/fetchShifts",
      deleteFromShift: "deleteEmployeeFromShift/deleteFromShift",
    }),
    async getUsers() {
      const res = await this.fetchUsers("");
      res.data
        ? (this.users = res.data)
        : (this.errorFetching = res.error.message);
    },
    async getAllShifts() {
      const res = await this.fetchShifts();
      res.error
        ? (this.errorFetching = res.error.message)
        : (this.shifts = res);
    },
    async add() {
      const res = await this.addEmployeeToShift({
        shiftId: this.shiftId,
        userId: this.userId,
      });
      res.error
        ? (this.errorAdding = res.error.message)
        : (this.successAdding = res.data.status);
    },
    async deleteUserFromShift() {
      const res = await this.deleteFromShift({
        shiftId: this.shiftId,
        userId: this.userId,
      });
      res.error
        ? (this.errorAdding = res.error.message)
        : (this.successAdding = res.data.status);
    },
  },
};
</script>

<style></style>
