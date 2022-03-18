<template>
  <div class="container orders">
    <form>
      <div class="mb-3">
        <label class="form-label">Choose a shift</label>
        <input type="number" class="form-control" v-model="shiftId" />
      </div>
      <div class="mb-3">
        <button type="button" class="btn btn-primary" @click="getOrders">
          Apply
        </button>
        <div class="form-text text-danger">{{ error }}</div>
      </div>
    </form>
    <order-block
      v-for="order in orders"
      :order="order"
      :key="order.id"
    ></order-block>
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
