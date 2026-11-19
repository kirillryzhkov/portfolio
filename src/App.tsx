import { lazy, Suspense, useCallback, useState } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import { I18nProvider } from './i18n/I18nContext';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { CertificatesSection } from './sections/CertificatesSection';
import { FooterSection } from './sections/FooterSection';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import type { LightboxSlide } from './components/ImageLightboxModal';

const ContactModal = lazy(() =>
  import('./components/ContactModal').then((m) => ({ default: m.ContactModal }))
);
const ProjectModal = lazy(() =>
  import('./components/ProjectModal').then((m) => ({ default: m.ProjectModal }))
);
const CertificateModal = lazy(() =>
  import('./components/CertificateModal').then((m) => ({ default: m.CertificateModal }))
);
const ImageLightboxModal = lazy(() =>
  import('./components/ImageLightboxModal').then((m) => ({ default: m.ImageLightboxModal }))
);

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);
  const [lightboxSlides, setLightboxSlides] = useState<LightboxSlide[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((slides: LightboxSlide[], index: number) => {
    setLightboxSlides(slides);
    setLightboxIndex(index);
  }, []);

  const hasOpenModal =
    isContactOpen ||
    selectedProjectId !== null ||
    selectedCertId !== null ||
    lightboxIndex !== null;

  return (
    <I18nProvider>
      <LazyMotion features={domAnimation}>
        <MotionConfig reducedMotion="user">
          <main className="bg-[#0C0C0C] min-h-screen" style={{ overflowX: 'clip' }}>
            <HeroSection onOpenContact={() => setIsContactOpen(true)} />
            <MarqueeSection onOpenLightbox={openLightbox} />
            <AboutSection onOpenContact={() => setIsContactOpen(true)} />
            <ServicesSection />
            <ProjectsSection
              onSelectProject={setSelectedProjectId}
              onOpenLightbox={openLightbox}
            />
            <CertificatesSection onSelectCertificate={setSelectedCertId} />
            <FooterSection />

            <Suspense fallback={null}>
              {isContactOpen && (
                <ContactModal
                  isOpen={isContactOpen}
                  onClose={() => setIsContactOpen(false)}
                />
              )}
              {selectedProjectId !== null && (
                <ProjectModal
                  projectId={selectedProjectId}
                  onClose={() => setSelectedProjectId(null)}
                  onOpenLightbox={openLightbox}
                />
              )}
              {selectedCertId !== null && (
                <CertificateModal
                  certificateId={selectedCertId}
                  onClose={() => setSelectedCertId(null)}
                />
              )}
              {lightboxIndex !== null && (
                <ImageLightboxModal
                  slides={lightboxSlides}
                  activeIndex={lightboxIndex}
                  onChangeIndex={setLightboxIndex}
                  onClose={() => setLightboxIndex(null)}
                />
              )}
            </Suspense>

            {!hasOpenModal && <ScrollToTopButton />}
          </main>
        </MotionConfig>
      </LazyMotion>
    </I18nProvider>
  );
}

export default App;
