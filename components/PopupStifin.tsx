"use client";

import WaButton from "./WaButton";
import { waLink } from "@/lib/constants";
import { useEffect } from "react";

interface StifinType {
  badge: string;
  name: string;
  desc: string;
  textColor: string;
  borderColor: string;
  detail: { belajar: string; karir: string; karakter: string; };
}

export default function PopupStifin({ type, onClose }: { type: StifinType; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-[#1565C0]/30 backdrop-blur-sm" />
      <div
        className={`relative z-10 w-full max-w-md overflow-hidden rounded-[24px] border-2 ${type.borderColor} bg-white shadow-soft animate-fade-up`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1 w-full bg-gradient-to-r from-[#1565C0] via-yellow-400 to-[#1565C0]" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-slate-mid hover:text-slate-light transition-colors text-sm"
        >
          ✕
        </button>
        <div className="p-7">
          <div className="flex items-center gap-4 mb-5">
            <div className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-2 ${type.borderColor} bg-blue-50 font-display text-2xl font-bold ${type.textColor}`}>
              {type.badge}
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-mid mb-0.5">Tipe Kecerdasan</div>
              <h3 className={`font-display text-[26px] font-bold ${type.textColor}`}>{type.name}</h3>
            </div>
          </div>
          <p className="text-[15px] text-slate-mid mb-5 leading-relaxed">{type.desc}</p>
          <div className="space-y-3">
            {[
              { label: "Cara Belajar", value: type.detail.belajar },
              { label: "Arah Karir", value: type.detail.karir },
              { label: "Karakter Utama", value: type.detail.karakter },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl border ${type.borderColor} bg-blue-50/50 p-4`}>
                <div className={`text-[11px] font-bold uppercase tracking-wider ${type.textColor} mb-1`}>{item.label}</div>
                <p className="text-[14px] text-slate-mid">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <WaButton href={waLink(`Halo, saya ingin konsultasi tes STIFIN - tipe ${type.name}`)} className="w-full justify-center">
              Cek Tipe Anakmu
            </WaButton>
          </div>
        </div>
      </div>
    </div>
  );
}
