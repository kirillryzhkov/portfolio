import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useI18n } from '../i18n/I18nContext';

interface HeroSectionProps {
  onOpenContact: () => void;
}

const HERO_PORTRAIT_URL = '/decor/hero-portrait.webp';

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const { t, locale } = useI18n();

  const headingSizeClass =
    locale === 'en'
      ? 'text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16.2vw]'
      : locale === 'ru'
        ? 'text-[7.2vw] sm:text-[7.8vw] md:text-[8.2vw] lg:text-[8.4vw]'
        : 'text-[6.8vw] sm:text-[7.2vw] md:text-[7.5vw] lg:text-[7.6vw]';

  return (
    <section
      className="min-h-[100svh] flex flex-col justify-between relative bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="header" className="relative z-20">
        <nav className="px-5 md:px-10 pt-5 md:pt-8 flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-7 md:gap-10">
            <a
              href="#about"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.35rem] hover:opacity-70 transition-opacity duration-200"
            >
              {t.nav.about}
            </a>
            <a
              href="#services"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.35rem] hover:opacity-70 transition-opacity duration-200"
            >
              {t.nav.services}
            </a>
            <a
              href="#projects"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.35rem] hover:opacity-70 transition-opacity duration-200"
            >
              {t.nav.projects}
            </a>
            <a
              href="#certificates"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.35rem] hover:opacity-70 transition-opacity duration-200"
            >
              {t.nav.certificates}
            </a>
            <button
              type="button"
              onClick={onOpenContact}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.35rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              {t.nav.contact}
            </button>
          </div>

          <LanguageSwitcher />
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden px-4 sm:px-6 md:px-10 relative z-0 flex-1 flex items-start justify-center">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1
            className={`hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full ${headingSizeClass} mt-6 sm:mt-4 md:-mt-3 select-none`}
          >
            {t.hero.heading}
          </h1>
        </FadeIn>
      </div>

      {/* Centered Hero Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={HERO_PORTRAIT_URL}
            alt="Kirill Ryzhkov portrait"
            width={520}
            height={563}
            decoding="async"
            className="w-[240px] max-h-[42svh] sm:max-h-none sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto object-contain select-none"
            draggable={false}
          />
        </Magnet>
      </div>

      {/* Bottom Bar */}
      <div className="px-5 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end gap-4 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[230px] sm:max-w-[340px] md:max-w-[440px]"
            style={{ fontSize: 'clamp(0.75rem, 1.35vw, 1.35rem)' }}
          >
            {t.hero.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton label={t.hero.contactBtn} onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};
