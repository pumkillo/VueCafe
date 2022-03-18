<template>
  <form>
    <div class="mb-3">
      <label class="form-label">work_shift_id</label>
      <input type="text" class="form-control" v-model="work_shift_id" />
    </div>
    <div class="mb-3">
      <label class="form-label">table_id</label>
      <input type="text" class="form-control" v-model="table_id" />
    </div>
    <div class="mb-3">
      <label class="form-label">number_of_person</label>
      <input type="text" class="form-control" v-model="number_of_person" />
      <div class="form-text text-danger">{{ error }}</div>
      <div class="form-text text-success">{{ success }}</div>
    </div>
    <div class="mb-3">
      <button type="button" class="btn btn-primary" @click="createOrder">
        Create new order
      </button>
    </div>
  </form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("waiter/createNewOrder");

export default {
  name: "CreateOrder",
  data() {
    return {
      success: "",
      error: "",
      work_shift_id: "",
      table_id: "",
      number_of_person: "",
    };
  },
  methods: {
    ...mapActions(["createNewOrder"]),
    async createOrder() {
      const body = {
        work_shift_id: this.work_shift_id,
        table_id: this.table_id,
        number_of_person: this.number_of_person,
      };
      //   console.log(body);
      const res = await this.createNewOrder(body);
      res.error
        ? (this.error = res.error.message)
        : (this.success = "The order added successfully");
    },
  },
};
</script>

<style></style>
