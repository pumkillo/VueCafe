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
        <h3 class="text-center" style="margin-top:100px;">Заказы</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Столик</th>
          <th scope="col">Сотрудник</th>
          <th scope="col">Создан</th>
          <th scope="col">Статус</th>
          <th scope="col">Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in shiftOrders" :key="order.id">
          <th scope="row">{{ order.id }}</th>
          <td>{{ order.table }}</td>
          <td>{{ order.shift_workers }}</td>
          <td>{{ order.create_at }}</td>
          <td>{{ order.status }}</td>
          <td>{{ order.price }}</td>
        </tr>
      </tbody>
    </table>

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
