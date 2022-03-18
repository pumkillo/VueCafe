<template>
  <form>
    <h2>New Shift</h2>
    <div class="mb-3">
      <label class="form-label">Shift start</label>
      <input type="datetime-local" class="form-control" v-model="start" />
      <div class="form-text text-danger">{{ errors.start }}</div>
    </div>
    <div class="mb-3">
      <label class="form-label">Shift end</label>
      <input type="datetime-local" class="form-control" v-model="end" />
      <div class="form-text text-danger">{{ errors.end }}</div>
    </div>
    <div class="form-text text-danger">{{ error }}</div>
    <div class="form-text text-success">{{ success }}</div>
    <button type="submit" class="btn btn-primary" @click.prevent="add">
      Add
    </button>
  </form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("admin/createShift");
export default {
  name: "CreateShift",
  data() {
    return {
      end: "",
      start: "",
      error: "",
      success: "",
      errors: [],
    };
  },
  methods: {
    ...mapActions(["createShift"]),
    async add() {
      let body = {
        start: this.start.replace("T", " "),
        end: this.end.replace("T", " "),
      };
      const res = await this.createShift(body);
      if (res.error) {
        res.error.errors
          ? (this.errors = res.error.errors)
          : (this.error = res.error.message);
      } else {
        this.$router.push({ name: "shifts" });
      }
    },
  },
};
</script>

<style></style>
