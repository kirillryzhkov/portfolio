import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { Locale } from '../i18n/types';

const LOCALES: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'kk', label: 'KZ' },
];

export const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useI18n();

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="inline-flex items-center rounded-full border border-[#D7E2EA]/25 p-0.5 bg-[#0C0C0C]/80 backdrop-blur-sm"
    >
      {LOCALES.map((item) => {
        const active = locale === item.code;
        return (
          <button
            key={item.code}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(item.code)}
            className={`px-2.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer ${
              active
                ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                : 'text-[#D7E2EA]/75 hover:text-[#D7E2EA]'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
