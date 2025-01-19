<script setup lang="ts">
// IMPORTS
import { computed, watchEffect } from 'vue'
import { useToastStore } from '@/stores'

// STORE
const toastStore = useToastStore()

// DATA
const toasterClasses: Record<string, any> = {
  success: 'toast-success',
  danger: 'toast-error',
  info: 'toast-info',
  warning: 'toast-warn',
}

// COMPUTED
const toasterClass = computed(
  () => toasterClasses[toastStore.config.severity] || toasterClasses.info,
)

// WATCH
watchEffect(() => {
  if (toastStore.isVisible) {
    setTimeout(() => {
      toastStore.hideToast()
    }, 3000)
  }
})
</script>

<template>
  <div v-if="toastStore.isVisible" class="toast-container">
    <div :class="['toast', toasterClass]" role="alert">
      <div class="toast-content">
        <div class="toast-header">
          <span class="toast-summary">{{ toastStore.config.summary }}</span>
          <button class="toast-close" @click="toastStore.hideToast()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="toast-close-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <span class="toast-detail">{{ toastStore.config.detail }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast-container {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 50;
  max-width: 320px;
  width: 100%;
}

.toast {
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.toast-success {
  background-color: #4caf50;
  color: #ffffff;
}

.toast-error {
  background-color: #f44336;
  color: #ffffff;
}

.toast-info {
  background-color: #2196f3;
  color: #ffffff;
}

.toast-warn {
  background-color: #ffc107;
  color: #ffffff;
}

.toast-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.toast-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toast-summary {
  font-weight: 600;
  font-size: 16px;
}

.toast-close {
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.toast-close-icon {
  height: 20px;
  width: 20px;
}

.toast-detail {
  font-size: 14px;
  opacity: 0.8;
}
</style>
