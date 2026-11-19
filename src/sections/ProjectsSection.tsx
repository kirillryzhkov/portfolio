import React, { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { LightboxSlide } from '../components/ImageLightboxModal';
import { useI18n } from '../i18n/I18nContext';
import { PROJECTS_META, ProjectStaticMeta } from '../data/projects';

interface ProjectCardProps {
  meta: ProjectStaticMeta;
  name: string;
  category: string;
  liveLabel: string;
  index: number;
  totalCards: number;
  onSelectProject: (id: string) => void;
  onOpenLightbox: (slides: LightboxSlide[], imageIndex: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  meta,
  name,
  category,
  liveLabel,
  index,
  totalCards,
  onSelectProject,
  onOpenLightbox,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.025;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const slides: LightboxSlide[] = meta.images.map((src, idx) => ({
    src,
    caption: `${meta.number} · ${name} (${idx + 1}/${meta.images.length})`,
  }));

  const hasThreeOrMore = meta.images.length >= 3;

  return (
    <div
      ref={containerRef}
      className="h-auto md:h-[80vh] flex items-start justify-center"
    >
      <m.div
        style={{
          scale,
          top: `calc(4.5rem + ${index * 22}px)`,
          willChange: 'transform',
        }}
        className="md:sticky w-full max-w-6xl rounded-[36px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top"
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5 md:mb-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 84px)' }}
            >
              {meta.number}
            </span>
            <div>
              <span className="block text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60">
                {category}
              </span>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-medium uppercase text-[#D7E2EA] tracking-wide">
                {name}
              </h3>
            </div>
          </div>

          <LiveProjectButton
            label={liveLabel}
            onClick={() => onSelectProject(meta.id)}
          />
        </div>

        {/* Bottom Row: Clickable Gallery */}
        {hasThreeOrMore ? (
          <div className="grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-4">
            <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4">
              {[1, 2].map((imgIdx) => (
                <button
                  key={imgIdx}
                  type="button"
                  onClick={() => onOpenLightbox(slides, imgIdx)}
                  className="group relative w-full overflow-hidden rounded-[28px] sm:rounded-[40px] md:rounded-[48px] border border-[#D7E2EA]/15 bg-[#141414] cursor-pointer text-left"
                  style={{
                    height:
                      imgIdx === 1
                        ? 'clamp(140px, 16vw, 230px)'
                        : 'clamp(160px, 22vw, 340px)',
                  }}
                >
                  <img
                    src={meta.images[imgIdx]}
                    alt={`${name} preview ${imgIdx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 p-2 rounded-full bg-[#0C0C0C]/75 text-[#D7E2EA] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </button>
              ))}
            </div>

            <div className="md:col-span-6">
              <button
                type="button"
                onClick={() => onOpenLightbox(slides, 0)}
                className="group relative w-full h-full overflow-hidden rounded-[28px] sm:rounded-[40px] md:rounded-[48px] border border-[#D7E2EA]/15 bg-[#141414] cursor-pointer text-left block"
                style={{
                  minHeight: 'clamp(220px, 38vw, 586px)',
                  maxHeight: '586px',
                }}
              >
                <img
                  src={meta.images[0]}
                  alt={`${name} preview 1`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                />
                <span className="absolute top-4 right-4 p-2.5 rounded-full bg-[#0C0C0C]/75 text-[#D7E2EA] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs uppercase tracking-wider">
                  <Maximize2 className="w-4 h-4" />
                  {meta.images.length > 3 ? `+${meta.images.length - 3}` : null}
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {meta.images.map((src, imgIdx) => (
              <button
                key={src}
                type="button"
                onClick={() => onOpenLightbox(slides, imgIdx)}
                className="group relative w-full overflow-hidden rounded-[28px] sm:rounded-[40px] md:rounded-[48px] border border-[#D7E2EA]/15 bg-[#141414] cursor-pointer text-left"
                style={{ height: 'clamp(220px, 34vw, 460px)' }}
              >
                <img
                  src={src}
                  alt={`${name} preview ${imgIdx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                />
                <span className="absolute top-4 right-4 p-2.5 rounded-full bg-[#0C0C0C]/75 text-[#D7E2EA] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </button>
            ))}
          </div>
        )}
      </m.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onSelectProject: (id: string) => void;
  onOpenLightbox: (slides: LightboxSlide[], index: number) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenLightbox,
}) => {
  const { t } = useI18n();

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-28 sm:pb-36"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-14 sm:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {t.projects.heading}
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-10">
        {PROJECTS_META.map((meta, index) => {
          const copy = t.projects.items.find((p) => p.id === meta.id);
          if (!copy) return null;
          return (
            <ProjectCard
              key={meta.id}
              meta={meta}
              name={copy.name}
              category={copy.category}
              liveLabel={t.projects.liveBtn}
              index={index}
              totalCards={PROJECTS_META.length}
              onSelectProject={onSelectProject}
              onOpenLightbox={onOpenLightbox}
            />
          );
        })}
      </div>
    </section>
  );
};
