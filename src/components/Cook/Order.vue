<template>
  <tr>
    <td>{{ order.id }}</td>
    <td>{{ order.table }}</td>
    <td>{{ order.shift_workers }}</td>
    <td>{{ order.create_at }}</td>
    <td>{{ order.status }}</td>
    <td>{{ order.price }}</td>
    <td>
      <button
        class="btn btn-primary"
        v-if="order.status === 'Принят'"
        @click="change('preparing')"
      >
        Change status to preparing
      </button>
      <button
        class="btn btn-primary"
        v-else-if="order.status === 'Готовится'"
        @click="change('ready')"
      >
        Change status to ready
      </button>
    </td>
  </tr>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("cook/changeStatus");
export default {
  props: ["order"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(["changeStatus"]),
    async change(status) {
      let body = { status: status };
      const res = await this.changeStatus({
        orderId: this.order.id,
        body: body
      });
      res.data ? this.$emit("changeStatus", {message: "Updated successfuly"}) : this.$emit("changeStatus", {error: res.error.message});
    }
  }
};
</script>

<style></style>
