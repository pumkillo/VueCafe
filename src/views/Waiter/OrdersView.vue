<template>
  <div class="container orders">
    <form>
      <div class="mb-3">
        <label class="form-label">Choose a shift</label>
        <input
          type="number"
          class="form-control"
          v-model="shiftId"
          @change="getOrders"
        />
      </div>
      <div class="form-text text-danger">{{ error }}</div>
    </form>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#id</th>
          <th>Table</th>
          <th>Workers</th>
          <th>When created</th>
          <th>Status</th>
          <th>Price</th>
          <th>
            <router-link :to="{ name: 'createOrder' }" class="btn btn-primary"
              >Add new order</router-link
            >
          </th>
        </tr>
      </thead>
      <tbody>
        <order-block
          v-for="order in orders"
          :order="order"
          :key="order.id"
        ></order-block>
      </tbody>
    </table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import orderBlock from "@/components/Waiter/Order.vue";
const { mapActions } = createNamespacedHelpers("waiter/shiftOrders");
export default {
  name: "OrdersView",
  data() {
    return {
      error: "",
      orders: [],
      shiftId: 0,
    };
  },
  watch: {
    error: function (newValue) {
      setTimeout(() => {
        this.error = "";
      }, 3000);
    },
  },
  components: { orderBlock },
  methods: {
    ...mapActions(["fetchOrders"]),
    async getOrders() {
      const res = await this.fetchOrders(this.shiftId);
      res.error
        ? (this.error = res.error.message)
        : (this.orders = res.data.orders);
    },
  },
};
</script>

<style></style>
