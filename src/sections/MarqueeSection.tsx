import React, { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { LightboxSlide } from '../components/ImageLightboxModal';

const ROW_1_SLIDES: LightboxSlide[] = [
  { src: '/projects/diary-1.webp', caption: 'Electronic Diary System — Home' },
  { src: '/projects/steelshop-1.webp', caption: 'SteelShop.kz — Main Storefront' },
  { src: '/projects/market-1.webp', caption: 'Student Marketplace — Catalog' },
  { src: '/projects/assen-card-1.webp', caption: 'Assen KZ — Lian Li O11 Dynamic Mini' },
  { src: '/projects/steelshop-7.webp', caption: 'SteelShop.kz — Headphones' },
  { src: '/projects/steelshop-2.webp', caption: 'SteelShop.kz — GPU Catalog' },
  { src: '/projects/diary-2.webp', caption: 'Electronic Diary System — Swagger API' },
  { src: '/projects/market-2.webp', caption: 'Student Marketplace — Services' },
];

const ROW_2_SLIDES: LightboxSlide[] = [
  { src: '/projects/animeshka-1.webp', caption: 'Animeshka Portal — Home' },
  { src: '/projects/steelshop-4.webp', caption: 'SteelShop.kz — CPU Catalog' },
  { src: '/projects/assen-card-3.webp', caption: 'Assen KZ — Amazfit Active Edge' },
  { src: '/projects/diary-3.webp', caption: 'Electronic Diary System — Auth' },
  { src: '/projects/spotik-1.webp', caption: 'TG Spotik Bot — Telegram UI' },
  { src: '/projects/steelshop-3.webp', caption: 'SteelShop.kz — Gaming Chairs' },
  { src: '/projects/market-3.webp', caption: 'Student Marketplace — Login' },
  { src: '/projects/animeshka-2.webp', caption: 'Animeshka Portal — Catalog' },
];

const ALL_MARQUEE_SLIDES = [...ROW_1_SLIDES, ...ROW_2_SLIDES];

interface MarqueeSectionProps {
  onOpenLightbox: (slides: LightboxSlide[], index: number) => void;
}

export const MarqueeSection: React.FC<MarqueeSectionProps> = ({ onOpenLightbox }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const xRow1 = useTransform(scrollYProgress, [0, 1], [-180, 180]);
  const xRow2 = useTransform(scrollYProgress, [0, 1], [180, -180]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: moves RIGHT on scroll */}
        <m.div
          className="flex gap-3 w-max"
          style={{ x: xRow1, willChange: 'transform' }}
        >
          {ROW_1_SLIDES.map((slide, index) => (
            <button
              key={`r1-${slide.src}`}
              type="button"
              onClick={() => onOpenLightbox(ALL_MARQUEE_SLIDES, index)}
              className="shrink-0 rounded-2xl overflow-hidden border border-[#D7E2EA]/15 bg-[#141414] hover:border-[#D7E2EA]/60 transition-colors cursor-pointer"
            >
              <img
                src={slide.src}
                alt={slide.caption || ''}
                width={420}
                height={270}
                loading="lazy"
                decoding="async"
                className="w-[300px] h-[193px] sm:w-[420px] sm:h-[270px] object-cover object-top hover:scale-[1.03] transition-transform duration-300"
              />
            </button>
          ))}
        </m.div>

        {/* Row 2: moves LEFT on scroll */}
        <m.div
          className="flex gap-3 w-max"
          style={{ x: xRow2, willChange: 'transform' }}
        >
          {ROW_2_SLIDES.map((slide, index) => (
            <button
              key={`r2-${slide.src}`}
              type="button"
              onClick={() =>
                onOpenLightbox(ALL_MARQUEE_SLIDES, ROW_1_SLIDES.length + index)
              }
              className="shrink-0 rounded-2xl overflow-hidden border border-[#D7E2EA]/15 bg-[#141414] hover:border-[#D7E2EA]/60 transition-colors cursor-pointer"
            >
              <img
                src={slide.src}
                alt={slide.caption || ''}
                width={420}
                height={270}
                loading="lazy"
                decoding="async"
                className="w-[300px] h-[193px] sm:w-[420px] sm:h-[270px] object-cover object-top hover:scale-[1.03] transition-transform duration-300"
              />
            </button>
          ))}
        </m.div>
      </div>
    </section>
  );
};
