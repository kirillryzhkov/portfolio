import React from 'react';
import { Award } from 'lucide-react';
import { Modal } from './Modal';
import { useI18n } from '../i18n/I18nContext';
import { CERTIFICATES_META } from '../data/certificates';

interface CertificateModalProps {
  certificateId: string | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificateId,
  onClose,
}) => {
  const { t } = useI18n();

  const meta = CERTIFICATES_META.find((c) => c.id === certificateId);
  const copy = t.certificates.items.find((c) => c.id === certificateId);

  return (
    <Modal
      isOpen={Boolean(meta && copy)}
      onClose={onClose}
      labelledById="cert-modal-title"
      maxWidthClass="max-w-3xl"
    >
      {meta && copy && (
        <>
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">
            {meta.number} · {copy.issuer} · {copy.year}
          </span>
          <h3
            id="cert-modal-title"
            className="hero-heading text-2xl sm:text-3xl font-black uppercase tracking-tight mt-1 mb-5 pr-10"
          >
            {copy.title}
          </h3>

          {meta.image ? (
            <img
              src={meta.image}
              alt={copy.title}
              className="w-full h-auto max-h-[65vh] object-contain rounded-2xl border border-[#D7E2EA]/20 bg-white"
            />
          ) : (
            <div className="w-full py-16 rounded-2xl border border-[#D7E2EA]/20 bg-[#141414] flex flex-col items-center justify-center gap-4 text-center px-6">
              <Award className="w-16 h-16 text-[#BBCCD7]" />
              <p className="text-lg font-medium uppercase tracking-wider text-[#D7E2EA]">
                {copy.title}
              </p>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">
                {t.certificates.credentialBadge} · {copy.year}
              </span>
            </div>
          )}
        </>
      )}
    </Modal>
  );
};
