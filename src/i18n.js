import i18n, { use } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','ar','fr',],
    fallbackLng: "en",// Fallback language if a translation is missing
    detection: {
        order: ['htmlTag', 'cookie', 'localStorage', 'path','subdomain'],
    },
    backend:{
        loadPath: '/locales/{{lng}}/translation.json',

    },
    debug:true,//disable in production 

  });
  export default i18n;
