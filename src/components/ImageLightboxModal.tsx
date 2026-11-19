import React, { useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface LightboxSlide {
  src: string;
  caption?: string;
}

interface ImageLightboxModalProps {
  slides: LightboxSlide[];
  activeIndex: number | null;
  onChangeIndex: (index: number) => void;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  slides,
  activeIndex,
  onChangeIndex,
  onClose,
}) => {
  const isOpen = activeIndex !== null && slides.length > 0;

  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex - 1 + slides.length) % slides.length);
  }, [activeIndex, slides.length, onChangeIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex + 1) % slides.length);
  }, [activeIndex, slides.length, onChangeIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  const touchStartX = React.useRef<number | null>(null);

  if (!isOpen || activeIndex === null) return null;

  const current = slides[activeIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current?.caption || 'Image preview'}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null || slides.length <= 1) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (delta > 50) handlePrev();
        if (delta < -50) handleNext();
      }}
    >
      {/* Top Bar */}
      <div
        className="w-full max-w-6xl flex items-center justify-between text-[#D7E2EA] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-xs sm:text-sm font-medium uppercase tracking-widest px-3 py-1 rounded-full border border-[#D7E2EA]/25 shrink-0">
            {activeIndex + 1} / {slides.length}
          </span>
          {current?.caption && (
            <p className="text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/80 truncate">
              {current.caption}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close fullscreen preview"
          className="p-2.5 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA]/15 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image + Prev/Next */}
      <div
        className="relative flex-1 w-full flex items-center justify-center my-3 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        {slides.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-1 sm:left-4 z-10 p-3 rounded-full bg-[#0C0C0C]/80 border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={current.src}
          alt={current.caption || `Slide ${activeIndex + 1}`}
          className="max-w-[92vw] max-h-[75vh] w-auto h-auto object-contain rounded-2xl border border-[#D7E2EA]/15 shadow-2xl select-none"
        />

        {slides.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-1 sm:right-4 z-10 p-3 rounded-full bg-[#0C0C0C]/80 border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Thumbnails Strip */}
      {slides.length > 1 && (
        <div
          className="flex items-center gap-2 overflow-x-auto max-w-full py-1 px-2"
          onClick={(e) => e.stopPropagation()}
        >
          {slides.map((slide, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={`${slide.src}-${idx}`}
                type="button"
                onClick={() => onChangeIndex(idx)}
                className={`shrink-0 w-16 h-11 sm:w-20 sm:h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  active
                    ? 'border-white scale-105 opacity-100'
                    : 'border-transparent opacity-50 hover:opacity-85'
                }`}
              >
                <img
                  src={slide.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
