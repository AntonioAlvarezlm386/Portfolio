import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import esTranslation from '../translations/es/translations.json'
import enTranslations from '../translations/en/translations.json'



i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: enTranslations
      },
      es: {
        translation: esTranslation
      }
    }
  })

  export default i18n;