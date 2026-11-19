import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { useI18n } from '../i18n/I18nContext';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const { t } = useI18n();

  return (
    <section
      id="about"
      className="min-h-screen px-5 sm:px-8 md:px-10 py-20 relative flex flex-col items-center justify-center bg-[#0C0C0C] overflow-hidden"
    >
      {/* Top-left Moon Icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none select-none z-0 opacity-35 sm:opacity-100"
      >
        <img
          src="/decor/moon.webp"
          alt=""
          aria-hidden="true"
          width={210}
          height={210}
          decoding="async"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto"
          loading="lazy"
        />
      </FadeIn>

      {/* Bottom-left 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none select-none z-0 opacity-35 sm:opacity-100"
      >
        <img
          src="/decor/obj3d.webp"
          alt=""
          aria-hidden="true"
          width={180}
          height={191}
          decoding="async"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto"
          loading="lazy"
        />
      </FadeIn>

      {/* Top-right Lego Icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none select-none z-0 opacity-35 sm:opacity-100"
      >
        <img
          src="/decor/lego.webp"
          alt=""
          aria-hidden="true"
          width={210}
          height={256}
          decoding="async"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto"
          loading="lazy"
        />
      </FadeIn>

      {/* Bottom-right 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none select-none z-0 opacity-35 sm:opacity-100"
      >
        <img
          src="/decor/group3d.webp"
          alt=""
          aria-hidden="true"
          width={220}
          height={216}
          decoding="async"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto"
          loading="lazy"
        />
      </FadeIn>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              {t.about.heading}
            </h2>
          </FadeIn>

          <AnimatedText
            text={t.about.text}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton label={t.hero.contactBtn} onClick={onOpenContact} />
        </div>
      </div>
    </section>
  );
};
