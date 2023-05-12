import { createI18n } from 'vue-i18n'
import en from './en.json'
import fr from './fr.json'

const messages = { en, fr }

const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'fr',
    messages: messages
})

export default i18n