<template>
  <div class="shift-orders">
    <form>
      <div class="mb-3">
        <label class="form-label">Choose a shift</label>
        <select class="form-select" v-model="shiftId">
          <option :value="shift.id" v-for="shift in shifts" :key="shift.id">
            {{ shift.id }}
          </option>
        </select>
        <p class="text-danger">{{ errorAdding }}</p>
        <p class="text-danger">{{ errorFetching }}</p>
      </div>
    </form>
    <div class="order" v-for="order in shiftOrders" :key="order.id">
      <p>{{ order.table }}</p>
      <p>{{ order.shift_workers }}</p>
      <p>{{ order.create_at }}</p>
      <p>{{ order.status }}</p>
      <p>{{ order.price }}</p>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("admin");
export default {
  name: "ShiftOrders",
  data() {
    return {
      shiftId: 0,
      shifts: [],
      shiftOrders: [],
      errorAdding: "",
      errorFetching: "",
    };
  },
  watch: {
    shiftId: function (newValue) {
      this.getShiftOrders();
    },
  },
  mounted() {
    this.getAllShifts();
  },
  methods: {
    ...mapActions({
      fetchShiftOrders: "shiftOrders/fetchShiftOrders",
      fetchShifts: "getShifts/fetchShifts",
    }),
    async getAllShifts() {
      const res = await this.fetchShifts();
      res.error
        ? (this.errorFetching = res.error.message)
        : (this.shifts = res);
    },
    async getShiftOrders() {
      const res = await this.fetchShiftOrders(this.shiftId);
      res.error
        ? (this.errorFetching = res.error.message)
        : (this.shiftOrders = res.data.orders);
    },
  },
};
</script>

<style></style>
