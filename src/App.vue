<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue"
</script>

<template>
  <div class="header">
    <Header />
  </div>

  <div class="content">
    <RouterView />
  </div>

</template>

<style lang="scss" scoped>

</style>
