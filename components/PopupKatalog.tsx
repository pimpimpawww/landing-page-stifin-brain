"use client";

import Image from "next/image";
import { useEffect } from "react";

interface Props {
  src: string; index: number; total: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}

export default function PopupKatalog({ src, index, total, onClose, onPrev, onNext }: Props) {
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
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-[#1565C0]/50 backdrop-blur-md" />
      <div className="relative z-10 flex max-h-[90vh] max-w-4xl w-full flex-col items-center gap-4 animate-fade-up" onClick={(e) => e.stopPropagation()}>
        <div className="flex w-full items-center justify-between">
          <span className="text-[13px] font-bold text-white">Katalog {index + 1} / {total}</span>
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-light hover:bg-white transition-colors">✕</button>
        </div>
        <div className="relative w-full overflow-hidden rounded-2xl border-2 border-white/50 shadow-soft">
          <Image src={src} alt={`Katalog ${index + 1}`} width={900} height={700} className="w-full h-auto max-h-[75vh] object-contain bg-white" />
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onPrev} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-cyan hover:bg-white transition-colors text-lg shadow">←</button>
          <div className="flex gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-5 bg-white" : "w-1.5 bg-white/40"}`} />
            ))}
          </div>
          <button onClick={onNext} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-cyan hover:bg-white transition-colors text-lg shadow">→</button>
        </div>
      </div>
    </div>
  );
}
