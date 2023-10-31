import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Importar archivos de traducción
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

// Configurar i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Idioma predeterminado
    fallbackLng: 'es',

    // Idiomas disponibles
    supportedLngs: ['en', 'es'],

    // Recursos de traducción
    resources: {
      es: {
        translation: translationES,
      },
      en: {
        translation: translationEN,
      },
    },

    // Opciones adicionales de configuración
    detection: {
      order: ['localStorage', 'navigator'],
    },
  });

export default i18n;