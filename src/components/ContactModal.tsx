import React, { useEffect, useRef, useState } from 'react';
import { Check, Copy, Download, ExternalLink, Github, Mail, MapPin, Phone } from 'lucide-react';
import { Modal } from './Modal';
import { useI18n } from '../i18n/I18nContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useI18n();
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const copyValue = async (key: 'email' | 'phone', value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopied(null), 1800);
    } catch {
      // clipboard blocked
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledById="contact-modal-title">
      <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 mb-2">
        {t.contactModal.eyebrow}
      </p>
      <h3
        id="contact-modal-title"
        className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6"
      >
        {t.contactModal.name}
      </h3>

      <div aria-live="polite" className="sr-only">
        {copied ? t.contactModal.copied : ''}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#D7E2EA]/20 px-4 py-3">
          <a
            href="mailto:krl.78@mail.ru"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Mail className="w-5 h-5 shrink-0" />
            <span className="text-sm sm:text-base">krl.78@mail.ru</span>
          </a>
          <button
            type="button"
            onClick={() => copyValue('email', 'krl.78@mail.ru')}
            aria-label={t.contactModal.copyEmail}
            className="p-2 rounded-xl hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
          >
            {copied === 'email' ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#D7E2EA]/20 px-4 py-3">
          <a
            href="tel:+77086828624"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-5 h-5 shrink-0" />
            <span className="text-sm sm:text-base">+7 708 682 86 24</span>
          </a>
          <button
            type="button"
            onClick={() => copyValue('phone', '+7 708 682 86 24')}
            aria-label={t.contactModal.copyPhone}
            className="p-2 rounded-xl hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
          >
            {copied === 'phone' ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        <a
          href="https://github.com/kirillryzhkov"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 rounded-2xl border border-[#D7E2EA]/20 px-4 py-3 hover:bg-[#D7E2EA]/10 transition-colors"
        >
          <span className="flex items-center gap-3">
            <Github className="w-5 h-5 shrink-0" />
            <span className="text-sm sm:text-base">github.com/kirillryzhkov</span>
          </span>
          <ExternalLink className="w-4 h-4" />
        </a>

        <div className="flex items-center gap-3 rounded-2xl border border-[#D7E2EA]/20 px-4 py-3 text-[#D7E2EA]/80">
          <MapPin className="w-5 h-5 shrink-0" />
          <span className="text-sm sm:text-base">{t.contactModal.location}</span>
        </div>

        <a
          href="/Kirill_Ryzhkov_CV.pdf"
          download="Kirill_Ryzhkov_CV.pdf"
          className="mt-2 flex items-center justify-center gap-2.5 rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-sm font-medium uppercase tracking-widest hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors"
        >
          <Download className="w-4 h-4" />
          {t.contactModal.downloadCv}
        </a>
      </div>
    </Modal>
  );
};
