<template>
  <div class="card">
    <div class="card-header">Order №{{ order.id }}</div>
    <div class="card-body">
      <p class="card-text">{{ order.table }}</p>
      <p class="card-text">Workers: {{ order.shift_workers }}</p>
      <p class="card-text">Created: {{ Date(order.create_at) }}</p>
      <p class="card-text">Status: {{ order.status }}</p>
      <p class="card-text">Price: {{ order.price }}&#x20bd;</p>
      <router-link :to="{name: 'order', params: {id: order.id}}" class="btn btn-primary">To order</router-link>
    </div>
  </div>
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
