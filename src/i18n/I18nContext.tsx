import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Locale, Translations } from './types';
import { en } from './locales/en';
import { ru } from './locales/ru';
import { kk } from './locales/kk';

const DICTIONARIES: Record<Locale, Translations> = { en, ru, kk };
const STORAGE_KEY = 'kirill_portfolio_locale';

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ru' || saved === 'kk') return saved;
    const navLang = navigator.language.toLowerCase();
    if (navLang.startsWith('kk') || navLang.startsWith('kz')) return 'kk';
    if (navLang.startsWith('ru')) return 'ru';
  } catch {
    // ignore storage errors
  }
  return 'en';
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  const t = DICTIONARIES[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.meta.title;
  }, [locale, t.meta.title]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return ctx;
}
