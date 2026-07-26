"use client";

import WaButton from "./WaButton";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/constants";
import { useEffect } from "react";

interface StifinType {
  badge: string;
  name: string;
  desc: string;
  textColor: string;
  borderColor: string;
  detail: {
    belajar: string;
    karir: string;
    karakter: string;
  };
}

interface Props {
  type: StifinType;
  onClose: () => void;
}

export default function PopupStifin({ type, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-void/85 backdrop-blur-sm" />

      <div
        className={`relative z-10 w-full max-w-md overflow-hidden rounded-[24px] border ${type.borderColor} bg-void-3 animate-fade-up`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className={`h-1 w-full bg-gradient-to-r from-transparent via-current to-transparent ${type.textColor}`} />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full border border-slate-dim/30 bg-void text-slate-mid hover:text-white transition-colors text-sm"
        >
          ✕
        </button>

        <div className="p-7">
          {/* Header */}
          <div className="flex items-center gap-4 mb-5">
            <div className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-2 ${type.borderColor} bg-void font-display text-2xl font-bold ${type.textColor}`}>
              {type.badge}
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-mid mb-0.5">
                Tipe Kecerdasan
              </div>
              <h3 className={`font-display text-[26px] font-bold ${type.textColor}`}>
                {type.name}
              </h3>
            </div>
          </div>

          <p className="text-[15px] text-slate-light mb-5 leading-relaxed">{type.desc}</p>

          <div className="space-y-3">
            <div className={`rounded-xl border ${type.borderColor} bg-void p-4`}>
              <div className={`text-[11px] font-bold uppercase tracking-wider ${type.textColor} mb-1`}>
                Cara Belajar
              </div>
              <p className="text-[14px] text-slate-light">{type.detail.belajar}</p>
            </div>
            <div className={`rounded-xl border ${type.borderColor} bg-void p-4`}>
              <div className={`text-[11px] font-bold uppercase tracking-wider ${type.textColor} mb-1`}>
                Arah Karir
              </div>
              <p className="text-[14px] text-slate-light">{type.detail.karir}</p>
            </div>
            <div className={`rounded-xl border ${type.borderColor} bg-void p-4`}>
              <div className={`text-[11px] font-bold uppercase tracking-wider ${type.textColor} mb-1`}>
                Karakter Utama
              </div>
              <p className="text-[14px] text-slate-light">{type.detail.karakter}</p>
            </div>
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
