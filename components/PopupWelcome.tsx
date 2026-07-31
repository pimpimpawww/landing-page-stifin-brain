"use client";

import { useEffect, useState } from "react";
import WaButton from "./WaButton";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/constants";

export default function PopupWelcome() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={() => setShow(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-void/80 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-sm overflow-hidden rounded-[24px] border border-cyan/30 bg-void-3 shadow-neon-cyan animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-cyan via-neon-purple to-cyan" />

        {/* Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full border border-slate-dim/30 bg-void text-slate-mid hover:text-white transition-colors text-sm"
        >
          ✕
        </button>

        <div className="px-7 py-7">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/8 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-cyan">
              Halo, Orang Tua! 👋
            </span>
          </div>

          <h3 className="font-display text-[22px] font-bold text-white leading-snug">
            Temukan potensi asli anakmu lewat tes STIFIN Brain
          </h3>

          <p className="mt-3 text-[14px] text-slate-light leading-relaxed">
            Cukup satu kali tes fingerprint, kamu bisa tahu cara belajar, minat, dan arah terbaik
            untuk perkembangan anakmu. Chat admin untuk info lebih lanjut.
          </p>

          <div className="mt-5 flex flex-col gap-2.5">
            <WaButton href={waLink(WA_DEFAULT_MESSAGE)} className="w-full justify-center">
              Chat Admin Sekarang
            </WaButton>
            <button
              onClick={() => setShow(false)}
              className="text-[13px] text-slate-mid hover:text-white transition-colors"
            >
              Lihat dulu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
