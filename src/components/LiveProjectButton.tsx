import React from 'react';

interface LiveProjectButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label,
  onClick,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-10 sm:py-3.5 text-xs sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] ${className}`}
    >
      {label}
    </button>
  );
};
