<template>
  <div class="container order">
    <div class="card">
      <div class="card-header">Order №{{ order.id }}</div>
      <div class="card-body">
        <p class="card-text">{{ order.table }}</p>
        <p class="card-text">Workers: {{ order.shift_workers }}</p>
        <p class="card-text">Created: {{ Date(order.create_at) }}</p>
        <p class="card-text">Status: {{ order.status }}</p>
        <p class="card-text">Price: {{ order.price }}&#x20bd;</p>

        <table class="table" v-if="order.positions !== []">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Position</th>
              <th scope="col">Count</th>
              <th scope="col">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="position in order.positions" :key="position.id">
              <th scope="row">{{ position.id }}</th>
              <td>{{ position.position }}</td>
              <td>{{ position.count }}</td>
              <td>{{ position.price }}</td>
              <td>
                <button
                  class="btn btn-danger btn-sm"
                  @click="deletePos(position.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="form-text text-danger">{{ error }}</div>
        <button class="btn btn-success" @click="formAdd = !formAdd">
          Add a position
        </button>
        <button class="btn btn-primary">Change status</button>
        <div class="form" v-if="formAdd">
          <div class="mb-3">
            <label class="form-label">Menu position</label>
            <input
              type="text"
              class="form-control"
              placeholder="2"
              v-model="formData.menu_id"
            />
            <div class="form-text text-danger">{{ errors.menu_id }}</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Position amount</label>
            <input
              type="text"
              class="form-control"
              placeholder="2"
              v-model="formData.count"
            />
          </div>
          <button class="btn btn-primary" @click="addPos">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("waiter");
export default {
  name: "OrderView",
  data() {
    return {
      shiftId: this.$route.params.id,
      error: "",
      errors: [],
      order: [],
      formAdd: false,
      formData: {
        menu_id: 0,
        count: 1,
      },
    };
  },
  watch: {
    error: function (newValue) {
      setTimeout(() => {
        this.error = "";
      }, 3000);
    },
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    ...mapActions({
      deleteFromOrder: "deleteFromOrder/deleteFromOrder",
      addToOrder: "addToOrder/addToOrder",
      changeStatus: "changeStatus/changeStatus",
      fetchOrder: "showOrder/fetchOrder",
    }),
    async getOrders() {
      const res = await this.fetchOrder(this.shiftId);
      res.error ? (this.error = res.error.message) : (this.order = res.data);
    },
    async deletePos(positionId) {
      const res = await this.deleteFromOrder({
        orderId: this.order.id,
        positionId: positionId,
      });
      res.error ? (this.error = res.error.message) : (this.order = res.data);
    },
    async addPos() {
      const res = await this.addToOrder({
        orderId: this.order.id,
        body: this.formData,
      });
      res.error ? (this.error = res.error.message) : (this.order = res.data);
      if (res.error) {
        this.errors = res.error.errors;
      }
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 8px;
  margin-right: 20px;
}
td > button {
  margin: 0;
}
</style>
