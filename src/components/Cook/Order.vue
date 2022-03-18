<template>
  <tr>
     <td>{{ order.id }}</td>
    <td>{{ order.table }}</td>
    <td>{{ order.shift_workers }}</td>
    <td>{{ order.create_at }}</td>
    <td>{{ order.status }}</td>
    <td>{{ order.price }}</td>
    <td>
      <button type="button" @click="change('preparing')">Preparing</button>
      <button type="button" @click="change('ready')">Ready</button>
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
      console.log(body);
      const res = await this.changeStatus({
        orderId: this.order.id,
        body: body,
      });
    },
  },
};
</script>

<style></style>
