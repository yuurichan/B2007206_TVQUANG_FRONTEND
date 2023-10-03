<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <div id="app">
    <AppHeader />
    <!-- <h1>Jello Bue</h1> -->
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<style>
  .page {
    max-width: 400px;
    margin: auto;
  }
</style>
