<script setup>
// IMPORTS
import { useI18n } from 'vue-i18n'

// COMPOSABLES
const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <p class="footer-text">{{ t('common.downloadHarlemWizardsApp') }}</p>
    <div class="store-links">
      <a href=""
        ><img src="@/assets/images/goolge-store.png" alt="Google Play" class="store-image"
      /></a>
      <a href="">
        <img src="@/assets/images/apple-store.png" alt="App Store" class="store-image" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #d3d3d3;
  text-align: center;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.footer-text {
  font-size: 18px;
  margin-bottom: 10px;
  color: #4b2e83;
}

.store-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.store-image {
  height: 50px;
  width: auto;
  cursor: pointer;
}
</style>
