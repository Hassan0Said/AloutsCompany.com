import ar from './locales/ar.json';
import en from './locales/en.json';

export type Language = 'ar' | 'en';

export const translations = {
  ar,
  en,
};

export const defaultLanguage: Language = 'ar';

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}
