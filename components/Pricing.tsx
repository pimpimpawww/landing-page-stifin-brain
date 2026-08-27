"use client";

import { useState } from "react";
import Image from "next/image";
import WaButton from "./WaButton";
import { waLink } from "@/lib/constants";
import PopupKatalog from "./PopupKatalog";

const inclusions = [
  { icon: "◈", text: "Tes sidik jari STIFIN Brain" },
  { icon: "◈", text: "Sertifikat / hasil tes resmi" },
  { icon: "◈", text: "Penjelasan hasil oleh Promotor STIFIN Brain" },
  { icon: "◈", text: "Konsultasi penerapan (online / offline)" },
  { icon: "◈", text: "E-book / rangkuman hasil tes" },
  { icon: "◈", text: "Akses ke Komunitas Brainity" },
];

const katalogImages = [
  "/katalog-1.jpg", "/katalog-2.jpg", "/katalog-3.jpg",
  "/katalog-4.jpg", "/katalog-5.jpg", "/katalog-6.jpg",
  "/katalog-7.jpg", "/katalog-8.jpg", "/katalog-9.jpg",
];

export default function Pricing() {
  const [katalogIndex, setKatalogIndex] = useState<number | null>(null);

  return (
    <section id="harga" className="relative bg-white py-16 overflow-hidden md:py-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[500px] h-[200px] bg-yellow-50 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-cyan">Paket Layanan</span>
          </div>
          <h2 className="font-display text-[28px] font-bold text-slate-light sm:text-[34px] lg:text-[38px]">
            Promo tes STIFIN Brain{" "}
            <span className="gradient-text-gold">untuk anak</span>
          </h2>
          <p className="mt-3.5 text-[16px] text-slate-mid">
            Satu paket lengkap, satu harga — bukan sekadar tahu tipe, tapi dibantu paham harus
            ngapain setelahnya.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* Pricing card */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-[390px] shrink-0">
            <div className="relative overflow-hidden rounded-[24px] border-2 border-[#1565C0] bg-white shadow-soft">
              <div className="relative bg-gradient-to-br from-[#1565C0] to-[#1976D2] px-8 pt-8 pb-6">
                <div className="absolute top-4 right-4 rounded-full bg-yellow-400 px-3 py-1 text-[11px] font-bold text-blue-900 uppercase tracking-wider">
                  Promo
                </div>
                <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/70 mb-2">
                  Paket Tes STIFIN Brain Anak
                </div>
                <div className="flex items-end gap-2">
                  <span className="font-display text-[42px] font-bold text-yellow-300 leading-none">
                    Rp550.000
                  </span>
                  <span className="text-[14px] text-white/70 mb-1">/ anak</span>
                </div>
              </div>

              <div className="px-8 py-6">
                <ul className="space-y-3">
                  {inclusions.map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-[15px] text-slate-light">
                      <span className="text-cyan text-xs shrink-0">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <WaButton
                    href={waLink("Halo, saya ingin daftar Promo Tes STIFIN Brain Anak Rp550.000")}
                    className="w-full justify-center"
                  >
                    Daftarkan Anak Sekarang
                  </WaButton>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-[#1565C0] via-yellow-400 to-[#1565C0]" />
            </div>

            <p className="mt-4 text-center text-[12px] text-slate-dim">
              *Harga promo dapat berubah sewaktu-waktu. Lebih dari satu anak? Hubungi admin untuk
              info diskon keluarga.
            </p>
          </div>

          {/* Katalog grid */}
          <div className="flex-1 min-w-0">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent" />
              <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-slate-mid">Katalog Paket</span>
              <div className="h-px flex-1 bg-gradient-to-l from-blue-200 to-transparent" />
            </div>
            <p className="mb-3 text-[13px] text-slate-mid text-center">👆 Klik foto untuk lihat lebih besar</p>

            <div className="grid grid-cols-3 gap-2.5">
              {katalogImages.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setKatalogIndex(i)}
                  className="group relative overflow-hidden rounded-xl border border-blue-100 bg-blue-50 aspect-square transition-all duration-300 hover:border-blue-300 hover:scale-[1.03] hover:shadow-card-glow cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={`Katalog STIFIN Brain ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1565C0]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-2xl drop-shadow">🔍</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {katalogIndex !== null && (
        <PopupKatalog
          src={katalogImages[katalogIndex]}
          index={katalogIndex}
          total={katalogImages.length}
          onClose={() => setKatalogIndex(null)}
          onPrev={() => setKatalogIndex((katalogIndex - 1 + katalogImages.length) % katalogImages.length)}
          onNext={() => setKatalogIndex((katalogIndex + 1) % katalogImages.length)}
        />
      )}
    </section>
  );
}
