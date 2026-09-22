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
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={() => setShow(false)}>
      <div className="absolute inset-0 bg-[#1565C0]/40 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-sm overflow-hidden rounded-[24px] border-2 border-[#1565C0] bg-white shadow-soft animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1 w-full bg-gradient-to-r from-[#1565C0] via-yellow-400 to-[#1565C0]" />
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-slate-mid hover:text-slate-light transition-colors text-sm"
        >
          ✕
        </button>
        <div className="px-7 py-7">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-cyan">
              Halo, Orang Tua! 👋
            </span>
          </div>
          <h3 className="font-display text-[22px] font-bold text-slate-light leading-snug">
            Kenali Talenta Unik Anak Anda dan Dukung Perkembangan Serta Potensi Terbaiknya
          </h3>
          <p className="mt-3 text-[14px] text-slate-mid leading-relaxed">
            Cukup satu kali tes fingerprint, kamu bisa tahu cara belajar, minat, dan arah terbaik
            untuk perkembangan anakmu. Chat admin untuk info lebih lanjut.
          </p>
          <div className="mt-5 flex flex-col gap-2.5">
            <WaButton href={waLink(WA_DEFAULT_MESSAGE)} className="w-full justify-center">
              Chat Admin Sekarang
            </WaButton>
            <button onClick={() => setShow(false)} className="text-[13px] text-slate-mid hover:text-slate-light transition-colors">
              Lihat dulu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
