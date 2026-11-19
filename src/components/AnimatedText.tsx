import React, { useRef } from 'react';
import { m, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedWordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{word}</span>
      <m.span style={{ opacity }} className="absolute left-0 top-0">
        {word}
      </m.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.trim() ? text.split(/\s+/) : [];
  const totalWords = Math.max(1, words.length);

  return (
    <p ref={containerRef} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, idx) => {
          const start = idx / totalWords;
          const end = Math.min(1, (idx + 1) / totalWords);
          return (
            <React.Fragment key={`${word}-${idx}`}>
              <AnimatedWord word={word} progress={scrollYProgress} range={[start, end]} />
              {idx < words.length - 1 ? ' ' : null}
            </React.Fragment>
          );
        })}
      </span>
    </p>
  );
};
