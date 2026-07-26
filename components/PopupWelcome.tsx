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
        className="relative z-10 w-full max-w-sm overflow-hidden rounded-[24px] border border-neon-gold/40 bg-void-3 shadow-neon-gold animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-neon-gold via-neon-orange to-neon-gold" />

        {/* Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full border border-slate-dim/30 bg-void text-slate-mid hover:text-white transition-colors text-sm"
        >
          ✕
        </button>

        <div className="px-7 py-7">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-gold/40 bg-neon-gold/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-gold animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-neon-gold">
              Promo Terbatas
            </span>
          </div>

          <h3 className="font-display text-[22px] font-bold text-white leading-snug">
            Daftar sekarang, harga masih{" "}
            <span className="gradient-text-gold">Rp650.000</span> 🎉
          </h3>

          <p className="mt-3 text-[14px] text-slate-light leading-relaxed">
            Harga promo bisa berubah sewaktu-waktu. Chat admin sekarang untuk amankan slot
            konsultasi anakmu.
          </p>

          <div className="mt-5 flex flex-col gap-2.5">
            <WaButton href={waLink(WA_DEFAULT_MESSAGE)} className="w-full justify-center">
              Chat Admin Sekarang
            </WaButton>
            <button
              onClick={() => setShow(false)}
              className="text-[13px] text-slate-mid hover:text-white transition-colors"
            >
              Nanti dulu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
