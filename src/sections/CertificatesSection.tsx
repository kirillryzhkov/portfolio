import React, { useState } from 'react';
import { Award, Maximize2 } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { useI18n } from '../i18n/I18nContext';
import { CERTIFICATES_META } from '../data/certificates';

interface CertificatesSectionProps {
  onSelectCertificate: (id: string) => void;
}

type CategoryFilter = 'all' | 'frontend' | 'backend' | 'onec';

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  onSelectCertificate,
}) => {
  const { t } = useI18n();
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filterOptions: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: t.certificates.filters.all },
    { key: 'frontend', label: t.certificates.filters.frontend },
    { key: 'backend', label: t.certificates.filters.backend },
    { key: 'onec', label: t.certificates.filters.onec },
  ];

  const items = CERTIFICATES_META.map((meta) => {
    const copy = t.certificates.items.find((c) => c.id === meta.id)!;
    return { meta, copy };
  }).filter(({ copy }) => filter === 'all' || copy.category === filter);

  return (
    <section
      id="certificates"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-28 sm:pb-36"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
          >
            {t.certificates.heading}
          </h2>
          <p className="text-center text-[#0C0C0C]/65 font-light text-sm sm:text-base md:text-lg mb-10 sm:mb-12">
            {t.certificates.subtitle}
          </p>
        </FadeIn>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {filterOptions.map((opt) => {
            const active = filter === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(opt.key)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider border transition-colors cursor-pointer ${
                  active
                    ? 'bg-[#0C0C0C] text-white border-[#0C0C0C]'
                    : 'bg-transparent text-[#0C0C0C]/75 border-[#0C0C0C]/20 hover:border-[#0C0C0C]'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map(({ meta, copy }) => (
            <button
              key={meta.id}
              type="button"
              onClick={() => onSelectCertificate(meta.id)}
              className="group w-full text-left rounded-[32px] border border-[#0C0C0C]/15 bg-[#FAFAFA] p-5 sm:p-6 hover:border-[#0C0C0C] transition-colors flex flex-col justify-between h-full cursor-pointer"
            >
              <div>
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#0C0C0C]/10 bg-white mb-5 flex items-center justify-center">
                  {meta.image ? (
                    <img
                      src={meta.image}
                      alt={copy.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 p-6 text-center bg-[#0C0C0C] text-[#D7E2EA] w-full h-full">
                      <Award className="w-12 h-12 text-[#BBCCD7]" />
                      <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/70">
                        {t.certificates.credentialBadge}
                      </span>
                    </div>
                  )}
                  <span className="absolute top-3 right-3 p-2 rounded-full bg-[#0C0C0C]/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#0C0C0C]/55 mb-1.5">
                  <span>
                    {meta.number} · {copy.issuer}
                  </span>
                  <span>{copy.year}</span>
                </div>

                <h3 className="font-medium uppercase text-base sm:text-lg text-[#0C0C0C] leading-snug">
                  {copy.title}
                </h3>
              </div>

              <span className="mt-4 inline-block text-xs font-medium uppercase tracking-widest text-[#0C0C0C]/60 group-hover:text-[#0C0C0C] transition-colors">
                {t.certificates.viewFull} →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
