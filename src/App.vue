<template>
  <div id="app">
    <div class="container">
      <Header />
      <div style="min-height: 75vh">
        <router-view></router-view>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
nav {
  padding: 30px;
}
</style>

