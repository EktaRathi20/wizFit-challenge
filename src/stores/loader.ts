import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', {
    state: () => ({
        isVisible: false,
    }),
    actions: {
        showLoader() {
            this.isVisible = true
        },
        hideLoader() {
            this.isVisible = false
        },
    },
})
