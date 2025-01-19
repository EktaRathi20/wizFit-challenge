<script setup lang="ts">
// IMPORTS
import { RouterView } from 'vue-router'
import Header from '@/layouts/header.vue'
import Footer from '@/layouts/footer.vue'
import Toast from './components/Base/Toast.vue'
import Loader from './components/Base/Loader.vue'
</script>

<template>
  <Toast />
  <Loader />
  <Header />
  <div class="app-content">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.app-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}
</style>
