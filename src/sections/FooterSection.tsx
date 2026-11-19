import React from 'react';
import { FileDown, Github, Mail, Phone } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export const FooterSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 relative px-5 sm:px-8 md:px-10 py-14 sm:py-16 border-t border-[#D7E2EA]/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="hero-heading text-2xl sm:text-3xl font-black uppercase tracking-tight">
            {t.contactModal.name}
          </p>
          <p className="text-sm text-[#D7E2EA]/65 mt-1">{t.footer.status}</p>
        </div>

        <nav className="flex flex-wrap gap-5 text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/80">
          <a href="#about" className="hover:text-white transition-colors">
            {t.nav.about}
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            {t.nav.services}
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            {t.nav.projects}
          </a>
          <a href="#certificates" className="hover:text-white transition-colors">
            {t.nav.certificates}
          </a>
        </nav>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:krl.78@mail.ru"
            aria-label="Email"
            className="p-2.5 rounded-full border border-[#D7E2EA]/20 hover:bg-[#D7E2EA]/10 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="tel:+77086828624"
            aria-label="Phone"
            className="p-2.5 rounded-full border border-[#D7E2EA]/20 hover:bg-[#D7E2EA]/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/kirillryzhkov"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full border border-[#D7E2EA]/20 hover:bg-[#D7E2EA]/10 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="/Kirill_Ryzhkov_CV.pdf"
            download="Kirill_Ryzhkov_CV.pdf"
            aria-label={t.contactModal.downloadCv}
            title={t.contactModal.downloadCv}
            className="p-2.5 rounded-full border border-[#D7E2EA]/20 hover:bg-[#D7E2EA]/10 transition-colors"
          >
            <FileDown className="w-4 h-4" />
          </a>
          <LanguageSwitcher />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#D7E2EA]/45">
        <span>© {new Date().getFullYear()} {t.contactModal.name}</span>
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  );
};
