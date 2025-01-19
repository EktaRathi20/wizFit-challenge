import { createI18n } from 'vue-i18n';

import en from '@/locales/en';

const messages = {
    en
};

// Create the i18n instance
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n;
