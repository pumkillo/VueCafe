<template>
  <div class="active-shift-orders">
    <h2 class="text-center m-4">Список заказов</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Table</th>
          <th>Workers</th>
          <th>When created</th>
          <th>Status</th>
          <th>Price</th>
          <th>Change Status</th>
        </tr>
      </thead>
      <tbody>
        <order-block
          v-for="order in orders"
          :key="order.id"
          :order="order"
        ></order-block>
      </tbody>
    </table>

    <p class="text-danger">{{ error }}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("cook/orders");
import orderBlock from "@/components/Cook/Order.vue";
export default {
  name: "ShiftOrdersView",
  data() {
    return {
      orders: [],
      error: "",
    };
  },
  components: {
    orderBlock,
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    ...mapActions(["fetchOrders"]),
    async getOrders() {
      const res = await this.fetchOrders();
      res.error ? (this.error = res.error.message) : (this.orders = res.data);
    },
  },
};
</script>

<style></style>
