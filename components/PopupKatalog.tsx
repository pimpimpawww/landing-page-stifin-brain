"use client";

import Image from "next/image";
import { useEffect } from "react";

interface Props {
  src: string;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function PopupKatalog({ src, index, total, onClose, onPrev, onNext }: Props) {
  // Close on Escape, navigate with arrow keys
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-void/90 backdrop-blur-md" />

      {/* Image container */}
      <div
        className="relative z-10 flex max-h-[90vh] max-w-4xl w-full flex-col items-center gap-4 animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex w-full items-center justify-between">
          <span className="text-[13px] font-bold text-cyan">
            Katalog {index + 1} / {total}
          </span>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-dim/30 bg-void text-slate-mid hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-cyan/20">
          <Image
            src={src}
            alt={`Katalog ${index + 1}`}
            width={900}
            height={700}
            className="w-full h-auto max-h-[75vh] object-contain bg-void-3"
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <button
            onClick={onPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan/30 bg-void-3 text-cyan hover:bg-cyan/15 transition-colors text-lg"
          >
            ←
          </button>
          {/* Dots */}
          <div className="flex gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-5 bg-cyan" : "w-1.5 bg-slate-dim"
                }`}
              />
            ))}
          </div>
          <button
            onClick={onNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan/30 bg-void-3 text-cyan hover:bg-cyan/15 transition-colors text-lg"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
