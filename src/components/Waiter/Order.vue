<template>
  <tr>
    <td>{{ order.id }}</td>
    <td>{{ order.table }}</td>
    <td>{{ order.shift_workers }}</td>
    <td>{{ order.create_at }}</td>
    <td>{{ order.status }}</td>
    <td>{{ order.price }}</td>
    <td>
      <router-link
        :to="{ name: 'order', params: { id: order.id } }"
        class="btn btn-primary"
        >To order</router-link
      >
    </td>
  </tr>
</template>

<script>
export default {
  name: "order-block",
  data() {
    return {};
  },
  props: ["order"],
  methods: {},
};
</script>

<style></style>
