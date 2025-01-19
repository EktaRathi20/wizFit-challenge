import { severity } from '@/models';
import { defineStore } from 'pinia';

export const useToastStore = defineStore('toast', {
    state: () => ({
        isVisible: false,
        config: {
            severity: '',
            summary: '',
            detail: ''
        }
    }),
    actions: {
        showToast(severity: severity.PRIMARY | severity.DANGER | severity.SUCCESS | severity.WARNING, summary: string, detail: string) {
            this.isVisible = true;
            this.config.severity = severity;
            this.config.summary = summary;
            this.config.detail = detail;
        },
        hideToast() {
            this.isVisible = false;
            this.config.severity = '';
            this.config.summary = '';
            this.config.detail = '';
        },
    },
});