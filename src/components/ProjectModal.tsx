import React from 'react';
import { ExternalLink, Github, Maximize2 } from 'lucide-react';
import { Modal } from './Modal';
import { LightboxSlide } from './ImageLightboxModal';
import { useI18n } from '../i18n/I18nContext';
import { PROJECTS_META } from '../data/projects';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
  onOpenLightbox: (slides: LightboxSlide[], index: number) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  projectId,
  onClose,
  onOpenLightbox,
}) => {
  const { t } = useI18n();

  const meta = PROJECTS_META.find((p) => p.id === projectId);
  const copy = t.projects.items.find((p) => p.id === projectId);

  const slides: LightboxSlide[] =
    meta && copy
      ? meta.images.map((src, idx) => ({
          src,
          caption: `${meta.number} · ${copy.name} (${idx + 1}/${meta.images.length})`,
        }))
      : [];

  return (
    <Modal
      isOpen={Boolean(meta && copy)}
      onClose={onClose}
      labelledById="project-modal-title"
      maxWidthClass="max-w-2xl"
    >
      {meta && copy && (
        <>
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">
            {meta.number} — {copy.category}
          </span>
          <h3
            id="project-modal-title"
            className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight mt-1 mb-4 pr-10"
          >
            {copy.name}
          </h3>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenLightbox(slides, 0);
            }}
            className="group relative w-full mb-5 rounded-2xl overflow-hidden border border-[#D7E2EA]/20 cursor-pointer block"
          >
            <img
              src={meta.images[0]}
              alt={copy.name}
              className="w-full h-56 sm:h-64 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
            />
            <span className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#0C0C0C]/85 text-[#D7E2EA] text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5" />
              {meta.images.length}
            </span>
          </button>

          <p className="font-light leading-relaxed text-[#D7E2EA]/85 mb-6">
            {copy.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {meta.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#D7E2EA]/30 px-3.5 py-1 text-xs uppercase tracking-wider text-[#D7E2EA]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenLightbox(slides, 0);
              }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-sm font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
              {t.projectModal.openGallery}
            </button>

            {meta.githubUrl && (
              <a
                href={meta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/40 px-6 py-3 text-sm font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                {t.projectModal.viewGithub}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </>
      )}
    </Modal>
  );
};
