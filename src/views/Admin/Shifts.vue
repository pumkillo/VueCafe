<template>
  <div class="container">
    <div class="form-text text-danger">{{ error }}</div>
    <div class="form-text text-success">{{ success }}</div>
    <router-link class="btn btn-primary" :to="{name: 'createShift'}" role="button">Create a shift</router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">Started at</th>
          <th scope="col">End</th>
          <th scope="col">Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="shift in shifts" :key="shift.id">
          <th scope="row">{{ shift.id }}</th>
          <td>{{ shift.start }}</td>
          <td>{{ shift.end }}</td>
          <td>{{ shift.active ? "active" : "disabled" }}</td>
          <td v-if="shift.active == false">
            <button class="btn btn-success" @click="open(shift.id)">
              Open
            </button>
          </td>
          <td v-else>
            <button class="btn btn-danger" @click="close(shift.id)">
              Close
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("admin");
export default {
  name: "Shifts",
  data() {
    return {
      shifts: [],
      error: "",
      success: "",
    };
  },
  watch: {
    error: function (newValue) {
      setTimeout(() => {
        this.error = "";
      }, 3000);
    },
    success: function (newValue) {
      setTimeout(() => {
        this.success = "";
      }, 3000);
    },
  },
  mounted() {
    this.getShifts();
  },
  methods: {
    ...mapActions({
      fetchShifts: "getShifts/fetchShifts",
      openShift: "openShift/openShift",
      closeShift: "closeShift/closeShift",
      createShift: "createShift/createShift",
    }),
    async getShifts() {
      const res = await this.fetchShifts();
      res.error ? (this.error = res.error) : (this.shifts = res);
    },
    async close(id) {
      const res = await this.closeShift(id);
      this.getShifts();
      res.error
        ? (this.error = res.error.message)
        : (this.success = "The shift has opened successfully");
    },
    async open(id) {
      const res = await this.openShift(id);
      this.getShifts();
      res.error
        ? (this.error = res.error.message)
        : (this.success = "The shift has been closed successfully");
    },
  },
};
</script>
<style scoped></style>
